import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app-module/app.component';
import { GetAllArtistsComponent } from '../get-all-artists/get-all-artists.component';
import { AddArtistComponent } from "../add-artist/add-artist.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'get-all-artists', component: GetAllArtistsComponent },
  { path: 'add-artist', component: AddArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
