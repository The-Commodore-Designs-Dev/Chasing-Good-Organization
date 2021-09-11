import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Submission } from '../../../../../types/Submission';

@Component({
  selector: 'app-references-form',
  templateUrl: './references-form.component.html',
  styleUrls: ['./references-form.component.scss']
})
export class ReferencesFormComponent implements OnInit {
  @Input() refFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  populateSubmission(submission: Submission) {
    let references: FormGroup = this.refFormGroup;

    submission.referenceOne.name = references.controls['referenceName1'].value.trim();
    submission.referenceOne.email = references.controls['referenceEmail1'].value.trim();
    submission.referenceOne.phoneNumber = references.controls['referencePhone1'].value.trim();
    submission.referenceTwo.name = references.controls['referenceName2'].value.trim();
    submission.referenceTwo.email = references.controls['referenceEmail2'].value.trim();
    submission.referenceTwo.phoneNumber = references.controls['referencePhone2'].value.trim();
    console.log("Ref Name: " + submission.referenceOne.name);
}

}
