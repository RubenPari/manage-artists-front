import { Component, Input, OnInit } from '@angular/core';
import Artist from 'src/models/artist.model';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss'],
})
export class ArtistsListComponent implements OnInit {
  constructor(private artistsService: ArtistsService) {}

  @Input() artists!: Artist[];

  getAllArtists(): void {
    this.artistsService.getAll().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
