import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-termsofuse',
  templateUrl: './termsofuse.component.html',
  styleUrls: ['./termsofuse.component.scss']
})
export class TermsofuseComponentDialog implements OnInit {
  content = [
    `This is the terms of use ...`
  ]
  constructor(public dialogRef: MatDialogRef<TermsofuseComponentDialog>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
