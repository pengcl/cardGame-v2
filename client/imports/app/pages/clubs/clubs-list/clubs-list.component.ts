import {Component, OnInit, OnDestroy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';

import {Clubs} from '../../../../../../both/collections/clubs.collection';
import {Club} from '../../../../../../both/models/club.model';

import template from './clubs-list.component.html';

@Component({

    selector: 'clubs-list',
    template

})

export class ClubsListComponent implements OnInit, OnDestroy {
    clubs: Observable<Club[]>;
    clubsSub: Subscription;

    ngOnInit() {
        this.clubs = Clubs.find({}).zone();
        this.clubsSub = MeteorObservable.subscribe('clubs').subscribe();
    }


    removeClub(club: Club): void {

        Clubs.remove(club._id);

    }

    ngOnDestroy() {

        //this.playersSub.unsubscribe();

    }
}