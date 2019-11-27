import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';



class User {
  userName;
  userPass;

  setUserName(userNAME) {
    this.userName = userNAME;
  }

  getUserName() {
    return this.userName;
  }

  setUserPass(userPASS) {
    this.userPass = userPASS;
  }

  getUserPass() {
    return this.userPass;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private comServ: CommonService, private cookieService: CookieService) { }

  userName: string;
  userPass: string;
  url: string = "http://localhost:8086/restApi/login";
  invalid;
  logInForm: FormGroup;

  userCredentials: User;
  _isAuthenticated: boolean = false;
  mainURL = '/viewProjects';
  @Output()
  _isAuthenticatedEmitter = new EventEmitter<Boolean>();

  get getUserName() {
    return this.logInForm.get("userNameValidator");
  }

  get getUserPass() {
    return this.logInForm.get("userPassValidator");
  }

  authentication() {
    this.invalid = 0;
    this._isAuthenticated = false;
    this.userCredentials = new User();
    this.userCredentials.setUserName((<HTMLInputElement>document.getElementById("userNAME")).value);
    this.userCredentials.setUserPass((<HTMLInputElement>document.getElementById("userPASSWORD")).value);
    this.http.put(this.url, this.userCredentials).subscribe(data => {
      if (data == 1) {
        this.cookieService.set('_isAuthenticated', 'true');
        this._isAuthenticatedEmitter.emit();
      }
      else {
        this.invalid = 1;
      }
    })

  }
  ngOnInit() {

    this.logInForm = new FormGroup({
      userNameValidator: new FormControl('', Validators.required),
      userPassValidator: new FormControl('', Validators.required)
    });
  }



}
