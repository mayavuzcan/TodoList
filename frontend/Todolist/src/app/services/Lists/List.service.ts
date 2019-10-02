import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lists } from 'src/app/models/lists/lists.component';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  selectedList: Lists;
  id:number;
  id1:Lists = new Lists();

  private listUrl = 'http://localhost:8080/listss';
  private deleteUrl = 'http://localhost:8080/deleteList';

constructor(private http: HttpClient) { }

getList(): Observable<Lists[]> {
  this.id=JSON.parse(localStorage.getItem('currentUser')).id;
  return this.http.get<Lists[]>(this.listUrl+"/"+ this.id).pipe();
}

setSelectedList(list: Lists) {
  this.selectedList = list;
}
getCompletedList(){
  return this.http.get('http://localhost:8080/statu/1').pipe();

}
getUnCompletedList(){
  return this.http.get('http://localhost:8080/statu/0').pipe();

}

getSelectedList() {

  return this.selectedList;
}

saveList(list) {
  return this.http.post('http://localhost:8080/creatList', list).pipe();
}

deleteList() {
  this.id1.id=this.selectedList.id;
  this.http.delete(this.deleteUrl+"/"+this.id1.id).pipe();
}

}
