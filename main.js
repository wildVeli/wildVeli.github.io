(self["webpackChunkAngularGitIndex"] = self["webpackChunkAngularGitIndex"] || []).push([["main"],{

/***/ 2912:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 7800);
/* harmony import */ var _about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css?ngResource */ 6161);
/* harmony import */ var _about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let AboutComponent = class AboutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-about',
  template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AboutComponent);


/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-details/project-details.component */ 7840);
/* harmony import */ var _blender_blender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blender/blender.component */ 3928);







const routes = [{
  path: '',
  redirectTo: '/programming',
  pathMatch: 'full'
}, {
  path: 'programming',
  component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent
}, {
  path: 'blender',
  component: _blender_blender_component__WEBPACK_IMPORTED_MODULE_3__.BlenderComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: 'details/:name',
  component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__.ProjectDetailsComponent
}, {
  path: '**',
  redirectTo: '/programming'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 309);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




let AppComponent = class AppComponent {
  constructor() {
    this.title = 'wildVeli Projects Index';
  }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 3074);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 2912);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-details/project-details.component */ 7840);
/* harmony import */ var _blender_blender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blender/blender.component */ 3928);
/* harmony import */ var _blender_blender_card_blender_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blender/blender-card/blender-card.component */ 9967);










let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent, _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__.ProjectDetailsComponent, _blender_blender_component__WEBPACK_IMPORTED_MODULE_5__.BlenderComponent, _blender_blender_card_blender_card_component__WEBPACK_IMPORTED_MODULE_6__.BlenderCardComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 1212:
/*!*****************************************!*\
  !*** ./src/app/blender-card.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlenderCardService: () => (/* binding */ BlenderCardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-blenderCards */ 3432);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1536);




let BlenderCardService = class BlenderCardService {
  constructor() {}
  getBlenderCards() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCards);
  }
  getBlenderCardsByName(name) {
    return _mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCards.find(card => card.name === name);
  }
  getBlenderCardMovies() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCardMovies);
  }
  static #_ = this.ctorParameters = () => [];
};
BlenderCardService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], BlenderCardService);


/***/ }),

/***/ 9967:
/*!****************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlenderCardComponent: () => (/* binding */ BlenderCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _blender_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blender-card.component.html?ngResource */ 9241);
/* harmony import */ var _blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blender-card.component.css?ngResource */ 4374);
/* harmony import */ var _blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ 5583);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ 7414);







let BlenderCardComponent = class BlenderCardComponent {
  constructor() {}
  ngOnInit() {
    console.log(this.card);
    console.log(this.movie);
    //    this.load3dModel();
  }
  load3dModel() {
    const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
    const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const light = new three__WEBPACK_IMPORTED_MODULE_2__.Light(0xffffff, 1);
    scene.add(light);
    const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(1, 1, 1);
    const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({
      color: 0x00ff00
    });
    const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);
    scene.add(cube);
    const loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__.GLTFLoader();
    loader.load('../../../assets/gltfs/A6M.glb', function (gltf) {
      console.log(gltf);
      scene.add(gltf.scene);
    }, undefined, function (error) {
      console.error(error);
    });
    camera.position.z = 5;
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    card: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    movie: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  };
};
BlenderCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-blender-card',
  template: _blender_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BlenderCardComponent);


/***/ }),

/***/ 3928:
/*!**********************************************!*\
  !*** ./src/app/blender/blender.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlenderComponent: () => (/* binding */ BlenderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _blender_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blender.component.html?ngResource */ 4288);
/* harmony import */ var _blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blender.component.css?ngResource */ 2457);
/* harmony import */ var _blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _blender_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blender-card.service */ 1212);





let BlenderComponent = class BlenderComponent {
  constructor(blenderCardService) {
    this.blenderCardService = blenderCardService;
  }
  ngOnInit() {
    this.getBlenderCards();
    this.getBlenderCardsMovies();
  }
  getBlenderCards() {
    this.blenderCardService.getBlenderCards().subscribe(cards => this.cards = cards);
  }
  getBlenderCardsMovies() {
    this.blenderCardService.getBlenderCardMovies().subscribe(movies => this.movies = movies);
  }
  menuSelect(option) {
    this.option = option;
  }
  static #_ = this.ctorParameters = () => [{
    type: _blender_card_service__WEBPACK_IMPORTED_MODULE_2__.BlenderCardService
  }];
};
BlenderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-blender',
  template: _blender_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BlenderComponent);


/***/ }),

