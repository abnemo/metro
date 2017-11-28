import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';
import { IPublication } from './publication.interface';

export interface ITraining {
  id?: string;
  day: string;
  startTime: string;
  endTime: string;
  description: string;

  assignedLocation: string;
  assignedTeam: string;

  creation: ICreation;
  modification?: IModification;
  publication?: IPublication;
}
