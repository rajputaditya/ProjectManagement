import { Injectable } from '@angular/core';
import { Project } from './view-projects.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }
  url:string;
  addProject(proj:Project){
    this.url='http://localhost:8086/restApi/project';
    return this.http.post<any>(this.url, proj);
  }

  editProject(url:string):Observable<Project>{
    return this.http.get<Project>(url);
  }

  updateProject(proj:Project){
    this.url='http://localhost:8086/restApi/project/'+proj.projectName;
    console.log(this.url);
    return this.http.put<Project>(this.url,proj)
  }

  delProject(url:string):Observable<Project>{
    return this.http.delete<Project>(url);
  }
}
