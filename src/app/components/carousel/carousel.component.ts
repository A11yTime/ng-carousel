import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  autoRotateInterval: any;
  isPaused = false;

  items = [
    { src: 'Images/image1.jpg', alt: 'Description of Image 1' },
    { src: 'Images/image2.jpg', alt: 'Description of Image 2' },
    { src: 'Images/image3.jpg', alt: 'Description of Image 3' },
    { src: 'Images/image4.jpg', alt: 'Description of Image 4' },
    { src: 'Images/image5.jpg', alt: 'Description of Image 5' },

  ];

  ngOnInit(): void {
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  moveSlide(direction: number): void {
    if (direction === 1) {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }

  isActive(index: number): boolean {
    return index === this.currentIndex;
  }

  startAutoRotate(): void {
    this.autoRotateInterval = setInterval(() => {
      if (!this.isPaused) {
        this.moveSlide(1);
      }
    }, 3000);
  }

  stopAutoRotate(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
  }

  getAriaLive(): string {
    return this.isPaused ? 'polite' : 'off';
  }
}
