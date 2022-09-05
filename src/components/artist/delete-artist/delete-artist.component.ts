import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';
import Artist from '../../../models/artist.model';

@Component({
  selector: 'delete-artist',
  templateUrl: './delete-artist.component.html',
  styleUrls: ['./delete-artist.component.scss'],
})
export class DeleteArtistComponent implements OnInit {
  nameSelected: string = '';
  response: string = "";

  @Input() artists!: Artist[];

  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {
    this.getAllArtists();
  }

  getAllArtists(): void {
    this.artistsService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
  }

  delete(): void {
    const deleted = this.artistsService.delete(this.nameSelected);

    deleted.subscribe((response) => {
      if (response.status == 'ok') {
        console.log('Artist deleted successfully');
        this.response = 'Artist deleted successfully';
      } else {
        console.log('Error to delete artist');
        this.response = 'Error to delete artist';
      }
    });
  }
}
