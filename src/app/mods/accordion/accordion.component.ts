import { Component, Input, OnInit } from '@angular/core';

interface AccordionManager {
  select(index: number): void;
  isActive(index: number): boolean;
}

class AccordionSingleManager implements AccordionManager {
  private current = -1;

  select(index: number): void {
    this.current = this.current !== index ? index : -1;
  }
  isActive(index: number): boolean {
    console.count('Is Active');
    return this.current === index;
  }
}

class AccordionMultipleManager implements AccordionManager {
  private readonly activeIndexes: boolean[] = [];

  select(index: number): void {
    const isActive = !!this.activeIndexes[index];

    if (isActive) {
      this.activeIndexes[index] = false;
      return;
    }

    this.activeIndexes[index] = true;
  }

  isActive(index: number): boolean {
    return !!this.activeIndexes[index];
  }
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  handler: AccordionManager = new AccordionSingleManager();

  @Input() type: 'multiple' | 'single' = 'single';
  @Input() data: { title: string; descriptions: string[] }[] = [];

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'multiple' && this.data.length < 50)
      this.handler = new AccordionMultipleManager();
  }

  handleClick(index: number) {
    this.handler.select(index);
  }
}
