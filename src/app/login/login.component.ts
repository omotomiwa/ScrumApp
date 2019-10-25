import { Component, OnInit } from '@angular/core';
import { Scrumuser, loginuser } from "../scrumuser";
import { ScrumdataService } from "../scrumdata.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  scrumUserLoginData = {email:"", password: "", project: ""};
  

  constructor(private _scrumdataService: ScrumdataService, private _router: Router){}

  ngOnInit() {
  }
  scrumloginModel = new loginuser ( "", "", "", );

  onLoginSubmit(){
    this._scrumdataService.login(this.scrumUserLoginData).subscribe(
      data => {
        console.log("Success!", data)
        localStorage.setItem("token", data.token)
        this._router.navigate(["/scrumboard"])
      },
      error => {
        console.log("Error!", error)
      }
    )
  }
}
