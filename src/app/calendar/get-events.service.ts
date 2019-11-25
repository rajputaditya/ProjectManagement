import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetEventsService {
  deleteEvent(id) {
    this._http.delete("http://localhost:8086/calendarRestApi/app/events/" + id).subscribe();
  }

  constructor(private _http: HttpClient) {
  }

  getEvents(){
    return this._http.get("http://localhost:8086/calendarRestApi/app/events");
  }

  saveEvent(event: any){
    this._http.post("http://localhost:8086/calendarRestApi/app/events", event).subscribe();
  }
}