import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users/user.component';
import { UserServiceService } from 'src/app/services/User/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:User[];
  constructor(private userService: UserServiceService,private router:Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){ 
    this.users=JSON.parse(
      localStorage.getItem("currentUser")
      );
  //LocalStorage de bulunan kullanici verilerini get etme isleminde kullaniliyor
     console.log(this.users);
  }
  updateLink(user){
    this.userService.setSelectedUser(user);
    this.router.navigate(['updateUser']);   }
}
