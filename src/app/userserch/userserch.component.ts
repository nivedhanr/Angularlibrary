import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userserch',
  templateUrl: './userserch.component.html',
  styleUrls: ['./userserch.component.css']
})
export class UserserchComponent {

  constructor(private api:ApiService){}
  title=""
  readValues:any = []
  readValue=()=>
{
  let data:any={
  "title":this.title}
  console.log(data)
  this.api.fetchsearch(data).subscribe(
  (response:any)=>{
  console.log(response)
  if (response.length==0) {
  alert("invalide employee code")
  } else {
    this.readValues = response
}
}

)

}
deleteBtnclick=(id:any)=>{

    let data:any={"id":id}

    this.api.deletebook(data).subscribe(

      (response:any)=>{

        console.log(response)

        if(response.status=="success"){

          alert("succesfully deleted")

          this.readValues=[]

         

        }

        else{

          alert("invalid input")

        }

      }

    )

  }





}
