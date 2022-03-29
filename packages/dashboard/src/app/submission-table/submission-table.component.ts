import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Submission } from 'src/types/Submission';
import { NJCounty, njCounties } from 'src/types/NJCounty';
import { Reference } from 'src/types/Reference';
import { DetailsComponentDialog } from './details/details.component';
import { ReadStoryComponentDialog } from './read-story/read-story.component';
import { WatchVideoComponentDialog } from './watch-video/watch-video.component';
import { ContactComponentDialog } from './contact/contact.component';
import { VoteComponentDialog } from './vote/vote.component';

const submittedDateDATA = new Date();
const date = submittedDateDATA.toDateString();
const SUBMISSION_DATA: Submission[] = [{
  id: '1',
  firstName: 'Fred',
  lastName: 'Wilcox',
  email: 'fred.wilcox@gmail.com',
  nominatingOptions: 'Self',
  organizationName: null,
  individualFullName: null,
  individualEmailAddress: null,
  category: "{id: 2, name: 'An Individual 18 Or Over Who Has Done Good'}",
  story: 'Test Story',
  uploadedVideo: 'path/to/video',
  disclaimerAgreement: true,
},
{
  id: '2',
  firstName: 'Dale',
  lastName: 'Johnson',
  email: 'johnsondj@gmail.com',
  nominatingOptions: 'Organization',
  organizationName: 'Google',
  individualFullName: null,
  individualEmailAddress: null,
  category: "{id: 1, name: 'An Organization That Has Done Good'}",
  story: 'Test Story',
  uploadedVideo: 'path/to/video',
  disclaimerAgreement: true,
}
]

@Component({
  selector: 'app-submission-table',
  templateUrl: './submission-table.component.html',
  styleUrls: ['./submission-table.component.scss']
})
export class SubmissionTableComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'email', 'nominating', 'voted','action'];
  dataSource = new MatTableDataSource(SUBMISSION_DATA);
  
  constructor(public dialog: MatDialog) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(DetailsComponentDialog) detailsComponentDialog: DetailsComponentDialog;
  @ViewChild(ReadStoryComponentDialog) readStorycomponentDialog: ReadStoryComponentDialog;
  @ViewChild(WatchVideoComponentDialog) watchVideoComponentDialog: WatchVideoComponentDialog;
  @ViewChild(ContactComponentDialog) contanctComponentDialog: ContactComponentDialog;


  openDetailsDialog(): void {
    const dialogRef = this.dialog.open(DetailsComponentDialog, {
      width: '60vw',
      height: '80vh',
      data: { 
        firstName: 'Fred',
        lastName: 'Wilcox'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Details dialog was closed');
    });
  }

  openStoryDialog(): void {
    const dialogRef = this.dialog.open(ReadStoryComponentDialog, {
      width: '60vw',
      height: '80vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Read Story dialog was closed!');
    });
  }

  openVideoDialog(): void {
    const dialogRef = this.dialog.open(WatchVideoComponentDialog, {
      width: '60vw',
      height: '80vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Video dialog was closed!');
    });
  }

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactComponentDialog, {
      width: '60vw',
      height: '80vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Contact dialog was closed!');
    });
  }

  openVotingDialog(): void {
    const dialogRef = this.dialog.open(VoteComponentDialog, {
      width: '60vw',
      height: '80vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Vote dialog was closed!');
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}