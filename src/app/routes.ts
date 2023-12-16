import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
  import { AboutComponent } from "./pages/about/about.component";


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
    }
];

export default routeConfig;