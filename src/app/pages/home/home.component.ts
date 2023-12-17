import { Component } from '@angular/core';
import { PictureComponent } from '../../components/picture/picture.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PictureComponent],
  template: `
    <div>
      <app-picture [photo]="photo" [text]="text" [paragraphe]="paragraphe">
      </app-picture>
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photo = '../../../assets/images/headerDesktop.png';
  text = 'Chez vous,';
  paragraphe = 'partout et ailleurs';
}
