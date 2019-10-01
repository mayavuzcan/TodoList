import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) { }

login(user){

  return this.http.post<any>('http://localhost:8080/login',user).pipe(

  map(user=>{
    return user;
  }));

}

loggedIn() {

  return localStorage.getItem('currentUser');
}

}
