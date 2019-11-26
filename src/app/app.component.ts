import { Component } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _isAuthenticate: boolean;
  title = 'ProjectManagement';

  constructor(private comServ:CommonService){
  
  }

  getAuthenticated(_isAuthenticate){
    this._isAuthenticate=_isAuthenticate;
  }
}
