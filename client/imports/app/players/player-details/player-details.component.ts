import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';


import 'rxjs/add/operator/map';

import {Players} from '../../../../../both/collections/players.collection';
import {Player} from '../../../../../both/models/player.model';

import template from './player-details.component.html';

@Component({
    selector: 'player-details',
    template
})

export class PlayerDetailsComponent implements OnInit, OnDestroy {
    playerId: string;
    paramsSub: Subscription;
    player: Player;
    playerSub: Subscription;

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

    ngOnDestroy() {
        /*this.paramsSub.unsubscribe();
        this.playerSub.unsubscribe();*/
    }

}