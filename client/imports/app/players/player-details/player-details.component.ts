import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';


import 'rxjs/add/operator/map';

import {Players} from '../../../../../both/collections/players.collection';
import {Player} from '../../../../../both/models/player.model';
import {Tag} from '../../../../../both/models/tag.model';
import {Type} from '../../../../../both/models/type.model';
import {Club} from '../../../../../both/models/club.model';

import {mockTypes} from '../../../../../both/mock-data/types';
import {mockTags} from '../../../../../both/mock-data/tags';
import {mockClubs} from '../../../../../both/mock-data/clubs';

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
    paramsSub: Subscription;
    player: Player;
    playerSub: Subscription;
    tags = tags;
    types = types;
    clubs = clubs;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
            .map(params => params['playerId'])
            .subscribe(playerId => {
                this.playerId = playerId;

                if (this.playerSub) {
                    this.playerSub.unsubscribe();
                }

                this.playerSub = MeteorObservable.subscribe('player', this.playerId).subscribe(() => {
                    this.player = Players.findOne(this.playerId);
                    console.log(this.player);
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

    ngOnDestroy() {
        //this.paramsSub.unsubscribe();
        //this.playerSub.unsubscribe();
    }

}