import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApplication } from '../../interfaces/application.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { IStaticPage } from '../../interfaces/static-page.interface';

@Injectable()
export class ApplicationService {

  private currentApplication: IApplication;

  private collection: AngularFirestoreCollection<IApplication>;
  private items$: Observable<IApplication[]>;
  private applicationDoc: AngularFirestoreDocument<IApplication>;

  private path = `applications`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IApplication>(this.path);
    this.items$ = this.collection.snapshotChanges().map((actions: DocumentChangeAction[]) => {
      return actions.map((doc: DocumentChangeAction) => {
        const application = doc.payload.doc.data() as IApplication;
        application.id = doc.payload.doc.id;
        return application;
      });
    });
  }

  getApplications(): Observable<IApplication[]> {
    return this.items$;
  }

  createApplication(application: IApplication): Promise<string> {
    application.id = this.afs.createId();
    return this.collection.add(application).then(() => {
      return application.id;
    });
  }

  createStaticPage(staticPage: IStaticPage): Promise<void> {
    staticPage.id = this.afs.createId();
    return this.afs.doc(this.path + `/${staticPage.applicationId}/staticPages/${staticPage.id}`).set(staticPage);
  }

  updateStaticPage(staticPage: IStaticPage): Promise<void> {
    return this.afs
      .collection(this.path)
      .doc(staticPage.applicationId)
      .collection('staticPages')
      .doc(staticPage.id)
      .update(staticPage);
  }

  getStaticPages(application: IApplication): Observable<IStaticPage[]> {
    this.applicationDoc = this.afs.doc<IApplication>(this.path + `/${application.id}`);
    return this.applicationDoc.collection<IStaticPage>('staticPages').valueChanges();
  }

  getCurrentApplication(): Observable<IApplication> {
    return this.getApplications().take(1).map((applications: IApplication[]) => {
      const app = applications.filter((application: IApplication) => {
        return application.page.isEnabled === true;
      });
      return this.currentApplication = app.length === 1 ? app[0] : this.setNewApplication();
    });
  }

  setNewApplication(): IApplication {
    const data: IApplication = {
      page: {
        isEnabled: true,
        title: 'Default Title'
      },
      urlShortening: {
        isEnabled: false
      },
      registration: {
        isEnabled: true
      },
      downtime: {
        isEnabled: false
      },
      staticPages: [],
      social: []
    }
      ;
    this.createApplication(data).then();
    return data;
  }

}
