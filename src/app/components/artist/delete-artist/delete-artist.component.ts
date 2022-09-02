import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'delete-artist',
  templateUrl: './delete-artist.component.html',
  styleUrls: ['./delete-artist.component.scss'],
})
export class DeleteArtistComponent implements OnInit {
  name: string = '';

  @Input() response: string | undefined;

  constructor(private artistsService: ArtistsService) {}

  ngOnInit(): void {}

  addArtist(): void {
    //TODO: implement
  }
}
