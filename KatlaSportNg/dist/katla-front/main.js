(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hive-management/forms/hive-form.component */ "./src/app/hive-management/forms/hive-form.component.ts");
/* harmony import */ var _hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hive-management/forms/hive-section-form.component */ "./src/app/hive-management/forms/hive-section-form.component.ts");
/* harmony import */ var _hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hive-management/lists/hive-list.component */ "./src/app/hive-management/lists/hive-list.component.ts");
/* harmony import */ var _hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hive-management/lists/hive-section-list.component */ "./src/app/hive-management/lists/hive-section-list.component.ts");
/* harmony import */ var _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-management/forms/product-category-form.component */ "./src/app/product-management/forms/product-category-form.component.ts");
/* harmony import */ var _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-management/forms/product-form.component */ "./src/app/product-management/forms/product-form.component.ts");
/* harmony import */ var _product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-management/lists/product-category-list.component */ "./src/app/product-management/lists/product-category-list.component.ts");
/* harmony import */ var _product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-management/lists/product-category-product-list.component */ "./src/app/product-management/lists/product-category-product-list.component.ts");
/* harmony import */ var _product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-management/lists/product-list.component */ "./src/app/product-management/lists/product-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"] },
    { path: 'categories', component: _product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductCategoryListComponent"] },
    { path: 'category', component: _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryFormComponent"] },
    { path: 'category/:id', component: _product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_7__["ProductCategoryFormComponent"] },
    { path: 'category/:id/products', component: _product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductCategoryProductListComponent"] },
    { path: 'products', component: _product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_11__["ProductListComponent"] },
    { path: 'product/:id', component: _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"] },
    { path: 'category/:categoryId/product/:id', component: _product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ProductFormComponent"] },
    { path: 'hives', component: _hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_5__["HiveListComponent"] },
    { path: 'hive', component: _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__["HiveFormComponent"] },
    { path: 'hive/:id', component: _hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_3__["HiveFormComponent"] },
    { path: 'hive/:id/sections', component: _hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_6__["HiveSectionListComponent"] },
    { path: 'section/:id', component: _hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_4__["HiveSectionFormComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between\">\r\n  <div>\r\n    <a class=\"navbar-brand\" routerLink=\"/main\">\r\n      <span style=\"color: yellow; font-weight: bold; font-family: Arial, Helvetica, sans-serif; margin-right:0.1em; border: yellow solid 1px; padding: 6px;\">K</span>\r\n      <span style=\"margin-left: 5px;\">KatlaSport</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" style=\"margin-left: 100px; margin-bottom: 2px;\" id=\"navbarNavDropdown\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/categories\">Categories</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/products\">Products</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/hives\">Hives</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Product Management</a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item\" href=\"#\">Categories</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Products</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <form class=\"form-inline\">\r\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n  </form>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var app_hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/hive-management/forms/hive-form.component */ "./src/app/hive-management/forms/hive-form.component.ts");
/* harmony import */ var app_hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/hive-management/forms/hive-section-form.component */ "./src/app/hive-management/forms/hive-section-form.component.ts");
/* harmony import */ var app_hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/hive-management/lists/hive-list.component */ "./src/app/hive-management/lists/hive-list.component.ts");
/* harmony import */ var app_hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/hive-management/lists/hive-section-list.component */ "./src/app/hive-management/lists/hive-section-list.component.ts");
/* harmony import */ var app_hive_management_services_hive_section_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/hive-management/services/hive-section.service */ "./src/app/hive-management/services/hive-section.service.ts");
/* harmony import */ var app_hive_management_services_hive_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/hive-management/services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
/* harmony import */ var app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var app_product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/product-management/forms/product-category-form.component */ "./src/app/product-management/forms/product-category-form.component.ts");
/* harmony import */ var app_product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/product-management/forms/product-form.component */ "./src/app/product-management/forms/product-form.component.ts");
/* harmony import */ var app_product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/product-management/lists/product-category-list.component */ "./src/app/product-management/lists/product-category-list.component.ts");
/* harmony import */ var app_product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/product-management/lists/product-category-product-list.component */ "./src/app/product-management/lists/product-category-product-list.component.ts");
/* harmony import */ var app_product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/product-management/lists/product-list.component */ "./src/app/product-management/lists/product-list.component.ts");
/* harmony import */ var app_product_management_services_product_category_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/product-management/services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
/* harmony import */ var app_product_management_services_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/product-management/services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                app_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                app_product_management_lists_product_category_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductCategoryListComponent"],
                app_product_management_forms_product_category_form_component__WEBPACK_IMPORTED_MODULE_14__["ProductCategoryFormComponent"],
                app_product_management_lists_product_category_product_list_component__WEBPACK_IMPORTED_MODULE_17__["ProductCategoryProductListComponent"],
                app_product_management_lists_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"],
                app_product_management_forms_product_form_component__WEBPACK_IMPORTED_MODULE_15__["ProductFormComponent"],
                app_hive_management_lists_hive_list_component__WEBPACK_IMPORTED_MODULE_9__["HiveListComponent"],
                app_hive_management_forms_hive_form_component__WEBPACK_IMPORTED_MODULE_7__["HiveFormComponent"],
                app_hive_management_forms_hive_section_form_component__WEBPACK_IMPORTED_MODULE_8__["HiveSectionFormComponent"],
                app_hive_management_lists_hive_section_list_component__WEBPACK_IMPORTED_MODULE_10__["HiveSectionListComponent"],
            ],
            imports: [
                // Angular imports
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                // Application imports
                app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                // Angular providers
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
                // Application providers
                app_product_management_services_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"],
                app_product_management_services_product_category_service__WEBPACK_IMPORTED_MODULE_19__["ProductCategoryService"],
                app_hive_management_services_hive_service__WEBPACK_IMPORTED_MODULE_12__["HiveService"],
                app_hive_management_services_hive_section_service__WEBPACK_IMPORTED_MODULE_11__["HiveSectionService"],
            ],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #hiveForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"hive.id\" name=\"id\" #id=\"ngModel\"\r\n        readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Hive Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\" required [(ngModel)]=\"hive.name\"\r\n        name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Hive Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Hive Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\" id=\"lastUpdatedLabel\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required [(ngModel)]=\"hive.lastUpdated\"\r\n        name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hive-management/forms/hive-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-form.component.ts ***!
  \**************************************************************/
