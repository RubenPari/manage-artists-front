import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Artist from 'src/app/models/artist.model';
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

  add(name: string): Observable<any> {
    return this.http.post(this.baseUrl + '/artists/add?name=' + name, {});
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + '/artists/' + id);
  }

  setDescription(id: string, description: string): Observable<any> {
    return this.http.post(this.baseUrl + '/artists/set-description', {
      id: id,
      description: description,
    });
  }
}
