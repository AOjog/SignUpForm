import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  logIn(email: string, password: string) {
    const isAdmin = email == 'admin@a.a' && password == 'admin';
    localStorage.setItem('isAdmin', isAdmin ? "true" : "false");
    return this.http.post('http://localhost:4200/api/logIn', {
      email: email,
      password: password,
    }).subscribe(() => localStorage.setItem('token', 'OAuth Bearer Tokens'), () => localStorage.setItem('token', 'OAuth Bearer Tokens'));
    //we must use this token in case of success, but for now we use in both 'cause I don't have a server side
  }
}
