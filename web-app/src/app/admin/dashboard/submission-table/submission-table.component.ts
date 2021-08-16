import { Component, OnInit } from '@angular/core';
import { Submission } from 'src/app/Submission';
import { NJCounty } from 'src/app/njCounties';

@Component({
  selector: 'app-submission-table',
  templateUrl: './submission-table.component.html',
  styleUrls: ['./submission-table.component.scss']
})
export class SubmissionTableComponent implements OnInit {
  submissionData: Submission[] = [{
    id: '1',
    firstName: 'Antonia',
    lastName: 'Cleaveland',
    email: 'antoniacleavland@gmail.com',
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
    referenceName3: '',
    referenceEmail3: '',
    agreement: true
  }]

  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'email','nominating','category','county','story','uploadedVideo', 'agreement'];
  constructor() { }

  ngOnInit(): void {
  }

}
