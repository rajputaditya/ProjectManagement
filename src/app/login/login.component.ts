import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { CommonService } from '../common.service';



class User{
  userName;
  userPass;

  setUserName(userNAME){
    this.userName=userNAME;
  }

  getUserName(){
    return this.userName;
  }

  setUserPass(userPASS){
    this.userPass=userPASS;
  }

  getUserPass(){
    return this.userPass;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private comServ:CommonService) { }

  userName:string;
  userPass:string;
  url:string="http://localhost:8080/login";

  userCredentials:User;
  _isAuthenticate:boolean=false;
  mainURL='/viewProjects';
  @Output()
  _isAuthenticateEmitter = new EventEmitter<Boolean>();
  authentication(){
    
    this._isAuthenticate=false;
    this.userCredentials=new User();
    this.userCredentials.setUserName((<HTMLInputElement>document.getElementById("userNAME")).value);
    this.userCredentials.setUserPass((<HTMLInputElement>document.getElementById("userPASSWORD")).value);
    this.http.put(this.url,this.userCredentials).subscribe(data=>{
      if(data==1){
        this._isAuthenticate=true;
        this._isAuthenticateEmitter.emit(this._isAuthenticate);
      }
      else
      {
        alert("INVALID CREDENTIALS...")
      }
    })

  }
  ngOnInit() {
  }

}
