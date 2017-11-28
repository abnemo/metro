import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../../../../shared/interfaces/task.interface';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { TaskService } from '../../../../../shared/services/task/task.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {

  @Input() type: string;
  @Input() redirectAfterSave: boolean = true;
  @Output() toggleForm: EventEmitter<boolean> = new EventEmitter(false);

  public form: FormGroup;
  public task: ITask;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    public taskService: TaskService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      description: '',
      type: [this.type, [Validators.required]],
      priority: ''
    });

    this.form.valueChanges.subscribe((changes: ITask) => {
      this.task = {
        title: changes.title,
        type: changes.type,
        description: changes.description,
        priority: changes.priority,
        progress: 0,
        creation: this.authService.getCreation()
      };
    });
  }

  saveTask() {
    this.taskService.createTask(this.task).then(() => this.hideAndResetForm());
  }

  hideAndResetForm() {
    this.form.patchValue({
      title: '',
      description: '',
      type: this.type,
      priority: ''
    });
    if (this.redirectAfterSave) {
      this.toggleForm.emit();
    }
  }

}
