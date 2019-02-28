import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';

const routes: Routes = [
  {path:"" , component: LandingPageComponent},
  {path:"create-account" , component: CreateAccountComponent},
  {path:"test" , component: TestComponent},
  {path:"login" , component: LoginComponent},
  {path:"existing-user" , component: ExistingUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
