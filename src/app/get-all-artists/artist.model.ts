export default class Artist {
  Id: string;
  Name: string;
  Uri: string;

  constructor(id: string, name: string, uri: string) {
    this.Id = id;
    this.Name = name;
    this.Uri = uri;
  }
}
