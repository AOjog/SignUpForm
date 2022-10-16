import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) {
  }

  logIn(email: string, password: string) {
    return this.http.post('http://localhost:9000/api/logIn', {
      email: email,
      password: password,
    }).subscribe((data) => console.log('Here we should receive data from backend side', data))
  }
}
