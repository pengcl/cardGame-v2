import {Clubs} from '../../../both/collections/clubs.collection';
import {Club} from '../../../both/models/club.model';
import {clubs} from '../../../both/mock-data/clubs';

export function loadClubs() {
    if (Clubs.find().cursor.count() === 0) {
        clubs.forEach((club: Club) => Clubs.insert(club));
    }

}