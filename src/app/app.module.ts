import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarBlankComponent } from './nav-bar-blank/nav-bar-blank.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { DirectoryComponent } from './directory/directory.component';
import { RequestsInvitationsComponent } from './requests-invitations/requests-invitations.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { NavBarDashboardComponent } from './nav-bar-dashboard/nav-bar-dashboard.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    NavBarBlankComponent,
    CreateAccountComponent,
    ExistingUserComponent,
    DirectoryComponent,
    RequestsInvitationsComponent,
    FavoritesComponent,
    ProfileComponent,
    SettingsComponent,
    NavBarDashboardComponent,
    TestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, LandingPageComponent]

})
export class AppModule { }
