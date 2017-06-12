import {Meteor} from 'meteor/meteor';
import {Teams} from '../../../both/collections/teams.collection';

Meteor.publish('teams', function () {
    return Teams.find({});
});

Meteor.publish('team', function (teamId: string) {

    return Teams.find({_id: teamId});

});