import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Countries} from '../../../../../../../both/collections/countries.collection';
import {Country} from '../../../../../../../both/models/country.model';
import {InjectUser} from "angular2-meteor-accounts-ui";
import template from './country-form.component.html';

@Component({

    selector: 'country-form',
    template

})

@InjectUser("user")
export class AdminCountryFormComponent implements OnInit {
    countries: Observable<Country[]>;
    countriesSub: Subscription;

    addForm: FormGroup;
    images: string[] = [];

    constructor(private formBuilder: FormBuilder) {
    }


    ngOnInit() {
        this.addForm = this.formBuilder.group({
            cn: ['', Validators.required],
            en: ['', Validators.required]
        });
    }

    addCountry(): void {

        if (!Meteor.userId()) {
            alert('Please log in to add a player');
            return;
        }

        if (this.addForm.valid) {
            Countries.insert({
                images: this.images,
                cn: this.addForm.value.cn,
                en: this.addForm.value.en
            });

            this.addForm.reset();
        }

    }

    onImage(imageId: string) {

        this.images.push(imageId);

    }

}