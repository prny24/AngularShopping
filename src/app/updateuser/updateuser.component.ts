import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms'
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  form : FormGroup
  user : any=[]
  
  id : number

  updateuser()
  {
    this.userdataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Data Updated Successfully")
      this.router.navigateByUrl("/")
    })
  }
  constructor(private userdataservice:UserdataService, private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

       
this.activatedroute.params.subscribe((param)=>
{
  this.id = param["id"]
  this.userdataservice.getDataById(this.id).subscribe((data)=>{
    this.user = data
    this.form = new FormGroup(
      {
        user_name : new FormControl(this.user.user_name),
        user_email : new FormControl(this.user.user_email),
        user_age : new FormControl(this.user.user_age),
        user_password : new FormControl(this.user.user_password)

    })
  })
})
 

  }

}
