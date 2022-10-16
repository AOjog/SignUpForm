import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get('http://localhost:4200/api/list', {
    });
  }

  deleteUser(id: number) {
    return this.http.delete('http://localhost:4200/api/delete/' + id, {
    }).subscribe((data) => console.log('Here we should receive data from backend side', data))
  }

  addUser(firstName: string, lastName: string, email: string, password: string,) {
    return this.http.post('http://localhost:4200/api/addUser',  {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    }).subscribe((data) => console.log('Here we should receive data from backend side', data))
  }
}

