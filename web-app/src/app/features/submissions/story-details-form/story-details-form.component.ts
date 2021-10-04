import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Submission } from '../../../../types/Submission';

@Component({
  selector: 'app-story-details-form',
  templateUrl: './story-details-form.component.html',
  styleUrls: ['./story-details-form.component.scss']
})
export class StoryDetailsFormComponent implements OnInit {
  public storyDetailsFormGroup: FormGroup = new FormGroup({
    yourStory: new FormControl(''),
    yourVideo: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.storyDetailsFormGroup = this.fb.group({
      'yourStory': ['', []],
      'yourVideo': ['', []]
    });
  }

  populateSubmission(submission: Submission) {
    let storyDetails: FormGroup = this.storyDetailsFormGroup;

    submission.story = storyDetails.controls['yourStory'].value.trim();
    submission.uploadedVideo = storyDetails.controls['yourVideo'].value;
  }
}
