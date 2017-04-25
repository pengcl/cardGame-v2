import {MongoObservable} from 'meteor-rxjs';
import {Meteor} from 'meteor/meteor';

import {Club} from '../models/club.model';

export const Clubs = new MongoObservable.Collection<Club>('clubs');

function loggedIn() {
    return !!Meteor.user();
}

Clubs.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});