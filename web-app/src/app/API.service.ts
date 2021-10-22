/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateSubmission: OnCreateSubmissionSubscription;
  onUpdateSubmission: OnUpdateSubmissionSubscription;
  onDeleteSubmission: OnDeleteSubmissionSubscription;
  onCreateVote: OnCreateVoteSubscription;
  onUpdateVote: OnUpdateVoteSubscription;
  onDeleteVote: OnDeleteVoteSubscription;
  onCreateJudge: OnCreateJudgeSubscription;
  onUpdateJudge: OnUpdateJudgeSubscription;
  onDeleteJudge: OnDeleteJudgeSubscription;
};

export type CreateSubmissionInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
};

export type ModelSubmissionConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  nominatingOptions?: ModelStringInput | null;
  organizationName?: ModelStringInput | null;
  individualFullName?: ModelStringInput | null;
  otherDescription?: ModelStringInput | null;
  category?: ModelStringInput | null;
  county?: ModelStringInput | null;
  story?: ModelStringInput | null;
  uploadedVideo?: ModelStringInput | null;
  referenceOne?: ModelStringInput | null;
  referenceTwo?: ModelStringInput | null;
  disclaimerAgreement?: ModelBooleanInput | null;
  and?: Array<ModelSubmissionConditionInput | null> | null;
  or?: Array<ModelSubmissionConditionInput | null> | null;
  not?: ModelSubmissionConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Submission = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: ModelVoteConnection | null;
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection";
  items?: Array<Vote | null> | null;
  nextToken?: string | null;
};

export type Vote = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: ModelJudgeConnection | null;
};

export type ModelJudgeConnection = {
  __typename: "ModelJudgeConnection";
  items?: Array<Judge | null> | null;
  nextToken?: string | null;
};

export type Judge = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSubmissionInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
};

export type DeleteSubmissionInput = {
  id: string;
};

export type CreateVoteInput = {
  id?: string | null;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
};

export type ModelVoteConditionInput = {
  voteID?: ModelIDInput | null;
  voted?: ModelBooleanInput | null;
  totalVotesEarned?: ModelIntInput | null;
  maxVotesPossible?: ModelIntInput | null;
  and?: Array<ModelVoteConditionInput | null> | null;
  or?: Array<ModelVoteConditionInput | null> | null;
  not?: ModelVoteConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateVoteInput = {
  id: string;
  voteID?: string | null;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
};

export type DeleteVoteInput = {
  id: string;
};

export type CreateJudgeInput = {
  id?: string | null;
  judgeID: string;
  name?: string | null;
  username?: string | null;
};

export type ModelJudgeConditionInput = {
  judgeID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelJudgeConditionInput | null> | null;
  or?: Array<ModelJudgeConditionInput | null> | null;
  not?: ModelJudgeConditionInput | null;
};

export type UpdateJudgeInput = {
  id: string;
  judgeID?: string | null;
  name?: string | null;
  username?: string | null;
};

export type DeleteJudgeInput = {
  id: string;
};

export type ModelSubmissionFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  nominatingOptions?: ModelStringInput | null;
  organizationName?: ModelStringInput | null;
  individualFullName?: ModelStringInput | null;
  otherDescription?: ModelStringInput | null;
  category?: ModelStringInput | null;
  county?: ModelStringInput | null;
  story?: ModelStringInput | null;
  uploadedVideo?: ModelStringInput | null;
  referenceOne?: ModelStringInput | null;
  referenceTwo?: ModelStringInput | null;
  disclaimerAgreement?: ModelBooleanInput | null;
  and?: Array<ModelSubmissionFilterInput | null> | null;
  or?: Array<ModelSubmissionFilterInput | null> | null;
  not?: ModelSubmissionFilterInput | null;
};

export type ModelSubmissionConnection = {
  __typename: "ModelSubmissionConnection";
  items?: Array<Submission | null> | null;
  nextToken?: string | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null;
  voteID?: ModelIDInput | null;
  voted?: ModelBooleanInput | null;
  totalVotesEarned?: ModelIntInput | null;
  maxVotesPossible?: ModelIntInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
};

export type ModelJudgeFilterInput = {
  id?: ModelIDInput | null;
  judgeID?: ModelIDInput | null;
  name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  and?: Array<ModelJudgeFilterInput | null> | null;
  or?: Array<ModelJudgeFilterInput | null> | null;
  not?: ModelJudgeFilterInput | null;
};

