import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  buscar:any;

  constructor(private navigate:Router,
              private coolDialogs: NgxCoolDialogsService) { }

  ngOnInit() {
  }

  getSearch(termino:string){
    //this.buscar= this.buscarForm.controls['buscar'].value;
    console.log(termino);
    if(termino !==''){
      this.navigate.navigate(['/search',termino]);
    }else{
      this.coolDialogs.alert('Verificar campo',{
        title:'Alerta'
      });
    }
  }

}
