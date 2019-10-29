import { Component, OnInit } from '@angular/core';
import { Scrumuser } from "../scrumuser";
import { ScrumdataService } from "../scrumdata.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _scrumdataService: ScrumdataService, private _router: Router) { }

  ngOnInit() {
  }
  userTypes = ["regular user", "project owner"];
  scrumUserModel = new Scrumuser ("", "", "", "");
  feedbk = "";

  onSubmit(){
    console.log(this.scrumUserModel)
    this._scrumdataService.signup(this.scrumUserModel).subscribe(
      data => {
        console.log("Success", data)
        localStorage.setItem("token", data.token)
        this._router.navigate(["/login"]);
        alert(this.feedbk = "Your account was created successfully")
      },
      error => {
        console.error("Error", error)  
        alert(this.feedbk = "Signup Failed")
      }
    )
  }
}
