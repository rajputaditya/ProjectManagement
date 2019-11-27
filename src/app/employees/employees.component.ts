import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ServiceService } from './service.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  getFirstName(){
    return this.firstName;
  }
  setLastName(lastName) {
    this.lastName = lastName;
  }
  getLastName(){
    return this.lastName;
  }
  setEmail(email) {
    this.email = email;
  }
  getEmail(){
    return this.email;
  }
  setDesignation(designation) {
    this.designation = designation;
  }
  getDesignation(){
    return this.designation;
  }
  setPhoneNumber(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  getPhoneNumber(){
    return this.phoneNumber;
  }
  setTechnologies(technologies) {
    this.technologies = technologies;
  }
  getTechnologies(){
    return this.technologies;
  }
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})


export class EmployeesComponent implements OnInit {



  userArray: Array<any> = [];
  url: string;

  emp: Employee;
  employees: Array<any> = [];
  addEmployeeForm: FormGroup;
  editEmployeeForm: FormGroup;


  emailPattern: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
  namePattern: string = "[a-zA-Z\\s]*$";
  phoneNumberpattern:string="/^[6-9]\d{9}$/";

  //Add Employee validations
  get getFirstName() {
    return this.addEmployeeForm.get("firstNameValidator");
  }
  get getLastName() {
    return this.addEmployeeForm.get("lastNameValidator");
  }
  get getEmail() {
    return this.addEmployeeForm.get("emailValidator");
  }
  get getDesignation() {
    return this.addEmployeeForm.get("designationValidator");
  }
  get getPhoneNumber() {
    return this.addEmployeeForm.get("phoneNumberValidator");
  }
  get getTechnology() {
    return this.addEmployeeForm.get("technologyValidator")
  }

  //Edit Employee validations
  get getEditFirstName() {
    return this.editEmployeeForm.get("editFirstNameValidator");
  }
  get getEditLastName() {
    return this.editEmployeeForm.get("editLastNameValidator");
  }
  get getEditEmail() {
    return this.editEmployeeForm.get("editEmailValidator");
  }
  get getEditDesignation() {
    return this.editEmployeeForm.get("editDesignationValidator");
  }
  get getEditPhoneNumber() {
    return this.editEmployeeForm.get("editPhoneNumberValidator");
  }
  get getEditTechnology() {
    return this.editEmployeeForm.get("editTechnologyValidator")
  }






  addEmployee() {
    this.emp = new Employee();
    this.emp.setFirstName((<HTMLInputElement>document.getElementById("firstName")).value);
    this.emp.setLastName((<HTMLInputElement>document.getElementById("lastName")).value);
    this.emp.setEmail((<HTMLInputElement>document.getElementById("email")).value);
    this.emp.setDesignation((<HTMLInputElement>document.getElementById("designation")).value);
    this.emp.setPhoneNumber((<HTMLInputElement>document.getElementById("phoneNumber")).value);
    this.emp.setTechnologies((<HTMLInputElement>document.getElementById("technologies")).value);
    this.service
      .addEmployee(this.emp)
      .subscribe(emp => this.employees.push(emp));
     
  }

  success(){
    location.reload();

  }

  editEmployees() {
    this.emp = new Employee();
    this.emp.setFirstName((<HTMLInputElement>document.getElementById("editFirstName")).value);
    this.emp.setLastName((<HTMLInputElement>document.getElementById("editLastName")).value);
    this.emp.setEmail((<HTMLInputElement>document.getElementById("editEmail")).value);
    this.emp.setDesignation((<HTMLInputElement>document.getElementById("editDesignation")).value);
    this.emp.setPhoneNumber((<HTMLInputElement>document.getElementById("editPhoneNumber")).value);
    this.emp.setTechnologies((<HTMLInputElement>document.getElementById("editTechnologies")).value);
    this.service
      .editEmployee(this.emp)
      .subscribe(emp => this.employees.push(emp));


  }

  set() {
    this.url = "http://localhost:8086/restApi/employee";
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
      });
    })
  }



  constructor(private http: HttpClient, private service: ServiceService) {
    this.addEmployeeForm = new FormGroup({
      firstNameValidator: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.namePattern)]),
      lastNameValidator: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.namePattern)]),
      emailValidator: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      designationValidator: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      phoneNumberValidator: new FormControl('', [Validators.required, Validators.minLength(10) ]),
      technologyValidator: new FormControl('', [Validators.required])
    });

    this.editEmployeeForm = new FormGroup({
      editFirstNameValidator: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]),
      editLastNameValidator: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.namePattern)]),
      editEmailValidator: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      editDesignationValidator: new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      editPhoneNumberValidator: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(this.phoneNumberpattern)]),
      editTechnologyValidator: new FormControl('', [Validators.required])
    });


    this.set();
  }

  ngOnInit() {
  }
  empDetails:Employee=new Employee();
  setDetailsForModal(user){
    this.empDetails.setFirstName(user.firstName);
    this.empDetails.setLastName(user.lastName);
    this.empDetails.setEmail(user.email);
    this.empDetails.setDesignation(user.designation);
    this.empDetails.setPhoneNumber(user.phoneNumber);
    this.empDetails.setTechnologies(user.technologies);
    console.log(this.empDetails);
  }

  delEmployee(){
    this.service.delEmployee(this.empDetails).subscribe(data=>console.log(data));
    location.reload();
  }

  

}


