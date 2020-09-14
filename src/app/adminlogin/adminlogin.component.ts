import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms';

import {Router} from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  loginForm:FormGroup
  
  login()
  { 
    if(this.loginForm.value.uname == "admin" && this.loginForm.value.pass=="admin123")
    {
      
       alert("Admin login Sucessfull")
        this.router.navigateByUrl("get");
        
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
