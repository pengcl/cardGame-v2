import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AccountsModule} from 'angular2-meteor-accounts-ui';

import {AppComponent} from './app.component';
import {routes} from './app.routes';

import {FRONT_DECLARATIONS} from './front';
import {ADMIN_DECLARATIONS} from './admin';

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
        ...FRONT_DECLARATIONS,
        ...ADMIN_DECLARATIONS
    ],

    bootstrap: [
        AppComponent
    ]

})

export class AppModule {
}