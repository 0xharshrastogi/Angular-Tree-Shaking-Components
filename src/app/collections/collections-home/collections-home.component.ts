import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Harsh', job: 'Software Developer', age: 22 },
    { name: 'Vinayak', job: 'Student', age: 18 },
    { name: 'Subhash', job: 'Mechanical Engineer', age: 51 },
    { name: 'Vinod', job: 'HouseWife', age: 49 },
  ];

  header = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  constructor() {}
}
