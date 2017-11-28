import { ICreation } from './creation.interface';
import { IPublication } from './publication.interface';
import { ICategory } from './category.interface';
import { IMediaItem } from './media-item.interface';

export interface ISponsor {

  id?: string;
  title: string;
  internalInfo: string;
  description: string;

  imageUrl?: string;
  assignedMediaItem?: string;

  externalLink?: string;

  startDate?: Date;
  endDate?: Date;

  assignedCategories: ICategory[];
  creation?: ICreation;
  publication?: IPublication;

}
