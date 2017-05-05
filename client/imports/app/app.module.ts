import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccountsModule} from 'angular2-meteor-accounts-ui';


import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {COMPONENTS_DECLARATIONS} from './components';
import {PLAYERS_DECLARATIONS} from './players';
import {PAGES_DECLARATIONS} from './pages';
import {PARTIES_DECLARATIONS} from './parties';


@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule,
    ],

    declarations: [
        AppComponent,
        ...PARTIES_DECLARATIONS,
        ...PLAYERS_DECLARATIONS,
        ...COMPONENTS_DECLARATIONS,
        ...PAGES_DECLARATIONS
    ],

    bootstrap: [
        AppComponent
    ]

})

export class AppModule {
}