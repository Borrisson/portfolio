import { Component } from '@angular/core';
import {
  concat,
  concatMap,
  delay,
  from,
  ignoreElements,
  interval,
  map,
  of,
  repeat,
  take,
} from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  standalone: false,
})
export class TopBarComponent {
  positions$ = from(['Developer', 'Pilot', 'Photographer']).pipe(
    concatMap((title) => this.typeEffect(title)),
    repeat(),
  );

  private type({ word, delayMs, backwards = false }) {
    return interval(delayMs).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x)
          : word.substring(0, x + 1),
      ),
      take(word.length + 1),
    );
  }

  private typeEffect(word: string) {
    return concat(
      this.type({ word, delayMs: 100 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, delayMs: 50, backwards: true }),
      of('').pipe(delay(300), ignoreElements()),
    );
  }
}
