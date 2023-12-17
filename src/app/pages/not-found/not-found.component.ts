import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
        <div class="notFound">
      <img class="notFound-img" src={{notFoundImage}} alt="logo 404" />

      <p class="notFound-p">
        Oups! La page que <span>vous demandez n'existe pas.</span>
      </p>
      <a routerLink to="/">Retourner sur la page d'accueil</a>
    </div>
  `,
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
notFoundImage="../../assets/images/404.png"
}
