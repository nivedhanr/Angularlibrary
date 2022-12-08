import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent {
  constructor(private api:ApiService){
    api.fetchbook().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }
  data:any=[]
}
