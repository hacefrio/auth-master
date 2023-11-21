import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerOpinionesPageRoutingModule } from './ver-opiniones-routing.module';

import { VerOpinionesPage } from './ver-opiniones.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerOpinionesPageRoutingModule,
    HeaderModule
  ],
  declarations: [VerOpinionesPage]
})
export class VerOpinionesPageModule {}
