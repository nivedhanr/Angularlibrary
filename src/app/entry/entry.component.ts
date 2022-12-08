import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  image=""
  author=""
  description=""
  language=""
  distributor=""
  releasedyear=""
  title=""
  price=""
  

  
  
  constructor(private api:ApiService){}
  readValues=()=>
  {
    let data:any={"title":this.title,"image":this.image,"author":this.author,"description":this.description,"language":this.language,"distributor":this.distributor,"releasedyear":this.releasedyear,"price":this.price}
    console.log(data)
    this.api.addbook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" added successfully")
          
          this.title=""
          this.image
          this.author=""
          this.description=""
          this.language=""
          this.distributor=""
          this.releasedyear=""
          this.price=""
          
         
        }else{
          alert("Something went wrong")
        }
        }
    )
}
}
