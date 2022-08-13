import { Component, OnInit } from '@angular/core';
import { ArtistsListService } from '../artist-module/artists-list/artists-list.service';

@Component({
  selector: 'add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent implements OnInit {
  constructor(private artistsListService: ArtistsListService) {}
  artists!: any[];

  getAllArtists(): void {
    this.artistsListService.getAllArtists().subscribe((artists) => {
      // foreach artist in artists, take id and name
      this.artists = artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      });
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
