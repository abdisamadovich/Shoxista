import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'Bijuteriya kolleksiyasi',
      description: 'Turli xil mahsulotlar'
    },
    {
      title: 'Uzuklar to\'plami',
      description: 'Chiroyli uzuklar'
    },
    {
      title: 'Marjonlar',
      description: 'Zamonaviy dizayn'
    },
    {
      title: 'Sirg\'alar',
      description: 'Har xil uslubda'
    },
    {
      title: 'Maxsus kolleksiya',
      description: 'Noyob mahsulotlar'
    }
  ];
}