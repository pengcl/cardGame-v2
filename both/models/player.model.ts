import {CollectionObject} from './collection-object.model';
import {Position} from './position.model';

export interface Player extends CollectionObject {
    name: {
        en:string;
        cn:string;
    };
    nationality: string;
    weight: number;
    birthday: string;
    height: number;
    club: {
        en:string;
        cn:string;
    };
    uniformNo: number;
    position: Position[];
    star: number;
    level: number;
    type: {
        en:string;
        cn:string;
    };
    tag: {
        en:string;
        cn:string;
    };
    description: string;
    ability: {
        attacking: {//进攻
            name: string,
            value: number;
            property: {
                crossing: {//传中
                    name: string;
                    value: number;
                }
                finishing: {//射术
                    name: string;
                    value: number;
                }
                heading: {//头球
                    name: string;
                    value: number;
                }
                shortPassing: {//短传
                    name: string;
                    value: number;
                }
                volleys: {//凌空
                    name: string;
                    value: number;
                }
            }
        };
        skill: {//技巧
            name: string,
            value: number;
            property: {
                dribbling: {//盘带
                    name: string;
                    value: number;
                }
                curve: {//弧线
                    name: string;
                    value: number;
                }
                freeKick: {//任意球
                    name: string;
                    value: number;
                }
                longPassing: {//长传
                    name: string;
                    value: number;
                }
                ballControl: {//控球
                    name: string;
                    value: number;
                }
            }
        };
        movement: {//移动
            name: string,
            value: number;
            property: {
                acceleration: {//加速
                    name: string;
                    value: number;
                }
                sprintSpeed: {//速度
                    name: string;
                    value: number;
                }
                agility: {//敏捷
                    name: string;
                    value: number;
                }
                reactions: {//反应
                    name: string;
                    value: number;
                }
                balance: {//平衡
                    name: string;
                    value: number;
                }
            }
        };
        power: {//力量
            name: string,
            value: number;
            property: {
                shotPower: {//射门力量
                    name: string;
                    value: number;
                }
                jumping: {//弹跳
                    name: string;
                    value: number;
                }
                stamina: {//体能
                    name: string;
                    value: number;
                }
                strength: {//强壮
                    name: string;
                    value: number;
                }
                longShots: {//远射
                    name: string;
                    value: number;
                }
            }
        };
        mentality: {//心理
            name: string,
            value: number;
            property: {
                aggression: {//侵略性
                    name: string;
                    value: number;
                }
                interceptions: {//拦截意识
                    name: string;
                    value: number;
                }
                positioning: {//跑位
                    name: string;
                    value: number;
                }
                vision: {//视野
                    name: string;
                    value: number;
                }
                penalties: {//点球
                    name: string;
                    value: number;
                }
                composure: {//沉着
                    name: string;
                    value: number;
                }
            }
        };
        defending: {//防守
            name: string,
            value: number;
            property: {
                marking: {//盯人
                    name: string;
                    value: number;
                }
                standingTackle: {//抢断
                    name: string;
                    value: number;
                }
                slidingTackle: {//铲球
                    name: string;
                    value: number;
                }
            }
        };
        goalkeeping: {//守门
            name: string,
            value: number;
            property: {
                diving: {//鱼跃
                    name: string;
                    value: number;
                }
                handling: {//手抛球
                    name: string;
                    value: number;
                }
                kicking: {//开球
                    name: string;
                    value: number;
                }
                positioning: {//站位
                    name: string;
                    value: number;
                }
                reflexes: {//反应
                    name: string;
                    value: number;
                }
            }
        };
    };
    createdAt?: string;
    owner?: string;
    baseId?: string;
}