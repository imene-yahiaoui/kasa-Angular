import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [],
  template: `
    <div class="carousel">
      <div
        class="carousel-img"
        [style.backgroundImage]="'url(' + slides + ')'"
      ></div>
    </div>
  `,
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent {
  @Input() slides: string = '';
}
