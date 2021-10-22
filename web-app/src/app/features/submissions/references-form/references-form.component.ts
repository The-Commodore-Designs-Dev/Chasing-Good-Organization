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
    let reference1 = new Object();
    let reference2 = new Object();

    reference1 = {
      name: references.controls['referenceName1'].value.trim(),
      email: references.controls['referenceEmail1'].value.trim(),
      phone: references.controls['referencePhone1'].value.trim()
    }
    
    reference2 = {
      name: references.controls['referenceName2'].value.trim(),
      email: references.controls['referenceEmail2'].value.trim(),
      phone: references.controls['referencePhone2'].value.trim()
    }

    let reference1String = JSON.stringify(reference1);
    let reference2String = JSON.stringify(reference2);  

    submission.referenceOne = reference1String;
    submission.referenceTwo = reference2String;

    console.log("Ref #1: " + submission.referenceOne);
    console.log("Ref #2: " + submission.referenceTwo);
  }

}
