import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccommodateComponent } from './pages/accommodate/accommodate.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'home page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about page',
  },
  {
    path: 'accommodate/:id',
    component: AccommodateComponent,
    title: 'accommodate page',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found  page',
  },
];

export default routeConfig;
