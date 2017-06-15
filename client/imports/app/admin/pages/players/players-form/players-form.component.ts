import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Players} from '../../../../../../../both/collections/players.collection';
import {InjectUser} from "angular2-meteor-accounts-ui";
import template from './players-form.component.html';

@Component({

    selector: 'players-form',
    template

})

@InjectUser("user")
export class AdminPartiesFormComponent implements OnInit {
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
            /*Players.insert({
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
                    attacking: this.addForm.value.attacking,
                    skill: this.addForm.value.skill,
                    movement: this.addForm.value.movement,
                    power: this.addForm.value.power,
                    mentality: this.addForm.value.mentality,
                    defending: this.addForm.value.defending,
                    goalkeeping:this.addForm.value.goalkeeping
                },
                createdAt: '',
                owner: '',
                baseId: ''
            });*/

            this.addForm.reset();
        }

    }

}