import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class UserService {

  collectionRef: AngularFirestoreCollection<IUser>;
  items$: Observable<IUser[]>;

  private path = `users`;

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((users: DocumentChangeAction[]) => {
        return users.map((doc: DocumentChangeAction) => {
          const user = doc.payload.doc.data() as IUser;
          user.id = doc.payload.doc.id;
          return user;
        });
      });
  }

  getUsers(): Observable<IUser[]> {
    return this.items$;
  }

  createUser(user: IUser): Promise<void> {
    return this.afs.collection(this.path).doc(user.id).set(user);
  }

  removeUser(user: IUser): Promise<any> {
    return this.afs.collection(this.path).doc(user.id).delete();
  }

  updateUser(userId: string, user: IUser): Promise<any> {
    return this.afs.collection(this.path).doc(userId).update(user);
  }

  getUserById(userId: string): Observable<IUser> {
    return this.afs.doc<IUser>(this.path + '/' + userId).valueChanges();
  }

  updateUserData(userId: string, changes: any): Promise<any> {
    return this.afs.collection(this.path).doc(userId).update(changes);
  }

  setNewUser() {
    const user: IUser = {
      firstName: '',
      lastName: '',
      email: '',
      providerId: 'firebase',
      id: this.afs.createId(),
    };
    return user;
  }

}
