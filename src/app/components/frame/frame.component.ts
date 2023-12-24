import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a [routerLink]="['/accommodate', id]">
      <div class="frame">
        <div class="containerFrame">
          <img src="{{ cover }}" alt="{{ title }}" />
          <p>{{ title }}</p>
        </div>
        <div class="middle"></div>
      </div>
    </a>
  `,
  styleUrl: './frame.component.scss',
})
export class FrameComponent {
  @Input() title: string = '';
  @Input() cover: string = '';
  @Input() id: string = '';
}
