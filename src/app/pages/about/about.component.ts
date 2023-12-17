import { Component } from '@angular/core';
import { CollapseComponent } from '../../components/collapse/collapse.component';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../../components/picture/picture.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CollapseComponent, CommonModule, PictureComponent],
  template: `
    <div class="collapse_continer">
      <app-picture [photo]="photo"> </app-picture>
      <div>
        <app-collapse
          *ngFor="let item of aboutData"
          [title]="item.title"
          [text]="item.text"
        ></app-collapse>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  photo = '../../../assets/images/about.png';

  aboutData = [
    {
      key: '0',
      title: 'Fiabilité ',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      key: '1',
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      key: '2',
      title: 'Service',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },

    {
      key: '3',
      title: 'Sécurité',
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
}
