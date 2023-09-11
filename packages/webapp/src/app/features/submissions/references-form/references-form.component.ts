import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormGroup, FormControl, UntypedFormBuilder, Validators, FormGroup, FormBuilder } from '@angular/forms';

import { Submission } from '../../../../types/Submission';
import { Reference } from '../../../../types/Reference'

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  public refFormGroup: FormGroup;

  @Input() reference1: Reference;
  @Input() reference2: Reference;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refFormGroup = this.fb.group({
      'referenceName1': ['', {
        validators: Validators.compose([Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'referenceEmail1': ['', {
        validators: Validators.compose([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'referencePhone1': ['', {
        validators: Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
      }],
      'referenceName2': ['', {
        validators: Validators.compose([Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'referenceEmail2': ['', {
        validators: Validators.compose([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'referencePhone2': ['', {
        validators: Validators.compose([Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
      }],
    });
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;
    this.reference1;
    this.reference2;

    this.reference1 = {
      name: references.controls['referenceName1'].value.trim(),
      email: references.controls['referenceEmail1'].value.trim(),
      phoneNumber: references.controls['referencePhone1'].value.trim()
    }
    
    this.reference2 = {
      name: references.controls['referenceName2'].value.trim(),
      email: references.controls['referenceEmail2'].value.trim(),
      phoneNumber: references.controls['referencePhone2'].value.trim()
    }  

    submission.referenceOne = this.reference1;
    submission.referenceTwo = this.reference2;
  }

}
