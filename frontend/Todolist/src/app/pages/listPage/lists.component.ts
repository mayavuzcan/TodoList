import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/Lists/List.service';
import { Router } from '@angular/router';
import { Lists } from 'src/app/models/lists/lists.component';
import { User } from 'src/app/models/users/user.component';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { Looks } from 'src/app/models/looks/looks.component';
import { LookService } from 'src/app/services/looks/Look.service';



@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  lists:Lists[];
  looks:Looks = new Looks();
  looks1:Looks;

  users: User[];
  listos:Lists;
  mes: string;


  constructor(private listService: ListService,
              private todosService: TodosService, 
              private lookService: LookService,
              private router: Router) { }

  ngOnInit() {

    this.getList();
    this.getUser();
    


  }
  getList(){
    this.listService.getList().subscribe(list => {
      this.lists = (list);
      
      console.log(this.lists); 
    });
  }
  
  getUser() {
    this.users = JSON.parse(localStorage.getItem('currentUser'));

    console.log(this.users);
  }
  clickProfile(list) {
    this.todosService.setSelectedList(list);
    this.listos=list;
    this.looks.id="1";
    this.looks.lookName=this.listos.listName;
    this.mes=this.listos.listName;
    localStorage.removeItem('dataLook');

    localStorage.setItem('dataLook',this.mes);
    this.lookService.saveLook(this.looks).subscribe(resp => {
      

    });
   
    this.router.navigate(['todos']);
  }
  clickOlustur(list) {
    this.listService.setSelectedList(list);
    
   
    
    this.router.navigate(['creatTodos']);
  }
  clickGoCreat() {
    
    
   
    
    this.router.navigate(['listCreat']);
  }
  
  clickDelete(list) {
    this.listService.deleteList(list)
    
   
    this.router.navigate(['lists']);
   
  }

  clickComplete(list) {
    this.todosService.setSelectedList(list);
    this.listos=list;
    this.listos.listStatu="1";
   

    this.listService.saveList(this.listos).subscribe(resp => {



    });
   
    this.router.navigate(['lists']);
  }

}
