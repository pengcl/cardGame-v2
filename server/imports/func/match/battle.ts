import {getNumberOfRND} from '../extands/randomNormalDistribution';

//tools start
//获取对象或数组中选中对象的index
function getIndex(jsonArray, keyName, value) {
    for (var i = 0; i < jsonArray.length; i++) {
        if (jsonArray[i][keyName] == value) {
            return i;
        }
    }
};
//tools end

/*var setTeamsData = function (teams) {
    for (var i = 0; i < teams.length; i++) {
        var team = teams[i];
        var id = team.id;
        var index = getIndex(Teams, 'id', id);
        //console.log(Teams[index]);
        Teams[index].group = team.group;
    }
    return Teams;
};*/

//小组赛
var groupCompetition = function () {

};

//
var get16 = function (teams) {

};

//32强分组
var grouping = function (teams) {//分组

    var groupsName = ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'H'];
    var groups = [];
    var _teams = [];
    for (var i = 0; i < teams.length; i++) {
        _teams.push({
            id: teams[i].id,
            capability: teams[i].capability
        })
    }
    _teams = _teams.sort(function (a, b) {
        return b.capability - a.capability;
    });

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            _teams[i + j * 8].group = groupsName[i];
        }
    }

    return _teams;
};

//获取胜率
function winRate(our, other) {//our[number],other[number]为战力
    return 1 / (1 + Math.pow(10, -((our - other) / (our / 20))));
}

//获取比分
function winScore(r) {//r[number]为胜率
    var our = 0, other = 0;
    do {
        our = getNumberOfRND(r * 10, 2);
        other = getNumberOfRND((1 - r) * 10, 2);
    } while (our > 10 || our < 0 || other > 10 || other < 0);
    return [Math.floor(our), Math.floor(other)]
}

//比赛函数
export let match = {
    getResult: function (our, other) {//获取比赛结果
        var gd = our - other;//净胜球
        if (gd > 0) {
            return 'w';
        }
        else if (gd === 0) {
            return 'd';
        } else {
            return 'l';
        }
    },
    battle: function (our, other) {
        var s, r;
        r = winRate(our, other);
        s = winScore(r);
        return {
            score: [s[0], s[1]],
            result: this.getResult(s[0], s[1])
        };
    }
};