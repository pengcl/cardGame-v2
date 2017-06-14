import {Component, OnInit, OnDestroy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';

import {Players} from '../../../../../../both/collections/players.collection';
import {Player} from '../../../../../../both/models/player.model';

import template from './players-list.component.html';

@Component({
    selector: 'players-list',
    template
})

export class PlayersListComponent implements OnInit, OnDestroy {

    players: Observable<Player[]>;
    playersSub: Subscription;

    ngOnInit() {
        this.players = Players.find({}).zone();
        this.playersSub = MeteorObservable.subscribe('players').subscribe();
    }


    /*removeParty(player: Player): void {

        //Players.remove(player._id);

    }*/

    ngOnDestroy() {

        this.playersSub.unsubscribe();

    }

}