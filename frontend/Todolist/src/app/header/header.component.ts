import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/Login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  clickLogin() {
    this.router.navigate(['login']);
  }
  clickLogout() {
   localStorage.removeItem('currentUser');
   localStorage.removeItem('dataLook');

   this.router.navigate(['']); 
  }
  clickCreat(){
    this.router.navigate(['creatUser']);

  }
  
}
