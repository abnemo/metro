import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';
import { settingsRoutingModule } from './setting-routing.module';
import { ApplicationsResolver } from './applications.resolver';
import { LayoutModule } from '../../../layouts/layout.module';
import { SharedModule } from '../../../../shared/shared.module';
import { SettingsMainDataComponent } from './settings/settings-main-data/settings-main-data.component';
import { SettingsSocialDataComponent } from './settings/settings-social-data/settings-social-data.component';
import { StaticPagesComponent } from './static-pages/static-pages.component';
import { StaticPageComponent } from './static-pages/static-page/static-page.component';
import { StaticPageResolver } from './static-pages/static-page.resolver';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    settingsRoutingModule
  ],
  declarations: [
    SettingsComponent,
    SettingsMainDataComponent,
    SettingsSocialDataComponent,
    StaticPagesComponent,
    StaticPageComponent
  ],
  providers: [
    ApplicationsResolver,
    StaticPageResolver
  ]
})
export class SettingModule {
}
