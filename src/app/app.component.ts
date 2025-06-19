import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    BusinessComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-business></app-business>
      <app-gallery></app-gallery>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'Shoxista Boboqulova Portfolio';
}