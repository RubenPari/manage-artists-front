import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artist/artists.service';
import Artist from '../../models/artist.model';

@Component({
  selector: 'add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent implements OnInit {
  constructor(private artistsService: ArtistsService) {}

  artists!: Artist[];
  idSelected: string = '';
  description: string = '';
  response: string = '';

  getAllArtists(): void {
    this.artistsService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
  }

  setDescription(): void {
    console.log(this.description);
    const isSet = this.artistsService.setDescription(
      this.idSelected,
      this.description
    );

    isSet.subscribe((response) => {
      if (response.status == 'ok') {
        console.log('Description added successfully');
        this.response = 'Description added successfully';
      } else {
        console.log('Error to add description');
        this.response = 'Error to add description';
      }
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
