import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';
import { ICategoryType } from './category-type.interface';

export interface ICategory {

  id?: string;
  title: string;
  description: string;
  isImported: boolean;
  assignedCategoryType?: ICategoryType | string;

  // assignedItems: number;
  // assignedImage?: string;

  creation: ICreation;
  modification?: IModification[];
}
