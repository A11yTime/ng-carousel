import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component'; // Adjust path as necessary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CarouselComponent], // Import the CarouselComponent here
})
export class AppComponent {}
