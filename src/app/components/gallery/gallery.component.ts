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
      src: 'assets/IMG_2011.PNG',
      title: 'IMG_2011',
      description: 'Bijuteriya mahsuloti 9'
    },
    {
      src: 'assets/IMG_2012.PNG',
      title: 'IMG_2012',
      description: 'Bijuteriya mahsuloti 10'
    },
    {
      src: 'assets/IMG_2013.PNG',
      title: 'IMG_2013',
      description: 'Bijuteriya mahsuloti 11'
    },
    {
      src: 'assets/IMG_2014.PNG',
      title: 'IMG_2014',
      description: 'Bijuteriya mahsuloti 12'
    },
    {
      src: 'assets/IMG_2015.PNG',
      title: 'IMG_2015',
      description: 'Bijuteriya mahsuloti 13'
    },
    {
      src: 'assets/IMG_2016.PNG',
      title: 'IMG_2016',
      description: 'Bijuteriya mahsuloti 14'
    }
  ];

  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/placeholder.png';
  }
}