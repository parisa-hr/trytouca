/**
 * Copyright 2018-2020 Pejman Ghorbanzade. All rights reserved.
 */

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogService } from '@ngneat/dialog';
import { ApiService, AuthService, UserService } from '@weasel/core/services';
import { UserLookupResponse } from '@weasel/core/models/commontypes';
import { Alert, AlertType } from '@weasel/shared/components/alert.component';
import {
  ConfirmComponent,
  ConfirmElements
} from '@weasel/home/components/confirm.component';
import { FormHint, formFields } from '@weasel/account/form-hint';

enum EModalType {
  ChangeFullName = 'changeFullname',
  ChangeUserName = 'changeUsername',
  DeleteAccount = 'deleteAccount'
}

interface FormContent {
  fname: string;
  uname: string;
}

@Component({
  selector: 'wsl-account-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnDestroy {
  private _subUser: Subscription;
  alert: Partial<Record<EModalType, Alert>> = {};
  user: UserLookupResponse;
  EModalType = EModalType;

  accountSettingsForm = new FormGroup({
    fname: new FormControl('', {
      validators: formFields.fname.validators,
      updateOn: 'blur'
    }),
    uname: new FormControl('', {
      validators: formFields.uname.validators,
      updateOn: 'blur'
    })
  });

  help: Record<'fname' | 'uname', FormHint> = {
    fname: new FormHint('', formFields.fname.validationErrors),
    uname: new FormHint('', formFields.uname.validationErrors)
  };

  /**
   *
   */
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private apiService: ApiService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this._subUser = this.userService.currentUser$.subscribe((user) => {
      this.user = user;
      this.accountSettingsForm.get('fname').setValue(user.fullname);
      this.accountSettingsForm.get('uname').setValue(user.username);
    });
    this.userService.populate();
  }

  /**
   *
   */
  ngOnDestroy() {
    this._subUser.unsubscribe();
  }

  /**
   *
   */
  onSubmit(model: FormContent) {
    if (!this.accountSettingsForm.valid) {
      return;
    }
    const info = {
      fullname: model.fname,
      username: model.uname
    };
    console.log(info);
  }

  /**
   *
   */
  openConfirmModal(type: EModalType) {
    const elements = new Map<EModalType, ConfirmElements>([
      [
        EModalType.DeleteAccount,
        {
          title: 'Delete Account',
          message: `<p>You are about to delete your account which removes your
            personal information and lets others claim <b>${this.user.username}</b>
            as their username. Information submitted to teams created by other
            users will not be deleted. This action is irreversible.</p>`,
          button: 'Delete My Account',
          severity: AlertType.Danger,
          confirmText: this.user.username,
          confirmAction: () => {
            return this.apiService.delete('/platform/account');
          },
          onActionSuccess: () => {
            this.authService.logout().subscribe(() => {
              this.userService.reset();
              this.router.navigate(['/']);
            });
          },
          onActionFailure: (err: HttpErrorResponse) => {
            return this.apiService.extractError(err, [
              [
                403,
                'refusing to delete account: platform owner',
                'Your account owns this platform. It cannot be deleted.'
              ],
              [
                403,
                'refusing to delete account: owns team',
                'You own one or more teams. You cannot delete your account before you delete them or transfer their ownership to someone else.'
              ]
            ]);
          }
        }
      ]
    ]);
    if (!elements.has(type)) {
      return;
    }
    this.dialogService.open(ConfirmComponent, {
      closeButton: false,
      data: elements.get(type),
      minHeight: '10vh'
    });
  }
}
