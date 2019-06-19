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

module.exports = "<div id=\"about\">\n  <p id=\"bigHi\">Hi!</p>\n  <p>Hi hi! This is intended to be an index web for the GitHub projects.\n  Just an idea to see the projects of GitHub in different way and\n   do some web, this is one my first proyects after Angular site apps so feel free to criticize so I can make a better job.\n    It's open source, so feel free to fork and use if you want to.</p>\n <p>You can visit my GitHub directly here: <a href=\"https://github.com/wildVeli\" target=\"_blank\">https://github.com/wildVeli</a></p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <link rel=\"icon\" href=\"./images/Zero.png\">\n  <meta charset=\"utf-8\">\n  <h1></h1>\n  <nav class=\"menu\">\n    <a routerLink=\"/projects\">PROJECTS</a>\n    <a routerLink=\"/about\">ABOUT</a>\n  </nav>\n  <div class=\"perfildiv\">\n    <a href=\"https://github.com/wildVeli\" target=\"_blank\"><img  src=\"assets/images/Zero.png\" /></a>\n    <p>wildVeli</p>\n  </div>\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-details/project-details.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-details/project-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n  <div class=\"projectDetails\">\n    <div class=\"projectImages\">\n      <h1> {{name1}}</h1> \n      <div class=\"imageSelection\">\n        <div  class=\"box\" >\n        <!--\n          <div *ngFor=\"let projectImage of projectImages\">\n            <img src=\"../../assets/images/imgButton.png\" (click)=seImage(projectImage) alt=\"Project image\"/>\n          </div>\n        -->\n        </div>\n      </div>\n      <img src=\"../../assets/images/{{project.images[0]}}\" alt=\"Project image\"/>\n      \n    </div>\n    <div class=\"projectDescription\">\n      <h1>{{project.name}}</h1>\n      <p class=\"text\">{{project.description}} </p>\n      <br>\n      <p>\n          Link: <a href=\"{{project.link}}\" target=\"_blank\">{{project.link}}</a>\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"separator\"></div>\n<div class=\"flexBox\">\n  <div *ngFor=\"let project of projects\">\n      <div class=\"column\">\n        <div routerLink=\"/details/{{project.name}}\">\n          <img src=\"assets/images/{{project.images[0]}}\" alt=\"Project image\" />\n          <p>{{project.name}}</p>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-------------------about section-----------------------*/\r\n#about{\r\n    /*display:none;*/\r\n   /* background: brown;*/\r\n    margin-top: 60px;\r\n    margin-left: 20%;\r\n    margin-right: 20%;\r\n    font-size: 160%;\r\n    border-style:solid;\r\n    border-color:rgb(58, 58, 58);\r\n    border-bottom-width: 2px;\r\n    border-top-width: 2px;\r\n    border-left-width: 0;\r\n    border-right: 0;\r\n    padding-bottom: 30px;\r\n    \r\n  }\r\n#projects{\r\n    display:none;\r\n  }\r\n#bigHi{\r\n  \r\n    font-size: 50px;\r\n    text-align: center;\r\n  }\r\n@media (max-width: 600px) {\r\n    #about{\r\n      /*display:none;*/\r\n     /* background: brown;*/\r\n      margin:0 0 0 0;\r\n      font-size: 100%;\r\n      border-right: 0;\r\n      padding-bottom: 30px;\r\n      max-width: 90%;\r\n      text-align: center;\r\n      margin:auto;\r\n      \r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQ7QUFDMUQ7SUFDSSxnQkFBZ0I7R0FDakIsc0JBQXNCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixvQkFBb0I7O0VBRXRCO0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDQTs7SUFFRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0E7SUFDRTtNQUNFLGdCQUFnQjtLQUNqQixzQkFBc0I7TUFDckIsY0FBYztNQUNkLGVBQWU7TUFDZixlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsV0FBVzs7SUFFYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLWFib3V0IHNlY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiNhYm91dHtcclxuICAgIC8qZGlzcGxheTpub25lOyovXHJcbiAgIC8qIGJhY2tncm91bmQ6IGJyb3duOyovXHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgZm9udC1zaXplOiAxNjAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgI3Byb2plY3Rze1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gIH1cclxuICAjYmlnSGl7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgI2Fib3V0e1xyXG4gICAgICAvKmRpc3BsYXk6bm9uZTsqL1xyXG4gICAgIC8qIGJhY2tncm91bmQ6IGJyb3duOyovXHJcbiAgICAgIG1hcmdpbjowIDAgMCAwO1xyXG4gICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AboutComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");






const routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'details/:name', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"] },
    { path: '**', redirectTo: '/projects' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu>a{\r\n    transition: opacity .3s;\r\n    opacity: 0.6;\r\n    text-decoration: none; /* no underline */\r\n    font-size: 18px; \r\n    font-weight: 600;\r\n    color:rgb(90, 90, 90);\r\n    margin: 0;\r\n    flex: 1 1 auto;\r\n}\r\n .menu {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n  max-height: 30px;\r\n  margin-left: 75%;\r\n  margin-right: 10%;\r\n  margin-top: 1%; \r\n }\r\n .menu>a:hover{\r\n    opacity: 1.0;\r\n\r\n}\r\n .perfildiv{\r\n    padding: 5px;\r\n    color:rgb(90, 90, 90);\r\n  /*  background: cyan;*/\r\n}\r\n .perfildiv>img, .perfildiv>p{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n .perfildiv a>img{\r\n  width:5%;\r\n  height: 5%;\r\n}\r\n .perfildiv>p{\r\n  text-align: center;\r\n  font-size: 30px;\r\n /* background: blue;*/\r\n}\r\n @media (max-width: 600px) {\r\n  .menu {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-items: center;\r\n    max-height: 30px;\r\n    margin:auto;\r\n    font-size: 100%;\r\n }\r\n\r\n\r\n .perfildiv a>img{\r\n    padding-top:20px;\r\n    width:30%;\r\n    height: 30%;\r\n  }\r\n  .perfildiv>p{\r\n    text-align: center;\r\n    font-size: 20px;\r\n  }\r\n}\r\n @media (max-width: 284px) {\r\n  .menu>a{\r\n    margin: auto;\r\n }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHFCQUFxQixFQUFFLGlCQUFpQjtJQUN4QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsY0FBYztBQUNsQjtDQUNDO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztDQUNmO0NBRUQ7SUFDSSxZQUFZOztBQUVoQjtDQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtFQUN2QixzQkFBc0I7QUFDeEI7Q0FDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7Q0FDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7Q0FDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCLHFCQUFxQjtBQUN0QjtDQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7Q0FDbEI7OztDQUdBO0lBQ0csZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxXQUFXO0VBQ2I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0FBQ0Y7Q0FDQTtFQUNFO0lBQ0UsWUFBWTtDQUNmO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51PmF7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogbm8gdW5kZXJsaW5lICovXHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOnJnYig5MCwgOTAsIDkwKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiAubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgbWFyZ2luLXRvcDogMSU7IFxyXG4gfVxyXG5cclxuLm1lbnU+YTpob3ZlcntcclxuICAgIG9wYWNpdHk6IDEuMDtcclxuXHJcbn1cclxuXHJcbi5wZXJmaWxkaXZ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjpyZ2IoOTAsIDkwLCA5MCk7XHJcbiAgLyogIGJhY2tncm91bmQ6IGN5YW47Ki9cclxufVxyXG4ucGVyZmlsZGl2PmltZywgLnBlcmZpbGRpdj5we1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ucGVyZmlsZGl2IGE+aW1ne1xyXG4gIHdpZHRoOjUlO1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuLnBlcmZpbGRpdj5we1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAvKiBiYWNrZ3JvdW5kOiBibHVlOyovXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiB9XHJcblxyXG5cclxuIC5wZXJmaWxkaXYgYT5pbWd7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgd2lkdGg6MzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgfVxyXG4gIC5wZXJmaWxkaXY+cHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDI4NHB4KSB7XHJcbiAgLm1lbnU+YXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'wildVeli Projects Index';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");








let AppModule = class AppModule {
};
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
const PROJECTS = [
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

module.exports = ".projectDetails{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  /*  background:red;*/\r\n    margin-bottom: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 60px;\r\n\r\n    border-style:solid;\r\n    border-color:rgb(58, 58, 58);\r\n    border-bottom-width: 2px;\r\n    border-top-width: 2px;\r\n    border-left-width: 0;\r\n    border-right: 0;\r\n\r\n    padding: 50px;\r\n    width: 70%;\r\n}\r\n\r\n.projectImages{\r\n    position:relative;\r\n    flex: 1 1 auto;\r\n  /*  background:blue;*/\r\n    max-width: 50%;\r\n}\r\n\r\n.projectImages img{\r\n    display: block;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    margin: auto;\r\n}\r\n\r\n.imageSelection{\r\n /*   background: violet; */\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom:3%;\r\n    height: 10px;\r\n\r\n\r\n}\r\n\r\n.imageSelection .box{\r\n    margin: auto;\r\n    display:flex;\r\n    width:10%;\r\n}\r\n\r\n.box img{\r\n    flex: 0 1 auto;\r\n/*    background: red;*/\r\n\r\n}\r\n\r\n.projectDescription{\r\n    flex: 1 1 auto;\r\n    max-width:50%;\r\n    max-height:50%;\r\n /*   background:yellow;*/\r\n    text-align: initial;\r\n    font-size: 150%;\r\n    \r\n}\r\n\r\n.projectDescription .text{\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .projectDescription{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:50%;\r\n        min-width:100%;\r\n        text-align: center;\r\n        font-size: 80%;\r\n        \r\n    }\r\n    .projectDescription>h1{\r\n        flex: 1 1 auto;\r\n        max-width:100%;\r\n        max-height:100%;\r\n        text-align: center;\r\n        font-size: 150%;\r\n        \r\n    }\r\n    .projectDetails{\r\n        min-width: 90%;\r\n        max-width: 300px;\r\n        padding: 0px;\r\n        margin-top: 0px;\r\n        \r\n    }\r\n    \r\n    \r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCLG9CQUFvQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEIscUJBQXFCO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjOztJQUVkLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTs7O0FBR2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCLHVCQUF1Qjs7QUFFdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7Q0FDakIsd0JBQXdCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLGlDQUFpQzs7QUFFckM7O0FBQ0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsY0FBYztRQUNkLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYzs7SUFFbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixlQUFlOztJQUVuQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osZUFBZTs7SUFFbkI7OztFQUdGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3REZXRhaWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvKiAgYmFja2dyb3VuZDpyZWQ7Ki9cclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcblxyXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOnJnYig1OCwgNTgsIDU4KTtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG5cclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucHJvamVjdEltYWdlc3tcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgLyogIGJhY2tncm91bmQ6Ymx1ZTsqL1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0SW1hZ2VzIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1JTtcclxuXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5pbWFnZVNlbGVjdGlvbntcclxuIC8qICAgYmFja2dyb3VuZDogdmlvbGV0OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206MyU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG5cclxufVxyXG4uaW1hZ2VTZWxlY3Rpb24gLmJveHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIHdpZHRoOjEwJTtcclxufVxyXG4uYm94IGltZ3tcclxuICAgIGZsZXg6IDAgMSBhdXRvO1xyXG4vKiAgICBiYWNrZ3JvdW5kOiByZWQ7Ki9cclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0RGVzY3JpcHRpb257XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1heC13aWR0aDo1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OjUwJTtcclxuIC8qICAgYmFja2dyb3VuZDp5ZWxsb3c7Ki9cclxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBcclxufVxyXG4ucHJvamVjdERlc2NyaXB0aW9uIC50ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5wcm9qZWN0RGVzY3JpcHRpb257XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDo1MCU7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnByb2plY3REZXNjcmlwdGlvbj5oMXtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5wcm9qZWN0RGV0YWlsc3tcclxuICAgICAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-projects */ "./src/app/mock-projects.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ProjectService = class ProjectService {
    constructor() { }
    getProjects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"]);
    }
    getProjectByName(name) {
        return _mock_projects__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"].find(project => project.name === name);
    }
};
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProjectService);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*-----Projects----*/\r\n.separator{\r\n  width:80%;\r\n  border-style:solid;\r\n  border-color:rgb(58, 58, 58);\r\n  border-bottom-width: 2px;\r\n  border-top-width: 0;\r\n  border-left-width: 0;\r\n  border-right: 0;\r\n  margin:auto;\r\n  padding-top:30px;\r\n}\r\n.flexBox{\r\n    padding-left: 6%;\r\n    padding-right: 6%;\r\n   \r\n}\r\n.column{\r\n    position: relative;\r\n    float:left;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n.column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 5%;\r\n    border-radius: 3%;\r\n}\r\n.column>div>p{\r\n    border-radius:  40px;\r\n    border-top:  inset;\r\n    border-right:  inset;\r\n    position: absolute;\r\n    bottom:20%;\r\n    width: 80%;\r\n    background-color: rgba(128, 128, 128, 0.726);\r\n    text-align: center;\r\n    color:white;\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 7px;\r\n    font-weight: 600;\r\n    opacity: 5px;\r\n}\r\n/*----------zoom on hover------------*/\r\n.column>div>img,.column>div>p{\r\n    transition: -webkit-transform .5s;\r\n    transition: transform .5s;\r\n    transition: transform .5s, -webkit-transform .5s;\r\n  }\r\n.column>div>img:hover ,\r\n  .column>div>img:hover + p{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n@media (max-width: 600px) {\r\n  .separator{\r\n    width:90%;\r\n    padding-top:0px;\r\n  }\r\n  .flexBox{\r\n    display:flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    \r\n     \r\n  }\r\n  .column{\r\n      min-width: 100%;\r\n      align-items: center;\r\n      padding: 0;\r\n      padding-top: 5px;\r\n  }\r\n  .column>div>img{\r\n      max-width: 90%;\r\n      max-height: 90%;\r\n      min-height: 5%;\r\n      min-width: 5%;\r\n  }\r\n  \r\n  .column>div>p{\r\n      max-width: 280px;\r\n      min-width: 100%;\r\n      text-align: center;\r\n      color:white;\r\n      padding-top:10px;\r\n      padding-bottom: 6px;\r\n      font-weight: 600;\r\n  }\r\n  }\r\n@media (width: 1920px) {\r\n  .column>div>img{\r\n    display: block;\r\n    margin:auto;\r\n    max-width: 90%;\r\n    max-height: 200px;\r\n    min-height: 230px;\r\n    min-width: 90%;\r\n \r\n/*\r\n    max-height: 90%;\r\n    min-height: 5%;\r\n\r\n    */\r\n  }\r\n\r\n}\r\n@media(max-width: 600px){\r\n  .column{\r\n    padding-top:6%;\r\n    padding-bottom: 6%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSxpQ0FBeUI7SUFBekIseUJBQXlCO0lBQXpCLGdEQUF5QjtFQUMzQjtBQUdBOztJQUVFLDZCQUFxQjtZQUFyQixxQkFBcUI7RUFDdkI7QUFHRjtFQUNFO0lBQ0UsU0FBUztJQUNULGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1COzs7RUFHckI7RUFDQTtNQUNJLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjtFQUNBO01BQ0ksY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjO01BQ2QsYUFBYTtFQUNqQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGdCQUFnQjtFQUNwQjtFQUNBO0FBRUE7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsY0FBYzs7QUFFbEI7Ozs7S0FJSztFQUNIOztBQUVGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tUHJvamVjdHMtLS0tKi9cclxuLnNlcGFyYXRvcntcclxuICB3aWR0aDo4MCU7XHJcbiAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjpyZ2IoNTgsIDU4LCA1OCk7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuLmZsZXhCb3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNiU7XHJcbiAgIFxyXG59XHJcbi5jb2x1bW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHBhZGRpbmc6IDIuNSU7XHJcbn1cclxuLmNvbHVtbj5kaXY+aW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxuICAgIG1pbi13aWR0aDogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcclxufVxyXG5cclxuLmNvbHVtbj5kaXY+cHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICA0MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogIGluc2V0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAgaW5zZXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206MjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC43MjYpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgb3BhY2l0eTogNXB4O1xyXG59XHJcbi8qLS0tLS0tLS0tLXpvb20gb24gaG92ZXItLS0tLS0tLS0tLS0qL1xyXG4uY29sdW1uPmRpdj5pbWcsLmNvbHVtbj5kaXY+cHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jb2x1bW4+ZGl2PmltZzpob3ZlciAsXHJcbiAgLmNvbHVtbj5kaXY+aW1nOmhvdmVyICsgcHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcblxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuc2VwYXJhdG9ye1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgcGFkZGluZy10b3A6MHB4O1xyXG4gIH1cclxuICAuZmxleEJveHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICBcclxuICB9XHJcbiAgLmNvbHVtbntcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIH1cclxuICAuY29sdW1uPmRpdj5pbWd7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUlO1xyXG4gICAgICBtaW4td2lkdGg6IDUlO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uPmRpdj5we1xyXG4gICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhICh3aWR0aDogMTkyMHB4KSB7XHJcbiAgLmNvbHVtbj5kaXY+aW1ne1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gXHJcbi8qXHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1JTtcclxuXHJcbiAgICAqL1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIC5jb2x1bW57XHJcbiAgICBwYWRkaW5nLXRvcDo2JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2JTtcclxuICB9XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");



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
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
], ProjectsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map