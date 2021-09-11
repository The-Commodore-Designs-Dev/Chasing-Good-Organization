import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submission } from '../../../../../types/Submission';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {
  @Input() basicInfoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  populateSubmission(submission: Submission) {
      let basicInfo: FormGroup = this.basicInfoFormGroup;
  
      submission.email = basicInfo.controls['email'].value.trim();
      submission.firstName = basicInfo.controls['firstName'].value.trim();
      submission.lastName = basicInfo.controls['lastName'].value.trim();
      console.log("Email: " + submission.email);
  }
}
