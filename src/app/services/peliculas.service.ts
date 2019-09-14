import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "16f3418a8da86731e7fd7458e9161d74";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor(private jsonp: HttpClientJsonpModule, private http:HttpClient ) { }

  getPopulars() { //funcion de ejemplo para que vean la estructura json que devuelve en el navegador y vean sus atributos y los manejen
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url, 'callback').pipe(map((data:any)=>{
      data.results = data.results.slice(0,9);
      return data;
    })); //jsonp para asegurar la petición a otros dominios
  }

  getPelicula(data){
    let url = `${ this.urlMoviedb }/movie/${ data }?&api_key=${ this.apikey }&language=es`;
    return this.http.jsonp(url,'callback');
  }

  getNinos(){
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&sort_by=popularity.desc&certification=G&include_adult=false&with_genres=10751&year=2019`;
    return this.http.jsonp(url,'callback').pipe(map((data:any)=>{
      data.results = data.results.slice(0,9);
      return data;
    }));
  }

  getEnTeatros(){
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&sort_by=popularity.desc&primary_release_date.gte=2019-08-20&primary_release_date.lte=2019-09-22`;
    return this.http.jsonp(url,'callback').pipe(map((data:any)=>{
      data.results = data.results.slice(0,9);
      return data;
    }));
  }

  getPeliculaAnho(data){
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&sort_by=popularity.desc&primary_release_year=${data}`;
    return this.http.jsonp(url,'callback').pipe(map((data:any)=>{
      data.results = data.results.slice(0,9);
      return data;
    }));
  }

  getPeliculas(dato){
    let url = `${ this.urlMoviedb }/search/movie?api_key=${ this.apikey }&language=es&query=${dato}&include_adult=false`;
    return this.http.jsonp(url,'callback').pipe(map((data:any)=>{
      data.results = data.results.slice(0,9);
      return data;
    }));
  }
}
