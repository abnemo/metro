import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { TaskService } from '../../../../../shared/services/task/task.service';
import { ITask } from '../../../../../shared/interfaces/task.interface';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnInit {

  @Input() type: string = '';

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  completeTask(task: ITask) {
    task.progress = 100;
    this.taskService.updateTask(task.id, task).then(
      () => console.log('task completed'),
      (error: any) => console.log(error)
    );
  }

}
