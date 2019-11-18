import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  usersArray: Array<any>=[];
// searchText:String;
url:string;

set(){
   this.usersArray=[];
  this.url='http://localhost:8080/search/'+(<HTMLInputElement>document.getElementById("searchBox")).value;
  console.log(this.url);
  this.http.get(this.url).subscribe(data => {
    // Populating usersArray with names from API
    JSON.parse(JSON.stringify(data)).forEach(element => {
      this.usersArray.push(element);
    });
  });
}
constructor(private http: HttpClient) {
 
}
  ngOnInit() {
  }

}
