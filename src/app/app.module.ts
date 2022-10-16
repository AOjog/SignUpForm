import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignUpComponent} from './root/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';
import {PrivacyPolicyComponent} from "./root/privacy-policy/privacy-policy.component";
import {LogInComponent} from "./root/log-in/log-in.component";
import {AppComponent} from './app-component/app.component';
import {UsersListComponent} from './root/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import {AccountService} from "./account.service";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";
import { PageNotFoundComponent } from './root/page-not-found/page-not-found.component';

@NgModule({
  declarations: [SignUpComponent, PrivacyPolicyComponent, LogInComponent, AppComponent, UsersListComponent, PageNotFoundComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [AccountService,AuthService, UserService, ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
