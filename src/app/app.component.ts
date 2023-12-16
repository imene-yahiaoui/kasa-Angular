import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-header></app-header>

  <router-outlet> </router-outlet>
  `,
    
  styleUrl: './app.component.scss',
  imports: [HomeComponent,RouterModule,CommonModule,RouterModule,HeaderComponent],
})
export class AppComponent {}
