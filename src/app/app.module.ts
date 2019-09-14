import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

//Servicios
import { PeliculasService } from './services/peliculas.service';

//Rutas
import { APP_ROUTING } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';
import { FooterComponent } from './components/shared/footer/footer.component';

//Modulos
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCoolDialogsModule } from 'ngx-cool-dialogs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    NavbarComponent,
    SearchComponent,
    FooterComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCoolDialogsModule.forRoot(),
    BrowserAnimationsModule,
    APP_ROUTING

  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
