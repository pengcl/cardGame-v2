import {Meteor} from 'meteor/meteor';

import {loadCountries} from './imports/fixtures/countries';
import {loadClubs} from './imports/fixtures/clubs';
import {loadParties} from './imports/fixtures/parties';
import {loadPlayers} from './imports/fixtures/players';
import {loadTeams} from './imports/fixtures/teams';

import './imports/publications/countries';
import './imports/publications/clubs';
import './imports/publications/parties';
import './imports/publications/players';
import './imports/publications/images';
import './imports/publications/teams';

Meteor.startup(() => {
    loadPlayers();
    loadParties();
    loadClubs();
    loadCountries();
    loadTeams();
});