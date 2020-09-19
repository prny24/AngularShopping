import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ProductdataService } from '../productdata.service';
import {Router} from '@angular/router';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-getproductdata',
  templateUrl: './getproductdata.component.html',
  styleUrls: ['./getproductdata.component.css']
})
export class GetproductdataComponent implements OnInit {

  form : FormGroup
  model : any=[]
  color : String[]= ["Red","Green","Black","Blue"]
  freq : String[]= ["5-24000","17-22000","20-20000","20-40000"]

  getProductData(){
    this.productdataservice.getData().subscribe((res)=>{
      this.model = res
    })
  }

  logout(){
    alert("You are sucessfully logged out")
    this.router.navigateByUrl("app")
  }

  delete(id){
    this.productdataservice.deleteData(id).subscribe((res)=>{
      alert("Data delete successfully")
      this.getProductData()
    })
  }

  constructor(private productdataservice:ProductdataService,private router:Router,private userdataservice:UserdataService) { }

  ngOnInit(): void {

    this.getProductData();

    this.form = new FormGroup(
      {
        model_name : new FormControl(""),
        model_micavailability : new FormControl(""),
        model_freqrange: new FormControl(this.freq[2]),
        model_dusize : new FormControl(""),
        model_imprating :new FormControl(""),
        model_price : new FormControl(""),
        model_warranty : new FormControl(""),
        model_noicecancel :new FormControl(""),
        model_volcontrol :new FormControl(""),
        model_color : new FormControl(this.color[2]),
        model_image : new FormControl(""),
        model_description : new FormControl("")

      }
    )
  }

}
