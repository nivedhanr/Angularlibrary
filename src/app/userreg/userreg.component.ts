import { Component } from '@angular/core';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {
  name=""
  aadhar=""
  address=""
  pin=""
  dob=""
  email=""
  phoneno=""
  username=""
  password=""
  confirmpass=""

  readValues=()=>
  {
    let data:any={"name":this.name,"aadhar":this.aadhar,"address":this.address,"pin":this.pin,"dob":this.dob,"email":this.email,"phoneno":this.phoneno,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
  }

}
