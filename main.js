"use strict";
(self["webpackChunkAngularGitIndex"] = self["webpackChunkAngularGitIndex"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 5133);
/* harmony import */ var _about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.css?ngResource */ 3378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-details/project-details.component */ 5821);
/* harmony import */ var _blender_blender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blender/blender.component */ 5114);







const routes = [
    { path: '', redirectTo: '/programming', pathMatch: 'full' },
    { path: 'programming', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent },
    { path: 'blender', component: _blender_blender_component__WEBPACK_IMPORTED_MODULE_3__.BlenderComponent },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
    { path: 'details/:name', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__.ProjectDetailsComponent },
    { path: '**', redirectTo: '/programming' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'wildVeli Projects Index';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ 5609);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-details/project-details.component */ 5821);
/* harmony import */ var _blender_blender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blender/blender.component */ 5114);
/* harmony import */ var _blender_blender_card_blender_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blender/blender-card/blender-card.component */ 1551);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent,
            _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
            _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__.ProjectDetailsComponent,
            _blender_blender_component__WEBPACK_IMPORTED_MODULE_5__.BlenderComponent,
            _blender_blender_card_blender_card_component__WEBPACK_IMPORTED_MODULE_6__.BlenderCardComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 727:
/*!*****************************************!*\
  !*** ./src/app/blender-card.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlenderCardService": () => (/* binding */ BlenderCardService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-blenderCards */ 7423);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);




let BlenderCardService = class BlenderCardService {
    constructor() { }
    getBlenderCards() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCards);
    }
    getBlenderCardsByName(name) {
        return _mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCards.find(card => card.name === name);
    }
    getBlenderCardMovies() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_blenderCards__WEBPACK_IMPORTED_MODULE_0__.BlenderCardMovies);
    }
};
BlenderCardService.ctorParameters = () => [];
BlenderCardService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], BlenderCardService);



/***/ }),

/***/ 1551:
/*!****************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlenderCardComponent": () => (/* binding */ BlenderCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blender_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blender-card.component.html?ngResource */ 2306);
/* harmony import */ var _blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blender-card.component.css?ngResource */ 6058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ 8108);







let BlenderCardComponent = class BlenderCardComponent {
    constructor() { }
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
        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({ color: 0x00ff00 });
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
};
BlenderCardComponent.ctorParameters = () => [];
BlenderCardComponent.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    movie: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
BlenderCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blender-card',
        template: _blender_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_blender_card_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlenderCardComponent);



/***/ }),

/***/ 5114:
/*!**********************************************!*\
  !*** ./src/app/blender/blender.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlenderComponent": () => (/* binding */ BlenderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blender_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blender.component.html?ngResource */ 6923);
/* harmony import */ var _blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blender.component.css?ngResource */ 9580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _blender_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blender-card.service */ 727);





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
};
BlenderComponent.ctorParameters = () => [
    { type: _blender_card_service__WEBPACK_IMPORTED_MODULE_2__.BlenderCardService }
];
BlenderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blender',
        template: _blender_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_blender_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlenderComponent);



/***/ }),

/***/ 7423:
/*!**************************************!*\
  !*** ./src/app/mock-blenderCards.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlenderCardMovies": () => (/* binding */ BlenderCardMovies),
