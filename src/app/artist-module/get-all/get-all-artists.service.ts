import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Artist from '../../models/artist.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllArtistsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllArtists() {
    return this.http.get<Array<Artist>>(this.baseUrl + 'artists/get-all');
  }
}
