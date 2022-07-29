import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Artist from './artist.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllArtistsService {
  baseUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

   getAllArtists() {
    const artists =  this._http.get<Artist>(this.baseUrl + 'artists/get-all').forEach(artist => {
      return artist;
    });

    console.log(artists);

    return artists;
  }
}
