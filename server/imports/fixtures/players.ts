import {Players} from '../../../both/collections/players.collection';
import {countries} from '../../../both/mock-data/countries';
import {clubs} from '../../../both/mock-data/clubs';
import {playerTypes} from '../../../both/mock-data/playerType';
import {tags} from '../../../both/mock-data/tags';

declare var Fake: {
    sentence(words: number): string;
};

let fake = {
    score: function (start: number, end: number) {
        return start + Math.ceil((end - start) * Math.random());
    },
    position: function () {
        let positions = ['ST', 'AM', 'LW', 'RW', 'LM', 'CM', 'RM', 'LB', 'CB', 'RB', 'GK'];
        return positions[Math.ceil(Math.random() * 10)];
    },
    birthday: function () {
        return '19' + String(this.score(80, 99)) + '/' + String(Math.ceil(Math.random() * 12)) + '/' + String(Math.ceil(Math.random() * 28));
    }
};

export function loadPlayers() {
    if (Players.find().cursor.count() === 0) {

        for (var i = 0; i < 27; i++) {
            Players.insert({
                name: Fake.sentence(2),
                nationality: countries[Math.ceil(Math.random() * 8)].code,
                weight: fake.score(60, 100),
                birthday: fake.birthday(),
                height: fake.score(160, 200),
                club: clubs[Math.ceil(Math.random() * 15)].code,
                uniformNo: fake.score(1, 22),
                position: [
                    {
                        name: fake.position(),
                        score: fake.score(50, 100)
                    },
                    {
                        name: fake.position(),
                        score: fake.score(50, 100)
                    }
                ],
                star: fake.score(1, 3),
                level: 1,
                type: playerTypes[Math.ceil(Math.random() * 2)].code,
                tag: tags[Math.ceil(Math.random() * 2)].code,
                description: Fake.sentence(30),
                ability: {
                    attack: fake.score(50, 100),
                    defense: fake.score(50, 100),
                    speed: fake.score(50, 100),
                    skill: fake.score(50, 100),
                    strength: fake.score(50, 100),
                    spirit: fake.score(50, 100)
                }
            });
        }
    }
}