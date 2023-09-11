import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UntypedFormGroup, FormControl, UntypedFormBuilder, ValidationErrors, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataStore, Storage } from 'aws-amplify';
import { APIService } from '../../../API.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { Subscription, GroupedObservable } from 'rxjs';
import { BasicInfoFormComponent } from '../basic-info-form/basic-info-form.component';
import { NominationDetailsFormComponent } from '../nomination-details-form/nomination-details-form.component';
import { ReferencesFormComponent } from '../references-form/references-form.component';
import { StoryDetailsFormComponent } from '../story-details-form/story-details-form.component';
import { ReviewFormComponent } from '../review-form/review-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SentMessage } from '../../messages/sent/sent.component';
import { ErrorMessage } from '../../messages/error/error.component';
import { AgreementFormComponent } from '../agreement-form/agreement-form.component';
import { Reference } from '../../../../types/Reference';
import { Submission } from '../../../../types/Submission';

const BASIC_INFO_INDEX: number = 0;
const NOMINATION_INDEX: number = 1;
const STORY_INDEX: number = 2;
const REFERENCES_INDEX: number = 3;
const AGREEMENT_INDEX: number = 4;
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
  agreementFormSubscriotion: Subscription = new Subscription;
  formSubmitted: boolean = false;
  allFormsValid: boolean = false;
  public createForm: FormGroup;
  destroyed = new Subject<void>();
  currentScreenSize: string;
  public file: File;
  public reference1: Reference;
  public reference2: Reference;

  displayNameMap = new Map([
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);

  @ViewChild(BasicInfoFormComponent) basicInfoFormComponent: BasicInfoFormComponent;
  @ViewChild(NominationDetailsFormComponent) nominationDetailsFormComponent: NominationDetailsFormComponent;
  @ViewChild(StoryDetailsFormComponent) storyDetailsFormComponent: StoryDetailsFormComponent;
  @ViewChild(ReferencesFormComponent) referencesFormComponent: ReferencesFormComponent;
  @ViewChild(AgreementFormComponent) agreementFormComponent: AgreementFormComponent;
  @ViewChild(ReviewFormComponent) reviewFormComponent: ReviewFormComponent;
  @Input() basicInfoFormGroup: FormGroup;
  @Input() nominationDetailsFormGroup: FormGroup;
  @Input() storyDetailsFormGroup: FormGroup;
  @Input() refFormGroup: FormGroup;
  @Input() disclaimerFormGroup: FormGroup;
  @Input() theChkAcceptTerms: boolean;
  @Input() canSubmit: boolean;
  constructor(private api: APIService, private fb: FormBuilder, private observer: BreakpointObserver, private snackBar: MatSnackBar) {
    this.theChkAcceptTerms;
    this.canSubmit;
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
    this.canSubmit = false;
  }

  ngOnDestroy() {
    this.basicInfoFormSubscription.unsubscribe();
    this.nominationInfoFormSubscription.unsubscribe();
    this.storyInfoFormSubscription.unsubscribe();
/*     this.referencesInfoFormSubscription.unsubscribe(); */
    this.agreementFormSubscriotion.unsubscribe();
  }

  ngAfterViewInit() {
    this.handleSubscriptions();
  }

  public changed(status: boolean, control: string ){

    switch(control) { 
        case 'theChkAcceptTerms': { 
           this.theChkAcceptTerms = status
           console.log('Checkbox clicked!')
            break; 
        } 
        default: { 
            break; 
        } 
    }
    if(this.theChkAcceptTerms){
      this.canSubmit = true;
      console.log('Can Submit!');
    }else{
      this.canSubmit = false;
      console.log('Cannot Submit!');
    }


  }

  private handleSubscriptions() {
    this.handleBasicInfoFormSubscription();
    this.handleNominationInfoFormSubscription();
    this.handleStoryInfoFormSubscription();
/*     this.handleReferencesInfoFormSubscription(); */
    this.handleAgreementFormSubscription();
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

/*   private handleReferencesInfoFormSubscription() {
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
  } */

  private handleAgreementFormSubscription() {
    this.agreementFormSubscriotion = this.agreementFormComponent
    .disclaimerFormGroup
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
/*     this.handleReferencesInfoFormCheck(); */
    this.handleAgreementDisclaimerFormCheck();
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

/*   private handleReferencesInfoFormCheck() {
    if (this.currentStepIndex == REFERENCES_INDEX) {
      if (this.referencesFormComponent.refFormGroup.valid) {
        this.clearIconError(REFERENCES_INDEX);
      }
    }
  } */

  private handleAgreementDisclaimerFormCheck() {
    if (this.currentStepIndex == AGREEMENT_INDEX) {
      if (this.agreementFormComponent.disclaimerFormGroup.valid) {
        this.clearIconError(AGREEMENT_INDEX);
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
    
/*     if(previousIndex == REFERENCES_INDEX) {
      this.referencesFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.referencesFormComponent.refFormGroup.valid);
      if (!validForm) {
        this.changeIcon(previousIndex);
        this.allFormsValid = false;
      } else {
        this.clearIconError(previousIndex);
        this.allFormsValid = true;
      }
    }  */
    
    if (previousIndex == AGREEMENT_INDEX) {
      this.agreementFormComponent.populateSubmission(this.submission);

      let validForm: boolean = (this.agreementFormComponent.disclaimerFormGroup.valid);
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
    iconElement.style.backgroundColor = '';
  }

  private changeIcon(index: number) {
    let iconElement: HTMLElement = this.getIconElementByIndex(index);
    iconElement.classList.add('mat-step-icon-invalid');
    iconElement.style.backgroundColor = '#e43a0f';
  }

  private getIconElementByIndex(index: number): HTMLElement {
    let nodeList: NodeList = document.querySelectorAll('.mat-step-icon');
    let node: Node | null = nodeList.item(index);
    return (<HTMLElement>node);
  }

  private validateForms() {
    this.errorMessages = [];

    this.validateBasicInfoForm();
    this.validateNominationInfoForm();
    this.validateStoryInfoForm();
/*     this.validateReferencesInfoForm(); */
    this.validateAgreementDisclaimerForm();
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

/*   private validateReferencesInfoForm() {
    let referencesInfoForm: FormGroup = this.referencesFormComponent.refFormGroup;

    Object.keys(referencesInfoForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.referencesFormComponent.refFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  } */

  private validateAgreementDisclaimerForm() {
    let agreementForm: FormGroup = this.agreementFormComponent.disclaimerFormGroup;

    Object.keys(agreementForm.controls).forEach(key => {
      const controlErrors: ValidationErrors = this.agreementFormComponent.disclaimerFormGroup;
      if (controlErrors != null) {
        this.addErrorByKey(key);
      }
    });
  }

  private addErrorByKey(key: string) {
    if(key == 'firstName') this.errorMessages.push("Please enter a valid First Name");
    else if(key == 'lastName') this.errorMessages.push("Please enter a valid Last Name");
    else if(key == 'email') this.errorMessages.push("Please include an Email Address");
/*     else if(key == 'referenceName1') this.errorMessages.push('Please include a Reference Name');
    else if(key == 'referenceEmail1') this.errorMessages.push('Please include a Reference Email Address');
    else if(key == 'referencePhone1') this.errorMessages.push('Please include a Reference Phone Number');
    else if(key == 'referenceName2') this.errorMessages.push('Please include a second Reference Name');
    else if(key == 'referenceEmail2') this.errorMessages.push('Please include a second Reference Email Address');
    else if(key == 'referencePhone2') this.errorMessages.push('Please include a second Reference Phone Number'); */
    else if(key == 'agreeToLicenseAndAgreement') this.errorMessages.push("Please Read and Accept the Licsense and Consent Agreement");
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
      const templateParams = { 
        name: this.submission.firstName, 
        email: this.submission.email,
        to: this.submission.email,
        notes: 'Thank You!'
      };
      emailjs.send('service_oklq2dk', 'template_aobn5vr', templateParams, 'E3cXIrDd4XOdlo26a')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED: ', err);
      })
      this.createForm.reset({
        'firstName': '',
        'lastName': '',
        'email': '',
        'phone': '',
        'nominatingOptions': '',
        'organizationName': '',
        'individualFullName': '',
        'individualEmailAddress': '',
        'category': '',
        'njCounty': '',
        'yourStory': '',
        'yourVideo': '',
        'referenceName1': '',
        'referenceEmail1': '',
        'referencePhone1': '',
        'referenceName2': '',
        'referenceEmail2': '',
        'referencePhone2': '',
        'agreeToLicenseAndAgreement': ''
      });
      this.submission = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        nominatingOptions: "",
        organizationName: "",
        individualFullName: "",
        individualEmailAddress: "",
        category: "",
        county: "",
        story: "",
        uploadedVideo: "",
        referenceOne: {
          name: "",
          email: "",
          phoneNumber: ""
        },
        referenceTwo: {
          name: "",
          email: "",
          phoneNumber: ""
        },
        disclaimerAgreement: false
      };

      this.sentSnackBar();
    }).catch((event) => {
      this.errorSnackbar();
      let errSpan = document.getElementById('errorMessageSent');
      let errMessageText = document.createTextNode(event.errors[0].message);
      errSpan?.appendChild(errMessageText);
    });
  }

}
