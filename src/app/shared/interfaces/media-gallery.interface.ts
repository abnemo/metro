import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';
import { IPublication } from './publication.interface';

export interface IMediaGallery {
  id?: string;
  title: string;
  assignedItem: string;
  assignedItemType: string;

  assignedMediaItems?: string[];

  creation: ICreation;
  modification?: IModification[];
  publication?: IPublication;

}
