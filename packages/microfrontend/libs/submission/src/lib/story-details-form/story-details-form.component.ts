import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Submission } from '../types/Submission';

@Component({
  selector: 'submission-story-details-form',
  templateUrl: './story-details-form.component.html',
  styleUrls: ['./story-details-form.component.scss']
})
export class StoryDetailsFormComponent implements OnInit, OnChanges {
  public storyDetailsFormGroup: FormGroup = new FormGroup({
    yourStory: new FormControl(''),
    yourVideo: new FormControl(''),
  });
  fileName = '';

  @Input()
  file!: File;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.storyDetailsFormGroup = this.fb.group({
      'yourStory': ['', []],
      'yourVideo': ['', []]
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @angular-eslint/no-empty-lifecycle-method
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
    const storyDetails: FormGroup = this.storyDetailsFormGroup;

    submission.story = storyDetails.controls['yourStory'].value.trim();
    submission.uploadedVideo = this.fileName;
  }
}
