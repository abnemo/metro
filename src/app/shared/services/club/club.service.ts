import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClub } from '../../interfaces/club.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ClubService {

  collectionRef: AngularFirestoreCollection<IClub>;
  items$: Observable<IClub[]>;

  private path = `clubs`;

  constructor(private afs: AngularFirestore,
    private authService: AuthService) {

    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((clubs: DocumentChangeAction[]) => {
        return clubs.map((doc: DocumentChangeAction) => {
          const club = doc.payload.doc.data() as IClub;
          club.id = doc.payload.doc.id;
          return club;
        }
        );
      });
  }

  getClubs(): Observable<IClub[]> {
    return this.items$;
  }

  createClub(club: IClub): Promise<void> {
    club.id = this.afs.createId();
    return this.afs.collection(this.path).doc(club.id).set(club);
  }

  removeClub(club: IClub): Promise<void> {
    return this.afs.collection(this.path).doc(club.id).delete();
  }

  updateClub(clubId: string, club: IClub): Promise<any> {
    return this.afs.collection(this.path).doc(clubId).update(club);
  }

  getClubById(clubId: string): Observable<IClub> {
    return this.afs.doc<IClub>(this.path + '/' + clubId).valueChanges();
  }

  setNewClub(): IClub {
    const data: IClub = {
      assignedClubEvents: [],
      assignedLocation: '',
      creation: this.authService.getCreation(),
      description: ' ',
      fussballde: {},
      history: ' ', // this.translateService.get('general.clubs.edit.noHistory'),
      honoraries: [],
      info: {},
      isMainClub: false,
      management: {
        assignedManagementEvents: [],
        positions: []
      },
      title: ''
    };
    return data;
  }

}
