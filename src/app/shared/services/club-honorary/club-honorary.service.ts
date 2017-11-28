import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClubHonorary } from '../../interfaces/club-honorary.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class ClubHonoraryService {

  private collection: AngularFirestoreCollection<IClubHonorary>;
  public items: Observable<IClubHonorary[]>;

  private path = `club-honoraries`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IClubHonorary>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IClubHonorary;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createClubHonorary(clubHonorary: IClubHonorary) {
    return this.collection.add(clubHonorary);
  }

  removeClubHonorary(clubHonorary: IClubHonorary): Promise<any> {
    return this.collection.doc(clubHonorary.id).delete();
  }

  updateClubHonorary(clubHonoraryId: string, clubHonorary: IClubHonorary): Promise<any> {
    return this.collection.doc(clubHonoraryId).update(clubHonorary);
  }

  getClubHonoraryById(clubHonoraryId: string): Observable<any> {
    return this.collection.doc(clubHonoraryId).snapshotChanges();
  }

}
