import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  closeResult = '';
  addUserForm: any;
  userList: Array<{firstName:string, lastName:string, email:string, password:string}> = [];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.list().subscribe(
      {complete: console.log,
        error: () => this.userList=[
          { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', password: '12345678' },
          { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', password: '12345678' },
          { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', password: '12345678' },
          { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', password: '12345678' },
          { firstName: 'Jay', lastName: 'Bilzeri An', email: 'jay.bilzerian@test.com', password: '12345678'  },
          { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', password: '12345678' },
          { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', password: '12345678' },
          { firstName: 'Gina', lastName: 'Jabohfwski', email: 'gina.jabowski@test.com', password: '12345678' },
          { firstName: 'Jessica', lastName: 'Glaser', email: 'jessi.glaser@test.com', password: '12345678'},
          { firstName: 'Jay Lo', lastName: 'Bilzerhfian', email: 'jay.bilzerian@test.com', password: '12345678'}
        ]});

    this.addUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    },{
    });
  }

  public deleteUser(index: number) {
    this.userList.splice(index, 1);
    this.userService.deleteUser(index);
  }
  onSubmit() {
    if (this.addUserForm.valid) {
      this.userService.addUser(this.addUserForm.firstName, this.addUserForm.lastName, this.addUserForm.email, this.addUserForm.password);
      this.router.navigate(['users-list']);
    } else {
      alert('User form is not valid!!')
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, () => {
      this.closeResult = `Dismissed`;
    });
  }
}
