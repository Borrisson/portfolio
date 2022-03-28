import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProject } from './wrapper/projects/project';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  private repoesUrl =
    'https://api.github.com/users/Borrisson/repos?sort=created&per_page=all';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getRepoes() {
    return this.http.get<IProject[]>(this.repoesUrl, {observe: 'body', responseType: 'json'})
  }
}
