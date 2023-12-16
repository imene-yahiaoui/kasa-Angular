import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="header">
      <a routerLink="/">
        <img class="logo" [src]="photoOfLogo"alt="logo Kasa"/>
      </a>
      <ul class="nav">
        <li>
          <a routerLink="/">Accueil</a>
        </li>
        <li>
          <a routerLink="about">A Propos</a>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent {
  photoOfLogo="../../assets/images/logo.png" 
}
