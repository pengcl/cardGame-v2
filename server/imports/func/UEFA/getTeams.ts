import {getNumberOfRND} from '../extands/randomNormalDistribution';

function createRandomTeam(r, d) {//r:number 平均数，d:波动数
    var capability;
    do {
        capability = getNumberOfRND(r, d);
    } while (capability < 0);
    return Math.floor(capability);
}

//创建随机
export function createRandomTeams(num, r, d) {//num:number 创建个数，r:number 平均战力，d:number 波动;
    var teams = [];
    for (var i = 0; i < num; i++) {
        teams.push({
            id: i,
            capability: createRandomTeam(r, d),
            battle: [],
            ranking: 0,
            group: ''
        });
    }
    return teams;
}