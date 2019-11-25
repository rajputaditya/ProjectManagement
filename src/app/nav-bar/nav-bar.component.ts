import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

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
constructor(@Inject(TranslateService) public translate: TranslateService,private http: HttpClient) {
  translate.addLangs(['en', 'de', 'fr'])
  translate.setDefaultLang('en');
  translate.use('en');
}
  ngOnInit() {
  }

}
