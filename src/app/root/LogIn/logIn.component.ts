import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class LogInComponent implements OnInit {
  logInForm:any;
  constructor(
    private formBuilder: FormBuilder,
) { }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  onSubmit(){
    if(this.logInForm.valid){
      alert('Log In is valid!!')
    }
  }
}
