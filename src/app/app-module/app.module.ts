import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SyncPlaylistComponent } from '../sync-playlist/sync-playlist.component';
import { GetAllArtistsComponent } from "../artist-module/get-all/get-all-artists.component";
import { AddArtistComponent } from "../artist-module/add/add-artist.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetAllArtistsComponent,
    AddArtistComponent,
    SyncPlaylistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
