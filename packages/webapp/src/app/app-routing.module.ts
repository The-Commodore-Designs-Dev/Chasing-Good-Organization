import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
// bug: fix loading issue on mobile browsers
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameNavigationReload: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