/* harmony export */   "BlenderCards": () => (/* binding */ BlenderCards)
/* harmony export */ });
const BlenderCards = [
    { name: 'Speakers', glTF: '../../../../assets/gltfs/Altavoces.glb', details: 'test' },
    { name: 'Farolillo', glTF: './../../../assets/gltfs/Farolillo.glb', details: 'test' },
    { name: 'A6M', glTF: './../../../assets/gltfs/A6M.gltf', details: 'test' },
    { name: 'Lancia', glTF: './../../../assets/gltfs/lancia.glb', details: 'test' },
    { name: 'Building', glTF: '../../../../assets/gltfs/Building.glb', details: 'test' },
    { name: 'Viking shield', glTF: './../../../assets/gltfs/vikingShield.glb', details: 'test' },
    // { name: 'Viking domains', glTF: './../../../assets/gltfs/VikingsFirstBigProyect.gltf', details: 'test' },
    { name: 'Contra carro', glTF: '../../../../assets/gltfs/CCTank.gltf', details: 'test' },
    { name: 'Female human', glTF: '../../../../assets/gltfs/Nagatoro.glb', details: 'test' },
    { name: 'Sheep', glTF: '../../../../assets/gltfs/FirstAnimal.gltf', details: 'test' }
];
const BlenderCardMovies = [
    { name: '', url: './../../../assets/Movies/barcoAguaConAudio.mp4', details: '' },
    { name: '', url: '../../../assets/Movies/ccveloce.mp4', details: '' },
    { name: '', url: '../../../assets/Movies/FirstRigging.mp4', details: '' },
    { name: '', url: '../../../assets/Movies/lancia.mp4', details: '' },
    { name: '', url: '../../../assets/Movies/KaetaRig.mp4', details: '' },
    { name: '', url: '../../../assets/Movies/nagatoro0000-0135.mp4', details: '' }
];


/***/ }),

/***/ 4354:
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PROJECTS": () => (/* binding */ PROJECTS)
/* harmony export */ });
const PROJECTS = [
    { name: 'RepartidoresWebAplication', images: ['RepartidoresWebAplication1.PNG', 'RepartidoresWebAplication2.PNG', 'RepartidoresWebAplication3.PNG'], description: "This is a java server made for GestionRepartidores client," +
            "it uses a REST API system for exchange data with the client side " + ". Made in netbeans hosted using GlasshFish", link: "https://github.com/wildVeli/RepartidoresWebAplication" },
    { name: 'javaFXPortsAndroid', images: ['JavaFxPortsAndroid1.PNG'], description: "Basic javaFXPorts set up in NetBeans with graadle plugin." +
            " This set up is to set up without the Gluon plugin", link: "https://github.com/wildVeli/javaFXPortsAndroid" },
    { name: 'PMDTimeApp', images: ['PMDTimeApp1.png', 'PMDTimeApp3.png', 'PMDTimeApp4.png', 'PMDTimeApp5.png'], description: "Android native simple app about managing time, based on pomodoro technique",
        link: "https://github.com/wildVeli/PMDTimeApp" },
    { name: 'TartangaTickets', images: ['TartangaTicketMenu1WithoutTopBar.PNG'], description: "JavaFXPorts app with hibernate about a maintenance ticket system," +
            " this app use javaFXPorts-Gluon with the free trial. This app was made in a team with jzetaWasTaken,ionut188 and MrParrot3 you can find them on GitHub.", link: "https://github.com/wildVeli/TartangaTickets" },
    { name: 'FCTmanagementOdooModule', images: ['Odoo.PNG'], description: "Very Little Project odoo module, about tutorship", link: "https://github.com/wildVeli/FCTmanagementOdooModule" },
    { name: 'FirstOdooModule', images: ['Odoo.PNG'], description: "First odoo module, used to learn and try some things", link: "https://github.com/wildVeli/FirstOdooModule" },
    { name: 'GestionRepartidores', images: ['GestionRepartidores1.PNG', 'GestionRepartidores2.PNG', 'GestionRepartidores3.PNG'], description: "This is a java client application to manage dealers, UI made with javaFX and this is the client side of" +
            " RepartidoresWebAplication project, it uses a REST API system for exchange data with the server side", link: "https://github.com/wildVeli/GestionRepartidores" },
    { name: 'ADT', images: ['ADTProject.PNG'], description: "Some exercises and a Project with Java calling four different databases mode, Mongo/MySQL/Hibernate/object-relational" +
            "(It's a mess trying to use four in the same app like this) . It's an app to save music,movies,book and series names, a week calendar to put that series and" +
            " some half done friend idea system", link: "https://github.com/wildVeli/ADT" },
    { name: 'PMD', images: ['PMD.png'], description: "Bunch of native Android exercices", link: "https://github.com/wildVeli/PMD" },
    { name: 'Games', images: ['Games.png'], description: "Collection of some mini-games made in spare time just for fun. 2 Games in C++ and 3 in Java", link: "https://github.com/wildVeli/Games" },
];


