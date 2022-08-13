import {Component, OnInit} from '@angular/core';
import {ArtistsListService} from '../artist-module/artists-list/artists-list.service';
import {AddDescriptionService} from "./add-description.service";

@Component({
  selector: 'add-description',
  templateUrl: './add-description.component.html',
  styleUrls: ['./add-description.component.scss'],
})
export class AddDescriptionComponent implements OnInit {
  constructor(private artistsListService: ArtistsListService,
              private addDescriptionService: AddDescriptionService) {
  }

  artists!: any[];

  getAllArtists(): void {
    this.artistsListService.getAllArtists().subscribe((artists) => {
      // foreach artist in artists, take id and name
      this.artists = artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      });
    });
  }

  setDescriptionForArtist(id: string, description: string): void {
    this.addDescriptionService.setDescriptionForArtist(id, description).subscribe((artist) => {
      console.log("Artist with id " + id + " has been updated");
      console.log(artist);
      }
    );
  }

  ngOnInit(): void {
    this.getAllArtists();
  }
}
