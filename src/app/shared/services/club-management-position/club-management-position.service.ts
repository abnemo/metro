/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClubManagementPosition } from '../../interfaces/club-management-position.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ClubManagementPositionService {

  private collection: AngularFirestoreCollection<IClubManagementPosition>;
  public items: Observable<IClubManagementPosition[]>;

  private path = `club-management-positions`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IClubManagementPosition>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IClubManagementPosition;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createClubManagementPosition(clubManagementPosition: IClubManagementPosition) {
    return this.collection.add(clubManagementPosition);
  }

  removeClubManagementPosition(clubManagementPosition: IClubManagementPosition): Promise<any> {
    return this.collection.doc(clubManagementPosition.id).delete();
  }

  updateClubManagementPosition(clubManagementPositionId: string,
    clubManagementPosition: IClubManagementPosition): Promise<any> {
    return this.collection.doc(clubManagementPositionId).update(clubManagementPosition);
  }

  getClubManagementPositionById(clubManagementPositionId: string): Observable<any> {
    return this.collection.doc(clubManagementPositionId).snapshotChanges();
  }

}*/
