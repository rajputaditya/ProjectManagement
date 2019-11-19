import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { GrowthComponent } from './growth/growth.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AvailableEmployeesComponent } from './available-employees/available-employees.component';


const routes: Routes = [
  { path: '', component: ViewProjectsComponent },
  { path: 'viewProjects', component: ViewProjectsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'projectGrowth', component: GrowthComponent},
  { path: 'projectDetails', component:ProjectDetailsComponent},
  { path: 'availableEmployees', component:AvailableEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
