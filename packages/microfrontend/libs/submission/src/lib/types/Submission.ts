import { NJCounty } from './NJCounty';
import { Reference } from './Reference';
import { Vote } from './Vote';

export interface Submission {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    date?: string | null;
    nominatingOptions?: string | null;
    organizationName?: string | null;
    individualFullName?: string | null;
    individualEmailAddress?: string | null;
    category?: string | null;
    county?: string | null;
    story?: string | null;
    uploadedVideo?: string | null;
    referenceOne?: string | null;
    referenceTwo?: string | null;
    disclaimerAgreement?: boolean | null;
}