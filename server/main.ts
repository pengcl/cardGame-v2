import {Meteor} from 'meteor/meteor';

import {loadParties} from './imports/fixtures/parties';
/*import {loadCountries} from "./imports/fixtures/countries";
import {loadClubs} from "./imports/fixtures/clubs";*/
import {loadPlayers} from "./imports/fixtures/players";

Meteor.startup(() => {
    loadParties();
    /*loadCountries();
    loadClubs();*/
    loadPlayers();
});