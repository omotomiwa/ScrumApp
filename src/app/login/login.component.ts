import { Component, OnInit } from '@angular/core';
import { Scrumuser, loginuser } from "../scrumuser";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrumloginModel = new loginuser ( "", "", "");
}
