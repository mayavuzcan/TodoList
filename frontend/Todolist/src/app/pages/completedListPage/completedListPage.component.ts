import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/lists/lists.component';
import { Looks } from 'src/app/models/looks/looks.component';
import { User } from 'src/app/models/users/user.component';
import { ListService } from 'src/app/services/Lists/List.service';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { LookService } from 'src/app/services/looks/Look.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completedListPage',
  templateUrl: './completedListPage.component.html',
  styleUrls: ['./completedListPage.component.css']
})
export class CompletedListPageComponent implements OnInit {

  lists:any;
  

  looks:Looks =new Looks();
  users: User[];
  listos:Lists;
  mes: String;
  constructor(private listService: ListService,
              private todosService: TodosService, 
              private lookService: LookService,
              private router: Router
              ) { }

  ngOnInit() {
    this.getCompletedList();
  }

  clickProfile(list) {
    this.todosService.setSelectedList(list);
    this.listos=list;
    this.looks.id="1";
    this.looks.lookName=this.listos.listName;

    this.lookService.saveLook(this.looks).subscribe(resp => {
      

    });
   
    this.router.navigate(['todos']);
  }
  getCompletedList(){
    this.listService.getCompletedList().subscribe(list => {
      this.lists = (list);
      
      console.log(this.lists); 
    });
  }
 
}
