import { Component, OnInit } from '@angular/core';

import { projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: { id: number; name: string; description: string }[] = projects;

  ngOnInit(): void {}
}
