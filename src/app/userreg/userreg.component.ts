import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

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
 constructor(private api:ApiService,private route:Router){}

  readValues=()=>
  {
    let data:any={"name":this.name,"aadhar":this.aadhar,"address":this.address,"pin":this.pin,"dob":this.dob,"email":this.email,"phoneno":this.phoneno,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
    if(this.password == this.confirmpass && this.password !="" && this.email!=""){
      this.api.userReg(data).subscribe(
        (response:any)=>{
          console.log(response)
          if(response.status=="success"){
            alert("Registered successfully")
            this.name=""
            this.aadhar=""
            this.address=""
            this.pin=""
            this.dob=""
            this.email=""
            this.phoneno=""
            this.username=""
            this.password=""
            this.confirmpass=""
            this.route.navigate(['/userlogin'])

          }else{
            alert("Something went wrong")
          }
        }
      )
    }
  }

}
