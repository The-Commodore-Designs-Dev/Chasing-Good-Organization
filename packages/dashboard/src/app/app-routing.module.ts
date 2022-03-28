import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubmissionTableComponent } from './dashboard/submission-table/submission-table.component';
import { UsersComponent } from './dashboard/users/users.component';
import { AuthGuard } from '../../../dashboard/src/app/_helpers/auth.guard';
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
  },
  {
    path: 'admin/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }