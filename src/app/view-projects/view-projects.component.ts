import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from './project.service';
import { CommonService } from '../common.service';
import * as $ from "jquery";

export class Project {
  clientName: string;
  projectName: string;
  technologies: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  priority: string;
  manager: string;
  teamMembers: string;
  projectDescription: string;

  setClientName(clientName) {
    this.clientName = clientName;
  }



  setProjectName(projectName) {
    this.projectName = projectName;
  }



  setTechnologies(technologies) {
    this.technologies = technologies;
  }



  setStartDate(startDate) {
    this.startDate = startDate;
  }



  setEndDate(endDate) {
    this.endDate = endDate;
  }



  setCity(city) {
    this.city = city;
  }



  setCountry(country) {
    this.country = country;
  }



  setPriority(priority) {
    this.priority = priority;
  }
  setProjectDescription(projectDescription){
    this.projectDescription = projectDescription;
  }
}

@Component({
  selector: 'app-view-projects',
  templateUrl: './view-projects.component.html',
  styleUrls: ['./view-projects.component.scss']
})
export class ViewProjectsComponent implements OnInit {

  createProjectForm: FormGroup;
  editProjectForm: FormGroup;
  emailPattern: string = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  namePattern: string = "[a-zA-Z\\s]*$";
  startDate: any;
  endDate: any;
  temp = 0;
  usname: string;

  userArray: Array<any> = [];
  url: string = "http://localhost:8080/project";


