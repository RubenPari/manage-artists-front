import { Component, Input, OnInit } from '@angular/core';
import Album from '../../../models/album.model';
import { ArtistsService } from '../../artist/artists.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album!: Album;
  artist: string = '';

  constructor(private artistService: ArtistsService) {}

  getArtistName(): void {
    this.artistService.getArtistName(this.album.artistId).subscribe((response) => {
      this.artist = response.name;
    });
  }

  ngOnInit(): void {
    this.getArtistName();
  }
}
