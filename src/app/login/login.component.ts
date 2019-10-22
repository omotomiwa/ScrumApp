import { Component, OnInit } from '@angular/core';
import { Scrumuser, loginuser } from "../scrumuser";
import { ScrumdataService } from "../scrumdata.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scrumUserLoginData = {}
  public user = {'email': '',
               'password': '',
                "project": ""
              }

  constructor(private _scrumdataService: ScrumdataService){}

  ngOnInit() {
  }
  scrumloginModel = new loginuser ( "", "", "");

  onLoginSubmit(){
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data => console.log("Success", data),
      error => console.log("Error", error)
    )
  }
}
