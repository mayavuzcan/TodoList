import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/Lists/List.service';
import { User } from 'src/app/models/users/user.component';
import { Lists } from 'src/app/models/lists/lists.component';
import { TodosService } from 'src/app/services/Todos/Todos.service';
import { UserServiceService } from 'src/app/services/User/UserService.service';

@Component({
  selector: 'app-creatLists',
  templateUrl: './creatLists.component.html',
  styleUrls: ['./creatLists.component.css']
})
export class CreatListsComponent implements OnInit {

  list1: Lists;
  users: User;
  constructor(private listService: ListService,private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
  }
  loginLink(){

    this.router.navigate(['login']);


  }

  saveList(form: NgForm){
    console.log(form);
    this.listService.saveList(form).subscribe(
    resp => {
      console.log(resp);
            this.router.navigate(['login']);
      }
    );
  }
  saveList1(form: NgForm) {
    this.list1 = JSON.parse(JSON.stringify(form));
    this.list1.listAuthority = JSON.parse(localStorage.getItem('currentUser')).id;
    this.list1.listStatu="0";
    
    console.log(this.list1);

   
    this.listService.saveList(this.list1).subscribe(resp => {

      
      
      console.log(resp);

      this.router.navigate(['lists']);
    });
  }
  
}
