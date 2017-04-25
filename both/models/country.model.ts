import {CollectionObject} from './collection-object.model';

export interface Country extends CollectionObject {
    code: string;
    name: string;
}