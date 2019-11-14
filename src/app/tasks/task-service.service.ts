import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private _http: HttpClient) { }

  deleteTask(id){
    this._http.delete("http://localhost:8086/taskDetails/tasks" + id).subscribe();
  }

  getEvents(){
    return this._http.get("http://localhost:8086/taskDetails/tasks");
  }

  getEventById(id){
    return this._http.get("http://localhost:8086/taskDetails/tasks" + id);
  }

  saveTask(task:any){
    this._http.post("http://localhost:8086/taskDetails/tasks",task).subscribe();
  }
}
