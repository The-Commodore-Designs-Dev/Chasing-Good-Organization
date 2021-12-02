import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { DataStore, Storage } from 'aws-amplify';
import { APIService } from '../../../API.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Submission } from '../../../../models';
import { Subscription, GroupedObservable } from 'rxjs';
import { BasicInfoFormComponent } from '../basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from '../nomination-details-form/nomination-details-form.component';
import { ReferencesFormComponent } from '../references-form/references-form.component';
import { StoryDetailsFormComponent } from '../story-details-form/story-details-form.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SentMessage } from '../../messages/sent/sent.component';
import { ErrorMessage } from '../../messages/error/error.component';

const BASIC_INFO_INDEX: number = 0;
const NOMINATION_INDEX: number = 1;
const STORY_INDEX: number = 2;
const REFERENCES_INDEX: number = 3;
const DISCLAIMER_INDEX: number = 4;
const REVIEW_INDEX: number = 5;

@Component({
  selector: 'app-doing-good-form',
  templateUrl: './doing-good-form.component.html',
  styleUrls: ['./doing-good-form.component.scss']
})
export class DoingGoodFormComponent implements OnInit, AfterViewInit, OnDestroy {
  durationOfMessage = 15;
  errorMessages: string[] = [];
  submission: Submission = {} as Submission;
  currentStepIndex: number = 0;
  basicInfoFormSubscription: Subscription = new Subscription;
  nominationInfoFormSubscription: Subscription = new Subscription;
  storyInfoFormSubscription: Subscription = new Subscription;
  referencesInfoFormSubscription: Subscription = new Subscription;
  formSubmitted: boolean = false;
  allFormsValid: boolean = false;
  public createForm: FormGroup;
  destroyed = new Subject<void>();
  currentScreenSize: string;
  public file: File;
  public reference1: Object;
  public reference2: Object;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);

  @ViewChild(BasicInfoFormComponent) basicInfoFormComponent: BasicInfoFormComponent;
  @ViewChild(NominationDetailsFormComponent) nominationDetailsFormComponent: NominationDetailsFormComponent;
  @ViewChild(StoryDetailsFormComponent) storyDetailsFormComponent: StoryDetailsFormComponent;
  @ViewChild(ReferencesFormComponent) referencesFormComponent: ReferencesFormComponent;
  @ViewChild(ReviewFormComponent) reviewFormComponent: ReviewFormComponent;
  @Input() basicInfoFormGroup: FormGroup;
  @Input() nominationDetailsFormGroup: FormGroup;
  @Input() storyDetailsFormGroup: FormGroup;
  @Input() refFormGroup: FormGroup;
  @Input() disclaimerFormGroup: FormGroup;
  constructor(private api: APIService, private fb: FormBuilder, private observer: BreakpointObserver, private snackBar: MatSnackBar) {
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
    this.createForm = this.fb.group({
      basicInfoFormGroup: this.basicInfoFormGroup,
      nominationDetailsForm: this.nominationDetailsFormGroup,
      storyDetailsForm: this.storyDetailsFormGroup,
      referencesForm: this.refFormGroup,
      disclaimerAgreementForm: this.disclaimerFormGroup
    });
  }

  ngOnDestroy() {
    this.basicInfoFormSubscription.unsubscribe();
    this.nominationInfoFormSubscription.unsubscribe();
    this.storyInfoFormSubscription.unsubscribe();
    this.referencesInfoFormSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.handleSubscriptions();
  }

  private handleSubscriptions() {
    this.handleBasicInfoFormSubscription();
    this.handleNominationInfoFormSubscription();
    this.handleStoryInfoFormSubscription();
    this.handleReferencesInfoFormSubscription();
  }

  private handleBasicInfoFormSubscription() {
    this.basicInfoFormSubscription = this.basicInfoFormComponent
    .basicInfoFormGroup
    .valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(
      (values) => {
        this.handleFormCheck();
      }
    );
  }

  private handleNominationInfoFormSubscription() {
    this.nominationInfoFormSubscription = this.nominationDetailsFormComponent
    .nominationDetailsFormGroup
    .valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(
      (values) => {
        this.handleFormCheck();
      }
    );
  }

  private handleStoryInfoFormSubscription() {
    this.storyInfoFormSubscription = this.storyDetailsFormComponent
    .storyDetailsFormGroup
    .valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(
      (values) => {
        this.handleFormCheck();
      }
    );
  }

  private handleReferencesInfoFormSubscription() {
    this.referencesInfoFormSubscription = this.referencesFormComponent
    .refFormGroup
    .valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(
      (values) => {
        this.handleFormCheck();
      }
    );
  }

  private handleFormCheck() {
    this.handleBasicInfoFormCheck();
    this.handleNominationInfoFormCheck();
    this.handleStoryInfoFormCheck();
    this.handleReferencesInfoFormCheck();
  }

  private handleBasicInfoFormCheck() {
    if (this.currentStepIndex == BASIC_INFO_INDEX) {
      if (this.basicInfoFormComponent.basicInfoFormGroup.valid) {
        this.clearIconError(BASIC_INFO_INDEX);
      }   
    }
  }

  private handleNominationInfoFormCheck() {
    if (this.currentStepIndex == NOMINATION_INDEX) {
      if (this.nominationDetailsFormComponent.nominationDetailsFormGroup.valid) {
        this.clearIconError(NOMINATION_INDEX);
      }
    }
  }

  private handleStoryInfoFormCheck() {
    if (this.currentStepIndex == STORY_INDEX) {
      if (this.storyDetailsFormComponent.storyDetailsFormGroup.valid) {
        this.clearIconError(STORY_INDEX);
      }
    }
  }

  private handleReferencesInfoFormCheck() {
    if (this.currentStepIndex == REFERENCES_INDEX) {
      if (this.referencesFormComponent.refFormGroup.valid) {
        this.clearIconError(REFERENCES_INDEX);
      }
    }
  }

  onStepChange(event: any) {
    let previousIndex: number = event.previouslySelectedIndex;
    let currentIndex: number = event.selectedIndex;

    this.currentStepIndex = currentIndex;

    if (previousIndex == BASIC_INFO_INDEX) {
      this.basicInfoFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.basicInfoFormComponent.basicInfoFormGroup.valid);
      if (!validForm) {
        this.changeIcon(previousIndex);
        this.allFormsValid = false;
      } else {
        this.clearIconError(previousIndex);
        this.allFormsValid = true;
      }
    }

    if (previousIndex == NOMINATION_INDEX) {
      this.nominationDetailsFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.nominationDetailsFormComponent.nominationDetailsFormGroup.valid);
      if (!validForm) {
        this.changeIcon(previousIndex);
        this.allFormsValid = false;
      } else {
        this.clearIconError(previousIndex);
        this.allFormsValid = true;
      }
    }

    if (previousIndex == STORY_INDEX) {
      this.storyDetailsFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.storyDetailsFormComponent.storyDetailsFormGroup.valid);
      if (!validForm) {
        this.changeIcon(previousIndex);
        this.allFormsValid = false;
      } else {
        this.clearIconError(previousIndex);
        this.allFormsValid = true;
      }
    }

    if (previousIndex == REFERENCES_INDEX) {
      this.referencesFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.referencesFormComponent.refFormGroup.valid);
      if (!validForm) {
        this.changeIcon(previousIndex);
        this.allFormsValid = false;
      } else {
        this.clearIconError(previousIndex);
        this.allFormsValid = true;
      }
    }

    if (currentIndex == REVIEW_INDEX) {
      this.validateForms();
    }
  }

  private clearIconError(index: number) {
    let iconElement: HTMLElement = this.getIconElementByIndex(index);
    iconElement.classList.remove('mat-step-icon-invalid');
  }

  private changeIcon(index: number) {
    let iconElement: HTMLElement = this.getIconElementByIndex(index);
    iconElement.classList.add('mat-step-icon-invalid');
  }

  private getIconElementByIndex(index: number): HTMLElement {
    let nodeList: NodeList = document.querySelectorAll('.mat-step-icon');
    let node: Node = nodeList.item(index);

    return (<HTMLElement>node);
  }

  private validateForms() {
    this.errorMessages = [];

    this.validateBasicInfoForm();
    this.validateNominationInfoForm();
    this.validateStoryInfoForm();
    this.validateReferencesInfoForm();
  }

  private validateBasicInfoForm() {
    let basicInfoForm: FormGroup = this.basicInfoFormComponent.basicInfoFormGroup;

    Object.keys(basicInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.basicInfoFormComponent.basicInfoFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  }

  private validateNominationInfoForm() {
    let nomintaionInfoForm: FormGroup = this.nominationDetailsFormComponent.nominationDetailsFormGroup;

    Object.keys(nomintaionInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.nominationDetailsFormComponent.nominationDetailsFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  }

  private validateStoryInfoForm() {
    let storyInfoForm: FormGroup = this.storyDetailsFormComponent.storyDetailsFormGroup;

    Object.keys(storyInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.storyDetailsFormComponent.storyDetailsFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  }

  private validateReferencesInfoForm() {
    let referencesInfoForm: FormGroup = this.referencesFormComponent.refFormGroup;

    Object.keys(referencesInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.referencesFormComponent.refFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  }

  private addErrorByKey(key: string) {
    if(key == 'firstName') this.errorMessages.push("Please enter a valid First Name");
    if(key == 'lastName') this.errorMessages.push("Please enter a valid Last Name");
    if(key == 'email') this.errorMessages.push("Please Include an Email Address");
  }

  sentSnackBar() {
    this.snackBar.openFromComponent(SentMessage, {
      duration: this.durationOfMessage * 1000,
    });
  }

  errorSnackbar() {
    this.snackBar.openFromComponent(ErrorMessage, {
      duration: this.durationOfMessage * 1000,
    });
  }

  /**
  * onCreate
  * submission: Submission   
  */
  public onCreate() {
    this.api.CreateSubmission(this.submission).then(async (event) => {
      this.formSubmitted = true;
      Storage.put(this.submission.id + '/' + this.submission.uploadedVideo, this.file, {
        contentType: 'video/*',
      });
      this.sentSnackBar();
      this.createForm.reset();
      this.submission = null;
    }).catch((event) => {
      this.errorSnackbar();
      let errSpan = document.getElementById('errorMessageSent');
      let errMessageText = document.createTextNode(event.errors[0].message);
      errSpan.appendChild(errMessageText);
    });
  }

}
