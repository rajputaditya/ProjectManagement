import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  managerDetails: Array<any> = [];
  url: string;

  set() {
    this.url = "http://localhost:8086/restApi/manager";
    this.http.get(this.url).subscribe(data => {
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.managerDetails.push(element);
        console.log();
      });
    })
  }

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.set();
  }

}
