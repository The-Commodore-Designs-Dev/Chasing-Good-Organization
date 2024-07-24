import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent implements OnInit {
  pp_header = `Privacy Policy`;
  pp_last_updated = `Last updated: February 15, 2022`;
  pp_para1 = `Please carefully read the following Privacy Policy by Chasing Good, a NJ non profit corporation organized under the laws of the State of New Jersey (“Chasing Good”), before using the website at http://chasinggood.org (the “Site”) or any of the services offered by or through the Site (collectively, the “Services”).  By accessing or using the Site, or otherwise engaging in or using the Services, you agree to the terms of this Privacy Policy.`;
  pp_para2 = `As used in this Privacy Policy, unless otherwise specified or not applicable, the terms “we,” “us” and “our” shall mean Chasing Good, the owner of the Site and the provider of the Services offered through the Site.  As used in this Privacy Policy, unless otherwise specified or not applicable, the terms “User,” “you” and/or “your” specifically means visitors and/or users of the Site and/or the Services.`; 
  pp_para3 = `This Privacy Policy governs the use of information that may personally identify you, that may be combined with other information that may identify you, or that may be used to contact you (collectively, your “Personal Information”), that is accessed, collected and/or stored when you access or use the Site and/or the Services, or that you may otherwise provide through any communications between us and you.`;
  pp_para4 = `The Site and the Services, or portions thereof, may change from time to time.  As a result, at times it may be necessary for Chasing Good make changes to this Privacy Policy.  We will not make changes that result in significant additional uses or disclosures of your Personal Information without allowing you to “opt in” and consent to such changes.`;
  pp_para5 = `We may also make non-significant changes to this Privacy Policy that generally will not significantly affect our use of your Personal Information for which your opt-in and consent is not required.  We encourage you to check this page periodically for any changes.  If any non-significant changes to this Privacy Policy are unacceptable to you, you must immediately stop using the Site and the Services.  Your continued use of the Site and/or the Services, following the posting of non-significant changes to this Privacy Policy constitutes your acceptance of those changes.`;
  pp_para6 = `Chasing Good further maintains an online Terms and Conditions of Use Agreement for the Site, the contents of which are incorporated into this Privacy Policy in their entirety by reference.  Please do not use the Site and/or the Services provided thereby until you have reviewed the Terms and Conditions of Use Agreement.  Your use of the Site and/or the Services constitutes your acceptance of the terms, conditions and obligations of the Terms and Conditions of Use Agreement.`;
  pp_para7 = `The Site and the Services are not intended for use in the European Economic Area and the United Kingdom.  As such, to the extent that the Site is viewable to individuals located in the European Economic Area and/or the United Kingdom, viewers must not use the Site or engage or use any of the Services provided by and through the Site, as this Privacy Policy may not necessarily comply with the General Data Protection Regulation 2016/679 (the “GDPR”).  As such, viewers in the European Economic Area and the United Kingdom are not allowed to use the Site and/or any of the Services.  This Privacy Policy further sets out our practices and obligations under the California Consumer Privacy Act of 2018 (“CCPA”) and the California Online Privacy Protection Act (“CalOPPA”).`;
  pp_cpi_header = `COLLECTING PERSONAL INFORMATION`;
  pp_cpi_subheader1 = `General`;
  pp_cpi_para1 = `When you visit the Site, we do not collect any information about your device or your interaction with the Site.  When you utilize any of the Services offered through the Site, we do not collect any information regarding your device and your interaction with the Site.  We do collect information voluntarily provided by you when you nominate an individual for recognition and a potential financial award by Chasing Good for that individual’s volunteer and charitable works as may be determined by Chasing Good in its sole and absolute discretion (in each such case, a “Nomination” and the nominated party referred to hereafter as the “Nominated Party” and the nominating User referred to hereafter as the “Nominating Party”).  This information may include, in part, your Personal Information and that of the Nominated Party.`;
  pp_cpi_subheader2 = `Personal Information Collected`;
  pp_cpi_para2 = `When you access and use the Site or otherwise engage in or utilize any of the Services, including making a Nomination, you may voluntarily provide us with limited Personal Information, such as, your name, phone number, mailing address and/or email address, which is encrypted via an SHA1, SHA-256, or MD5 hashed email identifier, and various descriptive information and content regarding Nominated Parties, as detailed below.  Further, you will provide Personal Information when you communicate with us by phone, e-mail or otherwise.  We use any such Personal Information provided by you to  communicate with you and to provide you with the ability to make a Nomination.  Any Personal Information we collect is voluntarily provided by you.  No Personal Information or non-Personal Information you voluntarily provide to us is shared with any third-party, including, but not limited to, data processors, marketing agencies or advertisers.`;
  pp_cpi_subheader3 = `Information Collected About Others`;
  pp_cpi_para3 = `The Site and our Services allows a User, as a Nominating Party, to submit various information regarding the Nominated Party.  Information provided by a Nominating Party concerning a Nominated Party may include certain of that individual’s limited Personal Information such as their name, email address, and phone number, as well as a summary description of the Nominated Party’s volunteer and charitable works in support of their Nomination.  We may collect any such information submitted or shared by you with respect to a Nomination, including your Personal Information and that of the Nominated Party.  The decision to provide such information is optional but required as part of the Nomination process.`;
  pp_cpi_subheader4 = `Minors`;
  pp_cpi_para4 = `The Site and the Services provided through the Site are not intended for individuals under the age of 18 or the age of majority of the state or jurisdiction in which they reside who are not legally capable of entering into binding contracts.  We do not intentionally collect Personal Information from children.  If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us at the address below to request deletion.`;
  pp_cpi_para5 = `Minors of at least thirteen (13) years of age may be Nominated for recognition, provided that at least one parent or legal guardian of the minor Nominated Party is provided in the Nomination, along with the parent or legal guardian’s email address and phone number AND the parent or legal guardian provides us with express written consent authorizing the Nomination of the minor Nominated Party for potential recognition.  Failure to provide the name, email address and phone number of the parent or legal guardian of the minor Nominated Party may result in termination of the Nomination and deletion of the limited Personal Information of the minor Nominated Party from our servers.  Should the parent or legal guardian of the minor Nominated Party refuse to consent and authorize the processing and consideration of the minor Nominated Party, the Nomination shall be terminated and the limited Personal Information of the minor Nominated Party shall be deleted from our servers.`;
  pp_spi_header = `SHARING PERSONAL INFORMATION`;
  pp_spi_subheader1 = `General`;
  pp_spi_para1 = `We may share limited Personal Information (concerning you and/or a Nominated Party) that we have collected from you with various third-party service providers (processors), but solely to help us operate the Site and/or provide our Services.  In addition, we may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.`;
  pp_spi_subheader2 = `Behavioral Advertising`;
  pp_spi_para2 = `We will not use your Personal Information, or that of a Nominated Party, solely or in combination with any non-Personal Information, for any advertising or marketing communications.  Chasing Good will never sell, trade, or rent your Personal Information or the Personal Information of any Nominated Party to other individuals or companies.`;
  pp_upi_header = `USING PERSONAL INFORMATION`;
  pp_upi_subheader1 = `General`;
  pp_upi_para1 = `We may use your Personal Information for internal purposes, such as to improve the Site and the Services, for fund-raising for our organization, to provide you with news and communications regarding our organization, Nominated Parties, our mission, and our community, and to otherwise communicate with you about us, our organization, and our community.  We will also use your Personal Information, and that of a Nominated Party, for the Nomination process and to potentially recognize the Nominated Party in accordance with our mission of recognizing good in our community.`;
  pp_upi_para2 = `We may use your Personal Information when contacting a Nominated Party that you have Nominated, but only with your consent.  You may choose to anonymously Nominate an individual for recognition by Chasing Good.`;
  pp_upi_para3 = `We may also use your Personal Information should your Nominated Party be selected for recognition.  Such use may be through the Site, our email newsletters, various news outlets and platforms (print and online), Social Networking sites, email and/or through other communicative means.`;
  pp_upi_para4 = `When you Nominate a Party for recognition, we contact the Nominated Party based on the information provided by you in the Nomination.  The Nominated Party will be provided the option by us to refuse the Nomination.  The Nominated Party will also be provided the option to have the Nominated Party’s Personal Information provided by you deleted from our servers.  We will honor any such requests by the Nominated Party.  Should the Nominated Party be selected for recognition, we may use the Nominated Party’s Personal Information as expressly permitted and authorized by the Nominated Party.  Such use of the Nominated Party’s Personal Information may be through the Site, our email newsletters, various news outlets and platforms (print and online), Social Networking sites, email and through other communicative means.`;
  pp_upi_subheader2 = `External Links`;
  pp_upi_para5 = `The Site and/or certain of the Services may contain links to third party sites (“Other Sites”).  Other Sites may also reference, promote, or link to the Site.  Chasing Good does not endorse or sponsor Other Sites, is not responsible for the privacy practices or the content of Other Sites, expressly disclaims any statements or assertions made on such Other Sites, and denies all liability associated with your use of, and the content on, such Other Sites.  Please be advised that the practices described in this Privacy Policy do not apply to information gathered through Other Sites.  We encourage you to read the privacy policies of each and every website that you visit.`;
  pp_upi_subheader3 = `Security`;
  pp_upi_para6 = `We recognize the importance of safeguarding the confidentiality of your Personal Information and the Personal Information of Nominated Parties.  Accordingly, we employ commercially reasonable measures designed to protect your information from unauthorized access, disclosure, and use.  However, no data transmission over the Internet or other network can be guaranteed to be 100% secure.  As a result, while we strive to protect information transmitted on or through the Site and the Services, we cannot and do not guarantee the security of any information you transmit on or through the Site and the Services, and you do so at your own risk.`;
  pp_upi_subheader4 = `Processing in the United States`;
  pp_upi_para7 = `Please be aware that the Site, the Services, and the servers used in connection therewith are operated solely in the United States and that your Personal Information and the Personal Information of Nominated Parties, and any communications between us and you and any Nominated Party, may be transferred to and maintained on servers or databases located outside your state, province, or country.  By providing any information to us, you fully understand, acknowledge, and agree to this Privacy Policy.  If you are located outside of the United States, please be advised that the laws of the United States may not be as protective of your privacy as those in your location.  By using the Site and/or the Services, you agree that the collection, use, transfer, and disclosure of your Personal Information and communications will be governed by the applicable laws in the United States.`;
  pp_upi_subheader5 = `Choice of Law`;
  pp_upi_para8 = `This Privacy Policy shall be deemed to have been made in the State of New Jersey, United States of America and all matters arising from or relating in any manner to the subject matter of this Privacy Policy shall be interpreted, and the rights and liabilities of the parties determined, in accordance with the Laws of the State of New Jersey applicable to agreements executed, delivered, and performed within such State, without regard to the principles of conflicts of Laws thereof.`;
  pp_upi_subheader6 = `CCPA`;
  pp_upi_para9 = `If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the “Right to Know”), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased.  If you would like to exercise these rights, please contact us through the contact information below.`;
  pp_upi_para10 = `If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address below.`;
  pp_upi_subheader7 = `Changes`;
  pp_upi_para11 = `We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.`;
  pp_upi_subheader8 = `Contact`;
  pp_upi_para12 = `For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at chasinggoodnj@gmail.com or by mail using the details provided below:`;
  pp_upi_para13 = `Chasing Good, PO Box 155, Cranford, NJ 07016`;
  pp_upi_para14 = `For more information about our email subscription privacy practices, or if you have questions regarding our email subscription privacy practices, or if you would like to make a complaint regarding our email subscription privacy practices, please contact Chasing Good by e-mail at chasinggoodnj@gmail.com or by mail using the details provided below:`;
  pp_upi_para15 = `Chasing Good, PO Box 155, Cranford, NJ 07016`;
  pp_upi_para16 = `If you are not satisfied with our response to your complaint, you have the right to lodge your complaint with the relevant data protection authority.  You can contact your local data protection authority, or our supervisory authority here:`;
  pp_upi_para17 = {
    line1: `Federal Trade Commission`,
    line2: `600 Pennsylvania Avenue, NW`,
    line3: `Washington, DC 20580`,
    line4: `Telephone: (202) 326-2222`,
    line5: `https://reportfraud.ftc.gov/#/`,
  };
  pp_upi_para18 = `For complaints arising under the CCPA, please contact:`;
  pp_upi_para19 = {
    line1: `Rob Bonta`,
    line2: `Attorney General`,
    line3: `State of California Department of Justice`,
    line4: `1300 "I" Street`,
    line5: `Sacramento, CA 95814-2919`,
    line6: `Telephone: (916) 445-9555`,
    line7: `https://oag.ca.gov/contact/consumer-complaint-against-business-or-company`
  };



  constructor() { }

  ngOnInit(): void {
  }

}
