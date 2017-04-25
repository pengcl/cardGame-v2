import {Meteor} from 'meteor/meteor';

import {Counts} from 'meteor/tmeasday:publish-counts';
import {Players} from '../../../both/collections/players.collection';

interface Options {
    [key: string]: any;
}
Meteor.publish('players', function () {
    return Players.find({});
});
/*Meteor.publish('players', function () {
 /!*Counts.publish(this, 'numberOfPlayers', Players.collection.find(buildQuery.call(this)), {noReady: true});*!/
 return Players.find({});

 });*/

Meteor.publish('player', function (playerId: string) {

    return Players.find({});

});

/*
 function buildQuery(playerId?: string): Object {

 const isAvailable = {
 $or: [
 {// party is public
 public: true
 },
 // or
 {// current user is the owner
 $and: [{
 owner: this.userId
 }, {
 owner: {
 $exists: true
 }
 }]
 }
 ]
 };

 if (playerId) {
 return {// only single party
 $and: [
 {
 _id: playerId
 },
 isAvailable
 ]
 };
 }
 return isAvailable;
 };*/
