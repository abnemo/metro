import { IPollOption } from './poll-option.interface';

export interface IPoll {
  id?: string;
  title: string;
  authorId: string;
  voterIds?: string[];
  options?: IPollOption[];
}