/***/ 3432:
/*!**************************************!*\
  !*** ./src/app/mock-blenderCards.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlenderCardMovies: () => (/* binding */ BlenderCardMovies),
/* harmony export */   BlenderCards: () => (/* binding */ BlenderCards)
/* harmony export */ });
const BlenderCards = [{
  name: 'Speakers',
  glTF: '../../../../assets/gltfs/Altavoces.glb',
  details: 'test'
}, {
  name: 'Farolillo',
  glTF: './../../../assets/gltfs/Farolillo.glb',
  details: 'test'
}, {
  name: 'A6M',
  glTF: './../../../assets/gltfs/A6M.gltf',
  details: 'test'
},
//  { name: 'Lancia', glTF: './../../../assets/gltfs/lancia.glb', details: 'test' },
// { name: 'Building', glTF: '../../../../assets/gltfs/Building.glb', details: 'test' },
// { name: 'Viking shield', glTF: './../../../assets/gltfs/vikingShield.glb', details: 'test' },
// { name: 'Viking domains', glTF: './../../../assets/gltfs/VikingsFirstBigProyect.gltf', details: 'test' },
{
  name: 'Contra carro',
  glTF: '../../../../assets/gltfs/CCTank.gltf',
  details: 'test'
}, {
  name: 'Female human',
  glTF: '../../../../assets/gltfs/Nagatoro.glb',
  details: 'test'
}, {
  name: 'Sheep',
  glTF: '../../../../assets/gltfs/FirstAnimal.gltf',
  details: 'test'
}];
const BlenderCardMovies = [{
  name: '',
  url: './../../../assets/Movies/barcoAguaConAudio.mp4',
  details: ''
}, {
  name: '',
  url: '../../../assets/Movies/ccveloce.mp4',
  details: ''
}, {
  name: '',
  url: '../../../assets/Movies/FirstRigging.mp4',
  details: ''
}, {
  name: '',
  url: '../../../assets/Movies/lancia.mp4',
  details: ''
}, {
  name: '',
  url: '../../../assets/Movies/KaetaRig.mp4',
  details: ''
}, {
  name: '',
  url: '../../../assets/Movies/nagatoro0000-0135.mp4',
  details: ''
}];

/***/ }),

/***/ 6769:
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PROJECTS: () => (/* binding */ PROJECTS)
/* harmony export */ });
const PROJECTS = [{
  name: 'RepartidoresWebAplication',
  images: ['RepartidoresWebAplication1.PNG', 'RepartidoresWebAplication2.PNG', 'RepartidoresWebAplication3.PNG'],
  description: "This is a java server made for GestionRepartidores client," + "it uses a REST API system for exchange data with the client side " + ". Made in netbeans hosted using GlasshFish",
  link: "https://github.com/wildVeli/RepartidoresWebAplication"
}, {
  name: 'javaFXPortsAndroid',
  images: ['JavaFxPortsAndroid1.PNG'],
  description: "Basic javaFXPorts set up in NetBeans with graadle plugin." + " This set up is to set up without the Gluon plugin",
  link: "https://github.com/wildVeli/javaFXPortsAndroid"
}, {
  name: 'PMDTimeApp',
  images: ['PMDTimeApp1.png', 'PMDTimeApp3.png', 'PMDTimeApp4.png', 'PMDTimeApp5.png'],
  description: "Android native simple app about managing time, based on pomodoro technique",
  link: "https://github.com/wildVeli/PMDTimeApp"
}, {
  name: 'TartangaTickets',
  images: ['TartangaTicketMenu1WithoutTopBar.PNG'],
  description: "JavaFXPorts app with hibernate about a maintenance ticket system," + " this app use javaFXPorts-Gluon with the free trial. This app was made in a team with jzetaWasTaken,ionut188 and MrParrot3 you can find them on GitHub.",
  link: "https://github.com/wildVeli/TartangaTickets"
}, {
  name: 'FCTmanagementOdooModule',
  images: ['Odoo.PNG'],
  description: "Very Little Project odoo module, about tutorship",
  link: "https://github.com/wildVeli/FCTmanagementOdooModule"
}, {
  name: 'FirstOdooModule',
  images: ['Odoo.PNG'],
  description: "First odoo module, used to learn and try some things",
  link: "https://github.com/wildVeli/FirstOdooModule"
}, {
  name: 'GestionRepartidores',
  images: ['GestionRepartidores1.PNG', 'GestionRepartidores2.PNG', 'GestionRepartidores3.PNG'],
  description: "This is a java client application to manage dealers, UI made with javaFX and this is the client side of" + " RepartidoresWebAplication project, it uses a REST API system for exchange data with the server side",
  link: "https://github.com/wildVeli/GestionRepartidores"
}, {
  name: 'ADT',
  images: ['ADTProject.PNG'],
  description: "Some exercises and a Project with Java calling four different databases mode, Mongo/MySQL/Hibernate/object-relational" + "(It's a mess trying to use four in the same app like this) . It's an app to save music,movies,book and series names, a week calendar to put that series and" + " some half done friend idea system",
  link: "https://github.com/wildVeli/ADT"
}, {
  name: 'PMD',
  images: ['PMD.png'],
  description: "Bunch of native Android exercices",
  link: "https://github.com/wildVeli/PMD"
}, {
  name: 'Games',
  images: ['Games.png'],
  description: "Collection of some mini-games made in spare time just for fun. 2 Games in C++ and 3 in Java",
  link: "https://github.com/wildVeli/Games"
}];

