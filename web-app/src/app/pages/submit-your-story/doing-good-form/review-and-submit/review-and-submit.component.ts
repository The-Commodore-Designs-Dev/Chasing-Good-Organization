import { Component, OnInit, Input } from '@angular/core';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-review-and-submit',
  templateUrl: './review-and-submit.component.html',
  styleUrls: ['./review-and-submit.component.scss']
})
export class ReviewAndSubmitComponent implements OnInit {
  @Input() submission: Submission;
  @Input() errorMessages: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
