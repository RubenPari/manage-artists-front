import { Injectable } from '@angular/core';
import Artist from '../models/artist.model';

@Injectable({
  providedIn: 'root',
})
export class ArtistsListService {
  constructor() {}

  getAllArtists(): Artist[] {
    return [
      {
        id: '1',
        name: 'Artist 1',
        uri: 'https://www.google.com',
        imgSrc:
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi',
      },
      {
        id: '2',
        name: 'Artist 2',
        uri: 'https://www.google.com',
        imgSrc:
          'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egestas nisi, euismod consectetur nisi nisi euismod. Nam euismod, nisi eu consectetur egestas, nisl nunc egest',
      },
    ];
  }
}
