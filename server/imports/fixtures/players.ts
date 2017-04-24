import {Players} from '../../../both/collections/players.collection';
import {Player} from '../../../both/models/player.model';

export function loadPlayers() {
    if (Players.find().cursor.count() === 0) {

        for (var i = 0; i < 27; i++) {
            Players.insert({
                name: Fake.sentenceS(12),
                nationality: Fake.sentenceS(12),
                weight: Fake.sentenceN(2),
                birthday: Fake.sentenceS(12),
                height: Fake.sentenceN(3),
                club: Fake.sentenceS(12),
                uniformNo: Fake.sentenceN(2),
                position: [
                    {
                        name: 'CM',
                        score: Fake.sentenceN(2)
                    },
                    {
                        name: 'CM',
                        score: Fake.sentenceN(2)
                    }
                ],
                star: Fake.sentenceN(1),
                level: Fake.sentenceN(1),
                ability: {
                    attack: Fake.sentenceN(2),
                    defense: Fake.sentenceN(2),
                    speed: Fake.sentenceN(2),
                    skill: Fake.sentenceN(2),
                    strength: Fake.sentenceN(2),
                    spirit: Fake.sentenceN(2)
                }
            });
        }
    }
}