import {Players} from '../../../both/collections/players.collection';
import {countries} from '../../../both/mock-data/countries';
import {clubs} from '../../../both/mock-data/clubs';
import {playerTypes} from '../../../both/mock-data/playerType';
import {tags} from '../../../both/mock-data/tags';
import {getPosition} from '../../../both/func/positions';

declare var Fake: {
    sentence(words: number): string;
};

interface attacking {
    crossing: number;
    finishing: number;
    heading: number;
    shortPassing: number;
    volleys: number;
}

interface skill {
    dribbling: number;
    curve: number;
    freeKick: number;
    longPassing: number;
    ballControl: number;
}

interface movement {
    acceleration: number;
    sprintSpeed: number;
    agility: number;
    reactions: number;
    balance: number;
}

interface power {
    shotPower: number;
    jumping: number;
    stamina: number;
    strength: number;
    longShots: number;
}

interface mentality {
    aggression: number;
    interceptions: number;
    positioning: number;
    vision: number;
    penalties: number;
    composure: number;
}

interface defending {
    marking: number;
    standingTackle: number;
    slidingTackle: number;
}

interface goalkeeping {
    diving: number;
    handling: number;
    kicking: number;
    positioning: number;
    reflexes: number;
}

let fake = {
    score: function (start: number, end: number) {
        return start + Math.ceil((end - start) * Math.random());
    },
    ability: function (position: string, tag: any) {
        let attacking,
            skill,
            movement,
            power,
            mentality,
            defending,
            goalkeeping;

        let attackingScore, skillScore, movementScore, powerScore, mentalityScore, defendingScore, goalkeepingScore,
            rate;

        if (tag.en == 'star') {//设置普通球员系数
            rate = 0.8;
        }
        if (tag.en == 'super') {//设置超级球员系数
            rate = 1;
        }
        if (tag.en == 'classic') {//设置经典球员系数
            rate = 1.2;
        }

        if (position == 'attacking') {
            attackingScore = [70 * rate, 100 * rate];
            skillScore = [50 * rate, 100 * rate];
            movementScore = [50 * rate, 100 * rate];
            powerScore = [50 * rate, 100 * rate];
            mentalityScore = [50 * rate, 100 * rate];
            defendingScore = [10 * rate, 60 * rate];
            goalkeepingScore = [0 * rate, 30 * rate];
        }
        if (position == 'defending') {
            attackingScore = [10 * rate, 60 * rate];
            skillScore = [50 * rate, 100 * rate];
            movementScore = [50 * rate, 100 * rate];
            powerScore = [50 * rate, 100 * rate];
            mentalityScore = [50 * rate, 100 * rate];
            defendingScore = [70 * rate, 100 * rate];
            goalkeepingScore = [0 * rate, 30 * rate];
        }
        if (position == 'goalkeeping') {
            attackingScore = [0 * rate, 50 * rate];
            skillScore = [0 * rate, 50 * rate];
            movementScore = [50 * rate, 100 * rate];
            powerScore = [50 * rate, 100 * rate];
            mentalityScore = [50 * rate, 100 * rate];
            defendingScore = [0 * rate, 50 * rate];
            goalkeepingScore = [70 * rate, 100 * rate];
        }

        attacking = {
            crossing: this.score(attackingScore[0], attackingScore[1]),//传中
            finishing: this.score(attackingScore[0], attackingScore[1]),//射术
            heading: this.score(attackingScore[0], attackingScore[1]),//头球
            shortPassing: this.score(attackingScore[0], attackingScore[1]),//短传
            volleys: this.score(attackingScore[0], attackingScore[1])//凌空
        };
        skill = {
            dribbling: this.score(skillScore[0], skillScore[1]),//盘带
            curve: this.score(skillScore[0], skillScore[1]),//弧线
            freeKick: this.score(skillScore[0], skillScore[1]),//任意球
            longPassing: this.score(skillScore[0], skillScore[1]),//长传
            ballControl: this.score(skillScore[0], skillScore[1])//控球
        };
        movement = {
            acceleration: this.score(movementScore[0], movementScore[1]),//加速
            sprintSpeed: this.score(movementScore[0], movementScore[1]),//速度
            agility: this.score(movementScore[0], movementScore[1]),//敏捷
            reactions: this.score(movementScore[0], movementScore[1]),//反应
            balance: this.score(movementScore[0], movementScore[1])//平衡
        };
        power = {
            shotPower: this.score(powerScore[0], powerScore[1]),//射门力量
            jumping: this.score(powerScore[0], powerScore[1]),//弹跳
            stamina: this.score(powerScore[0], powerScore[1]),//体能
            strength: this.score(powerScore[0], powerScore[1]),//强壮
            longShots: this.score(powerScore[0], powerScore[1])//远射
        };
        mentality = {
            aggression: this.score(mentalityScore[0], mentalityScore[1]),//侵略性
            interceptions: this.score(mentalityScore[0], mentalityScore[1]),//拦截意识
            positioning: this.score(mentalityScore[0], mentalityScore[1]),//跑位
            vision: this.score(mentalityScore[0], mentalityScore[1]),//视野
            penalties: this.score(mentalityScore[0], mentalityScore[1]),//点球
            composure: this.score(mentalityScore[0], mentalityScore[1])//沉着
        };
        defending = {
            marking: this.score(defendingScore[0], defendingScore[1]),//盯人
            standingTackle: this.score(defendingScore[0], defendingScore[1]),//抢断
            slidingTackle: this.score(defendingScore[0], defendingScore[1])//铲球
        };
        goalkeeping = {
            diving: this.score(goalkeepingScore[0], goalkeepingScore[1]),//鱼跃
            handling: this.score(goalkeepingScore[0], goalkeepingScore[1]),//手抛球
            kicking: this.score(goalkeepingScore[0], goalkeepingScore[1]),//开球
            positioning: this.score(goalkeepingScore[0], goalkeepingScore[1]),//站位
            reflexes: this.score(goalkeepingScore[0], goalkeepingScore[1])//反应
        };

        return {
            attacking: {
                name: '进功',
                value: (attacking.crossing + attacking.finishing + attacking.heading + attacking.shortPassing + attacking.shortPassing) / 5,
                property: {
                    crossing: {
                        name: '传中',
                        value: attacking.crossing
                    },
                    finishing: {
                        name: '射术',
                        value: attacking.finishing
                    },
                    heading: {
                        name: '头球',
                        value: attacking.heading
                    },
                    shortPassing: {
                        name: '短传',
                        value: attacking.shortPassing
                    },
                    volleys: {
                        name: '凌空',
                        value: attacking.shortPassing
                    }
                }
            },
            skill: {
                name: '技巧',
                value: (skill.dribbling + skill.curve + skill.freeKick + skill.longPassing + skill.ballControl) / 5,
                property: {
                    dribbling: {
                        name: '盘带',
                        value: skill.dribbling
                    },
                    curve: {
                        name: '弧线',
                        value: skill.curve
                    },
                    freeKick: {
                        name: '任意球',
                        value: skill.freeKick
                    },
                    longPassing: {
                        name: '长传',
                        value: skill.longPassing
                    },
                    ballControl: {
                        name: '控球',
                        value: skill.ballControl
                    }
                }
            },
            movement: {
                name: '移动',
                value: (movement.acceleration + movement.sprintSpeed + movement.agility + movement.reactions + movement.balance) / 5,
                property: {
                    acceleration: {
                        name: '加速',
                        value: movement.acceleration
                    },
                    sprintSpeed: {
                        name: '速度',
                        value: movement.sprintSpeed
                    },
                    agility: {
                        name: '敏捷',
                        value: movement.agility
                    },
                    reactions: {
                        name: '反应',
                        value: movement.reactions
                    },
                    balance: {
                        name: '平衡',
                        value: movement.balance
                    }
                }
            },
            power: {
                name: '力量',
                value: (power.shotPower + power.jumping + power.stamina + power.strength + power.longShots) / 5,
                property: {
                    shotPower: {
                        name: '射门力量',
                        value: power.shotPower
                    },
                    jumping: {
                        name: '弹跳',
                        value: power.jumping
                    },
                    stamina: {
                        name: '体能',
                        value: power.stamina
                    },
                    strength: {
                        name: '强壮',
                        value: power.strength
                    },
                    longShots: {
                        name: '远射',
                        value: power.longShots
                    }
                }
            },
            mentality: {
                name: '心理',
                value: (mentality.aggression + mentality.interceptions + mentality.positioning + mentality.vision + mentality.penalties + mentality.composure) / 6,
                property: {
                    aggression: {
                        name: '侵略性',
                        value: mentality.aggression
                    },
                    interceptions: {
                        name: '拦截意识',
                        value: mentality.interceptions
                    },
                    positioning: {
                        name: '跑位',
                        value: mentality.positioning
                    },
                    vision: {
                        name: '视野',
                        value: mentality.vision
                    },
                    penalties: {
                        name: '点球',
                        value: mentality.penalties
                    },
                    composure: {
                        name: '沉着',
                        value: mentality.composure
                    }
                }
            },
            defending: {
                name: '防守',
                value: (defending.marking + defending.standingTackle + defending.slidingTackle) / 3,
                property: {
                    marking: {
                        name: '盯人',
                        value: defending.marking
                    },
                    standingTackle: {
                        name: '抢断',
                        value: defending.standingTackle
                    },
                    slidingTackle: {
                        name: '铲球',
                        value: defending.slidingTackle
                    }
                }
            },
            goalkeeping: {
                name: '守门',
                value: (goalkeeping.diving + goalkeeping.handling + goalkeeping.kicking + goalkeeping.positioning + goalkeeping.reflexes) / 5,
                property: {
                    diving: {
                        name: '鱼跃',
                        value: goalkeeping.diving
                    },
                    handling: {
                        name: '手抛球',
                        value: goalkeeping.handling
                    },
                    kicking: {
                        name: '开球',
                        value: goalkeeping.kicking
                    },
                    positioning: {
                        name: '站位',
                        value: goalkeeping.positioning
                    },
                    reflexes: {
                        name: '反应',
                        value: goalkeeping.reflexes
                    }
                }
            }
        }
    },
    position: function (position, tag) {
        let ability = this.ability(position, tag);
        let positions = getPosition(ability);
        return {
            tag: tag,
            ability: ability,
            position: positions
        }
    },
    birthday: function () {
        return '19' + String(this.score(80, 99)) + '/' + String(Math.ceil(Math.random() * 12)) + '/' + String(Math.ceil(Math.random() * 28));
    }
};

