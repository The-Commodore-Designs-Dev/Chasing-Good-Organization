import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UntypedFormGroup, FormControl, UntypedFormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Submission } from 'src/types/Submission';

@Component({
  selector: 'app-agreement-form',
  templateUrl: './agreement-form.component.html',
  styleUrls: ['./agreement-form.component.scss']
})
export class AgreementFormComponent implements OnInit {
  nlca_header = `Nomination License and Consent Agreement`;
  nlca_last_updated = `Last updated: March 9, 2022`;
  nlca_para1 = `Please carefully read the following Nomination License and Consent Agreement (the “Agreement”) by and between Chasing Good, a corporation organized under the laws of the State of New Jersey (“Chasing Good”), and you, as a requesting Nominating Party seeking to submit a Nomination on behalf of a Nominated Party(as those terms are defined in Chasing Good’s Privacy Policy).`;
  nlca_para2 = `As used in this Agreement, unless otherwise specified or not applicable, the terms “we,” “us” and “our” shall mean Chasing Good, the owner of the website at http://chasinggood.org (the “Site”) and the provider of the services offered by or through the Site (collectively, the “Services”), including those Services directed towards the Nomination and award process to recognize individuals for their volunteer and charitable works as may be determined by Chasing Good (in each such case, the “Nomination Process”).  As used in this Agreement, unless otherwise specified or not applicable, the terms “you” and/or “your” specifically means you, as a Nominating Party engaging in the Nomination Process of a Nominated Party for potential recognition by Chasing Good.`;
  nlca_para3 = `In addition to the terms and provisions of our Privacy Policy, which are incorporated by reference in their entirety into this Agreement, the following additional terms and conditions shall apply to each Nomination submitted by you to Chasing Good.  In order to submit a Nomination, you must expressly agree to the terms and conditions of this Agreement by providing to Chasing Good the requested information in the Nomination form and checking the appropriate box(es) at the bottom of this Agreement.  If you do not agree to the terms and conditions of this Agreement, or are otherwise unable to do so, then do not submit the Nomination.  By checking the applicable box(es) at the bottom of this Agreement, you expressly warrant, represent, and agree that the information in the Nomination form is true and accurate and that you agree to be bound by the terms and conditions of this Agreement.`;
  nlca_ol = {
    list_item_1: {
      para1: `1.	License to Content.  When submitting a Nomination to Nominate an individual for recognition by Chasing Good, you, as the Nominating Party, will be required to submit various content through our Nomination form.  Submitted content shall include written content as to the Nominating Party, including that party’s name, email address, and pertinent information in support of the Nomination, i.e., a narrative by you as to why the Nominated Party deserves recognition.  Submitted content may also comprise, at your discretion, photographic images and/or recorded video in digital format (in all such cases, “Digital Content”).  By submitting Digital Content, you expressly understand, acknowledge, and agree to the following provisions:`,
      list_item_a: `Owner/Creator/Permission.  You are the creator/owner of all submitted Digital Content or have the express, written permission by the creator/owner of the Digital Content to use that content for purposes of Nominating the Nominated Party and to grant the license rights to us as set forth below.  In the event you are not the creator/owner of the Digital Content but have the express written permission by the creator/owner of that content to use it in the Nomination Process, you have the express written authorization by that third party creator/owner to grant to Chasing Good the license rights set forth below.`,
      list_item_b: `Grant of License by Creator/Owner.  As the creator/owner of the Digital Content, or with the express, written permission by and from the creator/owner of the Digital Content, upon submission thereof to us, you hereby grant to Chasing Good an irrevocable, perpetual, royalty-free, fully-paid up, non-exclusive license to use the Digital Content for the Nomination Process, potential recognition of the Nominated Party by Chasing Good, promotional, marketing and public relations efforts (including, but not limited to, through third party platforms, media outlets and the Site), or any other manner in Chasing Good’s sole and absolute discretion.`
    },
    list_item_2: `Consent/Express Permission by Parent/Guardian.  If the Nominated Party is under the age of eighteen (18) years of age, and you, as the Nominating Party, are not a parent or legal guardian of the Nominated Party, you have the express written permission of a parent or legal guardian of the Nominated Party to use any Digital Content in which the minor Nominated Party is depicted.  Upon request by Chasing Good, you agree to provide to us a digital, legible copy of that written consent for our records.  Failure to provide a copy of the written consent may result in termination of the Nomination Process as to a minor Nominated Party and render the minor Nominated Party ineligible for recognition by Chasing Good.`,
    list_item_3: `Indemnity.  You agree to indemnify and hold Chasing Good, and, as applicable, its parent, subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your violation of any term, condition or obligation of this Agreement, or your violation of any rights of another.`,
    list_item_4: `Law. This Agreement shall be deemed to have been made in the State of New Jersey, United States of America and all matters arising from or relating in any manner to the subject matter of this Agreement shall be interpreted, and the rights and liabilities of the parties determined, in accordance with the Laws of the State of New Jersey applicable to agreements executed, delivered, and performed within such State, without regard to the principles of conflicts of Laws thereof.  As part of the consideration for value received, you further consent to the exclusive jurisdiction of any state or federal court located within the State of New Jersey with respect to all matters arising from or relating in any manner to the subject matter of this Agreement.  With respect to all matters arising from or relating in any manner to the subject matter of this Agreement, you further hereby: (a) waive any objection to New Jersey as the venue of any action instituted hereunder, and (b) consent to the granting of such legal or equitable relief as is deemed appropriate by any aforementioned court.`
  };
  nlca_fine_print: `As the Nominating Party in this Nomination, I expressly warrant and represent that: 1) I am the creator/owner of all Digital Content submitted with the Nomination or otherwise have the express, written consent from the creator/owner of the Digital Content to use it in this Nomination for the purposes stated above, 2) I have the authority to grant to Chasing Good the license rights to the Digital Content as set forth above, and 3) If the Nominated Party is under the age of eighteen (18) years of age, I am either a parent or legal guardian of the Nominated Party or otherwise have the express written permission of a parent or legal guardian of the Nominated Party to use the Digital Content in which the minor Nominated Party is depicted.  I further expressly, warrant and represent that, upon request by Chasing Good, I will provide to Chasing Good a digital, legible copy of the written consent by the Nominated Party’s parent or legal guardian.`;
  public disclaimerFormGroup: UntypedFormGroup;
  public checkbox1: boolean;

  @Input() submission: Submission;



  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.checkbox1 = false;
    this.disclaimerFormGroup = this.fb.group({
      'agreeToLicenseAndAgreement': ['', [Validators.required]]
    });
  }

  populateSubmission(submission: Submission) {
    let disclaimer: UntypedFormGroup = this.disclaimerFormGroup;

    submission.disclaimerAgreement = disclaimer.controls['agreeToLicenseAndAgreement'].value;
  }
}
