import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreationFormComponent } from './creation-form/creation-form.component';
import { CreationDateComponent } from './creation-date/creation-date.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    CreationDateComponent,
    CreationFormComponent
  ],
  exports: [
    CreationDateComponent,
    CreationFormComponent
  ],
  providers: [
    DatePipe
  ]
})
export class CreationModule {
}
