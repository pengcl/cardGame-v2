import {Countries} from '../../../both/collections/country.collection';
import {Country} from '../../../both/models/country.model';
import {countries} from '../../../both/mock-data/countries';

export function loadCountries() {
    if (Countries.find().cursor.count() === 0) {
        countries.forEach((country: Country) => Countries.insert(country));
    }

}