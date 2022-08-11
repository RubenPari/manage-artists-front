import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Artist from '../models/artist.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistsListService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllArtists(): Observable<Artist[]> {
    return this.http.get<Array<Artist>>(this.baseUrl + 'artists/get-all');
  }
}
