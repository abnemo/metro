import { NgModule } from '@angular/core';
import { todoRoutingModule } from './todo-routing.module';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from '../../../../shared/shared.module';
import { TaskService } from '../../../../shared/services/task/task.service';
import { LayoutModule } from '../../../layouts/layout.module';
import { TaskModule } from '../../shared/task/task.module';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    TaskModule,
    todoRoutingModule
  ],
  declarations: [
    TodosComponent
  ],
  providers: [
    TaskService
  ]
})
export class TodoModule { }
