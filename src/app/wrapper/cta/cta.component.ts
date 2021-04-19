import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {
  faHtml5 = faHtml5;
  constructor() {}

  ngOnInit(): void {}
}
