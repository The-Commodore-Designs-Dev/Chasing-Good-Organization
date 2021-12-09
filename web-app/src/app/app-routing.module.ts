import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { SubmitYourStoryComponent } from './pages/submit-your-story/submit-your-story.component';
import { AdminComponent } from './features/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetSomeNomineesComponent } from './pages/meet-some-nominees/meet-some-nominees.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './features/admin/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [{
      path: 'about',
      component: AboutComponent,
    }, {
      path: 'submit-your-story',
      component: SubmitYourStoryComponent
    }, {
      path: 'meet-some-nominees',
      component: MeetSomeNomineesComponent
    }, {
      path: 'contact-us',
      component: ContactUsComponent
    }]
  },
  {path:'admin/login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
