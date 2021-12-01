import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SubmissionMetaData = {
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
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly nominatingOptions?: string;
  readonly organizationName?: string;
  readonly individualFullName?: string;
  readonly individualEmailAddress?: string;
  readonly category?: string;
  readonly county?: string;
  readonly story?: string;
  readonly uploadedVideo?: string;
  readonly referenceOne?: string;
  readonly referenceTwo?: string;
  readonly disclaimerAgreement?: boolean;
  readonly votes?: (Vote | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Submission, SubmissionMetaData>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission, SubmissionMetaData>) => MutableModel<Submission, SubmissionMetaData> | void): Submission;
}

export declare class Vote {
  readonly id: string;
  readonly voteID: string;
  readonly voted?: boolean;
  readonly totalVotesEarned?: number;
  readonly maxVotesPossible?: number;
  readonly judges?: (Judge | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Vote, VoteMetaData>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote, VoteMetaData>) => MutableModel<Vote, VoteMetaData> | void): Vote;
}

export declare class Judge {
  readonly id: string;
  readonly judgeID: string;
  readonly name?: string;
  readonly username?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Judge, JudgeMetaData>);
  static copyOf(source: Judge, mutator: (draft: MutableModel<Judge, JudgeMetaData>) => MutableModel<Judge, JudgeMetaData> | void): Judge;
}