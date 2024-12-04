import type { IProject } from './project';
import type { IUser } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseGithubUrl = 'https://api.github.com/users/Borrisson';
  private repoesPath = 'repos?sort=created&per_page=all';

  constructor(private http: HttpClient) {}

  getRepoes() {
    return this.http.get<IProject[]>(
      `${this.baseGithubUrl}/${this.repoesPath}`,
      {
        observe: 'body',
        responseType: 'json',
      },
    );
  }

  getUser() {
    return this.http.get<IUser>(`${this.baseGithubUrl}`, {
      observe: 'body',
      responseType: 'json',
    });
  }
}
