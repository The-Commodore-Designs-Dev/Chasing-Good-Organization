import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  refFormGroup: FormGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''), 
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.refFormGroup = this.fb.group({
      'firstName': ['', []],
      'lastName': ['', []],
      'email': ['', []]
    })
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;

    submission.email = references.controls['email'].value.trim();
    submission.firstName = references.controls['firstName'].value.trim();
    submission.lastName = references.controls['lastName'].value.trim();
}

}
