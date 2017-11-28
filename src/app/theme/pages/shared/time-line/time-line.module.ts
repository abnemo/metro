import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeLineComponent } from './time-line.component';
import { TimeLineFormComponent } from './time-line-form/time-line-form.component';
import { TimeLineListComponent } from './time-line-list/time-line-list.component';
import { NgPipesModule } from 'ngx-pipes';
import { EditorModule } from '../editor/editor.module';
import { TimeLineEventService } from '../../../../shared/services/time-line-event/time-line-event.service';
import { TimeLineGraphHorizontalComponent } from './time-line-graph-horizontal/time-line-graph-horizontal.component';

@NgModule({
  imports: [
    CommonModule,
    EditorModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    TimeLineComponent,
    TimeLineFormComponent,
    TimeLineGraphHorizontalComponent,
    TimeLineListComponent
  ],
  exports: [
    TimeLineComponent,
    TimeLineFormComponent,
    TimeLineGraphHorizontalComponent,
    TimeLineListComponent
  ],
  providers: [
    TimeLineEventService
  ]
})
export class TimeLineModule {
}
