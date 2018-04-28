//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the NewuserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewuserProvider {

  itemsRef: AngularFireList<any>;

  constructor(protected db: AngularFireDatabase) {
    console.log('Hello NewuserProvider Provider');
  }
  getAllPromisse(): Promise<any> {
    return new Promise((resolve) => {
       this.itemsRef.snapshotChanges().subscribe(items => resolve(items));
    });
  }
  insere(obj){
    this.itemsRef.push(obj);
  }

}
