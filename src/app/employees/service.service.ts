import { Injectable } from '@angular/core';
import { Employee } from './employees.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  url:string;
  addEmployee (emp: Employee): Observable<Employee> {
    this.url='http://localhost:8086/restApi/employee';
    return this.http.post<Employee>(this.url, emp);
      
  }
}

