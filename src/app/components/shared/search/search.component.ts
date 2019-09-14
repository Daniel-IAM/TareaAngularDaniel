import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  lista = [];
  termino:string;
  urlimagen ='https://image.tmdb.org/t/p/w500';

  constructor(private peliculasservice:PeliculasService,
              private activatedRoute:ActivatedRoute,
              private navigate:Router,
              private coolDialogs: NgxCoolDialogsService) { }
              
  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      //console.log(params['termino']);
      this.termino = params['termino'];
      console.log(this.termino);
      this.peliculasservice.getPeliculas(this.termino).subscribe(resp => {

          var largo = resp['results'].length;
          console.log(largo);
          if(largo== 0 ){
            this.coolDialogs.alert('No se encontraron coincidencias',{
              title:'Alerta'
            }).subscribe(res =>{
              if(res){
                this.navigate.navigate(['/']);
                console.log('hola');
              }
            })
            console.log('vacio');
          }else{
            this.lista=[];
            this.lista = resp['results'];
            console.log(this.lista);
          }
          
      });
    });
  }  
  getPelicula(idx){
    console.log(idx);
    this.navigate.navigate(['/pelicula',idx]);
  }
}
