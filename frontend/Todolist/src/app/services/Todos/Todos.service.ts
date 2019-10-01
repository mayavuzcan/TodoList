import { Injectable } from '@angular/core';
import { Lists } from 'src/app/models/lists/lists.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todos } from 'src/app/models/todos/todos.component';
import { LookService } from '../looks/Look.service';
import { Looks } from 'src/app/models/looks/looks.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  toDo: Todos = new Todos();
  selectedList: Lists= new Lists;
  looks:Looks = new Looks();

  id:String;
  yav:String;

  private todoUrl = 'http://localhost:8080/todoss';
  private listUrl = 'http://localhost:8080/listss';

constructor(private http: HttpClient,
    private lookService:LookService) { }

getTodos(): Observable<Todos> {
  this.id=JSON.parse(localStorage.getItem('currentUser')).id;
  this.yav=localStorage.getItem('dataLook');
     
  


  
  return this.http.get<Todos>(this.todoUrl+"/"+ this.id+"/"+this.yav).pipe();
}

setSelectedList(list: Lists) {
  this.selectedList = list;
}

getSelectedList() {

  return this.selectedList;
}


getList(): Observable<Lists[]> {
  this.id=JSON.parse(localStorage.getItem('currentUser')).id;
  return this.http.get<Lists[]>(this.listUrl+"/"+ this.id).pipe();
}
saveTodos(todo) {
  
  return this.http.post('http://localhost:8080/creatTodos', todo).pipe();
}

setSelectedList1(list: Lists) {
  this.toDo.todosText = list.listName;
  this.toDo.todosAuthority = list.listAuthority;
  return this.http.post('http://localhost:8080/creatTodos', this.toDo).pipe();
}

}
