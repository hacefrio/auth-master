import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/shared/guards/login.guard';
// import all necesary components to create reactive form
import { ReactiveFormsModule } from '@angular/forms';


import { CrearOpinionPage } from './crear-opinion.page';

const routes: Routes = [
  {
    path: '',
    component: CrearOpinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearOpinionPageRoutingModule {}
