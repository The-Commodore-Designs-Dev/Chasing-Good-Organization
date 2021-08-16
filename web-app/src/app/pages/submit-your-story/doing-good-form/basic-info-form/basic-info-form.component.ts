import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {
  basicInfoFormGroup: FormGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''), 
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoFormGroup = this.fb.group({
      'firstName': ['', []],
      'lastName': ['', []],
      'email': ['', []]
    })
/*     this.basicInfoFormGroup = this.fb.group({
      'firstName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'lastName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'email': ['', {
        validators: Validators.compose([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }]
    }) */
  }
  
  populateSubmission(submission: Submission) {
      let basicInfo: FormGroup = this.basicInfoFormGroup;
  
      submission.email = basicInfo.controls['email'].value.trim();
      submission.firstName = basicInfo.controls['firstName'].value.trim();
      submission.lastName = basicInfo.controls['lastName'].value.trim();
  }
}
