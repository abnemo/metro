import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ISeason } from '../../interfaces/season.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Injectable()
export class SeasonService {

  collectionRef: AngularFirestoreCollection<ISeason>;
  items$: Observable<ISeason[]>;

  private path = `seasons`;

  constructor(private afs: AngularFirestore) {

    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((seasons: DocumentChangeAction[]) => {
        return seasons.map((doc: DocumentChangeAction) => {
          const season = doc.payload.doc.data() as ISeason;
          season.id = doc.payload.doc.id;
          return season;
        }
        );
      });
  }

  getSeasons(): Observable<ISeason[]> {
    return this.items$;
  }

  /* createSeason(season: ISeason): Promise<void> {
    return this.afs.collection(this.path).doc(season.id).set(season);
  }

  removeSeason(season: ISeason): Promise<void> {
    return this.afs.collection(this.path).doc(season.id).delete();
  }

  updateSeason(seasonId: string, season: ISeason): Promise<any> {
    return this.afs.collection(this.path).doc(seasonId).update(season);
  }

  getSeasonById(seasonId: string): Observable<ISeason> {
    return this.afs.doc<ISeason>(this.path + '/' + seasonId).valueChanges();
  }

  getSeasonRange(today: Date): ISeasonRange {
    let startDate: Date, endDate: Date;
    if (today.getMonth() < 6) {
      const lastYear = today.getFullYear() - 1;
      startDate = new Date(Date.UTC(lastYear, 6, 1, 0, 0, 0));
      endDate = new Date(Date.UTC(today.getFullYear(), 6, 0, 0, 0, 0));
    } else {
      startDate = new Date(Date.UTC(today.getFullYear(), 6, 1, 0, 0, 0));
      const nextYear = today.getFullYear();
      endDate = new Date(Date.UTC(nextYear, 6, 0, 0, 0, 0));
    }

    return {
      startDate: startDate,
      endDate: endDate
    };
  } */

}
