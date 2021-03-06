import { IAddress } from './address.interface';
import { IContact } from './contact.interface';
import { IMember } from './member.interface';

export interface ILocationContact {

  isMember: boolean;
  description: string;

  assignedMember?: string;

  firstName?: string;
  lastName?: string;

  contact?: IContact;
  address?: IAddress;
  locationId: string;
}
