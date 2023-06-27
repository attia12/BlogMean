import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  author ={
    email:'',
    password:''
  }

  token!:string;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    return this.authService.login(this.author).subscribe((response :any)=>{

      console.log(response);

      this.token=response.mytoken;
      localStorage.setItem('token',this.token);

      this.router.navigate(['/home']);

    },(error)=>{

    })

  }
}
