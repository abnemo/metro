import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../../shared/_directives/alert/alert.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedAuthModule { }
