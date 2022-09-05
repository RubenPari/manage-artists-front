import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDescriptionComponent } from '../components/add-description/add-description.component';
import { AddArtistComponent } from '../components/artist/add-artist/add-artist.component';
import { DeleteArtistComponent } from '../components/artist/delete-artist/delete-artist.component';
import { AlbumsListComponent } from '../components/album/albums-list/albums-list.component';
import { ArtistsListComponent } from '../components/artist/artists-list/artists-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists-list', pathMatch: 'full' },
  { path: 'artists-list', component: ArtistsListComponent },
  { path: 'albums-list', component: AlbumsListComponent },
  { path: 'add-artist', component: AddArtistComponent },
  { path: 'delete-artist', component: DeleteArtistComponent },
  { path: 'add-description', component: AddDescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
