import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }
  register(firstName: string, lastName: string, email: string, password: string, confirmPassword: string, checkbox: boolean,) {
    return this.http.post('http://localhost:9000/api/register', {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      confirmPassword: confirmPassword,
      checkbox: checkbox,
    }).subscribe((data) => console.log('Here we should receive data from backend side', data))
  }

}
