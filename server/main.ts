import {Meteor} from 'meteor/meteor';


import {loadParties} from './imports/fixtures/parties';
import {loadPlayers} from './imports/fixtures/players';

import './imports/publications/parties';
import './imports/publications/players';


Meteor.startup(() => {
    loadPlayers();
    loadParties();

});