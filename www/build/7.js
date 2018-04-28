webpackJsonp([7],{

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoComentariosPageModule", function() { return NovoComentariosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_comentarios__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NovoComentariosPageModule = /** @class */ (function () {
    function NovoComentariosPageModule() {
    }
    NovoComentariosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__novo_comentarios__["a" /* NovoComentariosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__novo_comentarios__["a" /* NovoComentariosPage */]),
            ],
        })
    ], NovoComentariosPageModule);
    return NovoComentariosPageModule;
}());

//# sourceMappingURL=novo-comentarios.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoComentariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_fotos_fotos__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NovoComentariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoComentariosPage = /** @class */ (function () {
    function NovoComentariosPage(navCtrl, navParams, formBuilder, fotosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
    }
    NovoComentariosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoComentariosPage');
    };
    NovoComentariosPage.prototype.salvarComentario = function () {
        this.fotosProvider.update(this.comentarioForm.value);
    };
    NovoComentariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-comentarios',template:/*ion-inline-start:"/home/kdezen/Documentos/ionic/pos---aula2/src/pages/novo-comentarios/novo-comentarios.html"*/'<!--\n  Generated template for the NovoComentariosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>novo-comentarios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="comentarioForm" (submit)="salvarComentario()"> \n      <ion-row padding>\n          <ion-item>\n            <ion-label floating>Comentario</ion-label>\n            <ion-input #pais formControlName="comentario" type="text" ></ion-input>\n          </ion-item>\n         \n        </ion-row>\n        <ion-row padding>\n            <button block type="submit" ion-button large>\n              <ion-icon ios="ios-log-in" md="md-log-in" style="font-size:34px;padding-right:10px;"></ion-icon> Comentar</button>\n          </ion-row>\n       \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/kdezen/Documentos/ionic/pos---aula2/src/pages/novo-comentarios/novo-comentarios.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_fotos_fotos__["a" /* FotosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_fotos_fotos__["a" /* FotosProvider */]) === "function" && _d || Object])
    ], NovoComentariosPage);
    return NovoComentariosPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=novo-comentarios.js.map

/***/ })

});
//# sourceMappingURL=7.js.map