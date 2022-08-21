import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artist-module/artists.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent implements OnInit {
  constructor(private artistsService: ArtistsService) {}

  artists!: any[];
  baseUrl = environment.apiUrl;

  getAllArtists(): void {
    this.artistsService.getAll().subscribe((artists) => {
      // foreach artist in artists, take id and name
      this.artists = artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      });
    });
  }

  setDescriptionForArtist(data: any): void {
    this.artistsService
      .setDescriptionForArtist(data.id, data.description)
      .subscribe((artist) => {
        console.log('Artist with id ' + data.id + ' has been updated');
        console.log(artist);
      });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
