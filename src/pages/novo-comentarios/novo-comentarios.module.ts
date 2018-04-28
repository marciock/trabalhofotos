import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoComentariosPage } from './novo-comentarios';

@NgModule({
  declarations: [
    NovoComentariosPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoComentariosPage),
  ],
})
export class NovoComentariosPageModule {}
