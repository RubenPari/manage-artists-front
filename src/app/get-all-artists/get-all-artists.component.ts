import { Component, Input, OnInit } from '@angular/core';
import Artist from './artist.model';
import { GetAllArtistsService } from './get-all-artists.service';

@Component({
  selector: 'app-get-all-artists',
  templateUrl: './get-all-artists.component.html',
  styleUrls: ['./get-all-artists.component.scss'],
})
export class GetAllArtistsComponent implements OnInit {
  artists: Artist[] = [];

  // parameter for set limit of row
  // for table displayed in home page
  @Input() limit: number = 0;

  constructor(private getAllArtistsService: GetAllArtistsService) {}

  getAllArtists() {
    this.getAllArtistsService.getAllArtists().subscribe((artists) => {
      if (this.limit != 0) {
        this.artists = artists.slice(0, this.limit);
      }else {
        this.artists = artists;
      }
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
