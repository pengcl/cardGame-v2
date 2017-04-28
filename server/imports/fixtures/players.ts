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
    ability: function (type: string) {
        if (type == 'attack') {
            return {
                attack: this.score(80, 100),
                defense: this.score(50, 80),
                speed: this.score(70, 100),
                skill: this.score(70, 100),
                strength: this.score(70, 100),
                spirit: this.score(70, 100)
            }
        }
        if (type == 'Midfield') {
            return {
                attack: this.score(70, 90),
                defense: this.score(70, 90),
                speed: this.score(70, 100),
                skill: this.score(70, 100),
                strength: this.score(70, 100),
                spirit: this.score(70, 100)
            }
        }
        if (type == 'defense') {
            return {
                attack: this.score(50, 80),
                defense: this.score(80, 100),
                speed: this.score(70, 100),
                skill: this.score(70, 100),
                strength: this.score(70, 100),
                spirit: this.score(70, 100)
            }
        }
    },
    position: function () {
        let ability = this.ability(['attack', 'Midfield', 'defense'][this.score(0, 2)]);

        let position = [
            {
                name: 'ST',
                score: (ability.attack * 1.2 + ability.defense * 0.8 + ability.speed + ability.skill + ability.strength + ability.spirit) / 6,
            },
            {
                name: 'AML',
                score: (ability.attack * 1.1 + ability.defense * 0.8 + ability.speed * 1.1 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'AMF',
                score: (ability.attack * 1.1 + ability.defense * 0.9 + ability.speed + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'AMR',
                score: (ability.attack * 1.1 + ability.defense * 0.8 + ability.speed * 1.1 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'LMF',
                score: (ability.attack * 1 + ability.defense * 1 + ability.speed * 1.05 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'CMF',
                score: (ability.attack * 1 + ability.defense * 1 + ability.speed * 1 + ability.skill * 1.05 + ability.strength + ability.spirit) / 6
            },
            {
                name: 'RMF',
                score: (ability.attack * 1 + ability.defense * 1 + ability.speed * 1.05 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'DMF',
                score: (ability.attack * 0.9 + ability.defense * 1.1 + ability.speed + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'LB',
                score: (ability.attack * 0.8 + ability.defense * 1.1 + ability.speed * 1.1 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'CB',
                score: (ability.attack * 0.9 + ability.defense * 1.1 + ability.speed + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'RB',
                score: (ability.attack * 0.8 + ability.defense * 1.1 + ability.speed * 1.1 + ability.skill + ability.strength + ability.spirit) / 6
            },
            {
                name: 'GK',
                score: (ability.attack * 0.5 + ability.defense * 1.2 + ability.speed + ability.skill + ability.strength + ability.spirit) / 6
            }
        ];
        return position;
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
                position: fake.position(),
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