import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Submission } from 'src/types/Submission';
import { NJCounty } from 'src/types/NJCounty';
import { Category } from 'src/types/Category';
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
  date: date,
  nominatingOptions: 'Self',
  organizationName: null,
  individualFullName: null,
  otherDescription: null,
  category: { id: 2, name: 'An Individual 18 Or Over Who Has Done Good', categoryID: 234},
  county: { id: 3, name:'Burlington County', countyID: 136 },
  story: 'Test Story',
  uploadedVideo: 'path/to/video',
  referenceOne: {
    id: 1,
    name: 'Bill Engvall',
    email: 'b.engval@gmail.com',
    phoneNumber: '555-675-6990',
    referenceID: 23
  },
  referenceTwo: {
    id: 1,
    name: 'Dan Aragon',
    email: 'dan2332@gmail.com',
    phoneNumber: '555-690-6510',
    referenceID: 24
  },
  disclaimerAgreement: true,
  voted: {
    id: 1,
    voted: false,
    totalVotesEarned: 23,
    maxVotesPossible: 23,
    judges: {
      id: 1,
      name: '',
      username: '',
      judgeID: 23
    },
    voteID: 32
  }
},
{
  id: '2',
  firstName: 'Dale',
  lastName: 'Johnson',
  email: 'johnsondj@gmail.com',
  date: date,
  nominatingOptions: 'Organization',
  organizationName: 'Google',
  individualFullName: null,
  otherDescription: null,
  category: { id: 1, name: 'An Organization That Has Done Good', categoryID: 233},
  county: { id: 5, name:'Cape May County', countyID: 138 },
  story: 'Test Story',
  uploadedVideo: 'path/to/video',
  referenceOne: {
    id: 1,
    name: '',
    email: '',
    phoneNumber: '',
    referenceID: 25
  },
  referenceTwo: {
    id: 2,
    name: '',
    email: '',
    phoneNumber: '',
    referenceID: 26
  },
  disclaimerAgreement: true,
  voted: {
    id: 2,
    voted: true,
    totalVotesEarned: 14,
    maxVotesPossible: 23,
    judges: {
      id: 2,
      name: '',
      username: '',
      judgeID: 47
    },
    voteID: 33
  }
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