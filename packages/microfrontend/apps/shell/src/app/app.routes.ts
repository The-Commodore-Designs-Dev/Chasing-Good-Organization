import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'form',
    loadChildren: () => import('form/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Module').then((m) => {
        return m.RemoteEntryModule;
      }),
  },
  {
    path: 'form',
    loadChildren: () =>
      loadRemoteModule('form', './Module').then((m) => {
        return m.RemoteEntryModule;
      }),
  },
  {
    path: 'web',
    loadChildren: () =>
      loadRemoteModule('webapp', './Module').then((m) => {
        return m.RemoteEntryModule;
      }),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'web/page/home',
  },
];
