import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [],
  template: `
    <div class="info_utilisateur">
      <p class="info_utilisateur_name">{{ name }}</p>
      <img class="info_utilisateur_img" src="{{picture}}"  alt="utilisateur" />
    </div>
  `,
  styleUrl: './host.component.scss',
})
export class HostComponent {
  @Input() name: string = '';
  @Input() picture: string = '';
}
