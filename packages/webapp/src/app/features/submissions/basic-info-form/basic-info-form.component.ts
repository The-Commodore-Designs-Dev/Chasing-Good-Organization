import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Submission } from 'src/types/Submission';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {
  destroyed = new Subject<void>();
  currentScreenSize: string;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);
  basicInfoFormGroup: FormGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''), 
  });
  
  constructor(private fb: FormBuilder, private observer: BreakpointObserver) {
    this.observer
    .observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for(const query of Object.keys(result.breakpoints)) {
        if(result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query);
        }
      }
    });
   }

  ngOnInit(): void {
    this.basicInfoFormGroup = this.fb.group({
      'firstName': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern('[A-Za-z \-\_]+')])
      }],
      'lastName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'email': ['', {
        validators: Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'phone': ['', [Validators.pattern('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})')]]
    });
  }

  populateSubmission(submission: Submission) {
    let basicInfo: FormGroup = this.basicInfoFormGroup;

    submission.firstName = basicInfo.controls['firstName'].value.trim();
    submission.lastName = basicInfo.controls['lastName'].value.trim();
    submission.email = basicInfo.controls['email'].value.trim();
    submission.phoneNumber = basicInfo.controls['phone'].value.trim();
  }
}
