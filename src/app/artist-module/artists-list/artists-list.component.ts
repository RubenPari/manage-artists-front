import { Component, Input, OnInit } from '@angular/core';
import Artist from 'src/app/models/artist.model';
import { ArtistsListService } from './artists-list.service';

@Component({
  selector: 'artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss'],
})
export class ArtistsListComponent implements OnInit {
  constructor(private artistsListService: ArtistsListService) {}

  @Input() artists!: Artist[];

  getAllArtists(): void {
    this.artistsListService.getAllArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
