import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DebounceInputComponent } from './debounce-input/debounce-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    DebounceInputComponent
  ],
  exports: [
    DebounceInputComponent
  ],
  providers: [
  ]
})
export class InputModule {
}
