import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Players} from '../../../../../both/collections/players.collection';
import {InjectUser} from "angular2-meteor-accounts-ui";
import template from './players-form.component.html';

@Component({

    selector: 'players-form',
    template

})

@InjectUser("user")
export class PartiesFormComponent implements OnInit {
    addForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }


    ngOnInit() {
        this.addForm = this.formBuilder.group({
            name: ['', Validators.required],
            nationality: ['', Validators.required],
            weight: [],
            birthday: [],
            height: [],
            club: ['', Validators.required],
            uniformNo: [],
            position: ['', Validators.required],
            star: ['', Validators.required],
            level: ['', Validators.required],
            type: ['', Validators.required],
            tag: ['', Validators.required],
            description: [],
            ability: {
                attack: ['', Validators.required],
                defense: ['', Validators.required],
                speed: ['', Validators.required],
                skill: ['', Validators.required],
                strength: ['', Validators.required],
                spirit: ['', Validators.required],
            },
            createdAt: [],
            owner: [],
            baseId: []
        });
    }

    addParty(): void {

        if (!Meteor.userId()) {
            alert('Please log in to add a player');
            return;
        }

        if (this.addForm.valid) {
            Players.insert({
                name: this.addForm.value.name,
                nationality: this.addForm.value.nationality,
                weight: this.addForm.value.weight,
                birthday: this.addForm.value.birthday,
                height: this.addForm.value.height,
                club: this.addForm.value.club,
                uniformNo: this.addForm.value.uniformNo,
                position: this.addForm.value.position,
                star: this.addForm.value.star,
                level: this.addForm.value.level,
                type: this.addForm.value.type,
                tag: this.addForm.value.tag,
                description: this.addForm.value.description,
                ability: {
                    attack: this.addForm.value.attack,
                    defense: this.addForm.value.defense,
                    speed: this.addForm.value.speed,
                    skill: this.addForm.value.skill,
                    strength: this.addForm.value.strength,
                    spirit: this.addForm.value.spirit,
                },
                createdAt: '',
                owner: '',
                baseId: ''
            });

            this.addForm.reset();
        }

    }

}