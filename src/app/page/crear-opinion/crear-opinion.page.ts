import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { OpinionesService } from 'src/app/services/opiniones.service';
@Component({
  selector: 'app-crear-opinion',
  templateUrl: './crear-opinion.page.html',
  styleUrls: ['./crear-opinion.page.scss'],
})
export class CrearOpinionPage implements OnInit {

  private _fb = inject(FormBuilder)
  private _opinionesSrvc = inject(OpinionesService)
  private _router = inject(Router)
  private subscribe: Subscription = new Subscription();
  public id_usuario = localStorage.getItem('id_usuario');
  public id_pelicula = localStorage.getItem('id_pelicula');
  hide = true;

  constructor() { }

  crearOpinionForm = this._fb.group({
    id_pelicula: [this.id_pelicula],
    id_usuario: [this.id_usuario],
    opinion: ['', [Validators.required]],
    clasificacion : ['', [Validators.required]]
  })
  ngOnInit() {
    console.log(localStorage.getItem('id_usuario'));
    console.log(localStorage.getItem('id_pelicula'));
  }

  onCrearOpinion() { 
    console.log(this.crearOpinionForm.value);
    if (this.crearOpinionForm.valid) {
      const opinion = {
        id_pelicula: this.crearOpinionForm.value.id_pelicula,
        id_usuario: this.crearOpinionForm.value.id_usuario,
        opinion: this.crearOpinionForm.value.opinion,
        clasicacion: parseInt(this.crearOpinionForm.value.clasificacion)
      };  
      this.subscribe.add(
        this._opinionesSrvc.newOpinion(opinion).pipe(
          tap((res) => {
            console.log(res);
            this._router.navigate(['/ver-opiniones']);
          }),
        ).subscribe()
      );
    }
  }

}
