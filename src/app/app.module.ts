import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { ProductdataService } from './productdata.service';
import { SaveproductdataComponent } from './saveproductdata/saveproductdata.component';
import { GetproductdataComponent } from './getproductdata/getproductdata.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
import { UserdataService } from './userdata.service';
import { SaveuserdataComponent } from './saveuserdata/saveuserdata.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { GetuserComponent } from './getuser/getuser.component';
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    SaveproductdataComponent,
    GetproductdataComponent,
    UpdateproductComponent,
    HomeComponent,
    AdminloginComponent,
    SaveuserdataComponent,
    UserloginComponent,
    UpdateuserComponent,
    GetuserComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [ProductdataService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
