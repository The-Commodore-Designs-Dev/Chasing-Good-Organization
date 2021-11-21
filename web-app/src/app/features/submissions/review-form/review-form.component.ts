import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from 'src/types/Submission';
import { PrivacypolicyComponentDialog } from '../../../dialogs/privacypolicy/privacypolicy.component';
import { TermsofuseComponentDialog } from '../../../dialogs/termsofuse/termsofuse.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  public disclaimerFormGroup: FormGroup;
  
  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];
  @Input() refFormGroup: FormGroup;
  @ViewChild(PrivacypolicyComponentDialog) privacypolicyComponentDialog: PrivacypolicyComponentDialog;
  @ViewChild(TermsofuseComponentDialog) termsofuseComponentDialog: TermsofuseComponentDialog;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.disclaimerFormGroup = this.fb.group({
      'agreeToTermsAndPrivacy': ['', []]
    });
    
    
  }

  populateSubmission(submission: Submission) {
    let disclaimer: FormGroup = this.disclaimerFormGroup;

    submission.disclaimerAgreement = disclaimer.controls['agreeToTermsAndPrivacy'].value;
  }

  openPrivacyPolicy(): void {
    const dialogRef = this.dialog.open(PrivacypolicyComponentDialog, {
      width: '60vw',
      height: '80vh'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openTermsOfUse(): void {
    const dialogRef = this.dialog.open(TermsofuseComponentDialog, {
      width: '60vw',
      height: '80vh'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
