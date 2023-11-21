import { Component, OnInit, inject } from '@angular/core';
import { OpinionesService } from 'src/app/services/opiniones.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ver-opiniones',
  templateUrl: './ver-opiniones.page.html',
  styleUrls: ['./ver-opiniones.page.scss'],
})
export class VerOpinionesPage implements OnInit {

  
  public Items: any;
  // get id_pelicula from home.page.ts
  public id_pelicula = "";
  private opinionesService = inject(OpinionesService);

  constructor(private activatedRoute: ActivatedRoute,private router: Router) { }


  getOpiniones() {
    this.opinionesService.getOpinionesById(this.id_pelicula).subscribe(
      (res) => {
        this.Items = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id_pelicula = params['id_pelicula'];
      console.log(this.id_pelicula);
    });
    this.getOpiniones();
    
  }
  ngOnDestroy(): void {
    
  }
  crearOpinion(id_pelicula:any){
    localStorage.setItem('id_pelicula', id_pelicula);
    //navigate to crear-opinion.page.ts with id_pelicula
    this.router.navigate(['crear-opinion'], { queryParams: {id_pelicula:id_pelicula}});
  }

}
