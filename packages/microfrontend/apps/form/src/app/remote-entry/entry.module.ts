import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@microfrontend/pipes';
import { ServicesModule } from '@microfrontend/services';
import { UiModule } from '@microfrontend/ui';
import { SubmissionModule } from '@microfrontend/submission';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [
    RemoteEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    SubmissionModule,
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
    NgxMaskPipe,
    RouterModule.forChild(remoteRoutes)],
  providers: [
    provideNgxMask(),
  ],
})
export class RemoteEntryModule {}
