import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import Artist from '../../../models/artist.model';

@Component({
  selector: 'add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss'],
})
export class AddAlbumComponent implements OnInit {
  @Input() artists!: Artist[];
  titleAlbum: string = '';
  @Input() response: string = '';

  constructor(private albumService: AlbumService) {}

  add(): void {
    this.albumService.add(this.titleAlbum).subscribe((response) => {
      if (response.status == 'ok') {
        console.log('Album added successfully');
        this.response = 'Album added successfully';
      } else {
        console.log('Error to add album');
        this.response = 'Error to add album';
      }
    });
  }

  ngOnInit(): void {}
}
