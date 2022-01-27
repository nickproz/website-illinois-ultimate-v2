import { RosterPlayer } from './roster-player.model';

export interface RosterYear {
    year: number;
    imagePath: string;
    players: RosterPlayer[];
}
