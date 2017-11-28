import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../../../shared/services/task/task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  exports: [
    TasksComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
