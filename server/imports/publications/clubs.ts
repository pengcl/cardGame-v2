import {Meteor} from 'meteor/meteor';
import {Clubs} from '../../../both/collections/clubs.collection';

Meteor.publish('clubs', function () {
    return Clubs.find({});
});

Meteor.publish('club', function (clubId: string) {

    return Clubs.find({_id: clubId});

});