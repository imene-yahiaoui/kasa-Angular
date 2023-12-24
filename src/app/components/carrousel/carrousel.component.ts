import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  template: `
    <div class="carousel">
      <div
        class="carousel-img"
        [style.backgroundImage]="'url(' + slides[number] + ')'"
      ></div>
      <i class="fa-solid fa-angle-left" (click)="goToPrevious()"></i>

      <i class="fa-solid fa-angle-right" (click)="goToNext()"></i>

      <p class="carousel-notes">{{ index + number }}/{{ numberLength }}</p>
    </div>
  `,
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent {
  @Input() index: number = 1;
  @Input() number: number = 0;
  @Input() numberLength: number = 0;
  @Input() slides: string = '';

  goToPrevious() {
    const firstSlide = this.number === 0;
    const newIndex = firstSlide ? this.numberLength - 1 : this.number - 1;
    this.number = newIndex;
  }
  goToNext() {
    const lastSlide = this.number === this.numberLength - 1;

    const newIndex = lastSlide ? 0 : this.number + 1;
    this.number = newIndex;
  }

  ////keyboard
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.keyclavier(event);
  }

  keyclavier(e: KeyboardEvent): void {
    if (e.keyCode === 37) {
      this.goToPrevious();
    } else if (e.keyCode === 39) {
      this.goToNext();
    }
  }
}
