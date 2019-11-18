import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor(private _http: HttpClient) { }

  deleteTaskById(id){
    this._http.delete("http://localhost:8086/taskDetails/tasks" + id).subscribe();
  }

  getTasks(){
    return this._http.get("http://localhost:8086/taskDetails/tasks");
  }

  getTaskByProjectName(projectName){
    return this._http.get("http://localhost:8086/taskDetails/tasks/" + projectName);
  }

  saveTask(task:any){
    this._http.post("http://localhost:8086/taskDetails/tasks",task).subscribe();
    console.log(task);
  }
}
