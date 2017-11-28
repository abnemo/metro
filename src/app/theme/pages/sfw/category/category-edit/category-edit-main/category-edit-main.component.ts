import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ICategory } from '../../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../../shared/interfaces/category-type.interface';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../../../../../shared/services/user/user.service';
import { SeasonService } from '../../../../../../shared/services/season/season.service';

@Component({
  selector: 'category-edit-main',
  templateUrl: './category-edit-main.component.html'
})
export class CategoryEditMainComponent {

  @Input() categoryTypes: ICategoryType[];
  @Input() category: ICategory;
  @Input() form: FormGroup;

  @Output() removeCategory: EventEmitter<ICategory> = new EventEmitter(false);
  @Output() cancel: EventEmitter<ICategory> = new EventEmitter(false);

  constructor(public userService: UserService,
    public seasonService: SeasonService) {
  }

  /* ngAfterViewInit() {
    this._script.load('creation-form',
      'assets/demo/default/custom/components/forms/widgets/bootstrap-datetimepicker.js');
  } */

}
