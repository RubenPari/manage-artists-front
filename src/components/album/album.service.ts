import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Album from '../../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // TODO: to implement endpoint on backend
  getAll(nameArtist: string): Observable<Album[]> {
    return this.http.get<Array<Album>>(
      this.baseUrl + '/albums/get-all?name=' + nameArtist
    );
  }
}
