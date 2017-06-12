import {MongoObservable} from 'meteor-rxjs';

export const Teams = new MongoObservable.Collection<any>('teams');

function loggedIn() {
    return true;
}

Teams.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});