import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivacypolicyComponentDialog } from '../../dialogs/privacypolicy/privacypolicy.component';
import { TermsofuseComponentDialog } from '../../dialogs/termsofuse/termsofuse.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild(PrivacypolicyComponentDialog) privacypolicyComponentDialog: PrivacypolicyComponentDialog;
  @ViewChild(TermsofuseComponentDialog) termsofuseComponentDialog: TermsofuseComponentDialog;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPrivacyPolicy(): void {
    const dialogRef = this.dialog.open(PrivacypolicyComponentDialog, {
      width: '60vw',
      height: '80vh'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openTermsOfUse(): void {
    const dialogRef = this.dialog.open(TermsofuseComponentDialog, {
      width: '60vw',
      height: '80vh'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
