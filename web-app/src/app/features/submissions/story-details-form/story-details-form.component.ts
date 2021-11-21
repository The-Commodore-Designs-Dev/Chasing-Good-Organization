import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Submission } from '../../../../types/Submission';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-story-details-form',
  templateUrl: './story-details-form.component.html',
  styleUrls: ['./story-details-form.component.scss']
})
export class StoryDetailsFormComponent implements OnInit, OnChanges {
  public storyDetailsFormGroup: FormGroup = new FormGroup({
    yourStory: new FormControl(''),
    yourVideo: new FormControl(''),
  });
  fileName = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.storyDetailsFormGroup = this.fb.group({
      'yourStory': ['', []],
      'yourVideo': ['', []]
    });
  }

  ngOnChanges(): void {

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      this.fileName = file.name;
    }
  }

  populateSubmission(submission: Submission) {
    let storyDetails: FormGroup = this.storyDetailsFormGroup;

    submission.story = storyDetails.controls['yourStory'].value.trim();
    submission.uploadedVideo = this.fileName;
  }
}
