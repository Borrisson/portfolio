import { Component, inject } from '@angular/core';
import { IProject } from './project';
import { GithubService } from '../../github.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: false,
})
export class ProjectsComponent {
  public projects$: Observable<IProject[]> = inject(GithubService)
    .getRepoes()
    .pipe(
      map((projects) =>
        projects
          .filter((project) =>
            this.projectFilter.has(project.name.toLowerCase()),
          )
          .map(({ name, description, html_url }, id) => {
            return { id, name, description, html_url };
          }),
      ),
    );

  private projectFilter = new Set([
    'handloose',
    'mapit',
    'jungle',
    'scheduler',
    'tweeter',
    'tinyapp',
  ]);
}
