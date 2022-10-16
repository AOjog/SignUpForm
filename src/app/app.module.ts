import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignInComponent} from './root/sign-in/sign-in.component';
import {AppRoutingModule} from './app-routing.module';
import {PrivacyPolicyComponent} from "./root/privacy-policy/privacy-policy.component";
import {LogInComponent} from "./root/log-in/log-in.component";
import {AppComponent} from './app-component/app.component';
import {UsersListComponent} from './root/users-list/users-list.component';

@NgModule({
  declarations: [SignInComponent, PrivacyPolicyComponent, LogInComponent, AppComponent, UsersListComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
