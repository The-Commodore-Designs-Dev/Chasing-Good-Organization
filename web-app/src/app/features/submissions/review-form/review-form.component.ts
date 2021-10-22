import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from 'src/types/Submission';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {
  public disclaimerFormGroup: FormGroup;
  public refString: String;
  public refString2: String;
  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.disclaimerFormGroup = this.fb.group({
      'agreeToTermsAndPrivacy': ['', []]
    });

    this.refString = JSON.stringify(this.submission.referenceOne);
    this.refString2 = JSON.stringify(this.submission.referenceTwo);
  }

  populateSubmission(submission: Submission) {
    let disclaimer: FormGroup = this.disclaimerFormGroup;

    submission.disclaimerAgreement = disclaimer.controls['agreeToTermsAndPrivacy'].value;
}
}
