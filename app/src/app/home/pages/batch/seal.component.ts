/**
 * Copyright 2018-2020 Pejman Ghorbanzade. All rights reserved.
 */

import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogRef } from '@ngneat/dialog';
import { ApiService } from '@weasel/core/services';
import { BatchLookupResponse } from '@weasel/core/models/commontypes';
import { ModalComponent } from '@weasel/home/components';

enum Alerts {
  Success = 'alert-success',
  Danger = 'alert-danger'
}

@Component({
  selector: 'app-elements-seal',
  templateUrl: './seal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatchSealComponent extends ModalComponent {

  public batch: BatchLookupResponse;

  /**
   *
   */
  constructor(
    private apiService: ApiService,
    public dialogRef: DialogRef
  ) {
    super();
    super.form = new FormGroup({});
  }

  /**
   *
   */
  async onSubmit(model: {}) {
    if (!this.form.valid) {
      return;
    }
    this.submitted = true;
    const url = [ 'batch', this.batch.teamSlug, this.batch.suiteSlug, this.batch.batchSlug, 'seal' ].join('/');
    this.apiService.post(url).subscribe(
      () => {
        this.form.reset();
        this.submitted = false;
        this.dialogRef.close(true);
      },
      err => {
        const msg = this.apiService.extractError(err, [
          [ 400, 'request invalid', 'Your request was rejected by the server.' ],
        ]);
        this.alert = [Alerts.Danger, msg];
      }
    );
  }

  /**
   *
   */
  public closeModal() {
    this.form.reset();
    this.submitted = false;
    this.dialogRef.close(false);
  }

  /**
   *
   */
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    super.keydownGuard(['j', 'k', 's', 'Enter', 'Escape', 'Backspace'], event);
  }

}
