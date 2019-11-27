import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getAuthenticated();
  }
  _isAuthenticated: boolean;
  title = 'ProjectManagement';

  constructor(private comServ:CommonService, private cookieService: CookieService){
  
  }

  getAuthenticated(){
    if(this.cookieService.get('_isAuthenticated') == 'true'){
      this._isAuthenticated=true;
    } else {
      this._isAuthenticated=false;
    }
  }
}
