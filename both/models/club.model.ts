import {CollectionObject} from './collection-object.model';

export interface Club extends CollectionObject {
    code: string;
    name: string;
}