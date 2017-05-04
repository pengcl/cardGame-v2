import {Countries} from '../../../both/collections/country.collection';
import {Country} from '../../../both/models/country.model';
import {mockCountries} from '../../../both/mock-data/countries';

export function loadCountries() {
    if (Countries.find().cursor.count() === 0) {
        mockCountries.forEach((country: Country) => Countries.insert(country));
    }

}