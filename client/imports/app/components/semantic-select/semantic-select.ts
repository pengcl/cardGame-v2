import {Component, Input} from '@angular/core';

import template from './semantic-select.html';

declare var $: any;

@Component({

    selector: 'semantic-select',
    template

})

export class SemanticSelectComponent {
    @Input() options: any[];
    showOptionClass: boolean = false;
    selectedOption: any;

    constructor() {
        console.log(this.selectedOption);
    }

    showOption() {
        this.showOptionClass = !this.showOptionClass;
    }

    setOption(event, option) {
        this.selectedOption = option;
        this.showOptionClass = !this.showOptionClass;
    }
}