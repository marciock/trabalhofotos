import { Component } from '@angular/core';
import { HomePage } from './../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';



@IonicPage()
@Component({
  selector: 'page-novo-usuario',
  templateUrl: 'novo-usuario.html',
})
export class NovoUsuarioPage {
  newUserForm: FormGroup;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, private authProvider:AuthProvider) {
      this.newUserForm = formBuilder.group({
        email: ['', Validators.required],
        senha: ['', Validators.required]
        
        
      });
  }
  salvarUsuario(){
    if (!this.newUserForm.valid) {
      alert('preencha todos os campos');  
    } else {
      this.authProvider.signupUser(this.newUserForm.value.email,this.newUserForm.value.senha);
      alert('salvo');
      this.voltarPagina();
    }
  }
  voltarPagina(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoUsuarioPage');
  }

}
