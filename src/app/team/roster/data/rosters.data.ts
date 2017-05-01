import { RosterYear } from "../model/roster-year.model";

export const ROSTER_DATA: RosterYear[] = [
    {
        year: 2017,
        imagePath: './assets/team-photo-2017.jpg',
        players: [
            {
                number: 2,
                name: `Ben 'Beef' Sabourin`,
                year: 'Sophomore'
            }
        ]
    },
    {
        year: 2016,
        imagePath: './assets/team-photo-2016.jpg',
        players: [
            {
                number: 1,
                name: 'Nick Prozorovsky*',
                year: 'Senior'
            }
        ]
    },
    {
        year: 2015,
        imagePath: './assets/team-photo-2015.jpg',
        players: [
            {
                number: 1,
                name: 'Nick Prozorovsky*',
                year: 'Junior'
            }
        ]
    }
];