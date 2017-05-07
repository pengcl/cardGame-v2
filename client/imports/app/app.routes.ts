import {Route} from '@angular/router';

import {CountriesListComponent} from './pages/countries/countries-list/countries-list.component';
import {CountryDetailsComponent} from './pages/countries/country-details/country-details.component';
import {CountryFormComponent} from './pages/countries/country-form/country-form.component';
import {ClubsListComponent} from './pages/clubs/clubs-list/clubs-list.component';
import {ClubDetailsComponent} from './pages/clubs/club-details/club-details.component';
import {PlayersListComponent} from './players/players-list/players-list.component';
import {PlayerDetailsComponent} from './players/player-details/player-details.component';
import {PartyDetailsComponent} from './parties/party-details.component';


export const routes: Route[] = [

    {path: '', component: PlayersListComponent},
    {path: 'countries', component: CountriesListComponent},
    {path: 'country/:countryId', component: CountryDetailsComponent},
    {path: 'addCountry', component: CountryFormComponent},
    {path: 'clubs', component: ClubsListComponent},
    {path: 'club/:clubId', component: ClubDetailsComponent},
    {path: 'players', component: PlayersListComponent},
    {path: 'player/:playerId', component: PlayerDetailsComponent},
    {path: 'party/:partyId', component: PartyDetailsComponent}

];