//base
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';
import 'rxjs/add/operator/map';

//model
import {Country} from '../../../../../../both/models/country.model';
import {Tag} from '../../../../../../both/models/tag.model';
import {Type} from '../../../../../../both/models/type.model';
import {Club} from '../../../../../../both/models/club.model';
import {Player} from '../../../../../../both/models/player.model';

//data
import {Clubs} from '../../../../../../both/collections/clubs.collection';
import {Countries} from '../../../../../../both/collections/countries.collection';
import {Players} from '../../../../../../both/collections/players.collection';
import {mockYears, mockMonths, mockDays} from '../../../../../../both/mock-data/date';
import {mockTypes} from '../../../../../../both/mock-data/types';
import {mockTags} from '../../../../../../both/mock-data/tags';
import {mockClubs} from '../../../../../../both/mock-data/clubs';

//func
import {getPosition} from '../../../../../../both/func/positions';
import {getAbility} from '../../../../../../both/func/ability';

//template
import template from './player-details.component.html';

const tags: Tag[] = mockTags;
const types: Type[] = mockTypes;
const clubs: Club[] = mockClubs;
const years = mockYears;
const months = mockMonths;
const days = mockDays;

@Component({
    selector: 'player-details',
    template
})

export class PlayerDetailsComponent implements OnInit, OnDestroy {
    playerId: string;
    player: Player;

    tags = tags;
    types = types;
    years = years;
    months = months;
    days = days;

    year: any;
    month: any;
    day: any;

    clubs: Observable<Club[]>;
    clubsSub: Subscription;

    countries: Observable<Country[]>;
    countriesSub: Subscription;

    playerSub: Subscription;
    players: Observable<Player[]>;

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
                        this.year = {
                            en: this.player.birthday.split('/')[0],
                            cn: this.player.birthday.split('/')[0]
                        };
                        this.month = {
                            en: this.player.birthday.split('/')[1],
                            cn: this.player.birthday.split('/')[1]
                        };
                        this.day = {
                            en: this.player.birthday.split('/')[2],
                            cn: this.player.birthday.split('/')[2]
                        };
                    });
                });
            });
    }

    savePlayer() {
        if (!Meteor.userId()) {
            alert('Please log in to change this player');
            return;
        }

        Players.update(this.player._id, {
            $set: {
                name: this.player.name,
                nationality: this.player.nationality,
                weight: this.player.weight,
                birthday: this.player.birthday,
                height: this.player.height,
                club: this.player.club,
                uniformNo: this.player.uniformNo,
                star: this.player.star,
                level: this.player.level,
                type: this.player.type,
                tag: this.player.tag,
                position: getPosition(this.player.ability, this.player.level),
                description: this.player.description,
                ability: getAbility(this.player.ability, this.player.level)
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

    receiverYear(event) {
        this.year = event;
        this.player.birthday = this.year.cn + '/' + this.month.cn + '/' + this.day.cn;
    }

    receiverMonth(event) {
        this.month = event;
        this.player.birthday = this.year.cn + '/' + this.month.cn + '/' + this.day.cn;
    }

    receiverDay(event) {
        this.day = event;
        this.player.birthday = this.year.cn + '/' + this.month.cn + '/' + this.day.cn;
    }

    ngOnDestroy() {
        this.clubsSub.unsubscribe();
        this.countriesSub.unsubscribe();
        this.playerSub.unsubscribe();
    }

}