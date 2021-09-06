import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { PagesComponent } from './pages/pages.component';
import { SubmitYourStoryComponent } from './pages/submit-your-story/submit-your-story.component';
import { AdminComponent } from './admin/admin.component';
import { DoingGoodFormComponent } from './pages/submit-your-story/doing-good-form/doing-good-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import 'hammerjs';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetSomeNomineesComponent } from './pages/meet-some-nominees/meet-some-nominees.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BasicInfoFormComponent } from './pages/submit-your-story/doing-good-form/basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from './pages/submit-your-story/doing-good-form/nomination-details-form/nomination-details-form.component';
import { StoryDetailsFormComponent } from './pages/submit-your-story/doing-good-form/story-details-form/story-details-form.component';
import { ReviewAndSubmitComponent } from './pages/submit-your-story/doing-good-form/review-and-submit/review-and-submit.component';
import { DisclaimerFormComponent } from './pages/submit-your-story/doing-good-form/disclaimer-form/disclaimer-form.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavigationComponent } from './admin/navigation/navigation.component';
import { ToolbarComponent } from './admin/toolbar/toolbar.component';
import { SubmissionTableComponent } from './admin/dashboard/submission-table/submission-table.component';
import { UsersComponent } from './admin/dashboard/users/users.component';
import { LoginComponent } from './admin/login/login.component';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { ReferencesFormComponent } from './pages/submit-your-story/doing-good-form/references-form/references-form.component';
import { AuthGuard } from './_helpers/auth.guard';
import { DetailsComponentDialog } from './admin/dashboard/submission-table/details/details.component';
import { WatchVideoComponentDialog } from './admin/dashboard/submission-table/watch-video/watch-video.component';
import { ReadStoryComponentDialog } from './admin/dashboard/submission-table/read-story/read-story.component';
import { ContactComponentDialog } from './admin/dashboard/submission-table/contact/contact.component';
import { VoteComponentDialog } from './admin/dashboard/submission-table/vote/vote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    DoingGoodFormComponent,
    PagesComponent,
    SubmitYourStoryComponent,
    AdminComponent,
    PageNotFoundComponent,
    HomeComponent,
    MeetSomeNomineesComponent,
    ContactUsComponent,
    BasicInfoFormComponent,
    NominationDetailsFormComponent,
    StoryDetailsFormComponent,
    ReferencesFormComponent,
    DisclaimerFormComponent,
    ReviewAndSubmitComponent,
    DashboardComponent,
    NavigationComponent,
    ToolbarComponent,
    SubmissionTableComponent,
    UsersComponent,
    LoginComponent,
    DetailsComponentDialog,
    WatchVideoComponentDialog,
    ReadStoryComponentDialog,
    ContactComponentDialog,
    VoteComponentDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    CdkAccordionModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
