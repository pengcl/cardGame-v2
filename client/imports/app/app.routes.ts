import {Route} from '@angular/router';

import {FrontComponent} from './front/front.component';
import {FrontHomeComponent} from './front/pages/home/home.component';

import {AdminComponent} from './admin/admin.component';
import {AdminCountriesListComponent} from './admin/pages/countries/countries-list/countries-list.component';
import {AdminCountryDetailsComponent} from './admin/pages/countries/country-details/country-details.component';
import {AdminCountryFormComponent} from './admin/pages/countries/country-form/country-form.component';
import {AdminClubsListComponent} from './admin/pages/clubs/clubs-list/clubs-list.component';
import {AdminClubDetailsComponent} from './admin/pages/clubs/club-details/club-details.component';
import {AdminPlayersListComponent} from './admin/pages/players/players-list/players-list.component';
import {AdminPlayerDetailsComponent} from './admin/pages/players/player-details/player-details.component';

const appAdminRoutes: Route[] = [
    {path: 'countries', component: AdminCountriesListComponent},
    {path: 'country/:countryId', component: AdminCountryDetailsComponent},
    {path: 'addCountry', component: AdminCountryFormComponent},
    {path: 'clubs', component: AdminClubsListComponent},
    {path: 'club/:clubId', component: AdminClubDetailsComponent},
    {path: 'players', component: AdminPlayersListComponent},
    {path: 'player/:playerId', component: AdminPlayerDetailsComponent},
    // 如果地址栏中输入没有定义的路由就跳转到one路由界面
    {
        path: '**', redirectTo: "players"
    }
];

const appFrontRoutes: Route[] = [
    {path: 'home', component: FrontComponent},
    {
        path: '**', redirectTo: "home"
    }
];

export const routes: Route[] = [

    {path: '', component: FrontHomeComponent},
    {
        path: 'front',
        component: FrontComponent,
        children: appFrontRoutes
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: appAdminRoutes
    }
];