import {Players} from '../collections/players.collection';

import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    addPlayer: function (playerId: string) {
        check(playerId, String);

        let player = Players.collection.findOne(playerId);

        if(!player){
            throw new Meteor.Error('404', 'No such party!');
        }
    }
});