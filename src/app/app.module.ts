import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { ThemeComponent } from './theme/theme.component';
import { LayoutModule } from './theme/layouts/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScriptLoaderService } from './shared/services/script-loader/script-loader.service';
import { ThemeRoutingModule } from './theme/theme-routing.module';
import { AuthModule } from './theme/layouts/auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpInterceptor } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { GlobalErrorHandler } from './shared/services/error/error-handler.service';
import { HttpErrorInterceptor } from './shared/services/error/http-error-interceptor.service';

export const firebaseConfig = environment.firebaseConfig;

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

const translationOptions = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxPermissionsModule.forRoot(),
    SharedModule,
    ThemeRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(translationOptions)
  ],
  providers: [
    ScriptLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