/*! exports provided: HiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveFormComponent", function() { return HiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
/* harmony import */ var _models_hive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/hive */ "./src/app/hive-management/models/hive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HiveFormComponent = /** @class */ (function () {
    function HiveFormComponent(route, router, hiveService) {
        this.route = route;
        this.router = router;
        this.hiveService = hiveService;
        this.hive = new _models_hive__WEBPACK_IMPORTED_MODULE_3__["Hive"](0, "", "", "", false, "");
        this.existed = false;
    }
    HiveFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.hiveService.getHive(p['id']).subscribe(function (h) { return _this.hive = h; });
            _this.existed = true;
        });
    };
    HiveFormComponent.prototype.navigateToHives = function () {
        this.router.navigate(['/hives']);
    };
    HiveFormComponent.prototype.onCancel = function () {
        this.navigateToHives();
    };
    HiveFormComponent.prototype.onSubmit = function () {
    };
    HiveFormComponent.prototype.onDelete = function () {
    };
    HiveFormComponent.prototype.onUndelete = function () {
    };
    HiveFormComponent.prototype.onPurge = function () {
    };
    HiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-form',
            template: __webpack_require__(/*! ./hive-form.component.html */ "./src/app/hive-management/forms/hive-form.component.html"),
            styles: [__webpack_require__(/*! ./hive-form.component.css */ "./src/app/hive-management/forms/hive-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_hive_service__WEBPACK_IMPORTED_MODULE_2__["HiveService"]])
    ], HiveFormComponent);
    return HiveFormComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  hive-section-form works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/hive-management/forms/hive-section-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hive-management/forms/hive-section-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: HiveSectionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionFormComponent", function() { return HiveSectionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HiveSectionFormComponent = /** @class */ (function () {
    function HiveSectionFormComponent() {
    }
    HiveSectionFormComponent.prototype.ngOnInit = function () {
    };
    HiveSectionFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-section-form',
            template: __webpack_require__(/*! ./hive-section-form.component.html */ "./src/app/hive-management/forms/hive-section-form.component.html"),
            styles: [__webpack_require__(/*! ./hive-section-form.component.css */ "./src/app/hive-management/forms/hive-section-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HiveSectionFormComponent);
    return HiveSectionFormComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive List</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <!-- TODO STEP 6 - Add Code and Name headers here. -->\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let hive of hives\">\r\n        <th scope=\"row\">{{hive.id}}</th>\r\n        <th scope=\"row\">{{hive.code}}</th>\r\n        <th scope=\"row\">{{hive.name}}</th>\r\n        <!-- TODO STEP 6 - Add code and name values here. -->\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Hive action buttons\" style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"!hive.isDeleted\" (click)=\"onDelete(hive.id)\">\r\n              <button type=\"button\" class=\"btn btn-danger\">Delete</button>\r\n            </div>\r\n            <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"View group\">\r\n              <button routerLink=\"/hive/{{hive.id}}/sections\" type=\"button\" class=\"btn btn-primary\">View sections</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/hive/{{hive.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n            <!-- TODO STEP 6 - Add buttons here. -->\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"New group\">\r\n      <button routerLink=\"/hive\" type=\"button\" class=\"btn btn-primary\">New hive</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/hive-management/lists/hive-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-list.component.ts ***!
  \**************************************************************/
/*! exports provided: HiveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveListComponent", function() { return HiveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HiveListComponent = /** @class */ (function () {
    function HiveListComponent(hiveService) {
        this.hiveService = hiveService;
    }
    HiveListComponent.prototype.ngOnInit = function () {
        this.getHives();
    };
    HiveListComponent.prototype.getHives = function () {
        var _this = this;
        this.hiveService.getHives().subscribe(function (h) { return _this.hives = h; });
    };
    HiveListComponent.prototype.onDelete = function (hiveId) {
        var hive = this.hives.find(function (h) { return h.id == hiveId; });
        this.hiveService.setHiveStatus(hiveId, true).subscribe(function (c) { return hive.isDeleted = true; });
    };
    HiveListComponent.prototype.onRestore = function (hiveId) {
    };
    HiveListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-list',
            template: __webpack_require__(/*! ./hive-list.component.html */ "./src/app/hive-management/lists/hive-list.component.html"),
            styles: [__webpack_require__(/*! ./hive-list.component.css */ "./src/app/hive-management/lists/hive-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hive_service__WEBPACK_IMPORTED_MODULE_1__["HiveService"]])
    ], HiveListComponent);
    return HiveListComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Hive Sections for Hive</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n    </thead>\r\n    <tbody>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Back group\">\r\n      <button routerLink=\"/hives\" type=\"button\" class=\"btn btn-primary\">Back</button>\r\n    </div>\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Add group\">\r\n      <button routerLink=\"/hive/{{this.hiveId}}\" type=\"button\" class=\"btn btn-primary\">Add hive section</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/hive-management/lists/hive-section-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hive-management/lists/hive-section-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: HiveSectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionListComponent", function() { return HiveSectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_hive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hive.service */ "./src/app/hive-management/services/hive.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiveSectionListComponent = /** @class */ (function () {
    function HiveSectionListComponent(route, router, hiveService) {
        this.route = route;
        this.router = router;
        this.hiveService = hiveService;
    }
    HiveSectionListComponent.prototype.ngOnInit = function () {
    };
    HiveSectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hive-section-list',
            template: __webpack_require__(/*! ./hive-section-list.component.html */ "./src/app/hive-management/lists/hive-section-list.component.html"),
            styles: [__webpack_require__(/*! ./hive-section-list.component.css */ "./src/app/hive-management/lists/hive-section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_hive_service__WEBPACK_IMPORTED_MODULE_2__["HiveService"]])
    ], HiveSectionListComponent);
    return HiveSectionListComponent;
}());



/***/ }),

/***/ "./src/app/hive-management/models/hive.ts":
/*!************************************************!*\
  !*** ./src/app/hive-management/models/hive.ts ***!
  \************************************************/
/*! exports provided: Hive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hive", function() { return Hive; });
var Hive = /** @class */ (function () {
    function Hive(id, name, code, address, isDeleted, lastUpdated) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return Hive;
}());



/***/ }),