/***/ }),

/***/ 5821:
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectDetailsComponent": () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-details.component.html?ngResource */ 4515);
/* harmony import */ var _project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-details.component.css?ngResource */ 6937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ 6176);







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
    seImage(image) {
    }
    goBack() {
        this.location.back();
    }
};
ProjectDetailsComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService }
];
ProjectDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-project-details',
        template: _project_details_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_details_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectDetailsComponent);



/***/ }),

/***/ 6176:
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-projects */ 4354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);




let ProjectService = class ProjectService {
    constructor() { }
    getProjects() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_mock_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS);
    }
    getProjectByName(name) {
        return _mock_projects__WEBPACK_IMPORTED_MODULE_0__.PROJECTS.find(project => project.name === name);
    }
};
ProjectService.ctorParameters = () => [];
ProjectService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ 5609:
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component.html?ngResource */ 5390);
/* harmony import */ var _projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.component.css?ngResource */ 1866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ 6176);





let ProjectsComponent = class ProjectsComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _project_service__WEBPACK_IMPORTED_MODULE_2__.ProjectService }
];
ProjectsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-projects',
        template: _projects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_projects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectsComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3378:
/*!******************************************************!*\
  !*** ./src/app/about/about.component.css?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/*-------------------about section-----------------------*/\r\n#about{\r\n    /*display:none;*/\r\n   /* background: brown;*/\r\n    margin-top: 60px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 160%;\r\n    padding-bottom: 30px;\r\n    \r\n  }\r\n#projects{\r\n    display:none;\r\n  }\r\n#bigHi{\r\n  \r\n    font-size: 50px;\r\n    text-align: center;\r\n  }\r\n@media (max-width: 600px) {\r\n    #about{\r\n      /*display:none;*/\r\n     /* background: brown;*/\r\n      margin:0 0 0 0;\r\n      font-size: 100%;\r\n      border-right: 0;\r\n      padding-bottom: 30px;\r\n      max-width: 90%;\r\n      text-align: center;\r\n      margin:auto;\r\n      \r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBQzFEO0lBQ0ksZ0JBQWdCO0dBQ2pCLHNCQUFzQjtJQUNyQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9COztFQUV0QjtBQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0E7O0lBRUUsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0U7TUFDRSxnQkFBZ0I7S0FDakIsc0JBQXNCO01BQ3JCLGNBQWM7TUFDZCxlQUFlO01BQ2YsZUFBZTtNQUNmLG9CQUFvQjtNQUNwQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFdBQVc7O0lBRWI7RUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tYWJvdXQgc2VjdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuI2Fib3V0e1xyXG4gICAgLypkaXNwbGF5Om5vbmU7Ki9cclxuICAgLyogYmFja2dyb3VuZDogYnJvd247Ki9cclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDE2MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIFxyXG4gIH1cclxuICAjcHJvamVjdHN7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG4gICNiaWdIaXtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAjYWJvdXR7XHJcbiAgICAgIC8qZGlzcGxheTpub25lOyovXHJcbiAgICAgLyogYmFja2dyb3VuZDogYnJvd247Ki9cclxuICAgICAgbWFyZ2luOjAgMCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = ".menu>a{\r\n    transition: all .2s;\r\n    opacity: 0.6;\r\n    text-decoration: none; /* no underline */\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color:rgb(90, 90, 90);\r\n    margin: 0px;\r\n    flex: 1 1 auto;\r\n    flex-direction: column;\r\n    display: flex;\r\n}\r\n .menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n  max-height: 30px;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n  padding-bottom:10px;\r\n  padding-top:2.5%;\r\n }\r\n .menu>a:hover{\r\n    opacity: 1.0;\r\n    font-size: 20px;\r\n    border-color:black;\r\n    border-width: 2px 2px 0px 2px;\r\n    border-style:solid;\r\n    -webkit-animation: jumps 1s ease-in infinite;\r\n            animation: jumps 1s ease-in infinite;\r\n\r\n}\r\n .menu>a:hover:before{\r\n      content:\"▼\";\r\n  }\r\n @-webkit-keyframes jumps {\r\n  100% {\r\n    transform: translateY(10%);\r\n  }\r\n}\r\n @keyframes jumps {\r\n  100% {\r\n    transform: translateY(10%);\r\n  }\r\n}\r\n .perfildiv{\r\n    padding: 5px;\r\n    color:rgb(90, 90, 90);\r\n  /*  background: cyan;*/\r\n}\r\n .perfildiv>img, .perfildiv>p{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n .perfildiv a>img{\r\n  width:5%;\r\n  height: 5%;\r\n}\r\n .perfildiv>p{\r\n  text-align: center;\r\n  font-size: 30px;\r\n /* background: blue;*/\r\n}\r\n .separator{\r\n  width:80%;\r\n  border-style:solid;\r\n  border-color:rgb(58, 58, 58);\r\n  border-bottom-width: 2px;\r\n  border-top-width: 0;\r\n  border-left-width: 0;\r\n  border-right: 0;\r\n  margin:auto;\r\n  padding-top:10px;\r\n}\r\n @media (max-width: 600px) {\r\n  .menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n    max-height: 30px;\r\n    margin:auto;\r\n    font-size: 100%;\r\n }\r\n\r\n\r\n .perfildiv a>img{\r\n    padding-top:20px;\r\n    width:30%;\r\n    height: 30%;\r\n  }\r\n  .perfildiv>p{\r\n    text-align: center;\r\n    font-size: 20px;\r\n  }\r\n}\r\n @media (max-width: 284px) {\r\n  .menu>a{\r\n    margin: auto;\r\n }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUIsRUFBRSxpQkFBaUI7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjtDQUNDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtDQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw0Q0FBb0M7WUFBcEMsb0NBQW9DOztBQUV4QztDQUNBO01BQ00sV0FBVztFQUNmO0NBQ0Y7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0NBSkE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0NBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtDQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtDQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjtDQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEIscUJBQXFCO0FBQ3RCO0NBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtDQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7OztDQUdBO0lBQ0csZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0FBQ0Y7Q0FDQTtFQUNFO0lBQ0UsWUFBWTtDQUNmO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudT5he1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6cmdiKDkwLCA5MCwgOTApO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiAubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIHBhZGRpbmctdG9wOjIuNSU7XHJcbiB9XHJcblxyXG4ubWVudT5hOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDBweCAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBhbmltYXRpb246IGp1bXBzIDFzIGVhc2UtaW4gaW5maW5pdGU7XHJcblxyXG59XHJcbi5tZW51PmE6aG92ZXI6YmVmb3Jle1xyXG4gICAgICBjb250ZW50Olwi4pa8XCI7XHJcbiAgfVxyXG5Aa2V5ZnJhbWVzIGp1bXBzIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xyXG4gIH1cclxufVxyXG4ucGVyZmlsZGl2e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6cmdiKDkwLCA5MCwgOTApO1xyXG4gIC8qICBiYWNrZ3JvdW5kOiBjeWFuOyovXHJcbn1cclxuLnBlcmZpbGRpdj5pbWcsIC5wZXJmaWxkaXY+cHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnBlcmZpbGRpdiBhPmltZ3tcclxuICB3aWR0aDo1JTtcclxuICBoZWlnaHQ6IDUlO1xyXG59XHJcbi5wZXJmaWxkaXY+cHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gLyogYmFja2dyb3VuZDogYmx1ZTsqL1xyXG59XHJcblxyXG4uc2VwYXJhdG9ye1xyXG4gIHdpZHRoOjgwJTtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuIH1cclxuXHJcblxyXG4gLnBlcmZpbGRpdiBhPmltZ3tcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICB9XHJcbiAgLnBlcmZpbGRpdj5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMjg0cHgpIHtcclxuICAubWVudT5he1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6058:
