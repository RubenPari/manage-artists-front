import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArtistComponent } from '../artist/artist.component';
import { ArtistsListComponent } from '../artists-list/artists-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    ArtistsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
