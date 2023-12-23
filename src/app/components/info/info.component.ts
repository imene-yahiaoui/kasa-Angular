import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  template: `
    <div class="info">
      <h2 class="info_titre">{{ title }}</h2>
      <p class="info_titre_localitation">{{ location }}</p>
    </div>
  `,
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  @Input() title: string = '';
  @Input() location: string = '';
}
