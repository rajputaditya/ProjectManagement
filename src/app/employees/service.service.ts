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
    console.log(emp);
    return this.http.post<Employee>(this.url, emp);
      
  }

  editEmployee (emp: Employee): Observable<Employee> {
    this.url='http://localhost:8086/restApi/employee/'+emp.getFirstName()+' '+emp.getLastName();
    console.log(emp);
    console.log(this.url);
    return this.http.put<Employee>(this.url, emp);
      
  }
  delEmployee(emp : Employee):Observable<Employee>{
    this.url='http://localhost:8086/restApi/employee/'+emp.getFirstName()+' '+emp.getLastName();
    return this.http.delete<Employee>(this.url);
  }

}