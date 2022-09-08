import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AddDescriptionComponent } from '../components/add-description/add-description.component';
import { FormsModule } from '@angular/forms';
import { AddArtistComponent } from '../components/artist/add-artist/add-artist.component';
import { ArtistsListComponent } from '../components/artist/artists-list/artists-list.component';
import { ArtistComponent } from '../components/artist/artist/artist.component';
import { DeleteArtistComponent } from '../components/artist/delete-artist/delete-artist.component';
import { AlbumsListComponent } from '../components/album/albums-list/albums-list.component';
import { AlbumComponent } from '../components/album/album/album.component';
import { AddAlbumComponent } from '../components/album/add-album/add-album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    ArtistsListComponent,
    AddArtistComponent,
    DeleteArtistComponent,
    AddDescriptionComponent,
    AlbumsListComponent,
    AlbumComponent,
    AddAlbumComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
