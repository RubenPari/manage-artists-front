import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sync-playlist',
  templateUrl: './sync-playlist.component.html',
  styleUrls: ['./sync-playlist.component.css'],
})
export class SyncPlaylistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  syncPlaylist() {
    console.log('sync playlist');
  }
}
