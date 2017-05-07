import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';


import 'rxjs/add/operator/map';

import {Clubs} from '../../../../../../both/collections/clubs.collection';
import {Countries} from '../../../../../../both/collections/countries.collection';
import {Club} from '../../../../../../both/models/club.model';


import template from './club-details.component.html';

@Component({
    selector: 'club-details',
    template
})

export class ClubDetailsComponent implements OnInit, OnDestroy {

    countries: Observable<Club[]>;
    countriesSub: Subscription;

    clubId: string;
    club: Club;
    clubSub: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.countries = Countries.find({}).zone();
        this.countriesSub = MeteorObservable.subscribe('countries').subscribe();

        this.route.params
            .map(params => params['clubId'])
            .subscribe(clubId => {
                this.clubId = clubId;

                if (this.clubSub) {
                    this.clubSub.unsubscribe();
                }

                this.clubSub = MeteorObservable.subscribe('club', this.clubId).subscribe(() => {
                    MeteorObservable.autorun().subscribe(() => {

                        this.club = Clubs.findOne(this.clubId);

                    });
                });
            });
    }

    ngOnDestroy() {
        this.clubSub.unsubscribe();
        this.countriesSub.unsubscribe();
    }
}