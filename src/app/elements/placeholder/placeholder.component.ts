import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  @Input() header: boolean = true;
  @Input() lines: number = 5;

  *linesIterator() {
    for (let index = 0; index < this.lines; index++) {
      yield index;
    }
  }

  constructor() {}
}
