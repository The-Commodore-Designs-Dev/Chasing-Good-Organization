import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UntypedFormGroup, FormControl, UntypedFormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from '../../../../types/Submission';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  public ref1Name: string;

  public validationMessages = {
    'firstName': [
      { type: 'required', message: 'First Name is required' },
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'phone': [
      { type: 'required', message: 'Phone Number is required' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ]
  }

  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];
  @Input() basicInfoFormGroup: UntypedFormGroup;
  @Input() nominationDetailsFormGroup: UntypedFormGroup;
  @Input() storyDetailsFormGroup: UntypedFormGroup;
  @Input() refFormGroup: UntypedFormGroup;
  @Input() disclaimerFormGroup: UntypedFormGroup;
  @Input() checkbox1: boolean;
  
  constructor(private fb: UntypedFormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.disclaimerFormGroup = this.fb.group({
      'agreeToTermsAndPrivacy': ['', []]
    });

    if(this.submission.referenceOne && this.submission.referenceTwo) {
      this.submission.referenceOne.name;
      this.submission.referenceTwo.name;
    }
    
  }

}
