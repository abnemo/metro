import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  @Input() type: string = '';

  public showForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
