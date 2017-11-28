import { IAddress } from './address.interface';
import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';
import { IClubHonorary } from './club-honorary.interface';
import { IClubManagement } from './club-management.interface';
import { ITimeLineEvent } from './time-line-event.interface';

export interface IClub {
  id?: string;

  title: string;
  description: string;
  history: string;
  logoUrl?: string;
  address?: IAddress;
  isMainClub: boolean;

  fussballde: {
    clubId?: string;
    clubUrl?: string;
  };

  assignedFiles?: any; // IMediaItem[];
  assignedLocation?: string;
  assignedClubEvents: ITimeLineEvent[];

  info: {
    founding?: string;
    clubColours?: string;
    contact?: string;
    website?: string;
  };

  honoraries: IClubHonorary[];

  management?: {
    positions: IClubManagement[];
    photoUrl?: string;
    photoDescription?: string;
    assignedManagementEvents: ITimeLineEvent[];
  };

  creation: ICreation;
  modification?: IModification[];

}
