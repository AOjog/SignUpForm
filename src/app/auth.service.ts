import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  logIn(email: string, password: string) {
    const isUserLoggedIn = email == 'admin@a.a' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', isUserLoggedIn ? "true" : "false");
    return this.http.post('http://localhost:4200/api/logIn', {
      email: email,
      password: password,
    }).subscribe((data) => console.log('Here we should receive data from backend side', data))
  }
}
