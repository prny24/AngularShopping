import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';

import { GetproductdataComponent } from './getproductdata/getproductdata.component'
import { HomeComponent } from './home/home.component';
import { SaveuserdataComponent } from './saveuserdata/saveuserdata.component';
import { UpdateproductComponent} from './updateproduct/updateproduct.component'
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
  {path:"update",component:UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
