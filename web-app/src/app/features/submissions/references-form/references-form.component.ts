import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Submission } from '../../../../types/Submission';

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  public refFormGroup: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refFormGroup = this.fb.group({
      'referenceName1': ['', []],
      'referenceEmail1': ['', []],
      'referencePhone1': ['', []],
      'referenceName2': ['', []],
      'referenceEmail2': ['', []],
      'referencePhone2': ['', []],
    });
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;

    submission.referenceOne[0].name = references.controls['referenceName1'].value.trim();
    submission.referenceOne[0].email = references.controls['referenceEmail1'].value.trim();
    submission.referenceOne[0].phoneNumber = references.controls['referencePhone1'].value.trim();
    submission.referenceTwo[0].name = references.controls['referenceName2'].value.trim();
    submission.referenceTwo[0].email = references.controls['referenceEmail2'].value.trim();
    submission.referenceTwo[0].phoneNumber = references.controls['referencePhone2'].value.trim();
    console.log("Ref Name: " + submission.referenceOne[0].name);
  }

}
