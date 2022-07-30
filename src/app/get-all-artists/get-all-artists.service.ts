import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import IArtist from './artist.interface';

@Injectable({
  providedIn: 'root',
})
export class GetAllArtistsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // TODO: fix, don't return artists
  getAllArtists() {
    return this.http.get<Array<IArtist>>(this.baseUrl + 'artists/get-all');
  }
}
