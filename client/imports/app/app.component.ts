import {Component} from '@angular/core';

import style from './app.component.scss';
import template from './app.component.html';

@Component({

    selector: 'app',
    template,
    styles: [style]

})

export class AppComponent {
    logout() {
        Meteor.logout();
    }
}