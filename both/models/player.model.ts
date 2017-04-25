import {CollectionObject} from './collection-object.model';
import {Position} from './position.model';

export interface Player extends CollectionObject {
    name: string;
    nationality: string;
    weight: number;
    birthday: string;
    height: number;
    club: string;
    uniformNo: number;
    position: Position[];
    star: number;
    level: number;
    type: string;
    tag: string;
    description: string;
    ability: {
        attack: number;
        defense: number;
        speed: number;
        skill: number;
        strength: number;
        spirit: number;
    };
}