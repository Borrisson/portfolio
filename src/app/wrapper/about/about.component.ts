import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent {
  location$ = inject(GithubService)
    .getUser()
    .pipe(map((user) => user.location));
}
