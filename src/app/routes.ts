import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
  import { AboutComponent } from "./pages/about/about.component";
  import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routeConfig:Routes=[

    {
        path:'',
        component:HomeComponent,
        title:'home page'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'about page'
    },
    {
        path:'**',
        component:NotFoundComponent,
        title:'Not Found  page'
    }
];

export default routeConfig;