import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClubManagement } from '../../interfaces/club-management.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable()
export class ClubManagementService {

  private collection: AngularFirestoreCollection<IClubManagement>;
  public items$: Observable<IClubManagement[]>;

  private path = `club-managements`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IClubManagement>(this.path);
    this.items$ = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IClubManagement;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  getClubManagements(): Observable<IClubManagement[]> {
    return this.items$;
  }

  createClubManagement(clubManagement: IClubManagement) {
    clubManagement.id = this.afs.createId();
    return this.afs.collection(this.path).doc(clubManagement.id).set(clubManagement);
  }

  removeClubManagement(clubManagement: IClubManagement): Promise<any> {
    return this.collection.doc(clubManagement.id).delete();
  }

  updateClubManagement(clubManagementId: string, clubManagement: IClubManagement): Promise<any> {
    return this.collection.doc(clubManagementId).update(clubManagement);
  }

  getClubManagementById(clubManagementId: string): Observable<any> {
    return this.afs.doc<IClubManagement>(this.path + '/' + clubManagementId).valueChanges();
  }

  setNewClubManagement(): IClubManagement {
    const data: IClubManagement = {
      assignedClub: '',
      title: '',
      description: ' '
    };
    return data;
  }

}
