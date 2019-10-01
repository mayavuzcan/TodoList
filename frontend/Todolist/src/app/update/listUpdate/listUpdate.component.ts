import { Component, OnInit } from '@angular/core';
import { Lists } from 'src/app/models/lists/lists.component';
import { ListService } from 'src/app/services/Lists/List.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/users/user.component';


@Component({
  selector: 'app-listUpdate',
  templateUrl: './listUpdate.component.html',
  styleUrls: ['./listUpdate.component.css']
})
export class ListUpdateComponent implements OnInit {

  list1: Lists;
  lists: Lists[];
  users: User[];
  selectedList: Lists = new Lists();


  constructor(
    private listService: ListService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getList();
    this.getUser();

  }
  getList() {
    this.selectedList = this.listService.getSelectedList();
    console.log(this.selectedList);
  }
  getUser() {
    this.users = JSON.parse(localStorage.getItem('currentUser'));

    console.log(this.users);
  }

 
  savePlayer(form: NgForm) {
    this.list1 = JSON.parse(JSON.stringify(form));
    this.list1.id = JSON.parse(localStorage.getItem('currentUser')).id;
    console.log(this.list1);
    this.listService.saveList(this.list1).subscribe(resp => {
      localStorage.removeItem('currentUser');

      this.router.navigate(['profile']);
    });
  }

}
