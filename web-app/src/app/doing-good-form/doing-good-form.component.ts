import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-doing-good-form',
  templateUrl: './doing-good-form.component.html',
  styleUrls: ['./doing-good-form.component.scss']
})
export class DoingGoodFormComponent implements OnInit {
  firstNameNominator = new FormControl('');
  lastNameNominator = new FormControl('');
  nameNominee = new FormControl('');
  organization = new FormControl('');
  category = new FormControl('');
  yourStory = new FormControl('');
  yourVideo = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}
