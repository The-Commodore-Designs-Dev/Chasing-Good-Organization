import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from 'src/types/Submission';

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
    'phoneNumber': [
      { type: 'required', message: 'Phone Number is required' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ]
  }

  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];
  @Input() basicInfoFormGroup: FormGroup;
  @Input() nominationDetailsFormGroup: FormGroup;
  @Input() storyDetailsFormGroup: FormGroup;
  @Input() refFormGroup: FormGroup;
  @Input() disclaimerFormGroup: FormGroup;
  @Input() checkbox1: boolean;
  
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

}
