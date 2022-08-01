import { Component, OnInit } from '@angular/core';
import {AddArtistService} from "./add-artist.service";

@Component({
  selector: 'add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.scss'],
})
export class AddArtistComponent implements OnInit {

  constructor(private addArtistService: AddArtistService) {}

  addArtist() {

  }

  ngOnInit(): void {
    this.addArtist();
  }
}
