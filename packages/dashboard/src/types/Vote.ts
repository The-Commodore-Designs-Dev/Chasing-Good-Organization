import { Judge } from './Judge';
export interface Vote {
    id: string;
    voted: boolean;
    totalVotesEarned: number;
    maxVotesPossible: number;
    judges?: Judge[];
    voteID: string;
}