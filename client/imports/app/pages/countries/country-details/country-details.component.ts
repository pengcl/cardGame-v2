import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from 'meteor-rxjs';


import 'rxjs/add/operator/map';

import {Countries} from '../../../../../../both/collections/countries.collection';
import {Country} from '../../../../../../both/models/country.model';


import template from './country-details.component.html';

@Component({
    selector: 'country-details',
    template
})

export class CountryDetailsComponent implements OnInit, OnDestroy {


    countryId: string;
    country: Country;
    countrySub: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params
            .map(params => params['countryId'])
            .subscribe(countryId => {
                this.countryId = countryId;

                if (this.countrySub) {
                    this.countrySub.unsubscribe();
                }

                this.countrySub = MeteorObservable.subscribe('country', this.countryId).subscribe(() => {
                    MeteorObservable.autorun().subscribe(() => {

                        this.country = Countries.findOne(this.countryId);

                    });
                });
            });
    }

    ngOnDestroy() {
        this.countrySub.unsubscribe();
    }
}