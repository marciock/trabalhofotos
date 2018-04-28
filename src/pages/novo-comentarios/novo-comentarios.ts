import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FotosProvider} from '../../providers/fotos/fotos';
/**
 * Generated class for the NovoComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-comentarios',
  templateUrl: 'novo-comentarios.html',
})
export class NovoComentariosPage {
  comentario= '';
  foto:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, fotosProvider:FotosProvider) {
    this.foto=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoComentariosPage');
  }
  comentar(){
    let dados=this.foto.payload.val();
    if(dados.comentarios===undefined){
      dados.comentarios=[];
    }
      dados.comentarios.push(this.comentario)
      this.fotosProvider.update(this.foto.payload.key,dados);
     
  }

}
