import {MongoObservable} from 'meteor-rxjs';
import {Meteor} from 'meteor/meteor';

import {Country} from '../models/country.model';

export const Countries = new MongoObservable.Collection<Country>('countries');

function loggedIn() {
    return !!Meteor.user();
}

Countries.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});