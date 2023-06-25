import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DoingGoodFormComponent } from './doing-good-form/doing-good-form.component';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from './nomination-details-form/nomination-details-form.component';
import { StoryDetailsFormComponent } from './story-details-form/story-details-form.component';
import { ReferencesFormComponent } from './references-form/references-form.component';
import { ReviewDisplayComponent } from './review-form/review-form.component';
import { AgreementFormComponent } from './agreement-form/agreement-form.component';
import { PipesModule } from '@microfrontend/pipes';
import { ServicesModule } from '@microfrontend/services';
import { UiModule } from '@microfrontend/ui';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    PipesModule,
    ServicesModule,
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
    NgxMaskDirective,
    NgxMaskPipe
  ],
  declarations: [
    DoingGoodFormComponent, 
    BasicInfoFormComponent, 
    NominationDetailsFormComponent, 
    StoryDetailsFormComponent,
    ReferencesFormComponent,
    ReviewDisplayComponent,
    AgreementFormComponent,
  ],
  exports: [
    DoingGoodFormComponent,
    BasicInfoFormComponent, 
    NominationDetailsFormComponent, 
    StoryDetailsFormComponent,
    ReferencesFormComponent,
    ReviewDisplayComponent,
    AgreementFormComponent,
  ],
  providers: [
    provideNgxMask()
  ]
})
export class SubmissionModule {}
