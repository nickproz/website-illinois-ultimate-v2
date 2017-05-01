import { Tournament } from "./tournament.model";

export interface TournamentYear {
    year: number,
    tournaments: Tournament[]
}