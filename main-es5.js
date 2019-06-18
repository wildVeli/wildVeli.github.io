(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\">\n  <p id=\"bigHi\">Hi!</p>\n  <p>Hi hi! This is intended to be an index web for the GitHub projects.\n  Just an idea to see the projects of GitHub in different way and\n   do some web, this is one my first proyects after Angular site apps so feel free to criticize so I can make a better job.\n    It's open source, so feel free to fork and use if you want to.</p>\n <p>You can visit my GitHub directly here: <a href=\"https://github.com/wildVeli\">https://github.com/wildVeli</a></p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <link rel=\"icon\" href=\"./images/Zero.png\">\n  <meta charset=\"utf-8\">\n  <h1></h1>\n  <nav class=\"menu\">\n    <a routerLink=\"/projects\">PROJECTS</a>\n    <a routerLink=\"/about\">ABOUT</a>\n  </nav>\n  <div class=\"perfildiv\">\n    <a href=\"https://github.com/wildVeli\"><img  src=\"assets/images/Zero.png\" /></a>\n    <p>wildVeli</p>\n  </div>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-details/project-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-details/project-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n  <div class=\"projectDetails\">\n    <div class=\"projectImages\">\n      <h1> {{name1}}</h1> \n      <div class=\"imageSelection\">\n        <div  class=\"box\" >\n        <!--\n          <div *ngFor=\"let projectImage of projectImages\">\n            <img src=\"../../assets/images/imgButton.png\" (click)=seImage(projectImage) alt=\"Project image\"/>\n          </div>\n        -->\n        </div>\n      </div>\n      <img src=\"../../assets/images/{{project.images[0]}}\" alt=\"Project image\"/>\n      \n    </div>\n    <div class=\"projectDescription\">\n      <h1>{{project.name}}</h1>\n      <p class=\"text\">{{project.description}} </p>\n      <br>\n      <p>\n          Link: <a href=\"{{project.link}}\">{{project.link}}</a>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"separator\"></div>\n<div class=\"row\">\n  <div *ngFor=\"let project of projects\">\n      <div class=\"column\">\n        <div routerLink=\"/details/{{project.name}}\">\n          <img src=\"assets/images/{{project.images[0]}}\" alt=\"Project image\" />\n          <p>{{project.name}}</p>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-------------------about section-----------------------*/\r\n#about{\r\n    /*display:none;*/\r\n   /* background: brown;*/\r\n    margin-top: 60px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 160%;\r\n    border-style:solid;\r\n    border-color:rgb(58, 58, 58);\r\n    border-bottom-width: 2px;\r\n    border-top-width: 2px;\r\n    border-left-width: 0;\r\n    border-right: 0;\r\n    padding-bottom: 30px;\r\n    \r\n  }\r\n#projects{\r\n    display:none;\r\n  }\r\n#bigHi{\r\n  \r\n    font-size: 50px;\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7QUFDMUQ7SUFDSSxnQkFBZ0I7R0FDakIsc0JBQXNCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixvQkFBb0I7O0VBRXRCO0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDQTs7SUFFRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLWFib3V0IHNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNhYm91dHtcclxuICAgIC8qZGlzcGxheTpub25lOyovXHJcbiAgIC8qIGJhY2tncm91bmQ6IGJyb3duOyovXHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAxNjAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgI3Byb2plY3Rze1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAjYmlnSGl7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");






var routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'details/:name', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu>a{\r\n    margin: 30px;\r\n    transition: opacity .3s;\r\n    opacity: 0.6;\r\n    text-decoration: none; /* no underline */\r\n    font-size: 18px; \r\n    font-weight: 600;\r\n    color:rgb(90, 90, 90);\r\n}\r\n .menu {\r\n    margin-left: 75%;\r\n    margin-right: 150px;\r\n    margin-top: 1%;\r\n    font-size: 22px;\r\n }\r\n .menu>a:hover{\r\n    opacity: 1.0;\r\n\r\n}\r\n .perfildiv{\r\n    padding: 5px;\r\n    color:rgb(90, 90, 90);\r\n  /*  background: cyan;*/\r\n}\r\n .perfildiv>img, .perfildiv>p{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n .perfildiv a>img{\r\n  width:5%;\r\n  height: 5%;\r\n}\r\n .perfildiv>p{\r\n  text-align: center;\r\n  font-size: 30px;\r\n /* background: blue;*/\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUIsRUFBRSxpQkFBaUI7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7Q0FDQztJQUNHLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGVBQWU7Q0FDbEI7Q0FDRDtJQUNJLFlBQVk7O0FBRWhCO0NBR0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtDQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtDQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7QUFDWjtDQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEIscUJBQXFCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudT5he1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IC8qIG5vIHVuZGVybGluZSAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjpyZ2IoOTAsIDkwLCA5MCk7XHJcbn1cclxuIC5tZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiB9XHJcbi5tZW51PmE6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcblxyXG59XHJcblxyXG5cclxuLnBlcmZpbGRpdntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGNvbG9yOnJnYig5MCwgOTAsIDkwKTtcclxuICAvKiAgYmFja2dyb3VuZDogY3lhbjsqL1xyXG59XHJcbi5wZXJmaWxkaXY+aW1nLCAucGVyZmlsZGl2PnB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5wZXJmaWxkaXYgYT5pbWd7XHJcbiAgd2lkdGg6NSU7XHJcbiAgaGVpZ2h0OiA1JTtcclxufVxyXG4ucGVyZmlsZGl2PnB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuIC8qIGJhY2tncm91bmQ6IGJsdWU7Ki9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wildVeli Projects Index';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock-projects.ts":
/*!**********************************!*\
  !*** ./src/app/mock-projects.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [
    { name: 'RepartidoresWebAplication', images: ['RepartidoresWebAplication1.PNG', 'RepartidoresWebAplication2.PNG', 'RepartidoresWebAplication3.PNG'], description: "This is a java server made for GestionRepartidores client," +
            "it uses a REST API system for exchange data with the client side", link: "https://github.com/wildVeli/RepartidoresWebAplication" },
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

/***/ "./src/app/project-details/project-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectDetails{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  /*  background:red;*/\r\n    margin-bottom: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 60px;\r\n\r\n    border-style:solid;\r\n    border-color:rgb(58, 58, 58);\r\n    border-bottom-width: 2px;\r\n    border-top-width: 2px;\r\n    border-left-width: 0;\r\n    border-right: 0;\r\n\r\n    padding: 50px;\r\n    width: 70%;\r\n}\r\n\r\n.projectImages{\r\n    position:relative;\r\n    flex: 1 1 auto;\r\n  /*  background:blue;*/\r\n    max-width: 50%;\r\n}\r\n\r\n.projectImages img{\r\n    display: block;\r\n    max-width:70%;\r\n    max-height:70%;\r\n    margin: auto;\r\n    \r\n}\r\n\r\n.imageSelection{\r\n /*   background: violet; */\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom:3%;\r\n    height: 10px;\r\n\r\n\r\n}\r\n\r\n.imageSelection .box{\r\n    margin: auto;\r\n    display:flex;\r\n    width:10%;\r\n}\r\n\r\n.box img{\r\n    flex: 0 1 auto;\r\n/*    background: red;*/\r\n\r\n}\r\n\r\n.projectDescription{\r\n    flex: 1 1 auto;\r\n    max-width:50%;\r\n    max-height:50%;\r\n /*   background:yellow;*/\r\n    text-align: initial;\r\n    font-size: 150%;\r\n    \r\n}\r\n\r\n.projectDescription .text{\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekIsb0JBQW9CO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlOztJQUVmLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQixxQkFBcUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7O0FBRWhCOztBQUVBO0NBQ0MsMEJBQTBCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7OztBQUdoQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUNBO0lBQ0ksY0FBYztBQUNsQix1QkFBdUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0NBQ2pCLHdCQUF3QjtJQUNyQixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxpQ0FBaUM7O0FBRXJDIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3REZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiAgYmFja2dyb3VuZDpyZWQ7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucHJvamVjdEltYWdlc3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgLyogIGJhY2tncm91bmQ6Ymx1ZTsqL1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0SW1hZ2VzIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOjcwJTtcclxuICAgIG1heC1oZWlnaHQ6NzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5pbWFnZVNlbGVjdGlvbntcclxuIC8qICAgYmFja2dyb3VuZDogdmlvbGV0OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206MyU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG5cclxufVxyXG4uaW1hZ2VTZWxlY3Rpb24gLmJveHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOjEwJTtcclxufVxyXG4uYm94IGltZ3tcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4vKiAgICBiYWNrZ3JvdW5kOiByZWQ7Ki9cclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0RGVzY3JpcHRpb257XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1heC13aWR0aDo1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OjUwJTtcclxuIC8qICAgYmFja2dyb3VuZDp5ZWxsb3c7Ki9cclxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBcclxufVxyXG4ucHJvamVjdERlc2NyaXB0aW9uIC50ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");





var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(location, route, projectService) {
        this.location = location;
        this.route = route;
        this.projectService = projectService;
        this.projectImages = ['p.jpg', 'p.jpg', 'p.jpg', 'p.jpg'];
        this.actualImage = '';
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectDetailsComponent.prototype.getProject = function () {
        var name = this.route.snapshot.paramMap.get('name');
        this.project = this.projectService.getProjectByName(name);
        this.projectImages = this.project.images;
        this.actualImage = "../../assets/images/{{project.images[0]}}";
    };
    ProjectDetailsComponent.prototype.seImage = function (image) {
    };
    ProjectDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! raw-loader!./project-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-projects */ "./src/app/mock-projects.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ProjectService = /** @class */ (function () {
    function ProjectService() {
    }
    ProjectService.prototype.getProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"]);
    };
    ProjectService.prototype.getProjectByName = function (name) {
        return _mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"].find(function (project) { return project.name === name; });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----Projects----*/\r\n.separator{\r\n  width:80%;\r\n  border-style:solid;\r\n  border-color:rgb(58, 58, 58);\r\n  border-bottom-width: 2px;\r\n  border-top-width: 0;\r\n  border-left-width: 0;\r\n  border-right: 0;\r\n  margin:auto;\r\n  padding-top:30px;\r\n}\r\n.row{\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n   \r\n}\r\n.column{\r\n    position: relative;\r\n    float:left;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n.column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 310px;\r\n    border-radius: 3%;\r\n}\r\n.column>div>p{\r\n    border-radius:  40px;\r\n    border-top:  inset;\r\n    border-right:  inset;\r\n    position: absolute;\r\n    bottom:20%;\r\n    width: 80%;\r\n    background-color: grey;\r\n    text-align: center;\r\n    color:white;\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 3px;\r\n    font-weight: 600;\r\n}\r\n/*----------zoom on hover------------*/\r\n.column>div>img,.column>div>p{\r\n    transition: -webkit-transform .5s;\r\n    transition: transform .5s;\r\n    transition: transform .5s, -webkit-transform .5s;\r\n  }\r\n.column>div>img:hover ,\r\n  .column>div>img:hover + p{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUI7RUFDM0I7QUFHQTs7SUFFRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS1Qcm9qZWN0cy0tLS0qL1xyXG4uc2VwYXJhdG9ye1xyXG4gIHdpZHRoOjgwJTtcclxuICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICBib3JkZXItbGVmdC13aWR0aDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZy10b3A6MzBweDtcclxufVxyXG4ucm93e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYlO1xyXG4gICBcclxufVxyXG4uY29sdW1ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAyLjUlO1xyXG59XHJcbi5jb2x1bW4+ZGl2PmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuXHJcbi5jb2x1bW4+ZGl2PnB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAgNDBweDtcclxuICAgIGJvcmRlci10b3A6ICBpbnNldDtcclxuICAgIGJvcmRlci1yaWdodDogIGluc2V0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjIwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi8qLS0tLS0tLS0tLXpvb20gb24gaG92ZXItLS0tLS0tLS0tLS0qL1xyXG4uY29sdW1uPmRpdj5pbWcsLmNvbHVtbj5kaXY+cHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb2x1bW4+ZGl2PmltZzpob3ZlciAsXHJcbiAgLmNvbHVtbj5kaXY+aW1nOmhvdmVyICsgcHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\RepositoriosGitHub\AngularGitIndex\AngularGitIndex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map