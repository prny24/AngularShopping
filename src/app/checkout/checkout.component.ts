import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { ProductdataService } from '../productdata.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  form : FormGroup
  model : any=[]
  color : String[]= ["Red","Green","Black","Blue"]
  freq : String[]= ["5-24000","17-22000","20-20000","20-40000"]
  id:number
  
  getProductData(){
    this.productdataservice.getData().subscribe((res)=>{
      this.model = res
    })
  }
  constructor(private productdataservice:ProductdataService,private router:Router) { }

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
