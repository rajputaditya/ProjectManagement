import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private _http: HttpClient) { }
  getLastMonthProgressOfEmployees(month: any, year: any, project_name){
    return this._http.get("http://localhost:8086/chartChartingServiceemployees/lastmonth/" + month + "/" + year + "/" + project_name);
  }

  getMonthlyProgressOfEmployees(month: any, year: any, project_name){
    return this._http.get("http://localhost:8086/chartChartingServiceemployees/" + month + "/" + year + "/" + project_name);
  }

  getMonthlyProgressOfProject(month: any, year: any, project_name){
    return this._http.get("http://localhost:8086/chartChartingServiceprojects/" + month + "/" + year + "/" + project_name)
  }
}