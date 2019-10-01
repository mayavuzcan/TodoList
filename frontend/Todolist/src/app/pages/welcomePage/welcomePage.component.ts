import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login/Login.service';
import { UserServiceService } from 'src/app/services/User/UserService.service';

@Component({
  selector: 'app-welcomePage',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService,private userService: UserServiceService) { }

  ngOnInit() {
  }

  clickGoProfil(){
    this.router.navigate(['profile'])
  }
  clickGoCreatList(){
    this.router.navigate(['listCreat'])
  }
  clickGoList(){
    this.router.navigate(['lists'])
  }
  clickLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']); 
   }
}
