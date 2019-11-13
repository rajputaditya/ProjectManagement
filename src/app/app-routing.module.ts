import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EmployeesComponent } from './employees/employees.component';
import { GrowthComponent } from './growth/growth.component';


const routes: Routes = [
  { path: '', component: ViewProjectsComponent },
  { path: 'viewProjects', component: ViewProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'projectGrowth', component: GrowthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
