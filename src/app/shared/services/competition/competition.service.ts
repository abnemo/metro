import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ICompetition } from '../../interfaces/competition.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class CompetitionService {

  private collection: AngularFirestoreCollection<ICompetition>;
  public items: Observable<ICompetition[]>;

  private path = `competitions`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<ICompetition>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ICompetition;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createCompetition(competition: ICompetition) {
    return this.collection.add(competition);
  }

  removeCompetition(competition: ICompetition): Promise<any> {
    return this.collection.doc(competition.id).delete();
  }

  updateCompetition(competitionId: string, competition: ICompetition): Promise<any> {
    return this.collection.doc(competitionId).update(competition);
  }

  getCompetitionById(competitionId: string): Observable<any> {
    return this.collection.doc(competitionId).snapshotChanges();
  }

}
