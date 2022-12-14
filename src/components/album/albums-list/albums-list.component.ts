import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Album from '../../../models/album.model';
import {AlbumService} from "../album.service";

@Component({
  selector: 'albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss'],
})
export class AlbumsListComponent implements OnInit {
  idArtist: string = '';
  @Input() albums!: Album[];

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  getAllAlbums(): void {
    this.albumService.getAll(this.idArtist).subscribe((albums) => {
      this.albums = albums;
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idArtist = params['id_artist'];
    });
    this.getAllAlbums();
  }
}
