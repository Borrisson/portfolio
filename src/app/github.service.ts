import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from './wrapper/projects/project';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private repoesUrl =
    'https://api.github.com/users/Borrisson/repos?sort=created&per_page=all';

  constructor(private http: HttpClient) {}

  getRepoes() {
    return this.http.get<IProject[]>(this.repoesUrl, {
      observe: 'body',
      responseType: 'json',
    });
  }
}