/*!****************************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "model-viewer{\n  width: 100%;\n  height: 90vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsZW5kZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJibGVuZGVyLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZGVsLXZpZXdlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9580:
/*!**********************************************************!*\
  !*** ./src/app/blender/blender.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".columns{\n  display:flex;\n  flex-direction: column;\n  padding-right: 10%;\n  padding-left: 10%;\n}\n.rows{\n  display: flex;\n  flex-direction:row;\n  padding:5%;\n}\n.rows>div{\n    padding:1%;\n}\nh3{\n  justify-content: center;\n  display: flex;\n}\n.menu>a{\n    transition: all .2s;\n    opacity: 0.6;\n    text-decoration: none; /* no underline */\n    font-size: 18px;\n    font-weight: 600;\n    color:rgb(90, 90, 90);\n    margin: 0px;\n    flex: 1 1 auto;\n    flex-direction: column;\n    display: flex;\n    align-items:center;\n}\n.menu {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  max-height: 30px;\n  padding-left: 10%;\n  padding-right: 10%;\n  padding-bottom:10px;\n  padding-top:2.5%;\n }\n.menu>a:hover{\n    opacity: 1.0;\n    font-size: 20px;\n    border-color:black;\n    border-width: 2px 2px 2px 2px;\n    border-style:solid;\n    -webkit-animation: jumps 1s ease-in infinite;\n            animation: jumps 1s ease-in infinite;\n\n}\n.menu>a:hover:before{\n      content:\"▼\";\n  }\n@-webkit-keyframes jumps {\n  100% {\n    transform: translateY(10%);\n  }\n}\n@keyframes jumps {\n  100% {\n    transform: translateY(10%);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsZW5kZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixxQkFBcUIsRUFBRSxpQkFBaUI7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiw0Q0FBb0M7WUFBcEMsb0NBQW9DOztBQUV4QztBQUNBO01BQ00sV0FBVztFQUNmO0FBQ0Y7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGO0FBSkE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwiZmlsZSI6ImJsZW5kZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW5ze1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG59XG4ucm93c3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246cm93O1xuICBwYWRkaW5nOjUlO1xufVxuLnJvd3M+ZGl2e1xuICAgIHBhZGRpbmc6MSU7XG59XG5oM3tcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVudT5he1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnM7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6cmdiKDkwLCA5MCwgOTApO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4gLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gIHBhZGRpbmctdG9wOjIuNSU7XG4gfVxuXG4ubWVudT5hOmhvdmVye1xuICAgIG9wYWNpdHk6IDEuMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOmJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcbiAgICBhbmltYXRpb246IGp1bXBzIDFzIGVhc2UtaW4gaW5maW5pdGU7XG5cbn1cbi5tZW51PmE6aG92ZXI6YmVmb3Jle1xuICAgICAgY29udGVudDpcIuKWvFwiO1xuICB9XG5Aa2V5ZnJhbWVzIGp1bXBzIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 6937:
/*!**************************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".projectDetails{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  /*  background:red;*/\r\n    margin-bottom: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 60px;\r\n\r\n    padding: 50px;\r\n    width: 70%;\r\n}\r\n\r\n.projectImages{\r\n    position:relative;\r\n    flex: 1 1 auto;\r\n  /*  background:blue;*/\r\n    max-width: 50%;\r\n}\r\n\r\n.projectImages img{\r\n    display: block;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    margin: auto;\r\n}\r\n\r\n.imageSelection{\r\n /*   background: violet; */\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom:3%;\r\n    height: 10px;\r\n\r\n\r\n}\r\n\r\n.imageSelection .box{\r\n    margin: auto;\r\n    display:flex;\r\n    width:10%;\r\n}\r\n\r\n.box img{\r\n    flex: 0 1 auto;\r\n/*    background: red;*/\r\n\r\n}\r\n\r\n.projectDescription{\r\n    flex: 1 1 auto;\r\n    max-width:50%;\r\n    max-height:50%;\r\n /*   background:yellow;*/\r\n    text-align: left;\r\n    text-align: initial;\r\n    font-size: 150%;\r\n    \r\n}\r\n\r\n.projectDescription .text{\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .projectDescription{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:50%;\r\n        min-width:100%;\r\n        text-align: center;\r\n        font-size: 80%;\r\n        \r\n    }\r\n    .projectDescription>h1{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:100%;\r\n        text-align: center;\r\n        font-size: 150%;\r\n        \r\n    }\r\n    .projectDetails{\r\n        min-width: 90%;\r\n        max-width: 300px;\r\n        padding: 0px;\r\n        margin-top: 0px;\r\n        \r\n    }\r\n    \r\n    \r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCLG9CQUFvQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQixxQkFBcUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7O0lBRWQsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLDBCQUEwQjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZOzs7QUFHaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFDQTtJQUNJLGNBQWM7QUFDbEIsdUJBQXVCOztBQUV2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztDQUNqQix3QkFBd0I7SUFDckIsZ0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLGlDQUFpQzs7QUFFckM7O0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYzs7SUFFbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlOztJQUVuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osZUFBZTs7SUFFbkI7OztFQUdGIiwiZmlsZSI6InByb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3REZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiAgYmFja2dyb3VuZDpyZWQ7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0SW1hZ2Vze1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAvKiAgYmFja2dyb3VuZDpibHVlOyovXHJcbiAgICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLnByb2plY3RJbWFnZXMgaW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUlO1xyXG5cclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmltYWdlU2VsZWN0aW9ue1xyXG4gLyogICBiYWNrZ3JvdW5kOiB2aW9sZXQ7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTozJTtcclxuICAgIGhlaWdodDogMTBweDtcclxuXHJcblxyXG59XHJcbi5pbWFnZVNlbGVjdGlvbiAuYm94e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6MTAlO1xyXG59XHJcbi5ib3ggaW1ne1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcbi8qICAgIGJhY2tncm91bmQ6IHJlZDsqL1xyXG5cclxufVxyXG5cclxuLnByb2plY3REZXNjcmlwdGlvbntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOjUwJTtcclxuICAgIG1heC1oZWlnaHQ6NTAlO1xyXG4gLyogICBiYWNrZ3JvdW5kOnllbGxvdzsqL1xyXG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIFxyXG59XHJcbi5wcm9qZWN0RGVzY3JpcHRpb24gLnRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnByb2plY3REZXNjcmlwdGlvbntcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OjUwJTtcclxuICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAucHJvamVjdERlc2NyaXB0aW9uPmgxe1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnByb2plY3REZXRhaWxze1xyXG4gICAgICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 1866:
/*!************************************************************!*\
  !*** ./src/app/projects/projects.component.css?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "/*-----Projects----*/\r\n.flexBox{\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n   \r\n}\r\n.column{\r\n    position: relative;\r\n    float:left;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n.column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 5%;\r\n    border-radius: 3%;\r\n}\r\n.column>div>p{\r\n    border-radius:  40px;\r\n    border-top:  inset;\r\n    border-right:  inset;\r\n    position: absolute;\r\n    bottom:20%;\r\n    width: 80%;\r\n    background-color: rgba(128, 128, 128, 0.726);\r\n    text-align: center;\r\n    color:white;\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 7px;\r\n    font-weight: 600;\r\n    opacity: 5px;\r\n}\r\n/*----------zoom on hover------------*/\r\n.column>div>img,.column>div>p{\r\n    transition: transform .5s;\r\n  }\r\n.column>div>img:hover ,\r\n  .column>div>img:hover + p{\r\n    transform: scale(1.1);\r\n  }\r\n@media (max-width: 600px) {\r\n  .separator{\r\n    width:90%;\r\n    padding-top:0px;\r\n  }\r\n  .flexBox{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    \r\n     \r\n  }\r\n  .column{\r\n      min-width: 100%;\r\n      align-items: center;\r\n      padding: 0;\r\n      padding-top: 5px;\r\n  }\r\n  .column>div>img{\r\n      max-width: 90%;\r\n      max-height: 90%;\r\n      min-height: 5%;\r\n      min-width: 5%;\r\n  }\r\n  \r\n  .column>div>p{\r\n      max-width: 280px;\r\n      min-width: 100%;\r\n      text-align: center;\r\n      color:white;\r\n      padding-top:10px;\r\n      padding-bottom: 6px;\r\n      font-weight: 600;\r\n  }\r\n  }\r\n@media (width: 1920px) {\r\n  .column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 90%;\r\n \r\n/*\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    */\r\n  }\r\n\r\n}\r\n@media(max-width: 600px){\r\n  .column{\r\n    padding-top:6%;\r\n    padding-bottom: 6%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSx5QkFBeUI7RUFDM0I7QUFHQTs7SUFFRSxxQkFBcUI7RUFDdkI7QUFHRjtFQUNFO0lBQ0UsU0FBUztJQUNULGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1COzs7RUFHckI7RUFDQTtNQUNJLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjO01BQ2QsYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGdCQUFnQjtFQUNwQjtFQUNBO0FBRUE7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYzs7QUFFbEI7Ozs7S0FJSztFQUNIOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLVByb2plY3RzLS0tLSovXHJcbi5mbGV4Qm94e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYlO1xyXG4gICBcclxufVxyXG4uY29sdW1ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAyLjUlO1xyXG59XHJcbi5jb2x1bW4+ZGl2PmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuXHJcbi5jb2x1bW4+ZGl2PnB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAgNDBweDtcclxuICAgIGJvcmRlci10b3A6ICBpbnNldDtcclxuICAgIGJvcmRlci1yaWdodDogIGluc2V0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjIwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNzI2KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG9wYWNpdHk6IDVweDtcclxufVxyXG4vKi0tLS0tLS0tLS16b29tIG9uIGhvdmVyLS0tLS0tLS0tLS0tKi9cclxuLmNvbHVtbj5kaXY+aW1nLC5jb2x1bW4+ZGl2PnB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29sdW1uPmRpdj5pbWc6aG92ZXIgLFxyXG4gIC5jb2x1bW4+ZGl2PmltZzpob3ZlciArIHB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5cclxuICBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnNlcGFyYXRvcntcclxuICAgIHdpZHRoOjkwJTtcclxuICAgIHBhZGRpbmctdG9wOjBweDtcclxuICB9XHJcbiAgLmZsZXhCb3h7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgXHJcbiAgfVxyXG4gIC5jb2x1bW57XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgLmNvbHVtbj5kaXY+aW1ne1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgICBtaW4taGVpZ2h0OiA1JTtcclxuICAgICAgbWluLXdpZHRoOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbj5kaXY+cHtcclxuICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAod2lkdGg6IDE5MjBweCkge1xyXG4gIC5jb2x1bW4+ZGl2PmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuIFxyXG4vKlxyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgbWluLWhlaWdodDogNSU7XHJcblxyXG4gICAgKi9cclxuICB9XHJcblxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAuY29sdW1ue1xyXG4gICAgcGFkZGluZy10b3A6NiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNiU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 5133:
/*!*******************************************************!*\
  !*** ./src/app/about/about.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<div id=\"about\">\n  <p id=\"bigHi\">Hi!</p>\n  <p>Hi hi! This is intended to be an index web for the GitHub projects.\n  Just an idea to see the projects of GitHub in a different way and\n   do some web. This is one my first projects after Angular site apps, so feel free to criticize so I can make a better job.</p>\n <p>You can visit my GitHub directly here: <a href=\"https://github.com/wildVeli\" target=\"_blank\">https://github.com/wildVeli</a></p>\n</div>";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <!--<div class=\"perfildiv\">\n    <a href=\"https://github.com/wildVeli\" target=\"_blank\"><img src=\"assets/images/Zero.png\" /></a>\n    <p>wildVeli</p>\n  </div>-->\n  <link rel=\"icon\" href=\"./images/Zero.png\">\n  <meta charset=\"utf-8\">\n  <div>\n    <nav class=\"menu\">\n      <a routerLink=\"/programming\">PROGRAMMING</a>\n      <a routerLink=\"/blender\">BLENDER</a>\n      <a routerLink=\"/about\">ABOUT</a>\n    </nav>\n  </div>\n  <div class=\"separator\"></div>\n</div>\n<router-outlet></router-outlet>\n";

/***/ }),

