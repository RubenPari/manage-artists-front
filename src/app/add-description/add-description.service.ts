import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Artist from 'src/app/models/artist.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddDescriptionService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setDescriptionForArtist(id: string, description: string) {
    const request = this.http.post<Artist>(
      this.baseUrl + 'artists/set-description/' + id,
      { description: description }
    );
  }
}
