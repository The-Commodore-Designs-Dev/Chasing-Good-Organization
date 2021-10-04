import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Submission } from 'src/types/Submission';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {
  basicInfoFormGroup: FormGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''), 
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.basicInfoFormGroup = this.fb.group({
      'firstName': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'lastName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'email': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'phone': ['', {}]
    });
  }

  populateSubmission(submission: Submission) {
    let basicInfo: FormGroup = this.basicInfoFormGroup;

    submission.firstName = basicInfo.controls['firstName'].value.trim();
    submission.lastName = basicInfo.controls['lastName'].value.trim();
    submission.email = basicInfo.controls['email'].value.trim();
    submission.phoneNumber = basicInfo.controls['phone'].value.trim();
    console.log("Email: " + submission.email);
  }
}
