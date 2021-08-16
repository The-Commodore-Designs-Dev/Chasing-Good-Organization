import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-disclaimer-form',
  templateUrl: './disclaimer-form.component.html',
  styleUrls: ['./disclaimer-form.component.scss']
})
export class DisclaimerFormComponent implements OnInit {
  disclaimerFormGroup: FormGroup = new FormGroup({
    agreeToDisclaimer: new FormControl(''),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.disclaimerFormGroup = this.fb.group({
      'agreeToDisclaimer': ['', []]
    })    
  }

  populateSubmission(submission: Submission) {
    let disclaimer: FormGroup = this.disclaimerFormGroup;

    submission.agreement = disclaimer.controls['agreeToDisclaimer'].value;
}

}
