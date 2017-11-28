import { ITask } from './task.interface';

export interface IProject {

  id?: string;
  title: string;
  completed: boolean;

  assignedTasks: ITask[];
}
