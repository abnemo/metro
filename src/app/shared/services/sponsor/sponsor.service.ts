import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISponsor } from '../../interfaces/sponsor.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
import { MediaItemService } from '../media/media-item.service';

@Injectable()
export class SponsorService {

  collectionRef: AngularFirestoreCollection<ISponsor>;
  items$: Observable<ISponsor[]>;

  private path = `sponsors`;

  constructor(private afs: AngularFirestore,
    private mediaItemService: MediaItemService,
    private authService: AuthService) {
    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((sponsors: DocumentChangeAction[]) => {
        return sponsors.map((doc: DocumentChangeAction) => {
          const sponsor = doc.payload.doc.data() as ISponsor;
          sponsor.id = doc.payload.doc.id;
          return sponsor;
        });
      });
  }

  getSponsors(): Observable<ISponsor[]> {
    return this.items$;
  }

  createSponsor(sponsor: ISponsor): Promise<any> {
    sponsor.id = this.afs.createId();
    return this.afs.collection(this.path).doc(sponsor.id).set(sponsor).then(() => {
      return sponsor.id;
    });
  }

  removeSponsor(sponsor: ISponsor, deleteDocument: boolean = true): Promise<void> {
    return this.mediaItemService.deleteMediaItemById(sponsor.assignedMediaItem).then(() => {
      return firebase.storage().refFromURL(sponsor.imageUrl).delete().then(() => {
        if (deleteDocument) {
          return this.afs.collection(this.path).doc(sponsor.id).delete();
        }
      });
    });
  }

  updateSponsor(sponsorId: string, sponsor: ISponsor): Promise<void> {
    return this.afs.collection(this.path).doc(sponsorId).update(sponsor);
  }

  getSponsorById(sponsorId: string): Observable<ISponsor> {
    return this.afs.doc<ISponsor>(this.path + '/' + sponsorId).valueChanges();
  }

  getSponsorsForSeason(seasonRange: any): Observable<any> {
    return this.afs.collection(this.path, ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query
        .where('sponsorDate', '>=', seasonRange.startDate.toISOString())
        .where('sponsorDate', '<', seasonRange.endDate.toISOString());
      return query;
    }).valueChanges();
  }

  setNewSponsor() {
    const data: ISponsor = {
      title: '',
      internalInfo: ' ',
      description: ' ',
      assignedCategories: [],
      creation: this.authService.getCreation()
    };
    return data;
  }

}
