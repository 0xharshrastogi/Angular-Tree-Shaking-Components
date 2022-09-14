import { Component, Input } from '@angular/core';
import { TableHeader } from './table.type';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() headers: TableHeader[] = [];
  @Input() data: any[] = [];
  @Input() striped = false;
  @Input() celled = false;

  constructor() {}
}
