import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AddDescriptionComponent } from '../add-description/add-description.component';
import { FormsModule } from '@angular/forms';
import { AddArtistComponent } from '../artist/add-artist/add-artist.component';
import { ArtistsListComponent } from '../artist/artists-list/artists-list.component';
import { ArtistComponent } from '../artist/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    ArtistsListComponent,
    AddArtistComponent,
    AddDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
