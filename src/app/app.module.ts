import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';


import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceService } from './employees/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { GetEventsService } from './calendar/get-events.service'
import { MainService } from './reports/main.service';
import { GrowthComponent } from './growth/growth.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ViewProjectsComponent,
    ReportsComponent,
    CalendarComponent,
    EmployeesComponent,
    GrowthComponent,
    ProjectDetailsComponent,
    AvailableEmployeesComponent,
    PageNotFoundComponent,
    LoginComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [ServiceService, GetEventsService, MainService, TranslateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
