import { Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ConfirmedValidator} from "../confirmed.validator";
import { Router } from '@angular/router';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
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
    if(this.signInForm.valid){
      this.router.navigate(['users-list']);
    } else {
      alert('User form is not valid!!')
    }

  }

}
