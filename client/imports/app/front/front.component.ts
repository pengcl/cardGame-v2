import {Component} from '@angular/core';

import style from './front.component.scss';
import template from './front.component.html';

@Component({

    selector: 'front',
    template,
    styles: [style]

})

export class FrontComponent {
    logout() {
        Meteor.logout();
    }
}