  constructor(private http: HttpClient, private service: ProjectService, private comServ: CommonService) {
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
      });
    })
  }

  
 

  



  opnModal(uname: string) {
    this.usname = uname;
  }

  dateValidate() {
    this.endDate = (<HTMLInputElement>document.getElementById("projectEndDate")).value;
    this.startDate = (<HTMLInputElement>document.getElementById("projectStartdate")).value;
    if (new Date(this.endDate) <= new Date(this.startDate))
      this.temp = 1;
  }

  get getClientName() {
    return this.createProjectForm.get("clientNameValidator");
  }

  get getProjectName() {
    return this.createProjectForm.get("projectNameValidator");
  }

  get getTechnologies() {
    return this.createProjectForm.get("technologiesValidator");
  }

  get getStartDate() {
    return this.createProjectForm.get("startDateValidator");
  }

  get getEndDate() {
    return this.createProjectForm.get("endDateValidator");
  }

  get getPriorityLevel() {
    return this.createProjectForm.get("priorityLevelValidator");
  }

  get getCity() {
    return this.createProjectForm.get("cityValidator");
  }

  get getCountry() {
    return this.createProjectForm.get("countryValidator");
  }

  get getManager() {
    return this.createProjectForm.get("managerValidator");
  }

  get getTeam() {
    return this.createProjectForm.get("teamValidator");
  }

  get getProjectDescription() {
    return this.createProjectForm.get("projectDescriptionValidator");
  }

  get editGetProjectName() {
    return this.editProjectForm.get("editProjectNameValidator");
  }

  get editGetTechnology() {
    return this.editProjectForm.get("editTechnologyValidator");
  }

  get editGetEndDate() {
    return this.editProjectForm.get("editEndDateValidator");
  }

  get editGetPriority() {
    return this.editProjectForm.get("editPriorityValidator");
  }

  get editGetCity() {
    return this.editProjectForm.get("editCityValidator");
  }

  get editGetCountry() {
    return this.editProjectForm.get("editCountryValidator");
  }

  get editGetManager() {
    return this.editProjectForm.get("editManagerValidator");
  }

  get editGetTeam() {
    return this.editProjectForm.get("editTeamValidator");
  }

  get getEditProjectDescription() {
    return this.editProjectForm.get("editProjectDescriptionValidator");
  }



  ngOnInit() {

    
    this.createProjectForm = new FormGroup({
      clientNameValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      projectNameValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      technologiesValidator: new FormControl('', Validators.required),
      startDateValidator: new FormControl('', Validators.required),
      endDateValidator: new FormControl('', Validators.required),
      priorityLevelValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cityValidator: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]),
      countryValidator: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.namePattern)]),
      projectDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20)])
    });

    this.editProjectForm = new FormGroup({
      editProjectNameValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      editTechnologyValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      editEndDateValidator: new FormControl('', Validators.required),
      editPriorityValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      editCityValidator: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(this.namePattern)]),
      editCountryValidator: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(this.namePattern)]),
      editProjectDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20)])

    });

   

  }
  proj: Project;
  projects: Array<any> = [];
  addProject() {
    this.proj = new Project();
    this.proj.setClientName((<HTMLInputElement>document.getElementById("clientName")).value);
    this.proj.setProjectName((<HTMLInputElement>document.getElementById("projectName")).value);
    this.proj.setTechnologies((<HTMLInputElement>document.getElementById("projectTech")).value);
    this.proj.setStartDate((<HTMLInputElement>document.getElementById("projectStartdate")).value);
    this.proj.setEndDate((<HTMLInputElement>document.getElementById("projectEndDate")).value);
    this.proj.setCity((<HTMLInputElement>document.getElementById("projectCity")).value);
    this.proj.setCountry((<HTMLInputElement>document.getElementById("projectCountry")).value);
    this.proj.setPriority((<HTMLInputElement>document.getElementById("projectPriorityLevel")).value);
    this.proj.setProjectDescription((<HTMLInputElement>document.getElementById("projectDescription")).value);
    console.log(this.proj);
    this.service.addProject(this.proj).subscribe(proj => this.projects.push(proj));
    location.reload();
  }

  sendProjectDetail(projectDetail: any) {
    this.comServ.getObj(projectDetail);
  }



  searchdata:Array<any>;
  searchEditProject(){
    this.searchdata=[];
   this.url='http://localhost:8080/search/'+(<HTMLInputElement>document.getElementById("searchProject")).value;
   console.log(this.url);
   this.http.get(this.url).subscribe(data => {
     // Populating usersArray with names from API
     JSON.parse(JSON.stringify(data)).forEach(element => {
       this.searchdata.push(element);
     });
   });
 }

 
 searchDeleteProject(){
    this.searchdata=[];
    this.url='http://localhost:8080/search/'+(<HTMLInputElement>document.getElementById("searchDeleteProject")).value;
    console.log(this.url);
    this.http.get(this.url).subscribe(data=>{
      JSON.parse(JSON.stringify(data)).forEach(element=>{
        this.searchdata.push(element);
      });
    });   
 }


 projectName:string;
 projectData:Project=new Project();
 data:Project;
 editDetails(){
   this.projectData=new Project();
  this.projectName=(<HTMLInputElement>document.getElementById("projectButton")).value;
   this.url='http://localhost:8080/project/'+this.projectName;
   console.log(this.url);
  this.service.editProject(this.url).subscribe(proj =>this.projectData=proj);
   }

   updateProject(){
    this.proj = new Project();
    this.proj.setClientName((<HTMLInputElement>document.getElementById("clientName1")).value);
    this.proj.setProjectName((<HTMLInputElement>document.getElementById("projectName1")).value);
    this.proj.setTechnologies((<HTMLInputElement>document.getElementById("projectTech1")).value);
    this.proj.setStartDate((<HTMLInputElement>document.getElementById("projectStartdate1")).value);
    this.proj.setEndDate((<HTMLInputElement>document.getElementById("projectEndDate1")).value);
    this.proj.setCity((<HTMLInputElement>document.getElementById("projectCity1")).value);
    this.proj.setCountry((<HTMLInputElement>document.getElementById("projectCountry1")).value);
    this.proj.setPriority((<HTMLInputElement>document.getElementById("projectPriorityLevel1")).value);
    this.proj.setProjectDescription((<HTMLInputElement>document.getElementById("editProjectDescription")).value);
    console.log(this.proj);
    this.service.updateProject(this.proj).subscribe(proj => this.projects.push(proj));
    location.reload();
   }

   delProject(){
    this.projectData=new Project();
    this.projectName=(<HTMLInputElement>document.getElementById("projectButton")).value;
     this.url='http://localhost:8080/project/'+this.projectName;
     console.log(this.url);
    this.service.delProject(this.url).subscribe(proj =>console.log(proj));
    location.reload();
   }
 }

