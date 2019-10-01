import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { Router } from '@angular/router';
import { Todos } from 'src/app/models/todos/todos.component';
import { User } from 'src/app/models/users/user.component';
import { Lists } from 'src/app/models/lists/lists.component';
import { ListService } from 'src/app/services/Lists/List.service';

@Component({
  selector: 'app-creatTodos',
  templateUrl: './creatTodos.component.html',
  styleUrls: ['./creatTodos.component.css']
})
export class CreatTodosComponent implements OnInit {
  todos1: Todos;
  users: User[];
  Too: Lists = new Lists();

  constructor(private todoService: TodosService,
              private listService: ListService,  
              
              private router: Router) { }

  ngOnInit() {
  }

  saveList(form: NgForm){
    console.log(form);
    this.todoService.saveTodos(form).subscribe(
    resp => {
      console.log(resp);
            this.router.navigate(['login']);
      }
    );
  }
  saveTodos(form: NgForm) {
    this.todos1 = JSON.parse(JSON.stringify(form));
    this.todos1.todosAuthority = JSON.parse(localStorage.getItem('currentUser')).id;
    this.Too=this.listService.getSelectedList();
    
    console.log(this.Too);
    this.todos1.todosText=this.Too.listName;
    this.todos1.todosStatu= "0";
    console.log(this.todos1);
    this.todoService.saveTodos(this.todos1).subscribe(resp => {
      
      console.log(resp);

      this.router.navigate(['lists']);
    });
  }
}
