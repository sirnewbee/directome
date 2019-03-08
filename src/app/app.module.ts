import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { UserService } from './structure/user.service';

/*Firestore*/
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment.prod';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {FirebaseUIModule} from 'firebaseui-angular';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
/*End of Firestore*/

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

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
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig)
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, LandingPageComponent]

})
export class AppModule { }
