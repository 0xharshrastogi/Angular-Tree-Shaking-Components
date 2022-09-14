import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css'],
})
export class ViewHomeComponent {
  stats = [
    { value: 10, label: 'Zombies' },
    { value: 10000, label: 'Employees' },
  ];

  items = [
    {
      imagePath:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Warehouse',
      user: 'Adrion Suliok',
      description:
        "We are happy for using this photo on your site. We would appreciate if you'll include a photo credit link under the photo to our site https://www.sulyokimaging.ro",
    },
  ];
}
