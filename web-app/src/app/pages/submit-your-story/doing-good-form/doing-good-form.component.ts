import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { DataStore } from 'aws-amplify';
import { APIService } from '../../../API.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Submission } from '../../../../types/Submission';
import { Subscription, GroupedObservable } from 'rxjs';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from './nomination-details-form/nomination-details-form.component';
import { StoryDetailsFormComponent } from './story-details-form/story-details-form.component';
import { DisclaimerFormComponent } from './disclaimer-form/disclaimer-form.component';
import { ReviewAndSubmitComponent } from './review-and-submit/review-and-submit.component';
import { ReferencesFormComponent } from './references-form/references-form.component';

const BASIC_INFO_INDEX: number = 0;
const NOMINATION_INDEX: number = 1;
const STORY_INDEX: number = 2;
const REVIEW_INDEX: number = 3;

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
  public refFormGroup: FormGroup;
  public disclaimerFormGroup: FormGroup;
  
  public basicInfoFormGroup: FormGroup =  new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    phone: new FormControl(''), 
  });
  
  public nominationDetailsFormGroup: FormGroup = new FormGroup({
    nominatingOptions: new FormControl(''),
    organizationName: new FormControl(''),
    individualFullName: new FormControl(''),
    otherDescription: new FormControl(''),
    category: new FormControl(''),
    njCounty: new FormControl('')
  });

  public storyDetailsFormGroup: FormGroup = new FormGroup({
    yourStory: new FormControl(''),
    yourVideo: new FormControl(''),
  });

  @ViewChild(BasicInfoFormComponent)
  basicInfoFormComponent: BasicInfoFormComponent;

  @ViewChild(NominationDetailsFormComponent)
  nominationDetailsFormComponent: NominationDetailsFormComponent;

  @ViewChild(StoryDetailsFormComponent)
  storyDetailsFormComponent: StoryDetailsFormComponent;

  @ViewChild(ReferencesFormComponent)
  referencesFormComponent: ReferencesFormComponent;

  @ViewChild(DisclaimerFormComponent)
  disclaimerFormComponent: DisclaimerFormComponent;

  @ViewChild(ReviewAndSubmitComponent)
  reviewAndSubmitComponent: ReviewAndSubmitComponent;
 
  constructor(private api: APIService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.basicInfoFormGroup = this.fb.group({
      'firstName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'lastName': ['', [Validators.required, Validators.pattern('[A-Za-z \-\_]+')]],
      'email': ['', {
        validators: Validators.compose([Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
      }],
      'phone': ['', {}]
    });

    this.nominationDetailsFormGroup = this.fb.group({
      'nominatingOptions': [['Self', 'Organization', 'Individual', 'Other'], []],
      'organizationName': ['', []],
      'individualFullName': ['', []],
      'otherDescription': ['', []],
      'category': ['', []],
      'njCounty': ['', []]
    });

    this.storyDetailsFormGroup = this.fb.group({
      'yourStory': ['', []],
      'yourVideo': ['', []]
    });

    this.refFormGroup = this.fb.group({
      'referenceName1': ['', []],
      'referenceEmail1': ['', []],
      'referencePhone1': ['', []],
      'referenceName2': ['', []],
      'referenceEmail2': ['', []],
      'referencePhone2': ['', []],
    });

    this.disclaimerFormGroup = this.fb.group({
      'agreeToDisclaimer': ['', []]
    });      

    this.createForm = this.fb.group({
      basicInfoForm: this.basicInfoFormGroup,
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
    //gotta do this here so we have a handle on the child components
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
      )
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
    } else if (previousIndex == NOMINATION_INDEX) {
      this.nominationDetailsFormComponent.populateSubmission(this.submission);
    } else if (previousIndex == STORY_INDEX) {
      this.storyDetailsFormComponent.populateSubmission(this.submission);
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
    let node = nodeList.item(index);

    return (<HTMLElement>node);
  }

  private validateForms() {    
    this.errorMessages = [];

    this.validateBasicInfoForm();
    this.validateEmailAddress();
  }

  private validateBasicInfoForm() {
    let basicInfoForm: FormGroup = this.basicInfoFormComponent.basicInfoFormGroup;

    Object.keys(basicInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = basicInfoForm.get(key).errors;
      if (controlErrors != null) {
        this.addErrorByKey(key);    
      }
    });
  }

  private validateEmailAddress() {
    if (!this.submission.email) {

        this.errorMessages.push("Please include at least one method of contact (phone, email, address)")
    }
  }

  private addErrorByKey(key: string) {
    if (key == 'firstName') this.errorMessages.push("Please enter a valid first name");
    if (key == 'lastName') this.errorMessages.push("Please enter a valid last name");
  }

  /**
  * onCreate
  * submission: Submission   
  */
  public onCreate(submission: Submission) {
    this.api.CreateSubmission(submission).then(async (event) => {
      alert('Thank you, your form has been submitted!')
      console.log('Submitted!');
      this.createForm.reset();
    }).catch(() => {
      alert('Sorry, something went wrong. We are working on it!');
      console.log('error submitting story ...');
    });
  }

}
