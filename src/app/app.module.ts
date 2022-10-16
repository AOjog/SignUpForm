import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignInComponent} from './root/SignIn/signIn.component';
import {AppRoutingModule} from './app-routing.module';
import {PrivacyPolicyComponent} from "./root/PrivacyPolicy/privacyPolicy.component";
import {LogInComponent} from "./root/LogIn/logIn.component";
import { AppComponent } from './app-component/app.component';

@NgModule({
  declarations: [SignInComponent, PrivacyPolicyComponent, LogInComponent, AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
