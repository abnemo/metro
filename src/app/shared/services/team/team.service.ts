import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITeam } from '../../interfaces/team.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class TeamService {

  collectionRef: AngularFirestoreCollection<ITeam>;
  items$: Observable<ITeam[]>;

  private path = `teams`;

  constructor(private afs: AngularFirestore,
    private authService: AuthService) {

    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((teams: DocumentChangeAction[]) => {
        return teams.map((doc: DocumentChangeAction) => {
          const team = doc.payload.doc.data() as ITeam;
          team.id = doc.payload.doc.id;
          return team;
        });
      });
  }

  getTeams(): Observable<ITeam[]> {
    return this.items$;
  }

  createTeam(team: ITeam): void {
    this.afs.collection(this.path).doc(team.id).set(team);
  }

  removeTeam(team: ITeam): Promise<any> {
    return this.afs.collection(this.path).doc(team.id).delete();
  }

  updateTeam(teamId: string, team: ITeam): Promise<any> {
    return this.afs.collection(this.path).doc(teamId).update(team);
  }

  getTeamById(teamId: string): Observable<ITeam> {
    return this.afs.doc<ITeam>(this.path + '/' + teamId).valueChanges();
  }

  getTeamsForSeason(seasonRange: any): Observable<any> {
    return this.afs.collection(this.path, ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query
        .where('teamDate', '>=', seasonRange.startDate.toISOString())
        .where('teamDate', '<', seasonRange.endDate.toISOString());
      return query;
    }).valueChanges();
  }

  setNewTeam() {
    const data: ITeam = {
      id: this.afs.createId(),
      title: '',
      description: ' ',
      photoDescription: ' ',
      creation: this.authService.getCreation()
    };
    this.createTeam(data);
    return data;
  }

}
