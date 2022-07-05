import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AmplifyService, AmplifyAngularModule } from 'aws-amplify-angular';

import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/about/about.component';
import { SubmitYourStoryComponent } from './pages/submit-your-story/submit-your-story.component';
import { MeetSomeNomineesComponent } from './pages/meet-some-nominees/meet-some-nominees.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BasicInfoFormComponent } from './features/submissions/basic-info-form/basic-info-form.component';
import { AgreementFormComponent } from './features/submissions/agreement-form/agreement-form.component';
import { ReviewFormComponent } from './features/submissions/review-form/review-form.component';
import { MobileMenuComponent } from './features/mobile-menu/mobile-menu.component';
import { NominationDetailsFormComponent } from './features/submissions/nomination-details-form/nomination-details-form.component';
import { ReferencesFormComponent } from './features/submissions/references-form/references-form.component';
import { StoryDetailsFormComponent } from './features/submissions/story-details-form/story-details-form.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsofuseComponent } from './pages/termsofuse/termsofuse.component';
import { SentMessage } from './features/messages/sent/sent.component';
import { ErrorMessage } from './features/messages/error/error.component';
import { LicenseandconsentagreementDialog } from './dialogs/licenseandconsentagreementdialog/licenseandconsentagreementdialog.component';
import { SplitPipe } from './pipes/split.pipe';
import { FooterComponent } from './features/footer/footer.component';
import { HeaderComponent } from './features/header/header.component';
import { DoingGoodFormComponent } from './features/submissions/doing-good-form/doing-good-form.component';
import { ImgSrvcService } from './_services/img-srvc.service';
import { UrlSrvcService } from './_services/url-srvc.service';
import { APIService } from './API.service';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        LayoutModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatExpansionModule,
        MatSnackBarModule,
        AmplifyAngularModule,
        NgxMaskModule.forRoot(),
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        SubmitYourStoryComponent,
        MeetSomeNomineesComponent,
        ContactUsComponent,
        HeaderComponent,
        DoingGoodFormComponent,
        BasicInfoFormComponent,
        ReviewFormComponent,
        AgreementFormComponent,
        PagesComponent,
        PageNotFoundComponent,
        MobileMenuComponent,
        NominationDetailsFormComponent,
        ReferencesFormComponent,
        StoryDetailsFormComponent,
        PrivacypolicyComponent,
        TermsofuseComponent,
        SentMessage,
        ErrorMessage,
        LicenseandconsentagreementDialog,
        SplitPipe,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        DoingGoodFormComponent,
        BasicInfoFormComponent,
        ReviewFormComponent,
        AgreementFormComponent,
        MobileMenuComponent,
        NominationDetailsFormComponent,
        ReferencesFormComponent,
        StoryDetailsFormComponent,
        PrivacypolicyComponent,
        TermsofuseComponent,
        SentMessage,
        ErrorMessage,
        LicenseandconsentagreementDialog,
        SplitPipe,
        FooterComponent,
        RouterModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRadioModule,
        MatSelectModule,
        MatStepperModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatDividerModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatMenuModule,
        MatExpansionModule,
        MatSnackBarModule,
        AmplifyAngularModule
    ],
    providers: [
        AmplifyService,
        ImgSrvcService,
        UrlSrvcService,
        APIService
    ]
})
export class SharedModule { }