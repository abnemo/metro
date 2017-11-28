import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../../../shared/services/category/category.service';
import { CategoryTypeService } from '../../../../../shared/services/category-type/category-type.service';
import { ICategory } from '../../../../../shared/interfaces/category.interface';
import { ICategoryType } from '../../../../../shared/interfaces/category-type.interface';
import { UserService } from '../../../../../shared/services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: 'category-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryEditComponent implements OnInit {

  public category: ICategory;
  public categoryTypes: ICategoryType[];
  public form: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public userService: UserService,
    public categoryService: CategoryService,
    public categoryTypeService: CategoryTypeService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { category: ICategory }) => this.category = data.category);

    this.form = this.fb.group({
      title: [this.category.title, [Validators.required, Validators.minLength(5)]],
      assignedCategoryType: [this.category.assignedCategoryType, [Validators.required]],
      description: this.category.description,
      creation: this.initCreation(),
      assignedItems: ''
    });

    if (this.category.isImported) {
      this.form.get('title').disable();
      this.form.get('assignedCategoryType').disable();
      this.form.get('creation').disable();
    }

    this.form.valueChanges.subscribe((changes: ICategory) => {
      this.category.title = changes.title;
      this.category.assignedCategoryType = changes.assignedCategoryType;
      this.category.description = changes.description;
    });
  }

  initCreation() {
    return this.fb.group({
      at: this.category.creation.at,
      from: this.category.creation.from
    });
  }

  saveCategory() {
    let action;

    const assignedItems: any[] = this.form.get('assignedItems').value;
    this.form.get('assignedItems').reset();

    if (this.category.id) {
      // ToDo: Unlink last items
      action = this.categoryService.updateCategory(this.category.id, this.category);
    } else {
      action = this.categoryService.createCategory(this.category);
    }
    action.then(() => {
      // ToDo: link items and category
      console.log(assignedItems);
      this.redirectToList();
    });
  }

  cancel() {
    this.redirectToList();
  }

  removeCategory($event: ICategory) {
    this.categoryService.removeCategory($event).then(() => this.redirectToList());
  }

  redirectToList() {
    this.router.navigate(['/categories/list']).then();
  }

}
