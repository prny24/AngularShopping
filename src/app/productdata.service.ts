import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const api="http://localhost:8888/earphones/"

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  saveData(productdata)
  {
    return this.httpclient.post(api,productdata)
  }

  getDataById(id){
    return this.httpclient.get(api+id)
  }
  
  getData(){
    return this.httpclient.get(api)
  }

  updateData(id,productdata)
  {
    return this.httpclient.put(api+id,productdata)
  }

  deleteData(id)
  {
    return this.httpclient.delete(api+id)
  }

  constructor(private httpclient: HttpClient) { }
}
