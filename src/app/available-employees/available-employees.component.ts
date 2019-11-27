import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../employees/service.service';
import { CommonService } from '../common.service';
import { Location } from '@angular/common';
export class Employee {

  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  designation: string;
  technologies: string;

  setFirstName(firstName) {
    this.firstName = firstName;
  }
  getFirstName() {
    return this.firstName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  getLastName() {
    return this.lastName;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setDesignation(designation) {
    this.designation = designation;
  }
  getDesignation() {
    return this.designation;
  }
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
  setTechnologies(technologies) {
    this.technologies = technologies;
  }
  getTechnologies() {
    return this.technologies;
  }
}
@Component({
  selector: 'app-available-employees',
  templateUrl: './available-employees.component.html',
  styleUrls: ['./available-employees.component.scss']
})
export class AvailableEmployeesComponent implements OnInit {

  userArray: Array<any> = [];
  url: string;

  emp: Employee;
  employees: Array<any> = [];
  addEmployeeForm: FormGroup;
  editEmployeeForm: FormGroup;


  emailPattern: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
  namePattern: string = "[a-zA-Z\\s]*$";
  phoneNumberpattern: string = "/^[6-9]\d{9}$/";

  set() {
    this.url = "http://localhost:8086/restApi/availableEmployee";
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
      });
    })
  }


  constructor(private http: HttpClient, private service: ServiceService, private comServ: CommonService,private _location:Location) {
    this.set();
  }

  goBack(){
   this._location.back();
  }

  ngOnInit() {
  }
  empDetails: Employee = new Employee();
  setDetailsForModal(user) {
    this.empDetails.setFirstName(user.firstName);
    this.empDetails.setLastName(user.lastName);
    this.empDetails.setEmail(user.email);
    this.empDetails.setDesignation(user.designation);
    this.empDetails.setPhoneNumber(user.phoneNumber);
    this.empDetails.setTechnologies(user.technologies);
    console.log(this.empDetails);
  }


  assignProject(user){
    this.url="http://localhost:8086/restApi/availableEmployee/"+this.comServ.setObj().projectName;
    this.http.put(this.url,user).subscribe(data=>console.log(data));
  }
}
