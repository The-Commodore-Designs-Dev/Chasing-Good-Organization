import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { njCounties } from '../../../../../types/NJCounty';
import { categories } from '../../../../../types/Category';
import { Submission } from '../../../../../types/Submission';

@Component({
  selector: 'app-nomination-details-form',
  templateUrl: './nomination-details-form.component.html',
  styleUrls: ['./nomination-details-form.component.scss']
})
export class NominationDetailsFormComponent implements OnInit {
  njCounties = njCounties;
  categories = categories;

  @Input() nominationDetailsFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  populateSubmission(submission: Submission) {
      let nominationDetails: FormGroup = this.nominationDetailsFormGroup;
  
      submission.nominatingOptions = nominationDetails.controls['nominatingOptions'].value;
      submission.organizationName = nominationDetails.controls['organizationName'].value.trim();
      submission.individualFullName = nominationDetails.controls['individualFullName'].value.trim();
      submission.otherDescription = nominationDetails.controls['otherDescription'].value.trim();
      submission.category = nominationDetails.controls['category'].value;
      submission.county = nominationDetails.controls['njCounty'].value;
  }
}
