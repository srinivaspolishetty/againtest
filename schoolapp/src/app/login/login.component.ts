import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from "../models/login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: Login;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup ({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }
  login(){
    this.loginModel =  this.loginForm.value;
    console.log(this.loginModel)
  }

}
