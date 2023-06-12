import { Route } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { HomeComponent } from '../pages/home/home.component';
import { MeetTheWinnersComponent } from '../pages/meet-the-winners/meet-the-winners.component';
import { OurMissionComponent } from '../pages/our-mission/our-mission.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { PagesComponent } from '../pages/pages.component';
import { PrivacypolicyComponent } from '../pages/privacypolicy/privacypolicy.component';
import { SubmitYourStoryProcessComponent } from '../pages/submit-your-story-process/submit-your-story-process.component';
import { TermsofuseComponent } from '../pages/termsofuse/termsofuse.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {path: '', pathMatch: 'full', redirectTo:'page/home' },
  { 
    path: 'page', 
    component: RemoteEntryComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'submit-your-story', component: SubmitYourStoryProcessComponent },
      { path: 'meet-the-winners', component: MeetTheWinnersComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'our-mission', component: OurMissionComponent },
      { path: 'terms-of-use', component: TermsofuseComponent },
      { path: 'privacy-policy', component: PrivacypolicyComponent },
      { path: '**', component: PageNotFoundComponent }     
    ]
  }
];
