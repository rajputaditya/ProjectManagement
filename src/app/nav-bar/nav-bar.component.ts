import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { formatDate } from '@fullcalendar/core';
import * as moment from 'moment'
import { GetEventsService } from '../calendar/get-events.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  usersArray: Array<any> = [];
  // searchText:String;
  url: string;
  myEvents: any = [];

  set() {
    this.usersArray = [];
    this.url = 'http://localhost:8086/restApi/search/' + (<HTMLInputElement>document.getElementById("searchBox")).value;
    console.log(this.url);
    this.http.get(this.url).subscribe(data => {
      // Populating usersArray with names from API
      JSON.parse(JSON.stringify(data)).forEach(element => {
        this.usersArray.push(element);
      });
    });
  }

constructor(@Inject(TranslateService) public translate: TranslateService,private http: HttpClient, private getService: GetEventsService, private cookieService: CookieService) {
  translate.addLangs(['en', 'de', 'fr'])
  translate.setDefaultLang('en');
  translate.use('en');
}
 

  getUpcoming() {
    this.getEvents();
    document.getElementById("upcomingAlert").hidden = !document.getElementById("upcomingAlert").hidden;
    setTimeout(() => {
      document.getElementById("upcomingAlert").hidden = !document.getElementById("upcomingAlert").hidden;
    }, 3000);
  }

  getEvents(){
    let subscription = this.getService.getEvents().subscribe(
      (events) => {
        this.myEvents = events;
        this.getReminder();
      });
  }

  getReminder() {
    let crEvt = { title: '', start: moment().add(100, 'y').toISOString() };
    let crTM = moment().toISOString();
    let check = crEvt.start;
    this.myEvents.forEach(event => {
      if (moment(event.start, moment.ISO_8601).isValid()) {
        if ((moment(event.start, moment.ISO_8601).isAfter(moment(crTM, moment.ISO_8601)))) {
          if (moment(event.start, moment.ISO_8601).isBefore(moment(crEvt.start, moment.ISO_8601))) {
            crEvt = event;
          }
        }
      }
    });
    if (crEvt.start != check) {
      document.getElementById('notification').innerHTML =
        "<b>Title: </b>"
        + crEvt.title
        + "<br><b>Date: </b>"
        + formatDate(crEvt.start, {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          timezone: 'IST'
        });
    } else {
      document.getElementById('notification').innerHTML = "<b>No Upcoming Event<b>"
    }
  }

  ngOnInit() {
    this.getEvents();
  }

  logout(){
    this.cookieService.delete('_isAuthenticated');
    location.reload();
  }

}
