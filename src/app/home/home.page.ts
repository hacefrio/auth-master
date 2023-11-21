import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public Items: any;
  private peliculasService = inject(PeliculasService);
  storage: any;
  constructor(private router: Router) { }


  getPeliculas() {
    this.peliculasService.getPeliculas().subscribe(
      (res) => {
        this.Items = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getImagen(pelicula: any) {
    this.peliculasService.getImagenes(pelicula).subscribe(
      (res) => {
        console.log(res);
        return res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.getPeliculas();
  }
  ngOnDestroy(): void {
  }
  verOpiniones(id_pelicula:any){
    //navigate to ver-opiniones.page.ts with id_pelicula
    this.router.navigate(['ver-opiniones'], { queryParams: {id_pelicula:id_pelicula}});
  }
}
