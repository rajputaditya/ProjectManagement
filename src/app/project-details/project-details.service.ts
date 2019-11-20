import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor(private _http: HttpClient) { }

  deleteTaskWithTaskOwner(taskOwner){
    this._http.delete("http://localhost:8086/taskDetails/tasks/" +taskOwner).subscribe();
  }

  getTasks(){
    return this._http.get("http://localhost:8086/taskDetails/tasks");
  }

  getTaskByProjectName(projectName){
    return this._http.get("http://localhost:8086/taskDetails/tasks/" + projectName);
  }

  saveTask(task:any){
    this._http.post("http://localhost:8086/taskDetails/tasks",task).subscribe();
  }

  editTaskWIthProjectName(task:any,taskOwner){
    this._http.put("http://localhost:8086/taskDetails/tasks/" + taskOwner,task).subscribe();
    console.log(task);
  }

  statusChange(task:any){

    return this._http.put("http://localhost:8086/taskDetails/tasks/status/"+task.taskOwner,task);

  }
}
