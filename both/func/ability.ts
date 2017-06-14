function getPropertyAverage(obj, lv) {
    var value = 0;
    var len = 0;
    for (var k in obj) {
        len = len + 1;
        value = value + parseInt(obj[k].value * 0.01 * lv + obj[k].value);
    }
    return value / len;
}

export function getAbility(ability, lv) {
    for (var k in ability) {
        var ave = getPropertyAverage(ability[k].property, lv);
        ability[k].value = ave;
    }
    return ability;
}