import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder } from '@angular/forms';
import { Submission } from '../../../../types/Submission';
import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-story-details-form',
  templateUrl: './story-details-form.component.html',
  styleUrls: ['./story-details-form.component.scss']
})
export class StoryDetailsFormComponent implements OnInit, OnChanges {
  public storyDetailsFormGroup: UntypedFormGroup = new UntypedFormGroup({
    yourStory: new UntypedFormControl(''),
    yourVideo: new UntypedFormControl(''),
  });
  fileName = '';

  @Input() file: File;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.storyDetailsFormGroup = this.fb.group({
      'yourStory': ['', []],
      'yourVideo': ['', []]
    });
  }

  ngOnChanges(): void {

  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;

      const formData = new FormData();

      formData.append("thumbnail", this.file);
    }

  }

  populateSubmission(submission: Submission) {
    let storyDetails: UntypedFormGroup = this.storyDetailsFormGroup;

    submission.story = storyDetails.controls['yourStory'].value.trim();
    submission.uploadedVideo = this.fileName;
  }
}
