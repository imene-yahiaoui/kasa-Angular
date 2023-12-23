import { Component, Input  } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  template: `
      <div>
      <div class="stars">
        <i [style.color]="color" class="fa-sharp fa-solid fa-star"></i>
      </div>
    </div>
  `,
  styleUrl: './stars.component.scss'
})
export class StarsComponent {
  @Input() color: string = '';
 
}
