import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [],
  template: `
    <div class="home">
      <img class="home-img" src="{{ photo }}" alt="natur" />
      <div class="home-p">
        <p class="home-text">{{ text }}</p>
        <p class="home-paragraphe">{{ paragraphe }}</p>
      </div>
    </div>
  `,
  styleUrl: './picture.component.scss',
})
export class PictureComponent {
  @Input() photo: string = '';
  @Input() text: string = '';
  @Input() paragraphe: string = '';
}
