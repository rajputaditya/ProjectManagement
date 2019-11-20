import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private _http: HttpClient) { }
  getLastMonthProgressOfEmployees(month: any)
  {
    return this._http.get("http://localhost:8787/employees/lastmonth/" + month);
  }

  getNameByEmpId(empId: any){
    return this._http.get("http://localhost:8080/employee/employeename/" + empId);
  }

  getMonthlyProgressOfEmployees(month: any){
    return this._http.get("http://localhost:8787/employees/" + month);
  }
}
