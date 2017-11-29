import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IApplication } from '../../interfaces/application.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentChangeAction
} from 'angularfire2/firestore';
import { IStaticPage } from '../../interfaces/static-page.interface';

@Injectable()
export class ApplicationService {

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

  updateApplication(application: IApplication): Promise<void> {
    return this.afs.doc(this.path + `/${application.id}`).set(application);
  }

  /*
  createStaticPage(staticPage: IStaticPage): Promise<void> {
    // staticPage.id = this.afs.createId();/
    // return this.afs.doc(this.path + `/${staticPage.applicationId}/staticPages/${staticPage.id}`).set(staticPage);
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
  } */

  removeApplication(application: IApplication): Promise<void> {
    return this.afs.collection(this.path).doc(application.id).delete();
  }

  getCurrentApplication(): Observable<IApplication> {
    return this.getApplications().take(1).map((applications: IApplication[]) => {
      if (applications.length > 0) {
        return applications[0];
      } else {
        console.log('new APP');
      }
    });
  }

  setNewApplication(): Promise<string> {
    const data: IApplication = {
      page: {
        isEnabled: true,
        title: 'Default Title'
      },
      urlShortening: {
        isEnabled: false
      },
      registration: {
        isAllowed: true
      },
      downtime: {
        isEnabled: false
      },
      staticPages: [],
      social: []
    };
    return this.createApplication(data);
  }

  getShorteningProviders() {
    return [
      {
        title: 'tiny.url',
        value: '1'
      },
      {
        title: 'bit.ly',
        value: '2'
      }
    ];
  }

}
