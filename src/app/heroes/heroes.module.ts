import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';

@NgModule({
  // las declaraciones dicen que cosas contiene este mód
  declarations : [
    HeroeComponent,
    ListadoComponent
  ],
  exports : [
    ListadoComponent
  ],
  imports : [
    CommonModule
  ]
})

export class HeroesModule {}

