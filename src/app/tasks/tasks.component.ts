import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

//My Class
export class TaskClass{
  projectTitle:string;
  taskTitle:string;
  taskOwner:string;
  taskDescription;
  endDateMyCLass;
  startDateMyClass;

  setProjectTitle(projectTitle){
    this.projectTitle=projectTitle;
  }
  setTasktitle(taskTitle){
    this.taskTitle=taskTitle;
  }
  setTaskOwner(taskOwner){
    this.taskOwner=taskOwner;
  }
  setTaskDescription(taskDescription){
    this.taskDescription=taskDescription;
  }
  setStartDate(startDate){
    this.startDateMyClass=startDate;
  }
  setEndDate(endDate){
    this.endDateMyCLass=endDate;
  }
}

export class TasksComponent implements OnInit {

  firstnamebind: string;
  taskbind: any="Manager";
  buttons = Array().fill(false);
  newTaskForm: FormGroup;
  editTaskForm: FormGroup;
  temp;
  editendDate;
  editstartDate;
  endtemp;
  endDate;
  startDate;
  taskClass:TaskClass;

  


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




  userArray: Array<any> = [];
  url: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient,private service:TaskServiceService) {
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.userArray.push(element);
        
      });
    })
    
  }
  
    
  curId:string;
  ngOnInit() {
    this.editTaskForm = new FormGroup({
      editTaskOwnerValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      editTaskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      editEndDateValidator:new FormControl('', [Validators.required])
    });

    this.newTaskForm = new FormGroup({
      projectTitleValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      taskTitleValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      taskOwnerValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      startDateValidator:new FormControl('', [Validators.required]),
      endDateValidator:new FormControl('', [Validators.required]),
      
    });
  }
  // sendname(event){
  //   this.firstnamebind=document.getElementById("namee");
  // }

  sendId(indx:string){
    console.log(this.userArray);
   this.curId =indx;
   console.log(this.curId);
  }

  //Adding New Task

  addNewTask(){

    this.taskClass=new TaskClass();
    this.taskClass.setProjectTitle((<HTMLInputElement>document.getElementById("projectTitle")).value);
    this.taskClass.setTasktitle((<HTMLInputElement>document.getElementById("taskTitle")).value);
    this.taskClass.setTaskOwner((<HTMLInputElement>document.getElementById("taskOwner")).value);
    this.taskClass.setTaskDescription((<HTMLInputElement>document.getElementById("taskDescription")).value);
    this.taskClass.setStartDate((<HTMLInputElement>document.getElementById("projectStartdate")).value);
    this.taskClass.setEndDate((<HTMLInputElement>document.getElementById("projectEnddate")).value);
    this.service.saveTask(this.taskClass);
  }

}
