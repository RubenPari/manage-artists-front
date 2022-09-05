import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Artist from 'src/models/artist.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artist[]> {
    return this.http.get<Array<Artist>>(this.baseUrl + '/artists/get-all');
  }

  // TODO: to add endpoint to back-end
  getArtistName(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '/artists/get-name?id=' + id);
  }

  add(name: string): Observable<any> {
    return this.http.post(this.baseUrl + '/artists/add?name=' + name, {});
  }

  delete(name: string): Observable<any> {
    return this.http.delete(this.baseUrl + '/artists/remove?name=' + name);
  }

  setDescription(id: string, description: string): Observable<any> {
    return this.http.post(this.baseUrl + '/artists/set-description', {
      id: id,
      description: description,
    });
  }
}
