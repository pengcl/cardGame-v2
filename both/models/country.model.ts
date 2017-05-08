import {CollectionObject} from './collection-object.model';

export interface Country extends CollectionObject {
    en: string;
    cn: string;
    images?: string[];
}