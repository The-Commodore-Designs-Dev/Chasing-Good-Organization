import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Submission } from 'src/app/Submission';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  template: 'passed in {{ SUBMISSION_DATA }}'
})
export class DetailsComponentDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {firstName: 'Fred', lastName: 'Wilcox'}, public dialogRef: MatDialogRef<DetailsComponentDialog>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
