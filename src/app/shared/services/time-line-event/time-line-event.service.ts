import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITimeLineEvent } from '../../interfaces/time-line-event.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class TimeLineEventService {

  private collection: AngularFirestoreCollection<ITimeLineEvent>;
  public items: Observable<ITimeLineEvent[]>;

  private path = `time-line`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<ITimeLineEvent>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ITimeLineEvent;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createTimeLineEvent(timeLineEvent: ITimeLineEvent) {
    return this.collection.add(timeLineEvent);
  }

  removeTimeLineEvent(timeLineEvent: ITimeLineEvent): Promise<any> {
    return this.collection.doc(timeLineEvent.id).delete();
  }

  updateTimeLineEvent(timeLineEventId: string, timeLineEvent: ITimeLineEvent): Promise<any> {
    return this.collection.doc(timeLineEventId).update(timeLineEvent);
  }

  getTimeLineEventById(timeLineEventId: string): Observable<any> {
    return this.collection.doc(timeLineEventId).snapshotChanges();
  }

}
