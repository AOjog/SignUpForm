import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './root/sign-up/sign-up.component';
import {PrivacyPolicyComponent} from "./root/privacy-policy/privacy-policy.component";
import {LogInComponent} from "./root/log-in/log-in.component";
import {UsersListComponent} from "./root/users-list/users-list.component";

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'log-in', component: LogInComponent},
  { path: 'users-list', component: UsersListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
