import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';

import { njCounties } from '../../../../types/NJCounty';
import { categories } from '../../../../types/Category';
import { Submission } from '../../../../types/Submission';

@Component({
  selector: 'app-nomination-details-form',
  templateUrl: './nomination-details-form.component.html',
  styleUrls: ['./nomination-details-form.component.scss']
})
export class NominationDetailsFormComponent implements OnInit {
  njCounties = njCounties;
  categories = categories;
  
  public nominationDetailsFormGroup: UntypedFormGroup = new UntypedFormGroup({
    nominatingOptions: new UntypedFormControl(''),
    organizationName: new UntypedFormControl(''),
    individualFullName: new UntypedFormControl(''),
    individualEmailAddress: new UntypedFormControl(''),
    category: new UntypedFormControl(''),
    njCounty: new UntypedFormControl('')
  });

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.nominationDetailsFormGroup = this.fb.group({
      'nominatingOptions': [['An organization', 'An Adult Individual', 'A Teen Individual'], []],
      'organizationName': ['', []],
      'individualFullName': ['', []],
      'individualEmailAddress': ['', []],
      'category': ['', []],
      'njCounty': ['', []]
    });
  }

  populateSubmission(submission: Submission) {
    let nominationDetails: UntypedFormGroup = this.nominationDetailsFormGroup;

    submission.nominatingOptions = nominationDetails.controls['nominatingOptions'].value;
    submission.organizationName = nominationDetails.controls['organizationName'].value.trim();
    submission.individualFullName = nominationDetails.controls['individualFullName'].value.trim();
    submission.individualEmailAddress = (nominationDetails.controls['individualEmailAddress'].value === ``) ? null : nominationDetails.controls['individualEmailAddress'].value.trim();
    submission.category = nominationDetails.controls['category'].value;
    submission.county = nominationDetails.controls['njCounty'].value;
}
}
