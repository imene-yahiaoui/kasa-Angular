import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="tag-container" *ngFor="let tag of tags">
      <p class="tag">{{ tag }}</p>
    </li>
  `,
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() tag: string = '';
  @Input() tags: string[] = [];
}
