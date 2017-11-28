import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITeamManagement } from '../../interfaces/team-management.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class TeamManagementService {

  private collection: AngularFirestoreCollection<ITeamManagement>;
  public items: Observable<ITeamManagement[]>;

  private path = `team-managements`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<ITeamManagement>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as ITeamManagement;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createTeamManagement(teamManagement: ITeamManagement) {
    return this.collection.add(teamManagement);
  }

  removeTeamManagement(teamManagement: ITeamManagement): Promise<any> {
    return this.collection.doc(teamManagement.id).delete();
  }

  updateTeamManagement(teamManagementId: string, teamManagement: ITeamManagement): Promise<any> {
    return this.collection.doc(teamManagementId).update(teamManagement);
  }

  getTeamManagementById(teamManagementId: string): Observable<any> {
    return this.collection.doc(teamManagementId).snapshotChanges();
  }

}
