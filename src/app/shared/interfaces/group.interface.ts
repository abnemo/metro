import { IModification } from './modification.interface';
import { ICreation } from './creation.interface';

export interface IGroup {
  id?: string;
  title: string;
  groupStatus: number;
  creation: ICreation;
  modification?: IModification[];

}
