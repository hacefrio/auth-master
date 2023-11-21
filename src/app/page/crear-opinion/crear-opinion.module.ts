import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // import all necesary components to create reactive form
import { IonicModule } from '@ionic/angular';

import { CrearOpinionPageRoutingModule } from './crear-opinion-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';

import { CrearOpinionPage } from './crear-opinion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearOpinionPageRoutingModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  declarations: [CrearOpinionPage]
})
export class CrearOpinionPageModule {}
