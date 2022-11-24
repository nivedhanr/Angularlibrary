import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookviewComponent } from './bookview/bookview.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { EntryComponent } from './entry/entry.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
     path:"",
     component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userreg",
    component:UserregComponent
  },
  {
    path:"issuebook",
    component:BookissueComponent
  },
  {
    path:"bookview",
    component:BookviewComponent
  },
  {
    path:"booksearch",
    component:SearchComponent
  },
  {
    path:"bookentry",
    component:EntryComponent
  },
  {
    path:"bookedit",
    component:EditComponent
    
  },
  {
    path:"delete",
    component:DeleteComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    BookviewComponent,
    UserloginComponent,
    UserregComponent,
    BookissueComponent,
    SearchComponent,
    DeleteComponent,
    EditComponent,
    EntryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
