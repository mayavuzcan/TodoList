import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users/user.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  selectedUser: User;
  currentUser: User = new User();

  private userUrl = 'http://localhost:8080/user';
constructor(private http: HttpClient) { }

getUser(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl).pipe();
}

setSelectedUser(user: User) {
  this.selectedUser = user;
}

getSelectedUser() {

  return this.selectedUser;
}

saveUser(user) {
  return this.http.post('http://localhost:8080/creatUser', user).pipe();
}

}
