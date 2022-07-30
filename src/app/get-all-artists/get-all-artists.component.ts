import { Component, OnInit } from '@angular/core';
import IArtist from './artist.interface';
import { GetAllArtistsService } from './get-all-artists.service';

@Component({
  selector: 'app-get-all-artists',
  templateUrl: './get-all-artists.component.html',
  styleUrls: ['./get-all-artists.component.scss'],
})
export class GetAllArtistsComponent implements OnInit {
  artists: IArtist[] = [];

  constructor(private getAllArtistsService: GetAllArtistsService) {}

  getAllArtists() {
    this.getAllArtistsService.getAllArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
