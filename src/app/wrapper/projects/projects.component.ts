import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { RepoService } from '../../repo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(private repoService: RepoService) {}
  ngOnInit(): void {
    this.getRepoes();
  }

  getRepoes(): void {
    this.repoService.getRepoes().then(
      (projects: Project[]) =>
        (this.projects = projects
          .filter((project) => {
            switch (project.name.toLowerCase()) {
              case 'handloose':
              case 'mapit':
              case 'jungle':
              case 'scheduler':
              case 'tweeter':
              case 'tinyapp':
                return true;
              default:
                return false;
            }
          })
          .map(({ name, description, html_url }, id) => {
            return { id, name, description, html_url };
          }))
    );
  }
}
