import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Submission } from '../../../../types/Submission';

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  public refFormGroup: FormGroup;

  @Input() reference1: Object;
  @Input() reference2: Object;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refFormGroup = this.fb.group({
      'referenceName1': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'referenceEmail1': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'referencePhone1': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
      }],
      'referenceName2': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'referenceEmail2': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'referencePhone2': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
      }],
    });
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;
    this.reference1 = new Object();
    this.reference2 = new Object();

    this.reference1 = {
      name: references.controls['referenceName1'].value.trim(),
      email: references.controls['referenceEmail1'].value.trim(),
      phone: references.controls['referencePhone1'].value.trim()
    }
    
    this.reference2 = {
      name: references.controls['referenceName2'].value.trim(),
      email: references.controls['referenceEmail2'].value.trim(),
      phone: references.controls['referencePhone2'].value.trim()
    }

    let reference1String = JSON.stringify(this.reference1);
    let reference2String = JSON.stringify(this.reference2);  

    submission.referenceOne = reference1String;
    submission.referenceTwo = reference2String;
  }

}
