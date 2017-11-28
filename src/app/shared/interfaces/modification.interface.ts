import { IUser } from './user.interface';

export interface IModification {

  title: string;
  comment?: string;
  at: string;
  from?: IUser | string;

}
