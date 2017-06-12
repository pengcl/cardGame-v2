import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';


import 'rxjs/add/operator/map';

import {Country} from '../../../../../both/models/country.model';
import {Tag} from '../../../../../both/models/tag.model';
import {Type} from '../../../../../both/models/type.model';
import {Club} from '../../../../../both/models/club.model';
import {Player} from '../../../../../both/models/player.model';

import {Clubs} from '../../../../../both/collections/clubs.collection';
import {Countries} from '../../../../../both/collections/countries.collection';
import {mockTypes} from '../../../../../both/mock-data/types';
import {mockTags} from '../../../../../both/mock-data/tags';
import {mockClubs} from '../../../../../both/mock-data/clubs';
import {Players} from '../../../../../both/collections/players.collection';

import template from './player-details.component.html';

const tags: Tag[] = mockTags;
const types: Type[] = mockTypes;
const clubs: Club[] = mockClubs;

@Component({
    selector: 'player-details',
    template
})

export class PlayerDetailsComponent implements OnInit, OnDestroy {
    playerId: string;
    player: Player;
    playerSub: Subscription;

    players: Observable<Player[]>;
    playersSub: Subscription;
    tags = tags;
    types = types;

    clubs: Observable<Club[]>;
    clubsSub: Subscription;

    countries: Observable<Country[]>;
    countriesSub: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.clubs = Clubs.find({}).zone();
        this.clubsSub = MeteorObservable.subscribe('clubs').subscribe();

        this.countries = Countries.find({}).zone();
        this.countriesSub = MeteorObservable.subscribe('countries').subscribe();

        this.route.params
            .map(params => params['playerId'])
            .subscribe(playerId => {
                this.playerId = playerId;

                if (this.playerSub) {
                    this.playerSub.unsubscribe();
                }

                this.playerSub = MeteorObservable.subscribe('player', this.playerId).subscribe(() => {
                    MeteorObservable.autorun().subscribe(() => {

                        this.player = Players.findOne(this.playerId);

                    });
                });
            });
    }

    savePlayer() {
        if (!Meteor.userId()) {
            alert('Please log in to change this party');
            return;
        }

        Players.update(this.player._id, {
            $set: {
                name: this.player.name,
                description: this.player.description,
            }
        });
    }

    receiverTag(event) {
        this.player.tag = event;
    }

    receiverType(event) {
        this.player.type = event;
    }

    receiverClub(event) {
        this.player.club = event;
    }

    receiverCountry(event) {
        this.player.nationality = event;
    }

    ngOnDestroy() {
        this.playerSub.unsubscribe();
    }

}