/***/ }),

/***/ 7840:
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _project_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.component.html?ngResource */ 32);
/* harmony import */ var _project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.component.css?ngResource */ 4553);
/* harmony import */ var _project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ 7786);







let ProjectDetailsComponent = class ProjectDetailsComponent {
  constructor(location, route, projectService) {
    this.location = location;
    this.route = route;
    this.projectService = projectService;
    this.projectImages = ['p.jpg', 'p.jpg', 'p.jpg', 'p.jpg'];
    this.actualImage = '';
  }
  ngOnInit() {
    this.getProject();
  }
  getProject() {
    const name = this.route.snapshot.paramMap.get('name');
    this.project = this.projectService.getProjectByName(name);
    this.projectImages = this.project.images;
    this.actualImage = "../../assets/images/{{project.images[0]}}";
  }
  seImage(image) {}
  goBack() {
    this.location.back();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
  }];
};
ProjectDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-project-details',
  template: _project_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProjectDetailsComponent);


/***/ }),

/***/ 7786:
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectService: () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-projects */ 6769);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1536);




let ProjectService = class ProjectService {
  constructor() {}
  getProjects() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS);
  }
  getProjectByName(name) {
    return _mock_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS.find(project => project.name === name);
  }
  static #_ = this.ctorParameters = () => [];
};
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], ProjectService);


/***/ }),

/***/ 3074:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3062);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 4842);
/* harmony import */ var _projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.css?ngResource */ 4455);
/* harmony import */ var _projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ 7786);





let ProjectsComponent = class ProjectsComponent {
  constructor(projectService) {
    this.projectService = projectService;
  }
  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }
  static #_ = this.ctorParameters = () => [{
    type: _project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService
  }];
};
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-projects',
  template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ProjectsComponent);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6161:
/*!******************************************************!*\
  !*** ./src/app/about/about.component.css?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*-------------------about section-----------------------*/
#about{
    /*display:none;*/
   /* background: brown;*/
    margin-top: 60px;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 160%;
    padding-bottom: 30px;
    
  }
  #projects{
    display:none;
  }
  #bigHi{
  
    font-size: 50px;
    text-align: center;
  }
  @media (max-width: 600px) {
    #about{
      /*display:none;*/
     /* background: brown;*/
      margin:0 0 0 0;
      font-size: 100%;
      border-right: 0;
      padding-bottom: 30px;
      max-width: 90%;
      text-align: center;
      margin:auto;
      
    }
  }
