import { Component, OnInit } from '@angular/core';


import {FormGroup,FormControl} from '@angular/forms';

import {Router} from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  
  loginForm:FormGroup
  
  login()
  { 
    if(this.loginForm.value.uname == "akshay" && this.loginForm.value.pass=="akshay123")
    {
      
       alert("You are sucessfully logged in")
        this.router.navigateByUrl("checkout");
        
    }
    else{
    
        alert("Id or password is incorrect")
    }
    
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      uname:new FormControl(""),
      pass:new FormControl(""),
    })
  }

}
