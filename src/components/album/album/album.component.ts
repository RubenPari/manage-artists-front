import { Component, Input, OnInit } from '@angular/core';
import Album from '../../../models/album.model';
import { ArtistsService } from '../../artist/artists.service';
import { AlbumService } from '../album.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  @Input() album!: Album;
  artist: string = '';

  constructor(
    private artistService: ArtistsService,
    private albumService: AlbumService
  ) {}

  getArtistName(): void {
    this.artistService
      .getArtistName(this.album.artistId)
      .subscribe((response) => {
        this.artist = response.name;
      });
  }

  delete(id: string): void {
    this.albumService.delete(id).subscribe((response) => {
      if (response.status == 'ok') {
        console.log('Album deleted');
        alert('Album deleted');
        window.location.reload();
      } else {
        console.log('Error deleting album');
        alert('Error to delete album');
      }
    });
  }

  ngOnInit(): void {
    this.getArtistName();
  }
}
