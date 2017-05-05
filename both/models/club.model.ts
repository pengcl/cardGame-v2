import {CollectionObject} from './collection-object.model';
import {Country} from './country.model';

export interface Club extends CollectionObject {
    en: string;
    cn: string;
    country: Country;
}