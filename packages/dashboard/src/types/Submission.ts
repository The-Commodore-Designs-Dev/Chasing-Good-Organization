import { NJCounty } from './NJCounty';
import { Reference } from './Reference';
import { Vote } from './Vote';

export interface Submission {
    id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    date?: string;
    nominatingOptions?: string;
    organizationName?: string;
    individualFullName?: string;
    individualEmailAddress?: string;
    category?: string;
    county?: string;
    story?: string;
    uploadedVideo?: string;
    referenceOne?: string;
    referenceTwo?: string;
    disclaimerAgreement?: boolean;
}