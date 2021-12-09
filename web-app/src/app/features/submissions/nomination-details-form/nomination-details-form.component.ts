import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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
  
  public nominationDetailsFormGroup: FormGroup = new FormGroup({
    nominatingOptions: new FormControl(''),
    organizationName: new FormControl(''),
    individualFullName: new FormControl(''),
    individualEmailAddress: new FormControl(''),
    category: new FormControl(''),
    njCounty: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nominationDetailsFormGroup = this.fb.group({
      'nominatingOptions': [['Self', 'Organization', 'Individual', 'Other'], []],
      'organizationName': ['', []],
      'individualFullName': ['', []],
      'individualEmailAddress': ['', []],
      'category': ['', []],
      'njCounty': ['', []]
    });
  }

  populateSubmission(submission: Submission) {
    let nominationDetails: FormGroup = this.nominationDetailsFormGroup;

    submission.nominatingOptions = nominationDetails.controls['nominatingOptions'].value;
    submission.organizationName = nominationDetails.controls['organizationName'].value.trim();
    submission.individualFullName = nominationDetails.controls['individualFullName'].value.trim();
    submission.individualEmailAddress = (nominationDetails.controls['individualEmailAddress'].value === ``) ? "undefined" : nominationDetails.controls['individualEmailAddress'].value.trim();
    submission.category = nominationDetails.controls['category'].value;
    submission.county = nominationDetails.controls['njCounty'].value;
}
}
