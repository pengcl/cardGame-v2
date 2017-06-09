import {getNumberOfRND} from '../extands/randomNormalDistribution';

function createRandomTeam() {
    var capability;
    do {
        capability = getNumberOfRND(10000, 5000);
    } while (capability < 0);
    return Math.floor(capability);
}

function createRandomTeams(num) {//创建随机
    var teams = [];
    for (var i = 0; i < num; i++) {
        teams.push({
            id: i,
            capability: createRandomTeam(),
            battle: [],
            ranking: 0,
            group: ''
        });
    }
    return teams;
}