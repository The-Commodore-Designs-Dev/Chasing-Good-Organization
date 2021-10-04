import { NJCounty } from './NJCounty';
import { Reference } from './Reference';
import { Vote } from './Vote';

export interface Submission {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    date: string;
    nominatingOptions: string;
    organizationName: string;
    individualFullName: string;
    otherDescription: string;
    category?: string;
    county?: NJCounty[];
    story: string;
    uploadedVideo: string;
    referenceOne?: Reference[];
    referenceTwo?: Reference[];
    disclaimerAgreement: boolean;
    voted?: Vote[];
}