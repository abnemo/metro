import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITraining } from '../../interfaces/training.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class TrainingService {

  private collection: AngularFirestoreCollection<ITraining>;
  public items: Observable<ITraining[]>;

  private path = `trainings`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<ITraining>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ITraining;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createTraining(training: ITraining) {
    return this.collection.add(training);
  }

  removeTraining(training: ITraining): Promise<any> {
    return this.collection.doc(training.id).delete();
  }

  updateTraining(trainingId: string, training: ITraining): Promise<any> {
    return this.collection.doc(trainingId).update(training);
  }

  getTrainingById(trainingId: string): Observable<any> {
    return this.collection.doc(trainingId).snapshotChanges();
  }

}
