import { Component, Input, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss'],
})
export class AddArtistComponent implements OnInit {
  @Input() response: string | undefined;

  constructor(private artistsService: ArtistsService) {}
  ngOnInit(): void {}

  addArtist(name: string): void {
    const added = this.artistsService.add(name);

    added.subscribe((response) => {
      if (response.status == 'ok') {
        console.log('Artist added successfully');
        this.response = 'Artist added successfully';
      } else {
        console.log('Error to add artist');
        this.response = 'Error to add artist';
      }
    });
  }
}
