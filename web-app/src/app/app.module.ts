import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { PagesComponent } from './pages/pages.component';
import { SubmitYourStoryComponent } from './pages/submit-your-story/submit-your-story.component';
import { AdminComponent } from './features/admin/admin.component';
import { DoingGoodFormComponent } from './features/submissions/doing-good-form/doing-good-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import {MatExpansionModule} from '@angular/material/expansion';

import 'hammerjs';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetSomeNomineesComponent } from './pages/meet-some-nominees/meet-some-nominees.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AdminRoutingModule } from './features/admin/admin-routing.module';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { NavigationComponent } from './features/admin/navigation/navigation.component';
import { ToolbarComponent } from './features/admin/toolbar/toolbar.component';
import { SubmissionTableComponent } from './features/admin/dashboard/submission-table/submission-table.component';
import { UsersComponent } from './features/admin/dashboard/users/users.component';
import { LoginComponent } from './features/admin/login/login.component';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './_helpers/basic-auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { DetailsComponentDialog } from './features/admin/dashboard/submission-table/details/details.component';
import { WatchVideoComponentDialog } from './features/admin/dashboard/submission-table/watch-video/watch-video.component';
import { ReadStoryComponentDialog } from './features/admin/dashboard/submission-table/read-story/read-story.component';
import { ContactComponentDialog } from './features/admin/dashboard/submission-table/contact/contact.component';
import { VoteComponentDialog } from './features/admin/dashboard/submission-table/vote/vote.component';
import { BasicInfoFormComponent } from './features/submissions/basic-info-form/basic-info-form.component';
import { ReviewFormComponent } from './features/submissions/review-form/review-form.component';
import { MobileMenuComponent } from './features/mobile-menu/mobile-menu.component';
import { NominationDetailsFormComponent } from './features/submissions/nomination-details-form/nomination-details-form.component';
import { ReferencesFormComponent } from './features/submissions/references-form/references-form.component';
import { StoryDetailsFormComponent } from './features/submissions/story-details-form/story-details-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    DoingGoodFormComponent,
    BasicInfoFormComponent,
    ReviewFormComponent,
    PagesComponent,
    SubmitYourStoryComponent,
    AdminComponent,
    PageNotFoundComponent,
    HomeComponent,
    MeetSomeNomineesComponent,
    ContactUsComponent,
    DoingGoodFormComponent,
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
    VoteComponentDialog,
    MobileMenuComponent,
    NominationDetailsFormComponent,
    ReferencesFormComponent,
    StoryDetailsFormComponent
  ],
  imports: [
    AmplifyAngularModule,
    BrowserModule,
    LayoutModule,
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
    MatProgressSpinnerModule,
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
    GoogleMapsModule,
    MatExpansionModule
  ],
  providers: [
    AmplifyService,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    fakeBackendProvider,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
