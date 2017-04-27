import {Route} from '@angular/router';


import {PartiesListComponent} from './parties/parties-list.component';
import {PlayersListComponent} from './players/players-list/players-list.component';
import {PlayerDetailsComponent} from './players/player-details/player-details.component';
import {PartyDetailsComponent} from './parties/party-details.component';


export const routes: Route[] = [

    {path: '', component: PlayersListComponent},
    {path: 'player/:playerId', component: PlayerDetailsComponent},
    {path: 'party/:partyId', component: PartyDetailsComponent}

];