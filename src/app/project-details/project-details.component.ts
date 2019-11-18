import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
import { ProjectService } from '../view-projects/project.service';
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
  setTasktitle(taskTitle) {
    this.taskName = taskTitle;
  }
  setTaskOwner(taskOwner) {
    this.taskOwner = taskOwner;
  }
  setTaskDescription(taskDescription) {
    this.taskDetails = taskDescription;
  }
  setStartDate(startDate) {
    this.startDate = startDate;
  }
  setEndDate(endDate) {
    this.endDate = endDate;
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
  taskClass: TaskClass;
  endDate;
  startDate;
  temp;
  editendDate;
  editstartDate;
  endtemp;
  projectDetail;
  projectNameFromViewProject;

  taskArray: Array<any> = [];
  url: string;

  taskArrayByProjectName: Array<any> = [];


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
    this.startDate = (<HTMLInputElement>document.getElementById("projectStartDate")).value;
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
    this.projectNameFromViewProject = this.comServ.setObj().projectName;
    this.proDetService.getTaskByProjectName(this.projectNameFromViewProject).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.taskArray.push(element);
      });
    })
    console.log("task list Array " + this.taskArray);
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



  constructor(private http: HttpClient, private comServ: CommonService, private proDetService: ProjectDetailsService) {

    this.taskList();


  }





  curId: string;
  ngOnInit() {
    this.projectDetail = this.comServ.setObj();


    this.editTaskForm = new FormGroup({
      editTaskOwnerValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      editTaskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      editEndDateValidator: new FormControl('', [Validators.required])


    });

    this.newTaskForm = new FormGroup({
      projectTitleValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      taskTitleValidator: new FormControl('', [Validators.required, Validators.minLength(4)]),
      taskOwnerValidator: new FormControl('', [Validators.required, Validators.minLength(3)]),
      taskDescriptionValidator: new FormControl('', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]),
      startDateValidator: new FormControl('', [Validators.required]),
      endDateValidator: new FormControl('', [Validators.required]),

    });



  }


  // sendname(event){
  //   this.firstnamebind=document.getElementById("namee");
  // }

  sendId(indx: string) {

    this.curId = indx;

  }
  exm;

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


}
