import { Component, OnInit } from '@angular/core';
import * as Realm from 'realm-web';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }
  userRefreshToken : any;
  bla : any;
  username : any;
  email : any;
  app : any
  //app = new Realm.App('data-icqqg');
  ngOnInit() {
    this.app = new Realm.App('data-icqqg')
    //this.userRefreshToken = sessionStorage.getItem("userRefreshToken");
    this.userRefreshToken = this.app.currentUser.refreshToken
    console.log(this.app.currentUser)
    this.email = this.app.currentUser.profile.email
    this.username = this.email.split("@")[0]
  }
  
}