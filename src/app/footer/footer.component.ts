import { Component, inject } from '@angular/core';
import { GithubService } from '../services/github/github.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false,
})
export class FooterComponent {
  gitHubUrl$ = inject(GithubService).user$.pipe(map((user) => user.html_url));
  socials$ = inject(GithubService).getSocials();
}
