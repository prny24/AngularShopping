import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api="http://localhost:5555/users/"

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
 
  saveData(userdata)
  {
    return this.httpclient.post(api,userdata)
  }

  getDataById(id){
    return this.httpclient.get(api+id)
  }
  
  getData(){
    return this.httpclient.get(api)
  }

  constructor(private httpclient: HttpClient) { }
}
