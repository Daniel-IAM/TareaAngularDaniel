import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import {Router} from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peliculaService:PeliculasService,
              private navigate:Router,
              private formbuilder:FormBuilder) { }
  
  selectForm:FormGroup;
  peliculas = [];
  anho:any;
  urlimagen ='https://image.tmdb.org/t/p/w500';
  ngOnInit() {
    this.selectForm = this.formbuilder.group({
      anho: ['',Validators.required],
    });
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

  getpeliculasninos(){
    this.peliculaService.getNinos()
    .subscribe(resp => {
      console.log(resp['results']);
      this.peliculas = [];
      this.peliculas = resp['results'];
    });
  }

  getEnTeatros(){
    this.peliculaService.getEnTeatros()
    .subscribe(resp => {
      console.log(resp['results']);
      this.peliculas = [];
      this.peliculas = resp['results'];
    });
  }

  getPelicula(idx){
    console.log(idx);
    this.navigate.navigate(['/pelicula',idx]);
  }

  getPeliculaPorAnhos(){
    if(this.selectForm.controls['anho'].valid){
      var anho = this.selectForm.controls['anho'].value;
      
      this.peliculaService.getPeliculaAnho(anho)
      .subscribe(resp => {
        console.log(resp['results']);
        this.peliculas = [];
        this.peliculas = resp['results'];
      });
    }
  }

}
