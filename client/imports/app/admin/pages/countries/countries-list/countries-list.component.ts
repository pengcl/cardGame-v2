import {Component, OnInit, OnDestroy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {MeteorObservable} from 'meteor-rxjs';

import {Countries} from '../../../../../../../both/collections/countries.collection';
import {Country} from '../../../../../../../both/models/country.model';

import template from './countries-list.component.html';

@Component({

    selector: 'clubs-list',
    template

})

export class AdminCountriesListComponent implements OnInit, OnDestroy {
    countries: Observable<Country[]>;
    countriesSub: Subscription;
    imagesSubs: Subscription;

    ngOnInit() {
        this.imagesSubs = MeteorObservable.subscribe('images').subscribe();
        this.countries = Countries.find({}).zone();
        this.countriesSub = MeteorObservable.subscribe('countries').subscribe();
    }


    removeClub(country: Country): void {

        Countries.remove(country._id);

    }

    ngOnDestroy() {
        this.countriesSub.unsubscribe();
        this.imagesSubs.unsubscribe();
    }
}