import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  arr:any;
  _isAuthenticate: Boolean = false;
  employeeDetails: Array<string>=[];
  getObj(arr:any){
    this.arr=arr;
  }
  setObj(){
    return this.arr;
  }

  sendEmployeeDetails(employeeDetails){
    this.employeeDetails=employeeDetails;
  }

  getEmployeeDetails(){
    return this.employeeDetails;
  }

  setIsValid(_isAuthenticate){
    this._isAuthenticate=_isAuthenticate;
  }

  getIsValid(){
    return this._isAuthenticate;
  }
  
}
