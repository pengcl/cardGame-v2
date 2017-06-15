import {Component} from '@angular/core';

import template from './fixed-top-menu.html';

declare var $: any;

@Component({

    selector: 'fixed-top-menu',
    template

})

export class FixedTopMenuComponent {
    constructor() {
    }

    showSidebarMenu() {
        //console.log($('.ui.sidebar').html());
        $('.ui.sidebar').sidebar('toggle');
    }
}