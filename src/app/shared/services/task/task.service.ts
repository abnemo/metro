import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ITask } from '../../interfaces/task.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { IPriority } from '../../interfaces/priority.interface';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Injectable()
export class TaskService {

  collectionRef: AngularFirestoreCollection<ITask>;
  items$: Observable<ITask[]>;

  private path = `tasks`;

  private taskTypes$ = [
    { title: 'category' },
    { title: 'club' },
    { title: 'dashboard' },
    { title: 'location' },
    { title: 'member' },
    { title: 'season' },
    { title: 'setting' },
    { title: 'sponsor' },
    { title: 'task' },
    { title: 'team' },
    { title: 'user' }
  ];

  private priorities$: IPriority[] = [
    {
      title: 'urgent',
      value: 'danger'
    },
    {
      title: 'high',
      value: 'warning'
    },
    {
      title: 'normal',
      value: 'success'
    },
    {
      title: 'low',
      value: 'primary'
    }
  ];

  constructor(private afs: AngularFirestore) {

    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((tasks: DocumentChangeAction[]) => {
        return tasks.map((doc: DocumentChangeAction) => {
          const task = doc.payload.doc.data() as ITask;
          task.id = doc.payload.doc.id;
          return task;
        }
        );
      });
  }


  getTasks(): Observable<ITask[]> {
    return this.items$;
  }

  createTask(task: ITask): Promise<void> {
    if (!task.id) {
      task.id = this.afs.createId();
    }
    return this.afs.collection(this.path).doc(task.id).set(task);
  }

  removeTask(task: ITask): Promise<void> {
    return this.afs.collection(this.path).doc(task.id).delete();
  }

  updateTask(taskId: string, task: ITask): Promise<any> {
    return this.afs.collection(this.path).doc(taskId).update(task);
  }

  getTaskById(taskId: string): Observable<ITask> {
    return this.afs.doc<ITask>(this.path + '/' + taskId).valueChanges();
  }

  getPriorities(): IPriority[] {
    return this.priorities$;
  }

  getTaskTypes(): any {
    return this.taskTypes$;
  }

}
