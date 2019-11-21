import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private _http: HttpClient) { }
  getLastMonthProgressOfEmployees(month: any, year: any, project_name)
  {
    return this._http.get("http://localhost:8787/employees/lastmonth/" + month + "/" + year + "/" + project_name);
  }

  getNameByEmpId(empId: any){
    return this._http.get("http://localhost:8080/employee/employeename/" + empId);
  }

  getMonthlyProgressOfEmployees(month: any, year: any, project_name){
    return this._http.get("http://localhost:8787/employees/" + month + "/" + year + "/" + project_name);
  }
}