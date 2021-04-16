import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private repoesUrl =
    'https://api.github.com/users/Borrisson/repos?sort=created&per_page=20';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRepoes() {
    return this.http
      .get<{}[]>(this.repoesUrl)
      .toPromise()
      .catch((err) => console.log(err));
  }
}
