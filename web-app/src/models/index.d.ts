import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubmissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NJCountyMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReferenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JudgeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Submission {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly date: string;
  readonly nominatingOptions: string;
  readonly organizationName: string;
  readonly individualFullName: string;
  readonly otherDescription: string;
  readonly category?: Category[];
  readonly county?: NJCounty[];
  readonly story: string;
  readonly uploadedVideo: string;
  readonly referenceOne?: Reference[];
  readonly referenceTwo?: Reference[];
  readonly disclaimerAgreement: boolean;
  readonly voted?: Vote[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Submission, SubmissionMetaData>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission, SubmissionMetaData>) => MutableModel<Submission, SubmissionMetaData> | void): Submission;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly categoryID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class NJCounty {
  readonly id: string;
  readonly name: string;
  readonly countyID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NJCounty, NJCountyMetaData>);
  static copyOf(source: NJCounty, mutator: (draft: MutableModel<NJCounty, NJCountyMetaData>) => MutableModel<NJCounty, NJCountyMetaData> | void): NJCounty;
}

export declare class Reference {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: string;
  readonly referenceID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Reference, ReferenceMetaData>);
  static copyOf(source: Reference, mutator: (draft: MutableModel<Reference, ReferenceMetaData>) => MutableModel<Reference, ReferenceMetaData> | void): Reference;
}

export declare class Vote {
  readonly id: string;
  readonly voted: boolean;
  readonly totalVotesEarned: number;
  readonly maxVotesPossible: number;
  readonly judges?: Judge[];
  readonly voteID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vote, VoteMetaData>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote, VoteMetaData>) => MutableModel<Vote, VoteMetaData> | void): Vote;
}

export declare class Judge {
  readonly id: string;
  readonly name: string;
  readonly username: string;
  readonly judgeID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Judge, JudgeMetaData>);
  static copyOf(source: Judge, mutator: (draft: MutableModel<Judge, JudgeMetaData>) => MutableModel<Judge, JudgeMetaData> | void): Judge;
}