/***/ 2306:
/*!*****************************************************************************!*\
  !*** ./src/app/blender/blender-card/blender-card.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"card !== undefined\" style=\"min-width:250px; min-height:100px;\">\n  <model-viewer alt={{card.name}} src={{card.glTF}} auto-rotate camera-controls></model-viewer>\n</div>\n<div *ngIf=\"movie !== undefined\">\n  <video controls width=\"250\">\n\n    <source src={{movie.url}} type=\"video/mp4\">\n\n    Sorry, your browser doesn't support embedded videos.\n  </video>\n</div>\n";

/***/ }),

/***/ 6923:
/*!***********************************************************!*\
  !*** ./src/app/blender/blender.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<div>\n  <nav class=\"menu\">\n    <a (click)=\"menuSelect('models')\">3D MODELS</a>\n    <a (click)=\"menuSelect('movies')\">MOVIES</a>\n  </nav>\n</div>\n<div class=\"columns\" *ngIf=\"option == 'models'\">\n  <h3>▼ Scroll down to see more ▼</h3>\n  <div *ngFor=\"let blenderCard of cards\">\n    <app-blender-card [card]=blenderCard></app-blender-card>\n  </div>\n</div>\n<div class=\"rows\" *ngIf=\"option == 'movies'\">\n  <div *ngFor=\"let blenderCardMovie of movies\">\n    <app-blender-card [movie]=blenderCardMovie></app-blender-card>\n  </div>\n</div>\n";

/***/ }),

