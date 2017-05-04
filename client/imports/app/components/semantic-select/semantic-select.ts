import {Component, Input, Output, EventEmitter} from '@angular/core';

import template from './semantic-select.html';

declare var $: any;

@Component({

    selector: 'semantic-select',
    template

})

export class SemanticSelectComponent {
    @Input() optionLabel: string;
    @Input() options: any[];
    @Input() option: any;
    @Output() optionOut = new EventEmitter();
    showOptionClass: boolean = false;

    constructor() {
    }

    showOption() {
        this.showOptionClass = !this.showOptionClass;
    }

    setOption(event, option) {
        this.option = option;
        this.optionOut.emit(this.option);
        this.showOptionClass = !this.showOptionClass;
    }
}