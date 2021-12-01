import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from 'src/types/Submission';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  public disclaimerFormGroup: FormGroup;
  public ref1Name: string;

  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];
  
  constructor(private fb: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.disclaimerFormGroup = this.fb.group({
      'agreeToTermsAndPrivacy': ['', []]
    });

    if(this.submission.referenceOne && this.submission.referenceTwo) {
      this.submission.referenceOne.substr(0, 14);
      this.submission.referenceTwo.substr(0, 14);
    }
    
  }

  populateSubmission(submission: Submission) {
    let disclaimer: FormGroup = this.disclaimerFormGroup;

    submission.disclaimerAgreement = disclaimer.controls['agreeToTermsAndPrivacy'].value;
  }
}
