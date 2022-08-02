import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app-module/app.component';
import { DeleteArtistComponent } from "../artist-module/delete/delete-artist.component";
import { GetAllArtistsComponent } from "../artist-module/get-all/get-all-artists.component";
import { AddArtistComponent } from "../artist-module/add/add-artist.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'get-all-artists', component: GetAllArtistsComponent },
  { path: 'add-artist', component: AddArtistComponent },
  { path: 'delete-artist', component: DeleteArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
