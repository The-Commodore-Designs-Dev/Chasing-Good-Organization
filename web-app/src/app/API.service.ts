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
  onCreateCategory: OnCreateCategorySubscription;
  onUpdateCategory: OnUpdateCategorySubscription;
  onDeleteCategory: OnDeleteCategorySubscription;
  onCreateNJCounty: OnCreateNJCountySubscription;
  onUpdateNJCounty: OnUpdateNJCountySubscription;
  onDeleteNJCounty: OnDeleteNJCountySubscription;
  onCreateReference: OnCreateReferenceSubscription;
  onUpdateReference: OnUpdateReferenceSubscription;
  onDeleteReference: OnDeleteReferenceSubscription;
  onCreateVote: OnCreateVoteSubscription;
  onUpdateVote: OnUpdateVoteSubscription;
  onDeleteVote: OnDeleteVoteSubscription;
  onCreateJudge: OnCreateJudgeSubscription;
  onUpdateJudge: OnUpdateJudgeSubscription;
  onDeleteJudge: OnDeleteJudgeSubscription;
};

export type CreateSubmissionInput = {
  id?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  story: string;
  uploadedVideo: string;
  disclaimerAgreement: boolean;
};

export type ModelSubmissionConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  date?: ModelStringInput | null;
  nominatingOptions?: ModelStringInput | null;
  organizationName?: ModelStringInput | null;
  individualFullName?: ModelStringInput | null;
  otherDescription?: ModelStringInput | null;
  story?: ModelStringInput | null;
  uploadedVideo?: ModelStringInput | null;
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
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: ModelCategoryConnection | null;
  county?: ModelNJCountyConnection | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: ModelReferenceConnection | null;
  referenceTwo?: ModelReferenceConnection | null;
  disclaimerAgreement: boolean;
  voted?: ModelVoteConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items?: Array<Category | null> | null;
  nextToken?: string | null;
};

export type Category = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelNJCountyConnection = {
  __typename: "ModelNJCountyConnection";
  items?: Array<NJCounty | null> | null;
  nextToken?: string | null;
};

export type NJCounty = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelReferenceConnection = {
  __typename: "ModelReferenceConnection";
  items?: Array<Reference | null> | null;
  nextToken?: string | null;
};

export type Reference = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection";
  items?: Array<Vote | null> | null;
  nextToken?: string | null;
};

export type Vote = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: ModelJudgeConnection | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type ModelJudgeConnection = {
  __typename: "ModelJudgeConnection";
  items?: Array<Judge | null> | null;
  nextToken?: string | null;
};

export type Judge = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSubmissionInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  date?: string | null;
  nominatingOptions?: string | null;
  organizationName?: string | null;
  individualFullName?: string | null;
  otherDescription?: string | null;
  story?: string | null;
  uploadedVideo?: string | null;
  disclaimerAgreement?: boolean | null;
};

export type DeleteSubmissionInput = {
  id: string;
};

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  categoryID: string;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
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

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  categoryID?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateNJCountyInput = {
  id?: string | null;
  name: string;
  countyID: string;
};

export type ModelNJCountyConditionInput = {
  name?: ModelStringInput | null;
  countyID?: ModelIDInput | null;
  and?: Array<ModelNJCountyConditionInput | null> | null;
  or?: Array<ModelNJCountyConditionInput | null> | null;
  not?: ModelNJCountyConditionInput | null;
};

export type UpdateNJCountyInput = {
  id: string;
  name?: string | null;
  countyID?: string | null;
};

export type DeleteNJCountyInput = {
  id: string;
};

export type CreateReferenceInput = {
  id?: string | null;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
};

export type ModelReferenceConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  referenceID?: ModelIDInput | null;
  and?: Array<ModelReferenceConditionInput | null> | null;
  or?: Array<ModelReferenceConditionInput | null> | null;
  not?: ModelReferenceConditionInput | null;
};

export type UpdateReferenceInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  referenceID?: string | null;
};

export type DeleteReferenceInput = {
  id: string;
};

export type CreateVoteInput = {
  id?: string | null;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  voteID: string;
};

export type ModelVoteConditionInput = {
  voted?: ModelBooleanInput | null;
  totalVotesEarned?: ModelIntInput | null;
  maxVotesPossible?: ModelIntInput | null;
  voteID?: ModelIDInput | null;
  and?: Array<ModelVoteConditionInput | null> | null;
  or?: Array<ModelVoteConditionInput | null> | null;
  not?: ModelVoteConditionInput | null;
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
  voted?: boolean | null;
  totalVotesEarned?: number | null;
  maxVotesPossible?: number | null;
  voteID?: string | null;
};

