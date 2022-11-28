import { Component } from '@angular/core';

@Component({
  selector: 'app-bookissue',
  templateUrl: './bookissue.component.html',
  styleUrls: ['./bookissue.component.css']
})
export class BookissueComponent {
  title =""

  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
  }

}