/***/ "./src/app/hive-management/services/hive-section.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/hive-management/services/hive-section.service.ts ***!
  \******************************************************************/
/*! exports provided: HiveSectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveSectionService", function() { return HiveSectionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiveSectionService = /** @class */ (function () {
    function HiveSectionService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/sections/';
    }
    HiveSectionService.prototype.getHiveSections = function () {
        return this.http.get(this.url);
    };
    HiveSectionService.prototype.getHiveSection = function (hiveSectionId) {
        return this.http.get("" + this.url + hiveSectionId);
    };
    HiveSectionService.prototype.setHiveSectionStatus = function (hiveSectionId, deletedStatus) {
        return null;
    };
    HiveSectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HiveSectionService);
    return HiveSectionService;
}());



/***/ }),

/***/ "./src/app/hive-management/services/hive.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/hive-management/services/hive.service.ts ***!
  \**********************************************************/
/*! exports provided: HiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiveService", function() { return HiveService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HiveService = /** @class */ (function () {
    function HiveService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/hives/';
    }
    HiveService.prototype.getHives = function () {
        return this.http.get(this.url);
    };
    HiveService.prototype.getHive = function (hiveId) {
        return this.http.get("" + this.url + hiveId);
    };
    HiveService.prototype.getHiveSections = function (hiveId) {
        return null;
    };
    HiveService.prototype.addHive = function (hive) {
        return null;
    };
    HiveService.prototype.updateHive = function (hive) {
        return null;
    };
    HiveService.prototype.deleteHive = function (hiveId) {
        return null;
    };
    HiveService.prototype.setHiveStatus = function (hiveId, deletedStatus) {
        return null;
    };
    HiveService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HiveService);
    return HiveService;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-4\"><span style=\"color: blueviolet; font-weight: bold; font-family: Arial, Helvetica, sans-serif; margin-right:0.1em; border: blueviolet solid 1px; padding: 6px;\">K</span>KatlaSport</h1>\r\n  <p class=\"lead\">Welcome to KatlaSport management console.</p>\r\n  <hr class=\"my-4\">\r\n  <p>Please, click on \"Learn more\" button to get more information about this project.</p>\r\n  <a class=\"btn btn-primary btn-lg\" href=\"https://github.com/epam-lab/katla\" role=\"button\">Learn more</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Category Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #productCategoryForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"productCategory.id\" name=\"id\" #id=\"ngModel\"\r\n        readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Product Category Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\" required [(ngModel)]=\"productCategory.name\"\r\n        name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Product Category Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Product Category Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Product Category Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\" required [(ngModel)]=\"productCategory.code\"\r\n        name=\"code\" #code=\"ngModel\">\r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Product Category Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Product Category code must be at least 5 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\" id=\"descriptionLabel\">Product Category Description</label>\r\n      <textarea class=\"form-control\" id=\"description\" aria-describedby=\"descriptionLabel\" rows=\"4\" maxlength=\"300\" [(ngModel)]=\"productCategory.description\"\r\n        name=\"description\" #description=\"ngModel\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\" id=\"lastUpdatedLabel\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required [(ngModel)]=\"productCategory.lastUpdated\"\r\n        name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !productCategory.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && productCategory.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product-management/forms/product-category-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/product-management/forms/product-category-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryFormComponent", function() { return ProductCategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_product_category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-category */ "./src/app/product-management/models/product-category.ts");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCategoryFormComponent = /** @class */ (function () {
    function ProductCategoryFormComponent(route, router, productCategoryService) {
        this.route = route;
        this.router = router;
        this.productCategoryService = productCategoryService;
        this.productCategory = new _models_product_category__WEBPACK_IMPORTED_MODULE_2__["ProductCategory"](0, "My New Category", "CATE1", "Category description", false, "");
        this.existed = false;
    }
    ProductCategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            if (p['id'] === undefined)
                return;
            _this.productCategoryService.getProductCategory(p['id']).subscribe(function (c) { return _this.productCategory = c; });
            _this.existed = true;
        });
    };
    ProductCategoryFormComponent.prototype.navigateToCategories = function () {
        this.router.navigate(['/categories']);
    };
    ProductCategoryFormComponent.prototype.onCancel = function () {
        this.navigateToCategories();
    };
    ProductCategoryFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.productCategoryService.updateProductCategory(this.productCategory).subscribe(function (c) { return _this.navigateToCategories(); });
        }
        else {
            this.productCategoryService.addProductCategory(this.productCategory).subscribe(function (c) { return _this.navigateToCategories(); });
        }
    };
    ProductCategoryFormComponent.prototype.onDelete = function () {
        var _this = this;
        this.productCategoryService.setProductCategoryStatus(this.productCategory.id, true).subscribe(function (c) { return _this.productCategory.isDeleted = true; });
    };
    ProductCategoryFormComponent.prototype.onUndelete = function () {
        var _this = this;
        this.productCategoryService.setProductCategoryStatus(this.productCategory.id, false).subscribe(function (c) { return _this.productCategory.isDeleted = false; });
    };
    ProductCategoryFormComponent.prototype.onPurge = function () {
        var _this = this;
        this.productCategoryService.deleteProductCategory(this.productCategory.id).subscribe(function (c) { return _this.navigateToCategories(); });
    };
    ProductCategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-form',
            template: __webpack_require__(/*! ./product-category-form.component.html */ "./src/app/product-management/forms/product-category-form.component.html"),
            styles: [__webpack_require__(/*! ./product-category-form.component.css */ "./src/app/product-management/forms/product-category-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"]])
    ], ProductCategoryFormComponent);
    return ProductCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Editor</h2>\r\n  <form (ngSubmit)=\"onSubmit()\" #productEditorForm=\"ngForm\">\r\n    <div class=\"form-group\" *ngIf=\"existed\">\r\n      <label for=\"idLabel\">ID</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"id\" aria-describedby=\"idLabel\" [(ngModel)]=\"product.id\" name=\"id\" #id=\"ngModel\"\r\n        readonly>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\" id=\"nameLabel\">Product Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameLabel\" minlength=\"4\" maxlength=\"60\" required [(ngModel)]=\"product.name\"\r\n        name=\"name\" #name=\"ngModel\">\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">Product Name is required.</div>\r\n        <div *ngIf=\"name.errors.minlength\">Product Name must be at least 4 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"code\" id=\"codeLabel\">Product Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"code\" aria-describedby=\"codeLabel\" minlength=\"5\" maxlength=\"5\" required [(ngModel)]=\"product.code\"\r\n        name=\"code\" #code=\"ngModel\">\r\n      <div *ngIf=\"code.invalid && (code.dirty || code.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"code.errors.required\">Product Code is required.</div>\r\n        <div *ngIf=\"code.errors.minlength\">Product Code must be at least 5 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"category\" id=\"categoryLabel\">Product Category</label>\r\n      <select class=\"custom-select\" [(ngModel)]=\"product.categoryId\" id=\"category\" aria-describedby=\"categoryLabel\" #category=\"ngModel\"\r\n        [ngModelOptions]=\"{standalone: true}\">\r\n        <option *ngFor=\"let category of productCategories\" [ngValue]=\"category.id\">{{category.name}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"description\" id=\"descriptionLabel\">Product Description</label>\r\n      <textarea class=\"form-control\" id=\"description\" aria-describedby=\"descriptionLabel\" rows=\"4\" maxlength=\"300\" [(ngModel)]=\"product.description\"\r\n        name=\"description\" #description=\"ngModel\">\r\n      </textarea>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"manufacturerCode\" id=\"manufacturerCodeLabel\">Manufacturer Code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"manufacturerCode\" aria-describedby=\"manufacturerCodeLabel\" minlength=\"4\" maxlength=\"10\"\r\n        required [(ngModel)]=\"product.manufacturerCode\" name=\"manufacturerCode\" #manufacturerCode=\"ngModel\">\r\n      <div *ngIf=\"manufacturerCode.invalid && (manufacturerCode.dirty || manufacturerCode.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"manufacturerCode.errors.required\">Manufacturer Code is required.</div>\r\n        <div *ngIf=\"manufacturerCode.errors.minlength\">Manufacturer Code must be at least 10 characters long.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"price\" id=\"priceLabel\">Product Price</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"price\" aria-describedby=\"priceLabel\" required [(ngModel)]=\"product.price\" name=\"price\"\r\n        #price=\"ngModel\">\r\n      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"price.errors.required\">Product Price is required.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" *ngIf='existed'>\r\n      <label for=\"lastUpdated\">Last Update</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastUpdated\" aria-describedby=\"lastUpdatedLabel\" required [(ngModel)]=\"product.lastUpdated\"\r\n        name=\"lastUpdated\" #lastUpdated=\"ngModel\" readonly>\r\n    </div>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Cancel group\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Back</button>\r\n      </div>\r\n      <div class=\"btn-group mr-4\" role=\"group\" aria-label=\"Save group\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n      </div>\r\n      <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"existed && !product.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onDelete()\">Delete</button>\r\n      </div>\r\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Purge group\" *ngIf=\"existed && product.isDeleted\">\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onUndelete()\">Undelete</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onPurge()\">Purge</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/forms/product-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-management/forms/product-form.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product */ "./src/app/product-management/models/product.ts");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(route, router, productService, productCategoryService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.productCategoryService = productCategoryService;
        this.product = new _models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](0, "", "", 0, "", "", 0, false, "");
        this.existed = false;
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCategoryService.getProductCategories().subscribe(function (c) { return _this.productCategories = c; });
        this.route.params.subscribe(function (p) {
            _this.categoryId = p['categoryId'];
            if (p['id'] === undefined)
                return;
            _this.productService.getProduct(p['id']).subscribe(function (c) { return _this.product = c; });
            _this.existed = true;
        });
    };
    ProductFormComponent.prototype.navigateTo = function () {
        if (this.categoryId === undefined) {
            this.router.navigate(['/products']);
        }
        else {
            this.router.navigate(["/category/" + this.categoryId + "/products"]);
        }
    };
    ProductFormComponent.prototype.onCancel = function () {
        this.navigateTo();
    };
    ProductFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.existed) {
            this.productService.updateProduct(this.product).subscribe(function (p) { return _this.navigateTo(); });
        }
        else {
            this.product.сategoryId = this.categoryId;
            this.productService.addProduct(this.product).subscribe(function (p) { return _this.navigateTo(); });
        }
    };
    ProductFormComponent.prototype.onDelete = function () {
    };
    ProductFormComponent.prototype.onUndelete = function () {
    };
    ProductFormComponent.prototype.onPurge = function () {
        var _this = this;
        this.productService.deleteProduct(this.product.id).subscribe(function (p) { return _this.navigateTo(); });
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/product-management/forms/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/product-management/forms/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_product_category_service__WEBPACK_IMPORTED_MODULE_3__["ProductCategoryService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product Category List</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Products</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let productCategory of productCategories\">\r\n        <th scope=\"row\">{{productCategory.id}}</th>\r\n        <td>{{productCategory.code}}</td>\r\n        <td>{{productCategory.name}}</td>\r\n        <td>{{productCategory.productCount}}</td>\r\n        <td>{{productCategory.lastUpdated}}</td>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product category action buttons\" style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"productCategory.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View group\">\r\n              <button routerLink=\"/category/{{productCategory.id}}/products\" type=\"button\" class=\"btn btn-primary\">View products</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/category/{{productCategory.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Save group\">\r\n      <button routerLink=\"/category\" type=\"button\" class=\"btn btn-primary\">New Product Category</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-category-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryListComponent", function() { return ProductCategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product-category.service */ "./src/app/product-management/services/product-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCategoryListComponent = /** @class */ (function () {
    function ProductCategoryListComponent(productCategoryService) {
        this.productCategoryService = productCategoryService;
    }
    ProductCategoryListComponent.prototype.ngOnInit = function () {
        this.getProductCategories();
    };
    ProductCategoryListComponent.prototype.onSelect = function (productCategory) {
        this.selectedProductCategory = productCategory;
    };
    ProductCategoryListComponent.prototype.getProductCategories = function () {
        var _this = this;
        this.productCategoryService.getProductCategories().subscribe(function (c) { return _this.productCategories = c; });
    };
    ProductCategoryListComponent.prototype.enableProductCategory = function () {
    };
    ProductCategoryListComponent.prototype.disableProductCategory = function () {
    };
    ProductCategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-list',
            template: __webpack_require__(/*! ./product-category-list.component.html */ "./src/app/product-management/lists/product-category-list.component.html"),
            styles: [__webpack_require__(/*! ./product-category-list.component.css */ "./src/app/product-management/lists/product-category-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_category_service__WEBPACK_IMPORTED_MODULE_1__["ProductCategoryService"]])
    ], ProductCategoryListComponent);
    return ProductCategoryListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Products for Category</h2>\r\n  <table class=\"table table-nonfluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products\">\r\n        <th scope=\"row\">{{product.id}}</th>\r\n        <td>{{product.code}}</td>\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.lastUpdated}}</td>\r\n        <td>\r\n          <span class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product category action buttons\" style=\"display: block; white-space:nowrap;\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete product\" *ngIf=\"product.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-danger\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit product\">\r\n              <button routerLink=\"/category/{{this.categoryId}}/product/{{product.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Action buttons\">\r\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Back group\">\r\n      <button routerLink=\"/categories\" type=\"button\" class=\"btn btn-primary\">View categories</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-category-product-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/product-management/lists/product-category-product-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductCategoryProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryProductListComponent", function() { return ProductCategoryProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryProductListComponent = /** @class */ (function () {
    function ProductCategoryProductListComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ProductCategoryProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.categoryId = p['id'];
            _this.productService.getCategoryProducts(p['id']).subscribe(function (p) { return _this.products = p; });
        });
    };
    ProductCategoryProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-category-product-list',
            template: __webpack_require__(/*! ./product-category-product-list.component.html */ "./src/app/product-management/lists/product-category-product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-category-product-list.component.css */ "./src/app/product-management/lists/product-category-product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductCategoryProductListComponent);
    return ProductCategoryProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h2>Product List</h2>\r\n  <table class=\"table table-nofluid\">\r\n    <thead>\r\n      <th scope=\"col\">#</th>\r\n      <th scope=\"col\">Code</th>\r\n      <th scope=\"col\">Name</th>\r\n      <th scope=\"col\">Category</th>\r\n      <th scope=\"col\">Last Update</th>\r\n      <th scope=\"col\"></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of products\">\r\n        <th scope=\"row\">{{product.id}}</th>\r\n        <td>{{product.code}}</td>\r\n        <td>{{product.name}}</td>\r\n        <td>{{product.categoryCode}}</td>\r\n        <td>{{product.lastUpdated}}</td>\r\n        <td>\r\n          <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Product action buttons\">\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"Delete group\" *ngIf=\"product.isDeleted\">\r\n              <button type=\"button\" class=\"btn btn-warning\">Deleted</button>\r\n            </div>\r\n            <div class=\"btn-group mr-1\" role=\"group\" aria-label=\"View category group\">\r\n              <button routerLink=\"/category/{{product.categoryId}}/products\" type=\"button\" class=\"btn btn-primary\">View category products</button>\r\n            </div>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit group\">\r\n              <button routerLink=\"/product/{{product.id}}\" type=\"button\" class=\"btn btn-primary\">Edit</button>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-management/lists/product-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product-management/lists/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/product-management/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, router, productService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (p) { return _this.products = p; });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-management/lists/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-management/lists/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-management/models/product-category.ts":
/*!***************************************************************!*\
  !*** ./src/app/product-management/models/product-category.ts ***!
  \***************************************************************/
/*! exports provided: ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
var ProductCategory = /** @class */ (function () {
    function ProductCategory(id, name, code, description, isDeleted, lastUpdated) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.description = description;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return ProductCategory;
}());



/***/ }),

/***/ "./src/app/product-management/models/product.ts":
/*!******************************************************!*\
  !*** ./src/app/product-management/models/product.ts ***!
  \******************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, code, name, сategoryId, description, manufacturerCode, price, isDeleted, lastUpdated) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.сategoryId = сategoryId;
        this.description = description;
        this.manufacturerCode = manufacturerCode;
        this.price = price;
        this.isDeleted = isDeleted;
        this.lastUpdated = lastUpdated;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/product-management/services/product-category.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/product-management/services/product-category.service.ts ***!
  \*************************************************************************/
/*! exports provided: ProductCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategoryService", function() { return ProductCategoryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCategoryService = /** @class */ (function () {
    function ProductCategoryService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/categories/';
    }
    ProductCategoryService.prototype.getProductCategories = function () {
        return this.http.get(this.url);
    };
    ProductCategoryService.prototype.getProductCategory = function (productCategoryId) {
        return this.http.get("" + this.url + productCategoryId);
    };
    ProductCategoryService.prototype.addProductCategory = function (productCategory) {
        return this.http.post(this.url, productCategory);
    };
    ProductCategoryService.prototype.updateProductCategory = function (productCategory) {
        return this.http.put("" + this.url + productCategory.id, productCategory);
    };
    ProductCategoryService.prototype.deleteProductCategory = function (productCategoryId) {
        return this.http.delete("" + this.url + productCategoryId);
    };
    ProductCategoryService.prototype.setProductCategoryStatus = function (productCategoryId, deletedStatus) {
        return this.http.put("" + this.url + productCategoryId + "/status/" + deletedStatus, null);
    };
    ProductCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductCategoryService);
    return ProductCategoryService;
}());



/***/ }),

/***/ "./src/app/product-management/services/product.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-management/services/product.service.ts ***!
  \****************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/products/';
        this.categoryUrl = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/categories/';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url);
    };
    ProductService.prototype.getProduct = function (productId) {
        return this.http.get("" + this.url + productId);
    };
    ProductService.prototype.getCategoryProducts = function (productCategoryId) {
        return this.http.get("" + this.categoryUrl + productCategoryId + "/products");
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post("" + this.url, product);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this.http.put("" + this.url + product.id, product);
    };
    ProductService.prototype.deleteProduct = function (productId) {
        return this.http.delete("" + this.url + productId);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ProductService);
    return ProductService;
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
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);

var environment = {
    production: false,
    apiUrl: 'http://localhost:56952/',
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lenovo\Desktop\учеба\EPAM .NET labs\net_tasks\katla-sport\KatlaSportNg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map