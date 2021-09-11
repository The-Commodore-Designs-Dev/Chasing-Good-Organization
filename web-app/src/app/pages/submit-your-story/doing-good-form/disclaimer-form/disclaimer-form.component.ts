import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors } from '@angular/forms';
import { Submission } from '../../../../../types/Submission';

@Component({
  selector: 'app-disclaimer-form',
  templateUrl: './disclaimer-form.component.html',
  styleUrls: ['./disclaimer-form.component.scss']
})
export class DisclaimerFormComponent implements OnInit {
  @Input() disclaimerFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  populateSubmission(submission: Submission) {
    let disclaimer: FormGroup = this.disclaimerFormGroup;

    submission.disclaimerAgreement = disclaimer.controls['agreeToDisclaimer'].value;
}

}
