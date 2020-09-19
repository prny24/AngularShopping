import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { GetproductdataComponent } from './getproductdata/getproductdata.component'
import { GetuserComponent } from './getuser/getuser.component';
import { HomeComponent } from './home/home.component';
import { SaveuserdataComponent } from './saveuserdata/saveuserdata.component';
import { UpdateproductComponent} from './updateproduct/updateproduct.component'
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  //{path:"",component:GetproductdataComponent},
  {path:"update/:id",component:UpdateproductComponent},
  {path:"get",component:GetproductdataComponent},
  {path:"app",component:AppComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"",component:HomeComponent},
  {path:"userlogin",component:UserloginComponent},
  {path:"signup",component:SaveuserdataComponent},
  {path:"update",component:UpdateproductComponent},
  {path:"updateuser/:id",component:UpdateuserComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"getuser",component:GetuserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
