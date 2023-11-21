import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerOpinionesPage } from './ver-opiniones.page';

const routes: Routes = [
  {
    path: '',
    component: VerOpinionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerOpinionesPageRoutingModule {}
