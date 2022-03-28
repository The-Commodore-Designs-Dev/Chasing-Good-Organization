import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import 'hammerjs';
import { NgxMaskModule } from 'ngx-mask';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from '../pages/pages.component';
import { AboutComponent } from '../pages/about/about.component';
import { SubmitYourStoryComponent } from '../pages/submit-your-story/submit-your-story.component';
import { MeetSomeNomineesComponent } from '../pages/meet-some-nominees/meet-some-nominees.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { SharedModule } from '../shared.module';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(PAGES_ROUTES),
    NgxMaskModule.forChild(),
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class PagesModule { }