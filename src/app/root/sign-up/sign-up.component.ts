import { Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../confirmed.validator";
import { Router } from '@angular/router';
import {AccountService} from "../../account.service";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      checkbox: ['', [Validators.requiredTrue]],
    },{
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }
  onSubmit(){
    if(this.signUpForm.valid){
      this.accountService.register(
        this.signUpForm.value.firstName,
        this.signUpForm.value.lastName,
        this.signUpForm.value.email,
        this.signUpForm.value.password,
        this.signUpForm.value.confirmPassword,
        this.signUpForm.value.checkbox
      );
      this.router.navigate(['users-list']);
    } else {
      alert('User form is not valid!!')
    }

  }

}