export type CreateSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateVoteMutation = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type UpdateVoteMutation = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type DeleteVoteMutation = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type CreateJudgeMutation = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJudgeMutation = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJudgeMutation = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetSubmissionQuery = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListSubmissionsQuery = {
  __typename: "ModelSubmissionConnection";
  items?: Array<{
    __typename: "Submission";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    nominatingOptions?: string | null;
    organizationName?: string | null;
    individualFullName?: string | null;
    otherDescription?: string | null;
    category?: string | null;
    county?: string | null;
    story?: string | null;
    uploadedVideo?: string | null;
    referenceOne?: string | null;
    referenceTwo?: string | null;
    disclaimerAgreement?: boolean | null;
    createdAt: string;
    updatedAt: string;
    votes?: {
      __typename: "ModelVoteConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetVoteQuery = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type ListVotesQuery = {
  __typename: "ModelVoteConnection";
  items?: Array<{
    __typename: "Vote";
    id: string;
    voteID: string;
    voted?: boolean | null;
    totalVotesEarned?: number | null;
    maxVotesPossible?: number | null;
    createdAt: string;
    updatedAt: string;
    judges?: {
      __typename: "ModelJudgeConnection";
      nextToken?: string | null;
    } | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetJudgeQuery = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJudgesQuery = {
  __typename: "ModelJudgeConnection";
  items?: Array<{
    __typename: "Judge";
    id: string;
    judgeID: string;
    name?: string | null;
    username?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  category?: string | null;
  county?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  referenceOne?: string | null;
  referenceTwo?: string | null;
  disclaimerAgreement?: boolean | null;
  createdAt: string;
  updatedAt: string;
  votes?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voteID: string;
      voted?: boolean | null;
      totalVotesEarned?: number | null;
      maxVotesPossible?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateVoteSubscription = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnUpdateVoteSubscription = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnDeleteVoteSubscription = {
  __typename: "Vote";
  id: string;
  voteID: string;
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  createdAt: string;
  updatedAt: string;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      judgeID: string;
      name?: string | null;
      username?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateJudgeSubscription = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJudgeSubscription = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJudgeSubscription = {
  __typename: "Judge";
  id: string;
  judgeID: string;
  name?: string | null;
  username?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateSubmission(
    input: CreateSubmissionInput,
    condition?: ModelSubmissionConditionInput
  ): Promise<CreateSubmissionMutation> {
    const statement = `mutation CreateSubmission($input: CreateSubmissionInput!, $condition: ModelSubmissionConditionInput) {
        createSubmission(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubmissionMutation>response.data.createSubmission;
  }
  async UpdateSubmission(
    input: UpdateSubmissionInput,
    condition?: ModelSubmissionConditionInput
  ): Promise<UpdateSubmissionMutation> {
    const statement = `mutation UpdateSubmission($input: UpdateSubmissionInput!, $condition: ModelSubmissionConditionInput) {
        updateSubmission(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubmissionMutation>response.data.updateSubmission;
  }
  async DeleteSubmission(
    input: DeleteSubmissionInput,
    condition?: ModelSubmissionConditionInput
  ): Promise<DeleteSubmissionMutation> {
    const statement = `mutation DeleteSubmission($input: DeleteSubmissionInput!, $condition: ModelSubmissionConditionInput) {
        deleteSubmission(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubmissionMutation>response.data.deleteSubmission;
  }
  async CreateVote(
    input: CreateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<CreateVoteMutation> {
    const statement = `mutation CreateVote($input: CreateVoteInput!, $condition: ModelVoteConditionInput) {
        createVote(input: $input, condition: $condition) {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVoteMutation>response.data.createVote;
  }
  async UpdateVote(
    input: UpdateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<UpdateVoteMutation> {
    const statement = `mutation UpdateVote($input: UpdateVoteInput!, $condition: ModelVoteConditionInput) {
        updateVote(input: $input, condition: $condition) {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVoteMutation>response.data.updateVote;
  }
  async DeleteVote(
    input: DeleteVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<DeleteVoteMutation> {
    const statement = `mutation DeleteVote($input: DeleteVoteInput!, $condition: ModelVoteConditionInput) {
        deleteVote(input: $input, condition: $condition) {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVoteMutation>response.data.deleteVote;
  }
  async CreateJudge(
    input: CreateJudgeInput,
    condition?: ModelJudgeConditionInput
  ): Promise<CreateJudgeMutation> {
    const statement = `mutation CreateJudge($input: CreateJudgeInput!, $condition: ModelJudgeConditionInput) {
        createJudge(input: $input, condition: $condition) {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJudgeMutation>response.data.createJudge;
  }
  async UpdateJudge(
    input: UpdateJudgeInput,
    condition?: ModelJudgeConditionInput
  ): Promise<UpdateJudgeMutation> {
    const statement = `mutation UpdateJudge($input: UpdateJudgeInput!, $condition: ModelJudgeConditionInput) {
        updateJudge(input: $input, condition: $condition) {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJudgeMutation>response.data.updateJudge;
  }
  async DeleteJudge(
    input: DeleteJudgeInput,
    condition?: ModelJudgeConditionInput
  ): Promise<DeleteJudgeMutation> {
    const statement = `mutation DeleteJudge($input: DeleteJudgeInput!, $condition: ModelJudgeConditionInput) {
        deleteJudge(input: $input, condition: $condition) {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJudgeMutation>response.data.deleteJudge;
  }
  async GetSubmission(id: string): Promise<GetSubmissionQuery> {
    const statement = `query GetSubmission($id: ID!) {
        getSubmission(id: $id) {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubmissionQuery>response.data.getSubmission;
  }
  async ListSubmissions(
    filter?: ModelSubmissionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSubmissionsQuery> {
    const statement = `query ListSubmissions($filter: ModelSubmissionFilterInput, $limit: Int, $nextToken: String) {
        listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            email
            phoneNumber
            nominatingOptions
            organizationName
            individualFullName
            otherDescription
            category
            county
            story
            uploadedVideo
            referenceOne
            referenceTwo
            disclaimerAgreement
            createdAt
            updatedAt
            votes {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubmissionsQuery>response.data.listSubmissions;
  }
  async GetVote(id: string): Promise<GetVoteQuery> {
    const statement = `query GetVote($id: ID!) {
        getVote(id: $id) {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVoteQuery>response.data.getVote;
  }
  async ListVotes(
    filter?: ModelVoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVotesQuery> {
    const statement = `query ListVotes($filter: ModelVoteFilterInput, $limit: Int, $nextToken: String) {
        listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            voteID
            voted
            totalVotesEarned
            maxVotesPossible
            createdAt
            updatedAt
            judges {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotesQuery>response.data.listVotes;
  }
  async GetJudge(id: string): Promise<GetJudgeQuery> {
    const statement = `query GetJudge($id: ID!) {
        getJudge(id: $id) {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJudgeQuery>response.data.getJudge;
  }
  async ListJudges(
    filter?: ModelJudgeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJudgesQuery> {
    const statement = `query ListJudges($filter: ModelJudgeFilterInput, $limit: Int, $nextToken: String) {
        listJudges(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            judgeID
            name
            username
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJudgesQuery>response.data.listJudges;
  }
  OnCreateSubmissionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubmission">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSubmission {
        onCreateSubmission {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubmission">>
  >;

  OnUpdateSubmissionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubmission">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSubmission {
        onUpdateSubmission {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubmission">>
  >;

  OnDeleteSubmissionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubmission">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSubmission {
        onDeleteSubmission {
          __typename
          id
          firstName
          lastName
          email
          phoneNumber
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category
          county
          story
          uploadedVideo
          referenceOne
          referenceTwo
          disclaimerAgreement
          createdAt
          updatedAt
          votes {
            __typename
            items {
              __typename
              id
              voteID
              voted
              totalVotesEarned
              maxVotesPossible
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubmission">>
  >;

  OnCreateVoteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVote {
        onCreateVote {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
  >;

  OnUpdateVoteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVote {
        onUpdateVote {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateVote">>
  >;

  OnDeleteVoteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVote {
        onDeleteVote {
          __typename
          id
          voteID
          voted
          totalVotesEarned
          maxVotesPossible
          createdAt
          updatedAt
          judges {
            __typename
            items {
              __typename
              id
              judgeID
              name
              username
              createdAt
              updatedAt
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteVote">>
  >;

  OnCreateJudgeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJudge">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateJudge {
        onCreateJudge {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateJudge">>
  >;

  OnUpdateJudgeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJudge">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJudge {
        onUpdateJudge {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateJudge">>
  >;

  OnDeleteJudgeListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJudge">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJudge {
        onDeleteJudge {
          __typename
          id
          judgeID
          name
          username
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJudge">>
  >;
}
