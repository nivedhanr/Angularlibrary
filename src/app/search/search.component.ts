import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title =""

  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
  }

}
