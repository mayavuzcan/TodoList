import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { LoginService } from  '../services/login/Login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error='';

  constructor(private router:Router,
    private loginService:LoginService) { }

    @ViewChild('loginForm') loginForm: NgForm;

  ngOnInit() {
  }

  onSubmit(){
    const value = this.loginForm.value;
    
    let player = {
      email: value.email,
      password: value.password,
    }

    
      this.loginService.login(player).subscribe(
        (response) => {
          if(response !== null){
          
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.router.navigate(['welcome']);
          }
          this.error = 'There is no user';
        }
      );
    
  }
}
