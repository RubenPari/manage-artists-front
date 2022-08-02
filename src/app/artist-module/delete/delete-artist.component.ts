import { Component, OnInit } from '@angular/core';
import { DeleteArtistService } from "./delete-artist.service";

@Component({
  selector: 'delete-artist',
  templateUrl: './delete-artist.component.html',
  styleUrls: ['./delete-artist.component.scss'],
})
export class DeleteArtistComponent implements OnInit {

  constructor(private deleteArtistService: DeleteArtistService) {}

  deleteArtist() {

  }

  ngOnInit(): void {
    this.deleteArtist();
  }
}
