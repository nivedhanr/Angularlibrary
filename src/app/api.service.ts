import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  addbook=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  fetchbook=()=>
  {
    return this.http.get("http://localhost:8080/view")
}
fetchsearch=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/search",datatosend)
}
deletebook=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/delete",datatosend)
}

  userLogin=(datatosend: any)=>{
  
  return this.http.post("http://localhost:8080/userlogin", datatosend)
}
userReg=(datatosend: any)=>{
  
  return this.http.post("http://localhost:8080/userreg", datatosend)
}

}
