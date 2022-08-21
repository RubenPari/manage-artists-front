import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDescriptionComponent } from '../add-description/add-description.component';
import { AddArtistComponent } from '../artist-module/add-artist/add-artist.component';
import { ArtistsListComponent } from '../artist-module/artists-list/artists-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists-list', pathMatch: 'full' },
  { path: 'artists-list', component: ArtistsListComponent },
  { path: 'add-artist', component: AddArtistComponent },
  { path: 'add-description', component: AddDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
