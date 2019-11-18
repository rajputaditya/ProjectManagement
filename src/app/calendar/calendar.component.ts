import { Component, ViewChild, OnInit,Inject } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { formatDate, createEventInstance } from '@fullcalendar/core';
import { GetEventsService } from './get-events.service';
import * as moment from 'moment'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit  {

  getService: any;

  /* constructor(private getService: GetEventsService) {
  } */

 /*  constructor(@Inject(TranslateService) public translate: TranslateService) {
    translate.addLangs(['en', 'de'])
    translate.setDefaultLang('en');
    translate.use('en');
  } */

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin];
  calendarWeekends = false;
  calendarEvents: any = [];
  idCount: number;
  crId: any;
  crTitle: any;
  crDate: any;
  dispDate: any;

  ngOnInit(): void {
    let subscription = this.getService.getEvents().subscribe(
      (events) => {
        this.calendarEvents = events;
        this.calendarEvents.forEach(obj => {
          this.idCount = obj.id;          
        });
        console.log(this.calendarEvents)
        this.getReminder(this.calendarEvents);
      });
  }

  // Add Click Handler
  handleDateClick(arg: any) {
    this.crDate = arg.date;
    this.dispDate = formatDate(arg.date, {
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timezone: 'IST'
    });
    document.getElementById('addEvent').click();
  }

  // Delete Click Handler
  handleEventClick(arg: any) {
    this.crId = arg.event.id;
    this.crTitle = arg.event.title;
    this.crDate = arg.event.date;
    document.getElementById('editEvent').click();
  }

  // Adds Event to the List
  addEvent() {
    this.calendarEvents = this.calendarEvents.concat({
      id: ++this.idCount,
      title: this.crTitle,
      start: this.crDate
    });
    this.getService.saveEvent({"title":this.crTitle, "start": this.crDate});
    document.getElementById('closeModal').click();
    this.getReminder(this.calendarEvents);
  }

  // Update Event to the List
  saveEvent() {
    this.calendarEvents.forEach(obj => {
      if (obj.id == this.crId) {
        obj.title = this.crTitle;
        this.getService.saveEvent({"id":obj.id, "title":this.crTitle, "start": obj.start});
      }
    });
    document.getElementById('closeModalSave').click();
    this.getReminder(this.calendarEvents);
  }

  // Deletes Event from the List 
  deleteEvent() {
    this.calendarEvents.forEach(obj => {
      if (obj.id == this.crId) {
        this.calendarEvents.splice(this.calendarEvents.indexOf(obj), 1);
        this.getService.deleteEvent(obj.id);
      }
    });
    document.getElementById('closeDelete').click();
    this.getReminder(this.calendarEvents);
  }

  getReminder(myEvents){
    let crEvt = {title: '', start: moment().add(100, 'y').toISOString()};
    let crTM = moment().toISOString();
    let check = crEvt.start;
    myEvents.forEach(event => {
      if(moment(event.start, moment.ISO_8601).isValid()){
        console.log("YES")
      if((moment(event.start, moment.ISO_8601).isAfter(moment(crTM, moment.ISO_8601)))){
        if(moment(event.start, moment.ISO_8601).isBefore(moment(crEvt.start, moment.ISO_8601))){
          crEvt=event;
        }
      }
      console.log(crTM + "||" + event.start);
    }});
    if(crEvt.start != check){
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

}
