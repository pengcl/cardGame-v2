import {Meteor} from 'meteor/meteor';

import {Players} from '../../../both/collections/players.collection';

Meteor.publish('players', function () {

    return Players.find(buildQuery.call(this));

});


Meteor.publish('player', function (playerId: string) {

    return Players.find(buildQuery.call(this, playerId));

});

function buildQuery(playerId?: string): Object {

    const isAvailable = {



    };


    if (playerId) {

        return {

            // only single player

            $and: [{

                _id: playerId

            },

                isAvailable

            ]

        };

    }


    return isAvailable;

}