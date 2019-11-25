import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { GrowthComponent } from './growth/growth.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ManagerComponent } from './manager/manager.component';


const routes: Routes = [
  { path: '', component: ViewProjectsComponent },
  { path: 'viewProjects', component: ViewProjectsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'projectGrowth', component: GrowthComponent},
  { path: 'projectDetails', component:ProjectDetailsComponent},
  { path: 'availableEmployees', component:AvailableEmployeesComponent},
  { path: 'manager', component:ManagerComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
