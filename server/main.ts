import {Meteor} from 'meteor/meteor';

import {loadParties} from './imports/fixtures/parties';
import {loadPlayers} from "./imports/fixtures/players";

Meteor.startup(() => {
    loadParties();
    loadPlayers();
});