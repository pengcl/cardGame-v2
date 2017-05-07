import {Meteor} from 'meteor/meteor';

import {loadCountries} from './imports/fixtures/countries';
import {loadClubs} from './imports/fixtures/clubs';
import {loadParties} from './imports/fixtures/parties';
import {loadPlayers} from './imports/fixtures/players';

import './imports/publications/countries';
import './imports/publications/clubs';
import './imports/publications/parties';
import './imports/publications/players';
import './imports/publications/images';


Meteor.startup(() => {
    loadPlayers();
    loadParties();
    loadClubs();
    loadCountries()
});