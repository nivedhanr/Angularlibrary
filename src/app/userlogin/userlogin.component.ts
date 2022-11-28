import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  username=""
  password=""
 
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
  }

}
