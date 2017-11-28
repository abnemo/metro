import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICategory } from '../../interfaces/category.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Action, DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';
import { CategoryTypeService } from '../category-type/category-type.service';
import { ICategoryType } from '../../interfaces/category-type.interface';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable()
export class CategoryService {

  collectionRef: AngularFirestoreCollection<ICategory>;
  items$: Observable<ICategory[]>;

  private path = `categories`;

  constructor(private afs: AngularFirestore,
    private catTypeService: CategoryTypeService,
    private authService: AuthService) {

    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((categories: DocumentChangeAction[]) => {
        return categories.map((doc: DocumentChangeAction) => {
          const category = doc.payload.doc.data() as ICategory;
          category.id = doc.payload.doc.id;

          // set the assigned Category-Type
          this.catTypeService.getCategoryTypes().map((categoryTypes: ICategoryType[]) => {
            return categoryTypes.filter((categoryType: ICategoryType) => {
              return categoryType.id === category.assignedCategoryType;
            });
          }).subscribe((categoryTypes: ICategoryType[]) => {
            category.assignedCategoryType = categoryTypes[0];
          });

          return category;
        }
        );
      });
  }

  getCategories(): Observable<ICategory[]> {
    return this.items$;
  }

  createCategory(category: ICategory): Promise<void> {
    category.id = this.afs.createId();
    return this.afs.collection(this.path).doc(category.id).set(category);
  }

  removeCategory(category: ICategory): Promise<void> {
    return this.afs.collection(this.path).doc(category.id).delete();
  }

  updateCategory(categoryId: string, category: ICategory): Promise<any> {
    return this.afs.collection(this.path).doc(categoryId).update(category);
  }

  getCategoryById(categoryId: string): Observable<ICategory> {
    return this.afs.doc<ICategory>(this.path + '/' + categoryId).valueChanges();
  }

  setNewCategory(): ICategory {
    const data: ICategory = {
      isImported: false,
      title: '',
      description: ' ',
      assignedCategoryType: '',
      creation: this.authService.getCreation()
    };
    return data;
  }
}
