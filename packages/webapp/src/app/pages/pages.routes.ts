import { Routes } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { SubmitYourStoryComponent } from '../pages/submit-your-story/submit-your-story.component';
import { MeetTheWinnersComponent } from './meet-the-winners/meet-the-winners.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

export const PAGES_ROUTES: Routes = [
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
          path: 'meet-the-winners',
          component: MeetTheWinnersComponent
        }, {
          path: 'contact-us',
          component: ContactUsComponent
        }]
    },
    {
      path: 'terms-of-use',
      component: TermsofuseComponent
    },
    {
      path: 'privacy-policy',
      component: PrivacypolicyComponent
    },
    {path: '**', component: PageNotFoundComponent}
];