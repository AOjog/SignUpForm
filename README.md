# Sign Up form
[]: # Author: [Alina Scerbatiuc/Ojog]

**Sign Up form**

In this project I created a Sign-up form using HTML, ts, bootstrap and a bit of css.

1. This form have 3 main components, Sing up, Log in and Users list.
And other smaller like Privacy Policy, Admin List, Info, 404.
   ![This is an image](https://i.imgur.com/lYDNVIx.png)
   ![This is an image](https://i.imgur.com/ik3kc7X.png)
   ![This is an image](https://i.imgur.com/tstQr4D.png)

2. On Sign-up, Log-In we have dynamic form, with validation.
2.2. Even the password with the repeated password have a service where we check these 2 passwords.

3. Also, here you can find  used `Routes, RouterModule` which helped us to move to one page to another.
   ![This is an image]( https://i.imgur.com/gMk6u34.png)

4. I have used guard for admin-list component, so only the admin can see this component.
   
   `  { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard]}`

5. I have simulated  http request in auth.service.ts, etc, where I have used post request in logIn method. Also, here I set token, which I use in interceptor.
   ![This is an image](https://i.imgur.com/LxqqPLR.png)

6. With token, I have used  interceptor for all my requests.
   ![This is an image](https://i.imgur.com/lyFzg5U.png)

   7. I have used `@Input, @Output` for passing data from one component to another.
   `  
   @Input() adminList!:Admin;`


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

