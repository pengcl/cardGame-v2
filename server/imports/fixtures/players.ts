import {Players} from '../../../both/collections/players.collection';
import {Player} from '../../../both/models/player.model';

export function loadPlayers() {
    if (Players.find().cursor.count() === 0) {

        for (var i = 0; i < 27; i++) {
            Players.insert({
                name: 'name' + Fake.sentence(1),
                nationality: 'nationality' + Fake.sentence(1),
                weight: Fake.sentence(2),
                birthday: 'birthday' + Fake.sentence(12),
                height: Fake.sentence(3),
                club: 'club' + Fake.sentence(12),
                uniformNo: Fake.sentence(2),
                position: [
                    {
                        name: 'CM',
                        score: Fake.sentence(2)
                    },
                    {
                        name: 'CM',
                        score: Fake.sentence(2)
                    }
                ],
                star: Fake.sentence(1),
                level: Fake.sentence(1),
                ability: {
                    attack: Fake.sentence(2),
                    defense: Fake.sentence(2),
                    speed: Fake.sentence(2),
                    skill: Fake.sentence(2),
                    strength: Fake.sentence(2),
                    spirit: Fake.sentence(2)
                }
            });
        }
    }
}