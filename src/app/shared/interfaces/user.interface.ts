import { ICreation } from './creation.interface';
import { IModification } from './modification.interface';
import { IRole } from './role.interface';
import { IMember } from './member.interface';

export interface IUser {
  id?: string;
  emailVerified?: boolean;
  password?: string;
  providerId?: string;

  email: string;
  firstName: string;
  lastName: string;
  gender?: string;
  photoURL?: string;

  onlineStatus?: string;
  assignedRole?: IRole | string;
  assignedMember?: IMember | string;

  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };

  creation?: ICreation;
  modification?: IModification[];
}
