import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICategoryType } from '../../interfaces/category-type.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CategoryTypeService {

  collectionRef: AngularFirestoreCollection<ICategoryType>;
  items$: Observable<ICategoryType[]>;

  private path = `category-types`;

  constructor(private afs: AngularFirestore,
    private authService: AuthService) {
    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((categoryTypes: DocumentChangeAction[]) => {
        return categoryTypes.map((doc: DocumentChangeAction) => {
          const categoryType = doc.payload.doc.data() as ICategoryType;
          categoryType.id = doc.payload.doc.id;
          return categoryType;
        });
      });
  }

  getCategoryTypes(): Observable<ICategoryType[]> {
    return this.items$;
  }

  createCategoryType(categoryType: ICategoryType): void {
    this.afs.collection(this.path).doc(categoryType.id).set(categoryType);
  }

  removeCategoryType(categoryType: ICategoryType): Promise<any> {
    return this.afs.collection(this.path).doc(categoryType.id).delete();
  }

  updateCategoryType(categoryTypeId: string, categoryType: ICategoryType): Promise<any> {
    return this.afs.collection(this.path).doc(categoryTypeId).update(categoryType);
  }

  getCategoryTypeById(categoryTypeId: string): Observable<ICategoryType> {
    return this.afs.doc<ICategoryType>(this.path + '/' + categoryTypeId).valueChanges();
  }

  setNewCategoryType() {
    const data: ICategoryType = {
      id: this.afs.createId(),
      title: '',
      creation: this.authService.getCreation()
    };
    this.createCategoryType(data);
    return data;
  }

}
