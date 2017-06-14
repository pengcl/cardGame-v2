import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccountsModule} from 'angular2-meteor-accounts-ui';


import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {PIPES_DECLARATIONS} from './pipes';
import {COMPONENTS_DECLARATIONS} from './components';
import {PLAYERS_DECLARATIONS} from './pages/players';
import {PAGES_DECLARATIONS} from './pages';
import {PARTIES_DECLARATIONS} from './parties';

import {FileDropModule} from "angular2-file-drop";


@NgModule({

    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule,
        FileDropModule
    ],

    declarations: [
        AppComponent,
        ...PARTIES_DECLARATIONS,
        ...PLAYERS_DECLARATIONS,
        ...COMPONENTS_DECLARATIONS,
        ...PAGES_DECLARATIONS,
        ...PIPES_DECLARATIONS
    ],

    bootstrap: [
        AppComponent
    ]

})

export class AppModule {
}