import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeliculaApp';
  
  constructor(public _moviesService: PeliculasService) {
    // this._moviesService.getPopulars().subscribe(response => {
    //   console.log(response);
    // });
  }
}
