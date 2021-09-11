import { Judge } from './Judge';
export interface Vote {
    id: number;
    voted: boolean;
    totalVotesEarned: number;
    maxVotesPossible: number;
    judges: Judge;
    voteID: number;
}