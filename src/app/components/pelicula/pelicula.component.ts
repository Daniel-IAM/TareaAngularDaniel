import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {


  lista = [];

  constructor(private peliculasservice: PeliculasService,
              private router: ActivatedRoute,) {}

  ngOnInit() {
    var id = +this.router.snapshot.paramMap.get('idx');
    //console.log(id);
    this.peliculasservice.getPelicula(id).subscribe(resp => {
      
      this.lista.push(resp);
      //console.log(this.lista);
    });
  }

}
