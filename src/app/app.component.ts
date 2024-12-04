import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.githubService.getUser();
  }
}
