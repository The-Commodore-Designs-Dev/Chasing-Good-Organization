// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Submission, Vote, Judge } = initSchema(schema);

export {
  Submission,
  Vote,
  Judge
};