/***/ 4515:
/*!***************************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"project\">\n  <div class=\"projectDetails\">\n    <div class=\"projectImages\">\n      <h1> {{name1}}</h1> \n      <div class=\"imageSelection\">\n        <div  class=\"box\" >\n        <!--\n          <div *ngFor=\"let projectImage of projectImages\">\n            <img src=\"../../assets/images/imgButton.png\" (click)=seImage(projectImage) alt=\"Project image\"/>\n          </div>\n        -->\n        </div>\n      </div>\n      <img src=\"../../assets/images/{{project.images[0]}}\" alt=\"Project image\"/>\n      \n    </div>\n    <div class=\"projectDescription\">\n      <h1>{{project.name}}</h1>\n      <p class=\"text\">{{project.description}} </p>\n      <br>\n      <p>\n          Link: <a href=\"{{project.link}}\" target=\"_blank\">{{project.link}}</a>\n      </p>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 5390:
/*!*************************************************************!*\
  !*** ./src/app/projects/projects.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"flexBox\">\n  <div *ngFor=\"let project of projects\">\n    <div class=\"column\">\n      <div routerLink=\"/details/{{project.name}}\">\n        <img src=\"assets/images/{{project.images[0]}}\" alt=\"Project image\" />\n        <p>{{project.name}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map