import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  constructor(private peliculaService:PeliculasService,
              private modalService: NgbModal,
              config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
              }

  peliculas = [];
  urlimagen ='https://image.tmdb.org/t/p/w500';
  pelicula=[];

  ngOnInit() {
    this.getPopulares();
  }
  getPopulares(){
    localStorage.setItem('categoria','popular');
    
    this.peliculaService.getPopulars()
    .subscribe(resp => {
      console.log(resp['results']);
      this.peliculas = [];
      this.peliculas = resp['results'];
    });
  }

  openScrollableContent(longContent,id) {
    console.log(id);
    this.peliculaService.getPelicula(id).subscribe(resp=>{
      this.pelicula=[];
      this.pelicula.push(resp);
      console.log(this.pelicula);
    });
    this.modalService.open(longContent, { scrollable: true });
  }
}
