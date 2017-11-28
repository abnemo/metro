import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';

export interface IRole {
  id?: string;
  title: string;
  creation: ICreation;
  modification?: IModification[];
}
