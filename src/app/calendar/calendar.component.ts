import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { formatDate } from '@fullcalendar/core';
import { GetEventsService } from './get-events.service';

import * as moment from 'moment'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {


  constructor(private getService: GetEventsService) {
  }

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin];
  calendarWeekends = true;
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
    if ((moment(this.crDate, moment.ISO_8601).isBefore(moment(moment().toISOString(), moment.ISO_8601)))) {
      (<HTMLDivElement>document.getElementById("pastEventErr")).hidden = false;
      (<HTMLInputElement>document.getElementById("modalBtn")).disabled = true;
    } else {
      (<HTMLDivElement>document.getElementById("pastEventErr")).hidden = true;
      (<HTMLInputElement>document.getElementById("modalBtn")).disabled = false;
    }
    document.getElementById('addEvent').click();
  }

  // Edit Click Handler
  handleEventClick(arg: any) {
    this.crId = arg.event.id;
    this.crTitle = arg.event.title;
    this.crDate = arg.event.date;
    document.getElementById('editEvent').click();
  }

  // Adds Event to the List
  addEvent(crTITLE: any) {
    this.crTitle = crTITLE;
    this.calendarEvents = this.calendarEvents.concat({
      id: ++this.idCount,
      title: this.crTitle,
      start: this.crDate
    });
    this.getService.saveEvent({ "title": this.crTitle, "start": this.crDate });
    this.crTitle = "";
  }

  // Update Event to the List
  saveEvent(crTITLE: any) {
    this.crTitle = crTITLE;
    this.calendarEvents.forEach(obj => {
      if (obj.id == this.crId) {
        obj.title = this.crTitle;
        this.getService.saveEvent({ "id": obj.id, "title": this.crTitle, "start": obj.start });
      }
    });
    this.crTitle = "";
  }

  // Deletes Event from the List 
  deleteEvent() {
    this.calendarEvents.forEach(obj => {
      if (obj.id == this.crId) {
        this.calendarEvents.splice(this.calendarEvents.indexOf(obj), 1);
        this.getService.deleteEvent(obj.id);
      }
    });
    this.crTitle = "";
  }

}
