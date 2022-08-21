import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArtistsListComponent } from '../artist-module/artists-list/artists-list.component';
import { ArtistComponent } from '../artist-module/artist/artist.component';
import { AddDescriptionComponent } from '../add-description/add-description.component';
import { AddArtistComponent } from '../artist-module/add-artist/add-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    ArtistsListComponent,
    AddArtistComponent,
    AddDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
