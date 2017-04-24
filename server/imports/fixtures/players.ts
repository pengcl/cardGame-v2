import {Players} from '../../../both/collections/players.collection';
import {Player} from '../../../both/models/player.model';

export function loadPlayers() {
    if (Players.find().cursor.count() === 0) {
        const players: Player[] = [
            {
                name: 'baJor',
                nationality: 'italy',
                weight: 70,
                birthday: '20170506',
                height: 178,
                club: 'AC Milan',
                uniformNo: 10,
                position: [
                    {
                        name: 'CM',
                        score: 99
                    },
                    {
                        name: 'CM',
                        score: 99
                    }
                ],
                star: 3,
                level: 1,
                ability: {
                    attack: 93,
                    defense: 35,
                    speed: 80,
                    skill: 99,
                    strength: 81,
                    spirit: 93
                }
            },
            {
                name: 'Maldini',
                nationality: 'italy',
                weight: 70,
                birthday: '20170506',
                height: 178,
                club: 'AC Milan',
                uniformNo: 10,
                position: [
                    {
                        name: 'CM',
                        score: 99
                    },
                    {
                        name: 'CM',
                        score: 99
                    }
                ],
                star: 3,
                level: 1,
                ability: {
                    attack: 93,
                    defense: 35,
                    speed: 80,
                    skill: 99,
                    strength: 81,
                    spirit: 93
                }
            },
            {
                name: 'inzaji',
                nationality: 'italy',
                weight: 70,
                birthday: '20170506',
                height: 178,
                club: 'AC Milan',
                uniformNo: 10,
                position: [
                    {
                        name: 'CM',
                        score: 99
                    },
                    {
                        name: 'CM',
                        score: 99
                    }
                ],
                star: 3,
                level: 1,
                ability: {
                    attack: 93,
                    defense: 35,
                    speed: 80,
                    skill: 99,
                    strength: 81,
                    spirit: 93
                }
            }
        ];

        players.forEach((player: Player) => Players.insert(player));
    }

}