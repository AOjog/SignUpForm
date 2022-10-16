import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './root/SignIn/signIn.component';
import {PrivacyPolicyComponent} from "./root/PrivacyPolicy/privacyPolicy.component";
import {LogInComponent} from "./root/LogIn/logIn.component";

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signIn-component', component: SignInComponent },
  { path: 'privacyPolicy-component', component: PrivacyPolicyComponent },
  { path: 'logIn-component', component: LogInComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
