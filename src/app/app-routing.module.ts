import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./pages/characters/characters.module').then(m => m.CharactersModule)
  },
  { path: 'locations', loadChildren: () => import('./pages/locations/locations.module').then(m => m.LocationsModule) },
  { path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  {
    path: '**',
    redirectTo: 'characters',
    pathMatch: 'full'
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

