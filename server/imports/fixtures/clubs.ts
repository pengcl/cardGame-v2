import {Clubs} from '../../../both/collections/clubs.collection';
import {Club} from '../../../both/models/club.model';
import {mockClubs} from '../../../both/mock-data/clubs';

export function loadClubs() {
    if (Clubs.find().cursor.count() === 0) {
        mockClubs.forEach((club: Club) => Clubs.insert(club));
    }

}