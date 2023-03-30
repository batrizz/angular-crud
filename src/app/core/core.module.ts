import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

const toastrConfig = {
  maxOpened: 1,
  timeOut: 5000,
  enableHtml: true,
  autoDismiss: true,
  preventDupicates: true,
  positionClass: 'toast-top-right'
}

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(toastrConfig)
  ],
  exports: [
    MainComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
