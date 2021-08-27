import { NJCounty } from './njCounties';
export interface Submission {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    nominating: string;
    nominatingOrganization: string;
    nominatingIndividual: string;
    nominatingOther: string;
    category: string;
    county: NJCounty;
    story: string;
    uploadedVideo: boolean;
    referenceName1: string;
    referenceEmail1: string;
    referenceName2: string;
    referenceEmail2: string;
    agreement: boolean;
    voted: boolean;
}