import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmissionTableComponent } from './dashboard/submission-table/submission-table.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AuthGuard } from '../../_helpers/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: '/admin/login',
    pathMatch: 'full'
  },
  {
    path: 'admin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'submissions', component: SubmissionTableComponent },
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }