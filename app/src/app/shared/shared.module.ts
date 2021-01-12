/**
 * Copyright 2018-2020 Pejman Ghorbanzade. All rights reserved.
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from '@ngneat/dialog';

import {
  FooterInsideComponent,
  FooterOutsideComponent,
  HeaderInsideComponent,
  HeaderOutsideComponent,
  ServerDownComponent
} from './components';

import {
  SignupFormComponent
} from './forms/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DialogModule.forRoot(),
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    FooterInsideComponent,
    FooterOutsideComponent,
    HeaderInsideComponent,
    HeaderOutsideComponent,
    ServerDownComponent,
    SignupFormComponent,
  ],
  exports: [
    CommonModule,
    DialogModule,
    FontAwesomeModule,
    FooterInsideComponent,
    FooterOutsideComponent,
    FormsModule,
    HeaderInsideComponent,
    HeaderOutsideComponent,
    HttpClientModule,
    ReactiveFormsModule,
    ServerDownComponent,
    SignupFormComponent
  ]
})

export class SharedModule {}
