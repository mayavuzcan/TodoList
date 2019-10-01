import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/Lists/List.service';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { LookService } from 'src/app/services/looks/Look.service';
import { Router } from '@angular/router';
import { Looks } from 'src/app/models/looks/looks.component';
import { User } from 'src/app/models/users/user.component';
import { Lists } from 'src/app/models/lists/lists.component';

@Component({
  selector: 'app-unCompletedListPage',
  templateUrl: './unCompletedListPage.component.html',
  styleUrls: ['./unCompletedListPage.component.css']
})
export class UnCompletedListPageComponent implements OnInit {

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
    this.getunCompletedList();
  }

  getunCompletedList(){
    this.listService.getUnCompletedList().subscribe(list => {
      this.lists = (list);
      
      console.log(this.lists); 
    });
  }
  clickOlustur(list) {
    this.listService.setSelectedList(list);
    
   
    
    this.router.navigate(['creatTodos']);
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
  clickComplete(list) {
    this.todosService.setSelectedList(list);
    this.listos=list;
    this.listos.listStatu="1";
   

    this.listService.saveList(this.listos).subscribe(resp => {
      

    });
   
    this.router.navigate(['uncompleted']);
  }

}
