import type { IProject } from './project';
import type { IUser } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, take, tap } from 'rxjs';
import { SocialAccount } from './social_accounts';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseGithubUrl = 'https://api.github.com/users/Borrisson';
  private repoesPath = 'repos?sort=created&per_page=all';
  private user = new BehaviorSubject<IUser>({} as IUser);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {}

  getSocials() {
    return this.http.get<SocialAccount[]>(
      `${this.baseGithubUrl}/social_accounts`,
      {
        observe: 'body',
        responseType: 'json',
      },
    );
  }

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
    return this.http
      .get<IUser>(`${this.baseGithubUrl}`, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        tap((user) => this.user.next(user)),
        take(1),
      )
      .subscribe();
  }
}
