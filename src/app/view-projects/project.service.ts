import { Injectable } from '@angular/core';
import { Project } from './view-projects.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http : HttpClient) { }
  url:string;
  addProject(proj:Project){
    this.url='http://localhost:8080/project';
    return this.http.post<Project>(this.url, proj);
  }
}
