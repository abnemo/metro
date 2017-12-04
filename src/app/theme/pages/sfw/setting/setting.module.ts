import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { settingsRoutingModule } from './setting-routing.module';
import { SettingsMainDataComponent } from './settings/settings-main-data/settings-main-data.component';
import { SettingsSocialDataComponent } from './settings/settings-social-data/settings-social-data.component';
import { StaticPagesComponent } from './settings/static-pages/static-pages.component';
import { StaticPageComponent } from './settings/static-pages/static-page/static-page.component';
import { ThemeModule } from '../../../theme.module';
import { SharedPagesModule } from '../../shared/shared-pages.module';

@NgModule({
  imports: [
    settingsRoutingModule,
    SharedPagesModule
  ],
  declarations: [
    SettingsComponent,
    SettingsMainDataComponent,
    SettingsSocialDataComponent,
    StaticPagesComponent,
    StaticPageComponent
  ],
  providers: []
})
export class SettingModule {
}
