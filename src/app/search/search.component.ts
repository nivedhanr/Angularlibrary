import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  

  constructor(private api:ApiService){}
  title =""
  fetchsearch:any=[]
  readValue=()=>{
    let data={"title":this.title}
    console.log(data)
    this.api.fetchsearch(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid course")
          
        } else {
          this.fetchsearch=response
          
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
          alert("successfully deleted")
          this.fetchsearch=[]
        }
        else{
          alert("invalid input")
        }
      }
    )
  }

}