`, "",{"version":3,"sources":["webpack://./src/app/about/about.component.css"],"names":[],"mappings":"AAAA,0DAA0D;AAC1D;IACI,gBAAgB;GACjB,sBAAsB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;IACf,oBAAoB;;EAEtB;EACA;IACE,YAAY;EACd;EACA;;IAEE,eAAe;IACf,kBAAkB;EACpB;EACA;IACE;MACE,gBAAgB;KACjB,sBAAsB;MACrB,cAAc;MACd,eAAe;MACf,eAAe;MACf,oBAAoB;MACpB,cAAc;MACd,kBAAkB;MAClB,WAAW;;IAEb;EACF","sourcesContent":["/*-------------------about section-----------------------*/\r\n#about{\r\n    /*display:none;*/\r\n   /* background: brown;*/\r\n    margin-top: 60px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 160%;\r\n    padding-bottom: 30px;\r\n    \r\n  }\r\n  #projects{\r\n    display:none;\r\n  }\r\n  #bigHi{\r\n  \r\n    font-size: 50px;\r\n    text-align: center;\r\n  }\r\n  @media (max-width: 600px) {\r\n    #about{\r\n      /*display:none;*/\r\n     /* background: brown;*/\r\n      margin:0 0 0 0;\r\n      font-size: 100%;\r\n      border-right: 0;\r\n      padding-bottom: 30px;\r\n      max-width: 90%;\r\n      text-align: center;\r\n      margin:auto;\r\n      \r\n    }\r\n  }\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 309:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu>a{
    transition: all .2s;
    opacity: 0.6;
    text-decoration: none; /* no underline */
    font-size: 18px;
    font-weight: 600;
    color:rgb(90, 90, 90);
    margin: 0px;
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
}
 .menu {
  display: flex;
  align-items: center;
  justify-items: center;
  max-height: 30px;
  padding-bottom:10px;
  padding-top:2.5%;
 }

.menu>a:hover{
    opacity: 1.0;
    font-size: 20px;
    border-color:black;
    border-width: 2px 2px 0px 2px;
    border-style:solid;
    animation: jumps 1s ease-in infinite;

}
.menu>a:hover:before{
      content:"▼";
  }
@keyframes jumps {
  100% {
    transform: translateY(10%);
  }
}
.perfildiv{
    padding: 5px;
    color:rgb(90, 90, 90);
  /*  background: cyan;*/
}
.perfildiv>img, .perfildiv>p{
  display: block;
  margin: auto;
}
.perfildiv a>img{
  width:5%;
  height: 5%;
}
.perfildiv>p{
  text-align: center;
  font-size: 30px;
 /* background: blue;*/
}

.separator{
  width:80%;
  border-style:solid;
  border-color:rgb(58, 58, 58);
  border-bottom-width: 2px;
  border-top-width: 0;
  border-left-width: 0;
  border-right: 0;
  margin:auto;
  padding-top:10px;
}
@media (max-width: 600px) {
  .menu {
    display: flex;
    align-items: center;
    justify-items: center;
    max-height: 30px;
    margin:auto;
    font-size: 100%;
 }


 .perfildiv a>img{
    padding-top:20px;
    width:30%;
    height: 30%;
  }
  .perfildiv>p{
    text-align: center;
    font-size: 20px;
  }
}
@media (max-width: 284px) {
  .menu>a{
    margin: auto;
 }
}
`, "",{"version":3,"sources":["webpack://./src/app/app.component.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,YAAY;IACZ,qBAAqB,EAAE,iBAAiB;IACxC,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,aAAa;AACjB;CACC;EACC,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,oCAAoC;;AAExC;AACA;MACM,WAAW;EACf;AACF;EACE;IACE,0BAA0B;EAC5B;AACF;AACA;IACI,YAAY;IACZ,qBAAqB;EACvB,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,YAAY;AACd;AACA;EACE,QAAQ;EACR,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,eAAe;CAChB,qBAAqB;AACtB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,4BAA4B;EAC5B,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;AACA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,WAAW;IACX,eAAe;CAClB;;;CAGA;IACG,gBAAgB;IAChB,SAAS;IACT,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;AACF;AACA;EACE;IACE,YAAY;CACf;AACD","sourcesContent":[".menu>a{\r\n    transition: all .2s;\r\n    opacity: 0.6;\r\n    text-decoration: none; /* no underline */\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color:rgb(90, 90, 90);\r\n    margin: 0px;\r\n    flex: 1 1 auto;\r\n    flex-direction: column;\r\n    display: flex;\r\n}\r\n .menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n  max-height: 30px;\r\n  padding-bottom:10px;\r\n  padding-top:2.5%;\r\n }\r\n\r\n.menu>a:hover{\r\n    opacity: 1.0;\r\n    font-size: 20px;\r\n    border-color:black;\r\n    border-width: 2px 2px 0px 2px;\r\n    border-style:solid;\r\n    animation: jumps 1s ease-in infinite;\r\n\r\n}\r\n.menu>a:hover:before{\r\n      content:\"▼\";\r\n  }\r\n@keyframes jumps {\r\n  100% {\r\n    transform: translateY(10%);\r\n  }\r\n}\r\n.perfildiv{\r\n    padding: 5px;\r\n    color:rgb(90, 90, 90);\r\n  /*  background: cyan;*/\r\n}\r\n.perfildiv>img, .perfildiv>p{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n.perfildiv a>img{\r\n  width:5%;\r\n  height: 5%;\r\n}\r\n.perfildiv>p{\r\n  text-align: center;\r\n  font-size: 30px;\r\n /* background: blue;*/\r\n}\r\n\r\n.separator{\r\n  width:80%;\r\n  border-style:solid;\r\n  border-color:rgb(58, 58, 58);\r\n  border-bottom-width: 2px;\r\n  border-top-width: 0;\r\n  border-left-width: 0;\r\n  border-right: 0;\r\n  margin:auto;\r\n  padding-top:10px;\r\n}\r\n@media (max-width: 600px) {\r\n  .menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n    max-height: 30px;\r\n    margin:auto;\r\n    font-size: 100%;\r\n }\r\n\r\n\r\n .perfildiv a>img{\r\n    padding-top:20px;\r\n    width:30%;\r\n    height: 30%;\r\n  }\r\n  .perfildiv>p{\r\n    text-align: center;\r\n    font-size: 20px;\r\n  }\r\n}\r\n@media (max-width: 284px) {\r\n  .menu>a{\r\n    margin: auto;\r\n }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4374:
/*!****************************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `model-viewer{
  width: 100%;
  height: 90vh;
}
`, "",{"version":3,"sources":["webpack://./src/app/blender/blender-card/blender-card.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["model-viewer{\n  width: 100%;\n  height: 90vh;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2457:
/*!**********************************************************!*\
  !*** ./src/app/blender/blender.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.columns{
  display:flex;
  flex-direction: column;
  padding-right: 10%;
  padding-left: 10%;
}
.rows{
  display: flex;
  flex-direction:row;
  padding:5%;
  flex-wrap: wrap;
  justify-content: center;
}
.rows>div{
    padding:1%;
}
h3{
  justify-content: center;
  display: flex;
}
.menu>a{
    transition: all .2s;
    opacity: 0.6;
    text-decoration: none; /* no underline */
    font-size: 18px;
    font-weight: 600;
    color:rgb(90, 90, 90);
    margin: 0px;
    flex: 1 1 auto;
    flex-direction: column;
    display: flex;
    align-items:center;
}
 .menu {
  display: flex;
  align-items: center;
  justify-items: center;
  max-height: 30px;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom:10px;
  padding-top:2.5%;
 }

.menu>a:hover{
    opacity: 1.0;
    font-size: 20px;
    border-color:black;
    border-width: 0px 2px 2px 2px;
    border-style:solid;
    animation: jumps 1s ease-in infinite;

}
.menu>a:hover:before{
      content:"▼";
  }
@keyframes jumps {
  100% {
    transform: translateY(10%);
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/blender/blender.component.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,uBAAuB;AACzB;AACA;IACI,UAAU;AACd;AACA;EACE,uBAAuB;EACvB,aAAa;AACf;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,qBAAqB,EAAE,iBAAiB;IACxC,eAAe;IACf,gBAAgB;IAChB,qBAAqB;IACrB,WAAW;IACX,cAAc;IACd,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;CACC;EACC,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;IAClB,oCAAoC;;AAExC;AACA;MACM,WAAW;EACf;AACF;EACE;IACE,0BAA0B;EAC5B;AACF","sourcesContent":[".columns{\n  display:flex;\n  flex-direction: column;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n.rows{\n  display: flex;\n  flex-direction:row;\n  padding:5%;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.rows>div{\n    padding:1%;\n}\nh3{\n  justify-content: center;\n  display: flex;\n}\n.menu>a{\n    transition: all .2s;\n    opacity: 0.6;\n    text-decoration: none; /* no underline */\n    font-size: 18px;\n    font-weight: 600;\n    color:rgb(90, 90, 90);\n    margin: 0px;\n    flex: 1 1 auto;\n    flex-direction: column;\n    display: flex;\n    align-items:center;\n}\n .menu {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  max-height: 30px;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-bottom:10px;\n  padding-top:2.5%;\n }\n\n.menu>a:hover{\n    opacity: 1.0;\n    font-size: 20px;\n    border-color:black;\n    border-width: 0px 2px 2px 2px;\n    border-style:solid;\n    animation: jumps 1s ease-in infinite;\n\n}\n.menu>a:hover:before{\n      content:\"▼\";\n  }\n@keyframes jumps {\n  100% {\n    transform: translateY(10%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4553:
/*!**************************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.projectDetails{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  /*  background:red;*/
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;

    padding: 50px;
    width: 70%;
}

.projectImages{
    position:relative;
    flex: 1 1 auto;
  /*  background:blue;*/
    max-width: 50%;
}

.projectImages img{
    display: block;
    max-width: 90%;
    max-height: 90%;
    min-height: 5%;

    margin: auto;
}

.imageSelection{
 /*   background: violet; */
    position: absolute;
    width: 100%;
    bottom:3%;
    height: 10px;


}
.imageSelection .box{
    margin: auto;
    display:flex;
    width:10%;
}
.box img{
    flex: 0 1 auto;
/*    background: red;*/

}

.projectDescription{
    flex: 1 1 auto;
    max-width:50%;
    max-height:50%;
 /*   background:yellow;*/
    text-align: initial;
    font-size: 150%;
    
}
.projectDescription .text{
    font-family: 'Roboto', sans-serif;

}
@media (max-width: 600px) {
    .projectDescription{
        flex: 1 1 auto;
        max-width:100%;
        max-height:50%;
        min-width:100%;
        text-align: center;
        font-size: 80%;
        
    }
    .projectDescription>h1{
        flex: 1 1 auto;
        max-width:100%;
        max-height:100%;
        text-align: center;
        font-size: 150%;
        
    }
    .projectDetails{
        min-width: 90%;
        max-width: 300px;
        padding: 0px;
        margin-top: 0px;
        
    }
    
    
  }
`, "",{"version":3,"sources":["webpack://./src/app/project-details/project-details.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;EACzB,oBAAoB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;;IAEhB,aAAa;IACb,UAAU;AACd;;AAEA;IACI,iBAAiB;IACjB,cAAc;EAChB,qBAAqB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,eAAe;IACf,cAAc;;IAEd,YAAY;AAChB;;AAEA;CACC,0BAA0B;IACvB,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,YAAY;;;AAGhB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,SAAS;AACb;AACA;IACI,cAAc;AAClB,uBAAuB;;AAEvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,cAAc;CACjB,wBAAwB;IACrB,mBAAmB;IACnB,eAAe;;AAEnB;AACA;IACI,iCAAiC;;AAErC;AACA;IACI;QACI,cAAc;QACd,cAAc;QACd,cAAc;QACd,cAAc;QACd,kBAAkB;QAClB,cAAc;;IAElB;IACA;QACI,cAAc;QACd,cAAc;QACd,eAAe;QACf,kBAAkB;QAClB,eAAe;;IAEnB;IACA;QACI,cAAc;QACd,gBAAgB;QAChB,YAAY;QACZ,eAAe;;IAEnB;;;EAGF","sourcesContent":[".projectDetails{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  /*  background:red;*/\r\n    margin-bottom: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 60px;\r\n\r\n    padding: 50px;\r\n    width: 70%;\r\n}\r\n\r\n.projectImages{\r\n    position:relative;\r\n    flex: 1 1 auto;\r\n  /*  background:blue;*/\r\n    max-width: 50%;\r\n}\r\n\r\n.projectImages img{\r\n    display: block;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    margin: auto;\r\n}\r\n\r\n.imageSelection{\r\n /*   background: violet; */\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom:3%;\r\n    height: 10px;\r\n\r\n\r\n}\r\n.imageSelection .box{\r\n    margin: auto;\r\n    display:flex;\r\n    width:10%;\r\n}\r\n.box img{\r\n    flex: 0 1 auto;\r\n/*    background: red;*/\r\n\r\n}\r\n\r\n.projectDescription{\r\n    flex: 1 1 auto;\r\n    max-width:50%;\r\n    max-height:50%;\r\n /*   background:yellow;*/\r\n    text-align: initial;\r\n    font-size: 150%;\r\n    \r\n}\r\n.projectDescription .text{\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n@media (max-width: 600px) {\r\n    .projectDescription{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:50%;\r\n        min-width:100%;\r\n        text-align: center;\r\n        font-size: 80%;\r\n        \r\n    }\r\n    .projectDescription>h1{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:100%;\r\n        text-align: center;\r\n        font-size: 150%;\r\n        \r\n    }\r\n    .projectDetails{\r\n        min-width: 90%;\r\n        max-width: 300px;\r\n        padding: 0px;\r\n        margin-top: 0px;\r\n        \r\n    }\r\n    \r\n    \r\n  }\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4455:
/*!************************************************************!*\
  !*** ./src/app/projects/projects.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*-----Projects----*/
.flexBox{
    padding-left: 6%;
    padding-right: 6%;

}
.column{
    position: relative;
    float:left;
    width: 20%;
    padding: 2.5%;
}
.column>div>img{
    display: block;
    margin:auto;
    max-width: 90%;
    max-height: 200px;
    min-height: 230px;
    min-width: 5%;
    border-radius: 3%;
}

.column>div>p{
    border-radius:  40px;
    border-top:  inset;
    border-right:  inset;
    position: absolute;
    bottom:20%;
    width: 80%;
    background-color: rgba(128, 128, 128, 0.726);
    text-align: center;
    color:white;
    padding-top:10px;
    padding-bottom: 10px;
    border-radius: 7px;
    font-weight: 600;
    opacity: 5px;
}
/*----------zoom on hover------------*/
.column>div{
    transition: transform .5s;
  }


  .column>div:hover{
    transform: scale(1.1);
  }


@media (max-width: 600px) {
  .separator{
    width:90%;
    padding-top:0px;
  }
  .flexBox{
    display:flex;
    flex-wrap: wrap;
    align-items: center;


  }
  .column{
      min-width: 100%;
      align-items: center;
      padding: 0;
      padding-top: 5px;
  }
  .column>div>img{
      max-width: 90%;
      max-height: 90%;
      min-height: 5%;
      min-width: 5%;
  }

  .column>div>p{
      max-width: 280px;
      min-width: 100%;
      text-align: center;
      color:white;
      padding-top:10px;
      padding-bottom: 6px;
      font-weight: 600;
  }
  }

  @media (width: 1920px) {
  .column>div>img{
    display: block;
    margin:auto;
    max-width: 90%;
    max-height: 200px;
    min-height: 230px;
    min-width: 90%;

/*
    max-height: 90%;
    min-height: 5%;

    */
  }

}
@media(max-width: 600px){
  .column{
    padding-top:6%;
    padding-bottom: 6%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/projects/projects.component.css"],"names":[],"mappings":"AAAA,oBAAoB;AACpB;IACI,gBAAgB;IAChB,iBAAiB;;AAErB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,aAAa;AACjB;AACA;IACI,cAAc;IACd,WAAW;IACX,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,4CAA4C;IAC5C,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;AACA,sCAAsC;AACtC;IACI,yBAAyB;EAC3B;;;EAGA;IACE,qBAAqB;EACvB;;;AAGF;EACE;IACE,SAAS;IACT,eAAe;EACjB;EACA;IACE,YAAY;IACZ,eAAe;IACf,mBAAmB;;;EAGrB;EACA;MACI,eAAe;MACf,mBAAmB;MACnB,UAAU;MACV,gBAAgB;EACpB;EACA;MACI,cAAc;MACd,eAAe;MACf,cAAc;MACd,aAAa;EACjB;;EAEA;MACI,gBAAgB;MAChB,eAAe;MACf,kBAAkB;MAClB,WAAW;MACX,gBAAgB;MAChB,mBAAmB;MACnB,gBAAgB;EACpB;EACA;;EAEA;EACA;IACE,cAAc;IACd,WAAW;IACX,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;;AAElB;;;;KAIK;EACH;;AAEF;AACA;EACE;IACE,cAAc;IACd,kBAAkB;EACpB;AACF","sourcesContent":["/*-----Projects----*/\r\n.flexBox{\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n\r\n}\r\n.column{\r\n    position: relative;\r\n    float:left;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n.column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 5%;\r\n    border-radius: 3%;\r\n}\r\n\r\n.column>div>p{\r\n    border-radius:  40px;\r\n    border-top:  inset;\r\n    border-right:  inset;\r\n    position: absolute;\r\n    bottom:20%;\r\n    width: 80%;\r\n    background-color: rgba(128, 128, 128, 0.726);\r\n    text-align: center;\r\n    color:white;\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 7px;\r\n    font-weight: 600;\r\n    opacity: 5px;\r\n}\r\n/*----------zoom on hover------------*/\r\n.column>div{\r\n    transition: transform .5s;\r\n  }\r\n\r\n\r\n  .column>div:hover{\r\n    transform: scale(1.1);\r\n  }\r\n\r\n\r\n@media (max-width: 600px) {\r\n  .separator{\r\n    width:90%;\r\n    padding-top:0px;\r\n  }\r\n  .flexBox{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n\r\n\r\n  }\r\n  .column{\r\n      min-width: 100%;\r\n      align-items: center;\r\n      padding: 0;\r\n      padding-top: 5px;\r\n  }\r\n  .column>div>img{\r\n      max-width: 90%;\r\n      max-height: 90%;\r\n      min-height: 5%;\r\n      min-width: 5%;\r\n  }\r\n\r\n  .column>div>p{\r\n      max-width: 280px;\r\n      min-width: 100%;\r\n      text-align: center;\r\n      color:white;\r\n      padding-top:10px;\r\n      padding-bottom: 6px;\r\n      font-weight: 600;\r\n  }\r\n  }\r\n\r\n  @media (width: 1920px) {\r\n  .column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 90%;\r\n\r\n/*\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    */\r\n  }\r\n\r\n}\r\n@media(max-width: 600px){\r\n  .column{\r\n    padding-top:6%;\r\n    padding-bottom: 6%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7800:
/*!*******************************************************!*\
  !*** ./src/app/about/about.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"about\">\n  <p id=\"bigHi\">Hi!</p>\n  <p>Hi hi! This is intended to be an index web for the GitHub projects.\n  Just an idea to see the projects of GitHub in a different way and\n   do some web. This is one my first projects after Angular site apps, so feel free to criticize so I can make a better job.</p>\n <p>You can visit my GitHub directly here: <a href=\"https://github.com/wildVeli\" target=\"_blank\">https://github.com/wildVeli</a></p>\n</div>";

/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <!--<div class=\"perfildiv\">\n    <a href=\"https://github.com/wildVeli\" target=\"_blank\"><img src=\"assets/images/Zero.png\" /></a>\n    <p>wildVeli</p>\n  </div>-->\n  <link rel=\"icon\" href=\"./images/Zero.png\">\n  <meta charset=\"utf-8\">\n  <div>\n    <nav class=\"menu\">\n      <a routerLink=\"/programming\">PROGRAMMING</a>\n      <a routerLink=\"/blender\">BLENDER</a>\n      <a routerLink=\"/about\">ABOUT</a>\n    </nav>\n  </div>\n  <div class=\"separator\"></div>\n</div>\n<router-outlet></router-outlet>\n";

/***/ }),

/***/ 9241:
/*!*****************************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"card !== undefined\" style=\"min-width:250px; min-height:100px;\">\n  <model-viewer alt={{card.name}} src={{card.glTF}} auto-rotate camera-controls></model-viewer>\n</div>\n<div *ngIf=\"movie !== undefined\">\n  <video controls width=\"250\">\n\n    <source src={{movie.url}} type=\"video/mp4\">\n\n    Sorry, your browser doesn't support embedded videos.\n  </video>\n</div>\n";

/***/ }),

/***/ 4288:
/*!***********************************************************!*\
  !*** ./src/app/blender/blender.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <nav class=\"menu\">\n    <a (click)=\"menuSelect('models')\">3D MODELS</a>\n    <a (click)=\"menuSelect('movies')\">MOVIES</a>\n  </nav>\n</div>\n<div class=\"columns\" *ngIf=\"option == 'models'\">\n  <h3>▼ Scroll down to see more ▼</h3>\n  <div *ngFor=\"let blenderCard of cards\">\n    <app-blender-card [card]=blenderCard></app-blender-card>\n  </div>\n</div>\n<div class=\"rows\" *ngIf=\"option == 'movies'\">\n  <div *ngFor=\"let blenderCardMovie of movies\">\n    <app-blender-card [movie]=blenderCardMovie></app-blender-card>\n  </div>\n</div>\n";

/***/ }),

/***/ 32:
/*!***************************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"project\">\n  <div class=\"projectDetails\">\n    <div class=\"projectImages\">\n      <h1> {{name1}}</h1> \n      <div class=\"imageSelection\">\n        <div  class=\"box\" >\n        <!--\n          <div *ngFor=\"let projectImage of projectImages\">\n            <img src=\"../../assets/images/imgButton.png\" (click)=seImage(projectImage) alt=\"Project image\"/>\n          </div>\n        -->\n        </div>\n      </div>\n      <img src=\"../../assets/images/{{project.images[0]}}\" alt=\"Project image\"/>\n      \n    </div>\n    <div class=\"projectDescription\">\n      <h1>{{project.name}}</h1>\n      <p class=\"text\">{{project.description}} </p>\n      <br>\n      <p>\n          Link: <a href=\"{{project.link}}\" target=\"_blank\">{{project.link}}</a>\n      </p>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 4842:
/*!*************************************************************!*\
  !*** ./src/app/projects/projects.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"flexBox\">\n  <div *ngFor=\"let project of projects\">\n    <div class=\"column\">\n      <div routerLink=\"/details/{{project.name}}\">\n        <img src=\"assets/images/{{project.images[0]}}\" alt=\"Project image\" />\n        <p>{{project.name}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map