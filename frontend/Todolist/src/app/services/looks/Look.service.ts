import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Looks } from 'src/app/models/looks/looks.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookService {

  toDo: Looks = new Looks();

  private userUrl = 'http://localhost:8080/looks/1';

constructor(private http: HttpClient) { }

getLook(): Observable<Looks> {
  return this.http.get<Looks>(this.userUrl).pipe();
}

saveLook(look) {
  this.toDo=look;
  return this.http.post('http://localhost:8080/creatLook', this.toDo).pipe();
}
}
