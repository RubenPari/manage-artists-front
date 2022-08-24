import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artist-module/artists.service';

@Component({
  selector: 'add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent implements OnInit {
  constructor(private artistsService: ArtistsService) {}

  artists!: any[];
  idSelect: string = '';
  description: string = '';

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

  setDescriptionForArtist(): void {
    this.artistsService
      .setDescriptionForArtist(this.idSelect, this.description)
      .subscribe(() => {
        console.log('Artist has been updated');
      });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
