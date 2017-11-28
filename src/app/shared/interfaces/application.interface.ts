import { ISocial } from './social.interface';
import { IRole } from './role.interface';
import { IStaticPage } from './static-page.interface';

export interface IApplication {
  id?: string;

  page: {
    isEnabled: boolean;
    title: string;
    description?: string;
    email?: string;
  };

  urlShortening: {
    isEnabled: boolean;
    provider?: string;
  };

  registration: {
    isEnabled: boolean;
    defaultRole?: string | IRole;
  };

  downtime: {
    isEnabled: boolean;
    message?: string;
  };

  staticPages: IStaticPage[];
  social?: ISocial[];
}
