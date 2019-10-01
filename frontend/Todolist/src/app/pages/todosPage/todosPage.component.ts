import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/Lists/List.service';
import { Router } from '@angular/router';
import { Lists } from 'src/app/models/lists/lists.component';
import { Todos } from 'src/app/models/todos/todos.component';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { LookService } from 'src/app/services/looks/Look.service';
import { Looks } from 'src/app/models/looks/looks.component';
import { User } from 'src/app/models/users/user.component';

@Component({
  selector: 'app-todosPage',
  templateUrl: './todosPage.component.html',
  styleUrls: ['./todosPage.component.css']
})
export class TodosPageComponent implements OnInit {

  lists:Lists[];
  looks:Looks;
  users: User[];
  listos:Todos;


  todos:Todos;

  constructor(private listService: ListService,
              private lookService: LookService,
              private todosService: TodosService,

              private router: Router) { }

  ngOnInit() {
    this.getList();
    this.getTodos();
    
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
  
  getTodos(){
    this.todosService.getTodos().subscribe(todo => {

      this.todos = (todo);

      console.log(this.todos); 


    });
  }

  clickComplete(todo) {
    this.listos=todo;
    this.listos.todosStatu="1";
   

    this.listService.saveList(this.listos).subscribe(resp => {



    });
   
    this.router.navigate(['lists']);
  }
}
