import { Route } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SubmissionComponent } from '../pages/submission/submission.component';
import { SubmissionsComponent } from '../pages/submissions/submissions.component';
import { UserComponent } from '../pages/user/user.component';
import { UsersComponent } from '../pages/users/users.component';
import { RemoteEntryComponent } from './entry.component';
import { AuthGuard } from '@microfrontend/guards';

export const remoteRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo:'page/home' },
  {
    path: 'page',
    component: RemoteEntryComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'submissions', component: SubmissionsComponent},
      {path: 'submissions/:id', component: SubmissionComponent},
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserComponent}
    ]
  }
];
