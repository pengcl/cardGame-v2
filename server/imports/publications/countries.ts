import {Meteor} from 'meteor/meteor';
import {Countries} from '../../../both/collections/country.collection';

Meteor.publish('countries', function () {

    return Countries.find({});

});

Meteor.publish('country', function (countryId: string) {

    return Countries.find({_id: countryId});

});