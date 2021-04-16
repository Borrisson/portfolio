import { Component, OnInit } from '@angular/core';

import { projects } from './projects';
import { RepoService } from '../../repo.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(private repoService: RepoService) {}
  ngOnInit(): void {
    this.getRepoes();
  }

  getRepoes(): void {
    this.repoService.getRepoes().then((res) => (this.projects = res));
  }
}
