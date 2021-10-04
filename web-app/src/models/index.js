// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Submission, NJCounty, Reference, Vote, Judge } = initSchema(schema);

export {
  Submission,
  NJCounty,
  Reference,
  Vote,
  Judge
};