export type DeleteVoteInput = {
  id: string;
};

export type CreateJudgeInput = {
  id?: string | null;
  name: string;
  username: string;
  judgeID: string;
};

export type ModelJudgeConditionInput = {
  name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  judgeID?: ModelIDInput | null;
  and?: Array<ModelJudgeConditionInput | null> | null;
  or?: Array<ModelJudgeConditionInput | null> | null;
  not?: ModelJudgeConditionInput | null;
};

export type UpdateJudgeInput = {
  id: string;
  name?: string | null;
  username?: string | null;
  judgeID?: string | null;
};

export type DeleteJudgeInput = {
  id: string;
};

export type ModelSubmissionFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  date?: ModelStringInput | null;
  nominatingOptions?: ModelStringInput | null;
  organizationName?: ModelStringInput | null;
  individualFullName?: ModelStringInput | null;
  otherDescription?: ModelStringInput | null;
  story?: ModelStringInput | null;
  uploadedVideo?: ModelStringInput | null;
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

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelNJCountyFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  countyID?: ModelIDInput | null;
  and?: Array<ModelNJCountyFilterInput | null> | null;
  or?: Array<ModelNJCountyFilterInput | null> | null;
  not?: ModelNJCountyFilterInput | null;
};

export type ModelReferenceFilterInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  referenceID?: ModelIDInput | null;
  and?: Array<ModelReferenceFilterInput | null> | null;
  or?: Array<ModelReferenceFilterInput | null> | null;
  not?: ModelReferenceFilterInput | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null;
  voted?: ModelBooleanInput | null;
  totalVotesEarned?: ModelIntInput | null;
  maxVotesPossible?: ModelIntInput | null;
  voteID?: ModelIDInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
};

export type ModelJudgeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  judgeID?: ModelIDInput | null;
  and?: Array<ModelJudgeFilterInput | null> | null;
  or?: Array<ModelJudgeFilterInput | null> | null;
  not?: ModelJudgeFilterInput | null;
};

