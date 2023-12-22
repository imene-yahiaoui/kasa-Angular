import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
 



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
  imports: [HomeComponent,RouterModule,CommonModule,RouterModule,HeaderComponent,FooterComponent,HttpClientModule],
})
export class AppComponent {
 

 
}


