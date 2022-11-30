import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  image=""
  author=""
  description=""
  publisher=""
  language=""
  distributor=""
  releasedyear=""
  title=""
  price=""
  

  readValues=()=>
  {
    let data:any={"image":this.image,"title":this.title,"price":this.price,"author":this.author,"description":this.description,"publisher":this.publisher,"language":this.language,"releasedyear":this.releasedyear,"distributor":this.distributor}
    console.log(data)
  }
}
