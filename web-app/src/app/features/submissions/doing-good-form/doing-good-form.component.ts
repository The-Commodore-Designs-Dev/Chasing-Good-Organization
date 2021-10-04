import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { DataStore } from 'aws-amplify';
import { APIService } from '../../../API.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Submission } from '../../../../models';
import { Subscription, GroupedObservable } from 'rxjs';
import { BasicInfoFormComponent } from '../basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from '../nomination-details-form/nomination-details-form.component';
import { ReferencesFormComponent } from '../references-form/references-form.component';
import { StoryDetailsFormComponent } from '../story-details-form/story-details-form.component';
import { ReviewFormComponent } from '../review-form/review-form.component';

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
  errorMessages: string[] = [];
  submission: Submission = {} as Submission;
  currentStepIndex: number = 0;
  basicInfoFormSubscription: Subscription = new Subscription;
  formSubmitted: boolean = false;
  allFormsValid: boolean = false;
  public createForm: FormGroup;

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
  constructor(private api: APIService, private fb: FormBuilder) {}

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
  }

  ngAfterViewInit() {
    this.handleSubscriptions();
  }

  private handleSubscriptions() {
    this.handleBasicInfoFormSubscription();
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

  private handleFormCheck() {
    this.handleBasicInfoFormCheck();
  }

  private handleBasicInfoFormCheck() {
    if (this.currentStepIndex == BASIC_INFO_INDEX) {
      if (this.basicInfoFormComponent.basicInfoFormGroup.valid) {
        this.clearIconError(BASIC_INFO_INDEX);
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

    if (currentIndex == REVIEW_INDEX) {
      this.validateForms();
      console.log(this.submission.email);
      console.log(this.submission.firstName);
      console.log(this.submission.lastName);
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
    this.validateAtLeastOneContactMethod();
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

  private validateAtLeastOneContactMethod() {
    if(!this.submission.email && !this.submission.phoneNumber) {
      this.errorMessages.push("Please include at least one method of contact (email or phone)");
    }
  }

  private addErrorByKey(key: string) {
    if(key == 'firstName') this.errorMessages.push("Please enter a valid First Name");
    if(key == 'lastName') this.errorMessages.push("Please enter a valid Last Name");
  }

  /**
  * onCreate
  * submission: Submission   
  */
  public onCreate(submission: Submission) {
    this.api.CreateSubmission(submission).then(async (event) => {
      try {
        await DataStore.save(
          new Submission({
            firstName: this.submission.firstName,
            lastName: this.submission.lastName,
            email: this.submission.email,
            phoneNumber: this.submission.phoneNumber,
            date: this.submission.createdAt,
            nominatingOptions: this.submission.nominatingOptions,
            organizationName: this.submission.organizationName,
            individualFullName: this.submission.individualFullName,
            otherDescription: this.submission.otherDescription,
            category: this.submission.category,
            county: this.submission.county,
            story: this.submission.story,
            uploadedVideo: this.submission.uploadedVideo,
            referenceOne: this.submission.referenceOne,
            referenceTwo: this.submission.referenceTwo,
            disclaimerAgreement: this.submission.disclaimerAgreement
          })
        );
      } catch (error) {
        
      }
      alert('Thank you, your form has been submitted!')
      console.log('Submitted!');
      this.createForm.reset();
    }).catch(() => {
      alert('Sorry, something went wrong. We are working on it!');
      console.log('error submitting story ...');
    });
  }

}
