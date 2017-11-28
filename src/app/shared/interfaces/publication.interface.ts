import { IUser } from './user.interface';

export interface IPublication {
  status: string;
  at: any;
  from?: IUser | string;
}
