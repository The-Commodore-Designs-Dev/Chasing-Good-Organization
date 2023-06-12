import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { SubmitYourStoryProcessComponent } from './pages/submit-your-story-process/submit-your-story-process.component';
import { MeetTheWinnersComponent } from './pages/meet-the-winners/meet-the-winners.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { PagesComponent } from './pages/pages.component';
import { OurMissionComponent } from './pages/our-mission/our-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    PrivacypolicyComponent,
    TermsofuseComponent,
    SubmitYourStoryProcessComponent,
    MeetTheWinnersComponent,
    PagesComponent,
    OurMissionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [AppComponent],
})
export class AppModule {}
