import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';

import {Players} from '../../../../both/collections/players.collection';
import {Player} from '../../../../both/models/player.model';

import template from './players-list.component.html';

@Component({
    selector: 'players-list',
    template
})

export class PartiesListComponent implements OnInit, OnDestroy {
    players: Observable<Player[]>;
    playersSub: Subscription;

    ngOnInit() {
        this.players = Players.find({}).zone();
        this.playersSub = MeteorObservable.subscribe('players').subscribe();
    }

    removePlayer(player: Player): void {
        Players.remove(player._id);
    }

    search(value: string): void {

        this.players = Players.find(value ? {location: value} : {}).zone();

    }

    ngOnDestroy() {
        this.playersSub.unsubscribe();
    }
}