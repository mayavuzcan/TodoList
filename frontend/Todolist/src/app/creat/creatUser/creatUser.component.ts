import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserServiceService } from 'src/app/services/User/UserService.service';



@Component({
  selector: 'app-creatUser',
  templateUrl: './creatUser.component.html',
  styleUrls: ['./creatUser.component.css']
})
export class CreatUserComponent implements OnInit {

  constructor(private userService: UserServiceService , private router:Router ) { }

  ngOnInit() {
  }
  loginLink(){

    this.router.navigate(['login']);


  }

  saveUser(form: NgForm){
    console.log(form);
    this.userService.saveUser(form).subscribe(
    resp => {
      console.log(resp);
            this.router.navigate(['login']);
      }
    );
  }

}
