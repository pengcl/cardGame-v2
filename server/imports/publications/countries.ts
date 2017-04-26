import {Meteor} from 'meteor/meteor';
import {Countries} from '../../../both/collections/country.collection';

Meteor.publish('countries', function () {

    return Countries.find({});

});