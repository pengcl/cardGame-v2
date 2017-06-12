import {Teams} from '../../../both/collections/teams.collection';
import {createRandomTeams} from '../func/UEFA/getTeams';
import {getThirtyTwo} from '../func/UEFA/getThirtyTwo';

let mockTeams = createRandomTeams(300, 10000, 5000);

export function loadTeams() {
    if (Teams.find().cursor.count() === 0) {
        mockTeams.forEach((team: any) => Teams.insert(team));
    }

}