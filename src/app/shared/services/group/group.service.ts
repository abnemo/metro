import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IGroup } from '../../interfaces/group.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class GroupService {

  private collection: AngularFirestoreCollection<IGroup>;
  public items$: Observable<IGroup[]>;

  private path = `groups`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IGroup>(this.path);
    this.items$ = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IGroup;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getGroups(): Observable<IGroup[]> {
    return this.items$;
  }

  createGroup(group: IGroup): void {
    this.afs.collection(this.path).doc(group.id).set(group);
  }

  removeGroup(group: IGroup): Promise<any> {
    return this.afs.collection(this.path).doc(group.id).delete();
  }

  updateGroup(groupId: string, group: IGroup): Promise<any> {
    return this.afs.collection(this.path).doc(groupId).update(group);
  }

  getGroupById(groupId: string): Observable<any> {
    return this.afs.doc<IGroup>(this.path + '/' + groupId).valueChanges();
  }

}
