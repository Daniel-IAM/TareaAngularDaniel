import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PeliculaComponent} from './components/pelicula/pelicula.component';
import { SearchComponent } from './components/shared/search/search.component';

var routes:Routes = [
    {path:'home', component:HomeComponent},
    {path:'pelicula/:idx', component:PeliculaComponent},
    {path:'search/:termino', component:SearchComponent},
    {path:'**', pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
