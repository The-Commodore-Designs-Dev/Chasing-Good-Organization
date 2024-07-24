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
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly nominatingOptions?: string | null;
  readonly organizationName?: string | null;
  readonly individualFullName?: string | null;
  readonly individualEmailAddress?: string | null;
  readonly category?: string | null;
  readonly county?: string | null;
  readonly story?: string | null;
  readonly uploadedVideo?: string | null;
  readonly referenceOne?: object | null;
  readonly referenceTwo?: object | null;
  readonly disclaimerAgreement?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Submission>);
  static copyOf(source: Submission, mutator: (draft: MutableModel<Submission>) => MutableModel<Submission> | void): Submission;
}

export declare class Vote {
  readonly id: string;
  readonly voteID: string;
  readonly voted?: boolean | null;
  readonly totalVotesEarned?: number | null;
  readonly maxVotesPossible?: number | null;
  readonly judges?: (Judge | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vote>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}

export declare class Judge {
  readonly id: string;
  readonly judgeID: string;
  readonly name?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Judge>);
  static copyOf(source: Judge, mutator: (draft: MutableModel<Judge>) => MutableModel<Judge> | void): Judge;
}