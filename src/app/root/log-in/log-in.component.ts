import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../../auth.service";

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  logInForm:any;
  constructor(
    private formBuilder: FormBuilder,
    private securityService: AuthService,
    private router: Router,
) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  onSubmit(){
    if(this.logInForm.valid){
      this.securityService.logIn(this.logInForm.value.email, this.logInForm.value.password);//here we make a request to backend side
      this.router.navigate(['users-list']);
    }
  }
}
