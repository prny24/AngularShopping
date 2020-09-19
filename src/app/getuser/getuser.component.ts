import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { UserdataService } from '../userdata.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  form : FormGroup
  user : any=[]

  getUserData(){
    this.userdataservice.getData().subscribe((res)=>{
      this.user = res
    })
  }

  logout(){
    alert("You are sucessfully logged out")
    this.router.navigateByUrl("app")
  }

  delete(id){
    this.userdataservice.deleteData(id).subscribe((res)=>{
      alert("Data delete successfully")
      this.getUserData()
    })
  }

  constructor(private userdataservice:UserdataService,private router:Router) { }

  ngOnInit(): void {
    
    this.getUserData();

    this.form = new FormGroup(
      {
        user_name : new FormControl(""),
        user_email : new FormControl(""),
        user_age : new FormControl(""),
        user_password : new FormControl("")

      }
    )
  }

}