export type CreateSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSubmissionMutation = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateNJCountyMutation = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNJCountyMutation = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNJCountyMutation = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateReferenceMutation = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateReferenceMutation = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteReferenceMutation = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateVoteMutation = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateVoteMutation = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteVoteMutation = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateJudgeMutation = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJudgeMutation = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJudgeMutation = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type GetSubmissionQuery = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSubmissionsQuery = {
  __typename: "ModelSubmissionConnection";
  items?: Array<{
    __typename: "Submission";
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    date: string;
    nominatingOptions: string;
    organizationName: string;
    individualFullName: string;
    otherDescription: string;
    category?: {
      __typename: "ModelCategoryConnection";
      nextToken?: string | null;
    } | null;
    county?: {
      __typename: "ModelNJCountyConnection";
      nextToken?: string | null;
    } | null;
    story: string;
    uploadedVideo: string;
    referenceOne?: {
      __typename: "ModelReferenceConnection";
      nextToken?: string | null;
    } | null;
    referenceTwo?: {
      __typename: "ModelReferenceConnection";
      nextToken?: string | null;
    } | null;
    disclaimerAgreement: boolean;
    voted?: {
      __typename: "ModelVoteConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items?: Array<{
    __typename: "Category";
    id: string;
    name: string;
    categoryID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetNJCountyQuery = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListNJCountiesQuery = {
  __typename: "ModelNJCountyConnection";
  items?: Array<{
    __typename: "NJCounty";
    id: string;
    name: string;
    countyID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetReferenceQuery = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListReferencesQuery = {
  __typename: "ModelReferenceConnection";
  items?: Array<{
    __typename: "Reference";
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    referenceID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetVoteQuery = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListVotesQuery = {
  __typename: "ModelVoteConnection";
  items?: Array<{
    __typename: "Vote";
    id: string;
    voted: boolean;
    totalVotesEarned: number;
    maxVotesPossible: number;
    judges?: {
      __typename: "ModelJudgeConnection";
      nextToken?: string | null;
    } | null;
    voteID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetJudgeQuery = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListJudgesQuery = {
  __typename: "ModelJudgeConnection";
  items?: Array<{
    __typename: "Judge";
    id: string;
    name: string;
    username: string;
    judgeID: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSubmissionSubscription = {
  __typename: "Submission";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  nominatingOptions: string;
  organizationName: string;
  individualFullName: string;
  otherDescription: string;
  category?: {
    __typename: "ModelCategoryConnection";
    items?: Array<{
      __typename: "Category";
      id: string;
      name: string;
      categoryID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  county?: {
    __typename: "ModelNJCountyConnection";
    items?: Array<{
      __typename: "NJCounty";
      id: string;
      name: string;
      countyID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  story: string;
  uploadedVideo: string;
  referenceOne?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  referenceTwo?: {
    __typename: "ModelReferenceConnection";
    items?: Array<{
      __typename: "Reference";
      id: string;
      name: string;
      email: string;
      phoneNumber: string;
      referenceID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  disclaimerAgreement: boolean;
  voted?: {
    __typename: "ModelVoteConnection";
    items?: Array<{
      __typename: "Vote";
      id: string;
      voted: boolean;
      totalVotesEarned: number;
      maxVotesPossible: number;
      voteID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name: string;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateNJCountySubscription = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNJCountySubscription = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNJCountySubscription = {
  __typename: "NJCounty";
  id: string;
  name: string;
  countyID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateReferenceSubscription = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateReferenceSubscription = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteReferenceSubscription = {
  __typename: "Reference";
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  referenceID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateVoteSubscription = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateVoteSubscription = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteVoteSubscription = {
  __typename: "Vote";
  id: string;
  voted: boolean;
  totalVotesEarned: number;
  maxVotesPossible: number;
  judges?: {
    __typename: "ModelJudgeConnection";
    items?: Array<{
      __typename: "Judge";
      id: string;
      name: string;
      username: string;
      judgeID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  voteID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJudgeSubscription = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJudgeSubscription = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJudgeSubscription = {
  __typename: "Judge";
  id: string;
  name: string;
  username: string;
  judgeID: string;
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
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
    return <DeleteSubmissionMutation>response.data.deleteSubmission;
  }
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryID
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
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryID
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
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          categoryID
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
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateNJCounty(
    input: CreateNJCountyInput,
    condition?: ModelNJCountyConditionInput
  ): Promise<CreateNJCountyMutation> {
    const statement = `mutation CreateNJCounty($input: CreateNJCountyInput!, $condition: ModelNJCountyConditionInput) {
        createNJCounty(input: $input, condition: $condition) {
          __typename
          id
          name
          countyID
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
    return <CreateNJCountyMutation>response.data.createNJCounty;
  }
  async UpdateNJCounty(
    input: UpdateNJCountyInput,
    condition?: ModelNJCountyConditionInput
  ): Promise<UpdateNJCountyMutation> {
    const statement = `mutation UpdateNJCounty($input: UpdateNJCountyInput!, $condition: ModelNJCountyConditionInput) {
        updateNJCounty(input: $input, condition: $condition) {
          __typename
          id
          name
          countyID
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
    return <UpdateNJCountyMutation>response.data.updateNJCounty;
  }
  async DeleteNJCounty(
    input: DeleteNJCountyInput,
    condition?: ModelNJCountyConditionInput
  ): Promise<DeleteNJCountyMutation> {
    const statement = `mutation DeleteNJCounty($input: DeleteNJCountyInput!, $condition: ModelNJCountyConditionInput) {
        deleteNJCounty(input: $input, condition: $condition) {
          __typename
          id
          name
          countyID
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
    return <DeleteNJCountyMutation>response.data.deleteNJCounty;
  }
  async CreateReference(
    input: CreateReferenceInput,
    condition?: ModelReferenceConditionInput
  ): Promise<CreateReferenceMutation> {
    const statement = `mutation CreateReference($input: CreateReferenceInput!, $condition: ModelReferenceConditionInput) {
        createReference(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
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
    return <CreateReferenceMutation>response.data.createReference;
  }
  async UpdateReference(
    input: UpdateReferenceInput,
    condition?: ModelReferenceConditionInput
  ): Promise<UpdateReferenceMutation> {
    const statement = `mutation UpdateReference($input: UpdateReferenceInput!, $condition: ModelReferenceConditionInput) {
        updateReference(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
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
    return <UpdateReferenceMutation>response.data.updateReference;
  }
  async DeleteReference(
    input: DeleteReferenceInput,
    condition?: ModelReferenceConditionInput
  ): Promise<DeleteReferenceMutation> {
    const statement = `mutation DeleteReference($input: DeleteReferenceInput!, $condition: ModelReferenceConditionInput) {
        deleteReference(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
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
    return <DeleteReferenceMutation>response.data.deleteReference;
  }
  async CreateVote(
    input: CreateVoteInput,
    condition?: ModelVoteConditionInput
  ): Promise<CreateVoteMutation> {
    const statement = `mutation CreateVote($input: CreateVoteInput!, $condition: ModelVoteConditionInput) {
        createVote(input: $input, condition: $condition) {
          __typename
          id
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
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
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
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
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
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
          name
          username
          judgeID
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
          name
          username
          judgeID
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
          name
          username
          judgeID
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
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
            date
            nominatingOptions
            organizationName
            individualFullName
            otherDescription
            category {
              __typename
              nextToken
            }
            county {
              __typename
              nextToken
            }
            story
            uploadedVideo
            referenceOne {
              __typename
              nextToken
            }
            referenceTwo {
              __typename
              nextToken
            }
            disclaimerAgreement
            voted {
              __typename
              nextToken
            }
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
    return <ListSubmissionsQuery>response.data.listSubmissions;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          categoryID
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
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            categoryID
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
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async GetNJCounty(id: string): Promise<GetNJCountyQuery> {
    const statement = `query GetNJCounty($id: ID!) {
        getNJCounty(id: $id) {
          __typename
          id
          name
          countyID
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
    return <GetNJCountyQuery>response.data.getNJCounty;
  }
  async ListNJCounties(
    filter?: ModelNJCountyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNJCountiesQuery> {
    const statement = `query ListNJCounties($filter: ModelNJCountyFilterInput, $limit: Int, $nextToken: String) {
        listNJCounties(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            countyID
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
    return <ListNJCountiesQuery>response.data.listNJCounties;
  }
  async GetReference(id: string): Promise<GetReferenceQuery> {
    const statement = `query GetReference($id: ID!) {
        getReference(id: $id) {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
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
    return <GetReferenceQuery>response.data.getReference;
  }
  async ListReferences(
    filter?: ModelReferenceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListReferencesQuery> {
    const statement = `query ListReferences($filter: ModelReferenceFilterInput, $limit: Int, $nextToken: String) {
        listReferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            phoneNumber
            referenceID
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
    return <ListReferencesQuery>response.data.listReferences;
  }
  async GetVote(id: string): Promise<GetVoteQuery> {
    const statement = `query GetVote($id: ID!) {
        getVote(id: $id) {
          __typename
          id
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
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
            voted
            totalVotesEarned
            maxVotesPossible
            judges {
              __typename
              nextToken
            }
            voteID
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
    return <ListVotesQuery>response.data.listVotes;
  }
  async GetJudge(id: string): Promise<GetJudgeQuery> {
    const statement = `query GetJudge($id: ID!) {
        getJudge(id: $id) {
          __typename
          id
          name
          username
          judgeID
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
            name
            username
            judgeID
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
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
          date
          nominatingOptions
          organizationName
          individualFullName
          otherDescription
          category {
            __typename
            items {
              __typename
              id
              name
              categoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          county {
            __typename
            items {
              __typename
              id
              name
              countyID
              createdAt
              updatedAt
            }
            nextToken
          }
          story
          uploadedVideo
          referenceOne {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          referenceTwo {
            __typename
            items {
              __typename
              id
              name
              email
              phoneNumber
              referenceID
              createdAt
              updatedAt
            }
            nextToken
          }
          disclaimerAgreement
          voted {
            __typename
            items {
              __typename
              id
              voted
              totalVotesEarned
              maxVotesPossible
              voteID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubmission">>
  >;

  OnCreateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          name
          categoryID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  >;

  OnUpdateCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          name
          categoryID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  >;

  OnDeleteCategoryListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          name
          categoryID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  >;

  OnCreateNJCountyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNJCounty">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNJCounty {
        onCreateNJCounty {
          __typename
          id
          name
          countyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNJCounty">>
  >;

  OnUpdateNJCountyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNJCounty">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNJCounty {
        onUpdateNJCounty {
          __typename
          id
          name
          countyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNJCounty">>
  >;

  OnDeleteNJCountyListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNJCounty">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNJCounty {
        onDeleteNJCounty {
          __typename
          id
          name
          countyID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNJCounty">>
  >;

  OnCreateReferenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReference">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateReference {
        onCreateReference {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateReference">>
  >;

  OnUpdateReferenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReference">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateReference {
        onUpdateReference {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateReference">>
  >;

  OnDeleteReferenceListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReference">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteReference {
        onDeleteReference {
          __typename
          id
          name
          email
          phoneNumber
          referenceID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteReference">>
  >;

  OnCreateVoteListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateVote">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateVote {
        onCreateVote {
          __typename
          id
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
          createdAt
          updatedAt
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
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
          createdAt
          updatedAt
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
          voted
          totalVotesEarned
          maxVotesPossible
          judges {
            __typename
            items {
              __typename
              id
              name
              username
              judgeID
              createdAt
              updatedAt
            }
            nextToken
          }
          voteID
          createdAt
          updatedAt
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
          name
          username
          judgeID
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
          name
          username
          judgeID
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
          name
          username
          judgeID
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteJudge">>
  >;
}
