import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-saveuserdata',
  templateUrl: './saveuserdata.component.html',
  styleUrls: ['./saveuserdata.component.css']
})
export class SaveuserdataComponent implements OnInit {

  form : FormGroup
    user : any=[]
    
   


    register(){
     
      this.userdataservice.saveData(this.form.value).subscribe((res)=>{
        alert("Data saved sucessfully")
      })
    }


  constructor(private userdataservice:UserdataService) { }

  ngOnInit(): void {
    
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
