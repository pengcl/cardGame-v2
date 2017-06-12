import {match} from '../match/battle';

//反转比分
function reverseMatchResult(score) {//score[number,number]比分
    return [score[1], score[0]];
}

//失败5次淘汰
function loseFiveOut(teams) {
    var winners = [];
    for (var i = 0; i < teams.length; i++) {
        var loseTimes = 0;
        for (var j = 0; j < teams[i].battle.length; j++) {
            if (teams[i].battle[j].result.result === 'l') {
                loseTimes = loseTimes + 1;
            }
        }
        if (loseTimes <= 5) {
            winners.push(teams[i]);
        }
    }
    return winners;
}

//获取32强
var thirtyTwo = function (teams) {
    if (teams.length <= 32) {
        return teams
    } else {
        for (var i = 1; i < teams.length; i++) {
            var matchResult = match.battle(teams[0].capability, teams[i].capability);
            var score = reverseMatchResult(matchResult.score);
            var otherResult = {
                score: score,
                result: match.getResult(score[0], score[1])
            };
            teams[0].battle.push({
                other: i,
                result: matchResult
            });
            teams[i].battle.push({
                other: 0,
                result: otherResult
            });
            teams = loseFiveOut(teams);
            if (teams.length <= 32) {
                return teams
            }
        }
        return thirtyTwo(teams);
    }
};

export function getThirtyTwo(teams) {
    return thirtyTwo(teams);
}