import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Submission } from 'src/app/Submission';
import { NJCounty } from 'src/app/njCounties';
import { DetailsComponentDialog } from './details/details.component';
import { ReadStoryComponentDialog } from './read-story/read-story.component';
import { WatchVideoComponentDialog } from './watch-video/watch-video.component';
import { ContactComponentDialog } from './contact/contact.component';
import { VoteComponentDialog } from './vote/vote.component';

const submittedDateDATA = new Date();
const SUBMISSION_DATA: Submission[] = [{
  id: '1',
  firstName: 'Fred',
  lastName: 'Wilcox',
  email: 'fred.wilcox@gmail.com',
  date: submittedDateDATA,
  nominating: 'Self',
  nominatingOrganization: 'null',
  nominatingIndividual: 'null',
  nominatingOther: 'null',
  category: 'An Individual 18 Or Over Who Has Done Good',
  county: {
    id: 3,
    name: 'Burlington County'
  },
  story: 'Test Story',
  uploadedVideo: false,
  referenceName1: '',
  referenceEmail1: '',
  referenceName2: '',
  referenceEmail2: '',
  agreement: true,
  voted: true
},
{
  id: '2',
  firstName: 'Dale',
  lastName: 'Johnson',
  email: 'johnsondj@gmail.com',
  date: submittedDateDATA,
  nominating: 'Organization',
  nominatingOrganization: 'Google',
  nominatingIndividual: 'null',
  nominatingOther: 'null',
  category: 'An Organization That Has Done Good',
  county: {
    id: 5,
    name: 'Cape May County'
  },
  story: 'Test Story',
  uploadedVideo: false,
  referenceName1: '',
  referenceEmail1: '',
  referenceName2: '',
  referenceEmail2: '',
  agreement: true,
  voted: false
}
]

@Component({
  selector: 'app-submission-table',
  templateUrl: './submission-table.component.html',
  styleUrls: ['./submission-table.component.scss']
})
export class SubmissionTableComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'email', 'date', 'nominating', 'voted','action'];
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