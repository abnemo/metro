import { NgModule } from '@angular/core';
import { PublicationDateComponent } from './publication-date/publication-date.component';
import { PublicationStatusComponent } from './publication-status/publication-status.component';
import { PublicationFormComponent } from './publication-form/publication-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    TranslateModule
  ],
  declarations: [
    PublicationDateComponent,
    PublicationFormComponent,
    PublicationStatusComponent
  ],
  exports: [
    PublicationDateComponent,
    PublicationFormComponent,
    PublicationStatusComponent
  ]
})
export class PublicationModule {
}
