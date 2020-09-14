import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms'
import { ProductdataService } from '../productdata.service';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  form : FormGroup
  model : any=[]
  color : String[]= ["Red","Green","Black","Blue"]
  freq : String[]= ["5-24000","17-22000","20-20000","20-40000"]
  id : number

  update()
  {
    this.productdataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Data Updated Successfully")
      this.router.navigateByUrl("/")
    })
  }

  constructor(private productdataservice:ProductdataService, private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

     
this.activatedroute.params.subscribe((param)=>
{
  this.id = param["id"]
  this.productdataservice.getDataById(this.id).subscribe((data)=>{
    this.model = data
    this.form = new FormGroup(
      {
        model_name : new FormControl(this.model.model_name),
        model_micavailability : new FormControl(this.model.model_micavailability),
        model_freqrange: new FormControl(this.model.model_freqrange),
        model_dusize : new FormControl(this.model.model_dusize),
        model_imprating :new FormControl(this.model.model_imprating),
        model_price : new FormControl(this.model.model_price),
        model_warranty : new FormControl(this.model.model_warranty),
        model_noicecancel :new FormControl(this.model.model_noicecancel),
        model_volcontrol :new FormControl(this.model.model_volcontrol),
        model_color : new FormControl(this.model.model_color),
        model_image : new FormControl(this.model.model_image),
        model_description : new FormControl(this.model.model_description)


    })
  })
})
 
  }

}
