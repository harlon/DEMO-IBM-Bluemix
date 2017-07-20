import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { HeroesService } from "../../servicios/heroes.service"; 
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[]
  termino:string;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params=>{
      this.heroes=this._heroesService.buscarHeroe(params['termino']);
      this.termino=params['termino'];
      console.log(this.heroes);

    })

  }

    verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
    console.log(idx);


  }

}