export function loadPlayers() {
    if (Players.find().cursor.count() === 0) {
        for (var i = 0; i < 500; i++) {
            let tagRate = Math.random();
            let tag;
            if (tagRate <= 0.45) {
                tag = tags[0];
            }
            if (tagRate > 0.45 && tagRate <= 0.9) {
                tag = tags[1];
            }
            if (tagRate > 0.9) {
                tag = tags[2];
            }
            let position = fake.position(['attacking', 'defending', 'goalkeeping'][fake.score(0, 2)], tag);
            Players.insert({
                name: {
                    en: Fake.sentence(2),
                    cn: Fake.sentence(2)
                },
                nationality: countries[Math.ceil(Math.random() * 8)].code,
                weight: fake.score(60, 100),
                birthday: fake.birthday(),
                height: fake.score(160, 200),
                club: {
                    en: clubs[Math.ceil(Math.random() * 15)].en,
                    cn: clubs[Math.ceil(Math.random() * 15)].cn
                },
                uniformNo: fake.score(1, 22),
                position: position.position,
                star: fake.score(1, 3),
                level: 1,
                type: {
                    en: playerTypes[Math.ceil(Math.random() * 2)].en,
                    cn: playerTypes[Math.ceil(Math.random() * 2)].cn
                },
                tag: {
                    en: position.tag.en,
                    cn: position.tag.cn
                },
                description: Fake.sentence(30),
                ability: position.ability
            });
        }
    }
}