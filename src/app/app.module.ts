import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';


import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LogINComponent } from './log-in/log-in.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './employees/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { GetEventsService } from './calendar/get-events.service'
import { MainService } from './reports/main.service';
import { GrowthComponent } from './growth/growth.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ViewProjectsComponent,
    ReportsComponent,
    CalendarComponent,
    LogINComponent,
    EmployeesComponent,
    GrowthComponent,
    ProjectDetailsComponent,
    AvailableEmployeesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [ServiceService, GetEventsService, MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
