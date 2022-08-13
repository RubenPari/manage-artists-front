import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Artist from 'src/app/models/artist.model';
import { environment } from 'src/environments/environment';

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
