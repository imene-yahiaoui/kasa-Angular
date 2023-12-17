import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';




// const fetchData = async () => {
//   try {
//     const requete = await fetch("../../data.json", {
//       method: "GET",
//     });
//     if (requete.ok) {
//       const response = await requete.json();
//      console.log(response)
//     }
//   } catch (e) {
//     console.error(
//       "Une erreur s'est produite lors de la récupération des données :",
//       e
//     );
//   }
// };
// fetchData();



@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div class="App">
  <app-header></app-header>

  <router-outlet> </router-outlet>
  </div>
  <app-footer></app-footer>
  `,
    
  styleUrl: './app.component.scss',
  imports: [HomeComponent,RouterModule,CommonModule,RouterModule,HeaderComponent,FooterComponent],
})
export class AppComponent {

 
 

}


