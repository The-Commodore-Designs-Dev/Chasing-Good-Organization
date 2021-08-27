import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  refFormGroup: FormGroup = new FormGroup({
    referenceName1: new FormControl(''),
    referenceEmail1: new FormControl(''),
    referenceName2: new FormControl(''),
    referenceEmail2: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refFormGroup = this.fb.group({
      'referenceName1': ['', []],
      'referenceEmail1': ['', []],
      'referenceName2': ['', []],
      'referenceEmail2': ['', []]
    })
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;

    submission.referenceName1 = references.controls['referenceName1'].value.trim();
    submission.referenceEmail1 = references.controls['referenceEmail1'].value.trim();
    submission.referenceName2 = references.controls['referenceName2'].value.trim();
    submission.referenceEmail2 = references.controls['referenceEmail2'].value.trim();
    console.log("Ref Name: " + submission.referenceName1);
}

}
