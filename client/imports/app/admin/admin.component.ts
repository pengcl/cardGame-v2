import {Component} from '@angular/core';

import style from './admin.component.scss';
import template from './admin.component.html';

@Component({

    selector: 'admin',
    template,
    styles: [style]

})

export class AdminComponent {
    logout() {
        Meteor.logout();
    }
}