// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Submission, Category, NJCounty, Reference, Vote, Judge } = initSchema(schema);

export {
  Submission,
  Category,
  NJCounty,
  Reference,
  Vote,
  Judge
};