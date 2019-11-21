import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
import { ProjectDetailsService } from './project-details.service';
export class TaskClass {
  projectName: string;
  taskName: string;
  taskOwner: string;
  taskDetails;
  endDate;
  startDate;

  setProjectTitle(projectTitle) {
    this.projectName = projectTitle;
  }
  getProjectTitle() {
    return this.projectName;
  }


  setTasktitle(taskTitle) {
    this.taskName = taskTitle;
  }
  getTaskTitle() {
    return this.taskName;
  }


  setTaskOwner(taskOwner) {
    this.taskOwner = taskOwner;
  }
  getTaskOwner() {
    return this.taskOwner;
  }


  setTaskDescription(taskDescription) {
    this.taskDetails = taskDescription;
  }
  getTaskDescription() {
    return this.taskDetails;
  }


  setStartDate(startDate) {
    this.startDate = startDate;
  }
  getStartDate() {
    return this.startDate;
  }


  setEndDate(endDate) {
    this.endDate = endDate;
  }
  getEnddate() {
    return this.endDate;
  }
}


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  firstnamebind: string;
  taskbind: any = "Manager";
  buttons = Array().fill(false);
  newTaskForm: FormGroup;
  editTaskForm: FormGroup;

  endDate;
  startDate;
  temp;
  editendDate;
  editstartDate;
  endtemp;
  projectDetail;
  projectNameFromViewProject: any;
  taskArray: Array<any>=[];
  url: string;
  taskClass: TaskClass;



  get getProjectTitle() {
    return this.newTaskForm.get("projectTitleValidator");
  }
  get getTaskTitle() {
    return this.newTaskForm.get("taskTitleValidator");
  }
  get getTaskOwner() {
    return this.newTaskForm.get("taskOwnerValidator");
  }
  get getTaskDescription() {
    return this.newTaskForm.get("taskDescriptionValidator");
  }
  get getStartDate() {
    return this.newTaskForm.get("startDateValidator");
  }
  get getEndDate() {
    return this.newTaskForm.get("endDateValidator");
  }
  get editGetTaskOwner() {
    return this.editTaskForm.get("editTaskOwnerValidator");
  }
  get editGetTaskDescription() {
    return this.editTaskForm.get("editTaskDescriptionValidator");
  }
  get getEditEndDate() {
    return this.editTaskForm.get("editEndDateValidator");
  }

  dateValidate() {
    this.endDate = (<HTMLInputElement>document.getElementById("projectEndDate")).value;
    this.startDate = (<HTMLInputElement>document.getElementById("projectStartdate")).value;
    if (new Date(this.endDate) <= new Date(this.startDate))
      this.temp = 1;
  }


  editDateValidator() {
    this.editendDate = (<HTMLInputElement>document.getElementById("editProjectEndDate")).value;
    this.editstartDate = (<HTMLInputElement>document.getElementById("editProjectStartdate")).value;
    if (new Date(this.editendDate) <= new Date(this.editstartDate))
      this.endtemp = 1;
  }

  taskList() {
    console.log("hjhreklwel"+this.comServ.setObj().projectName);
    this.projectNameFromViewProject = this.comServ.setObj().projectName;
    this.proDetService.getTaskByProjectName(this.projectNameFromViewProject).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.taskArray.push(element);
      });
    })
    console.log("task list Array " + this.taskArray);
  }


  deleteTaskFunc() {

    this.proDetService.deleteTaskWithTaskOwner(this.taskTitle);

  }
  
  setDetail(taskDetail) {
    this.taskTitle = taskDetail.taskName;

  }


  taskDetails: TaskClass = new TaskClass();
  updateTaskObj(task) {

    this.taskDetails.setProjectTitle(task.projectName);
    this.taskDetails.setTasktitle(task.taskName);
    this.taskDetails.setTaskOwner(task.taskOwner);
    this.taskDetails.setTaskDescription(task.taskDetails);
    this.taskDetails.setStartDate(task.startDate);
    this.taskDetails.setEndDate(task.endDate);

  }

  taskTitle:string;
  updateTaskConfirm() {
    this.taskTitle = this.taskDetails.getTaskTitle();
    this.taskDetails = new TaskClass();
    this.taskDetails.setTasktitle((<HTMLInputElement>document.getElementById("editTaskTitle")).value);
    this.taskDetails.setTaskOwner((<HTMLInputElement>document.getElementById("editTaskOwner")).value);
    this.taskDetails.setTaskDescription((<HTMLInputElement>document.getElementById("editTaskDescription")).value);
    this.taskDetails.setEndDate((<HTMLInputElement>document.getElementById("editProjectEndDate")).value);
    console.log(this.taskDetails);
    this.proDetService.editTaskWIthProjectName(this.taskDetails, this.taskTitle);


  }

  addNewTask() {

    this.taskClass = new TaskClass();



    this.taskClass.setProjectTitle((<HTMLInputElement>document.getElementById("projectTitle")).value);
    this.taskClass.setTasktitle((<HTMLInputElement>document.getElementById("taskTitle")).value);
    this.taskClass.setTaskOwner((<HTMLInputElement>document.getElementById("taskOwner")).value);
    this.taskClass.setTaskDescription((<HTMLInputElement>document.getElementById("taskDescription")).value);
    this.taskClass.setStartDate((<HTMLInputElement>document.getElementById("projectStartDate")).value);
    this.taskClass.setEndDate((<HTMLInputElement>document.getElementById("projectEndDate")).value);
    this.proDetService.saveTask(this.taskClass);
  }

  // taskListByProjectName() {
  //   this.projectNameFromViewProject = this.comServ.setObj().projectName;
  //   console.log("sadsadsadsa"+this.projectNameFromViewProject);
  //   this.proDetService.getTaskByProjectName(this.projectNameFromViewProject).subscribe(data => {
  //     JSON.parse(JSON.stringify(data)).forEach(element => {
  //       this.taskArray.push(element);
  //     });
  //   })
  //   console.log("task list Array " + this.projectNameFromViewProject);
  // }


  userArray: Array<any> = [];
  constructor(private http: HttpClient, private comServ: CommonService, private proDetService: ProjectDetailsService) {


    this.taskList();
    this.url = 'http://localhost:8080/employee/' + comServ.setObj().projectName;
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
      })
    })
  }


  curId: string;
  ngOnInit() {

   
    this.projectDetail = this.comServ.setObj();
    console.log("view Project");
    console.log(this.projectDetail);

    this.editTaskForm = new FormGroup({
      editTaskOwnerValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      editTaskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      editEndDateValidator: new FormControl('', [Validators.required])


    });

    this.newTaskForm = new FormGroup({
      projectTitleValidator: new FormControl('', Validators.minLength(4)),
      taskTitleValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
     
      taskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      startDateValidator: new FormControl('', [Validators.required]),
      endDateValidator: new FormControl('', [Validators.required]),

    });


  }
  

  projectNameForEmployees: string;
  getDetails() {
    this.projectNameForEmployees = this.comServ.setObj().projectName;
    console.log(this.projectNameForEmployees);
  }

  unAssignProject(user) {
    this.url = 'http://localhost:8080/employee/unassign/' + user.fullName;
    console.log(this.url);
    this.http.put(this.url, user).subscribe(data => console.log(data));
    location.reload();
  }

  statusChange(task){
    this.proDetService.statusChange(task).subscribe(data=>console.log(data));

  }

  employeeDetailsOfProject:Array<string>=this.comServ.getEmployeeDetails();

  
  clear(value) {
      $(':input').val("");
      $('#projectTitle').val(value);
     
  }
  
}
