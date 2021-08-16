import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { njCounties } from '../../../../njCounties';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-nomination-details-form',
  templateUrl: './nomination-details-form.component.html',
  styleUrls: ['./nomination-details-form.component.scss']
})
export class NominationDetailsFormComponent implements OnInit {
  njCounties = njCounties;

  nominationDetailsFormGroup: FormGroup = new FormGroup({
    nominating: new FormControl(''),
    organization: new FormControl(''),
    other: new FormControl(''),
    category: new FormControl(''),
    njCounty: new FormControl('')
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.nominationDetailsFormGroup = this.fb.group({
      'nominating': ['', []],
      'organization': ['', []],
      'other': ['', []],
      'category': ['', []],
      'njCounty': ['', []]
    })
  }
  populateSubmission(submission: Submission) {
      let nominationDetails: FormGroup = this.nominationDetailsFormGroup;
  
      submission.nominating = nominationDetails.controls['nominating'].value;
      submission.nominatingOrganization = nominationDetails.controls['organization'].value.trim();
      submission.nominatingOther = nominationDetails.controls['other'].value.trim();
      submission.category = nominationDetails.controls['category'].value;
      submission.county = nominationDetails.controls['njCounty'].value;
  }
}
