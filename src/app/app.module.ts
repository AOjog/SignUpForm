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
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from "./account.service";
import {AuthService} from "./auth.service";
import {UserService} from "./user.service";
import {PageNotFoundComponent} from './root/page-not-found/page-not-found.component';
import {InfoComponent} from './root/users-list/info/info.component';
import {AdminListComponent} from './root/users-list/admin-list/admin-list.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth-interceptor-service.interceptor";

@NgModule({
  declarations: [SignUpComponent, PrivacyPolicyComponent, LogInComponent, AppComponent, UsersListComponent, PageNotFoundComponent, InfoComponent, AdminListComponent],
  imports: [BrowserModule, ReactiveFormsModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [AccountService, AuthService, UserService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
