(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-data-tables-data-tables-module"],{

/***/ "./src/app/views/data-tables/data-tables-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/data-tables/data-tables-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataTablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesRoutingModule", function() { return DataTablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen-table/fullscreen-table.component */ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.ts");
/* harmony import */ var _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paging-table/paging-table.component */ "./src/app/views/data-tables/paging-table/paging-table.component.ts");
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/views/data-tables/filter-table/filter-table.component.ts");
/* harmony import */ var _list_pagination_list_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-pagination/list-pagination.component */ "./src/app/views/data-tables/list-pagination/list-pagination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'list',
        component: _list_pagination_list_pagination_component__WEBPACK_IMPORTED_MODULE_5__["ListPaginationComponent"]
    },
    {
        path: 'full',
        component: _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_2__["FullscreenTableComponent"]
    },
    {
        path: 'paging',
        component: _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_3__["PagingTableComponent"]
    },
    {
        path: 'filter',
        component: _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_4__["FilterTableComponent"]
    }
];
var DataTablesRoutingModule = /** @class */ (function () {
    function DataTablesRoutingModule() {
    }
    DataTablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DataTablesRoutingModule);
    return DataTablesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/data-tables/data-tables.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/data-tables/data-tables.module.ts ***!
  \*********************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-tables-routing.module */ "./src/app/views/data-tables/data-tables-routing.module.ts");
/* harmony import */ var _fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreen-table/fullscreen-table.component */ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.ts");
/* harmony import */ var _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paging-table/paging-table.component */ "./src/app/views/data-tables/paging-table/paging-table.component.ts");
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/views/data-tables/filter-table/filter-table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_pagination_list_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-pagination/list-pagination.component */ "./src/app/views/data-tables/list-pagination/list-pagination.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_4__["DataTablesRoutingModule"]
            ],
            declarations: [_fullscreen_table_fullscreen_table_component__WEBPACK_IMPORTED_MODULE_5__["FullscreenTableComponent"], _paging_table_paging_table_component__WEBPACK_IMPORTED_MODULE_6__["PagingTableComponent"], _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_7__["FilterTableComponent"], _list_pagination_list_pagination_component__WEBPACK_IMPORTED_MODULE_9__["ListPaginationComponent"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());



/***/ }),

/***/ "./src/app/views/data-tables/filter-table/filter-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/data-tables/filter-table/filter-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"breadcrumb\">\n      <h1>Filter</h1>\n      <ul>\n        <li><a href=\"#\">Data Table</a></li>\n        <li>Filter</li>\n      </ul>\n    </div>\n  \n    <div class=\"separator-breadcrumb border-top\"></div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input id=\"email\" placeholder=\"Search Products\" [formControl]=\"searchControl\" class=\"form-control form-control-rounded\" type=\"email\">\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n          <div class=\"card  o-hidden\">\n              <ngx-datatable\n              style=\"height: 500px; box-shadow: none\"\n              class=\"material fullscreen\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"60\"\n              [scrollbarV]=\"true\"\n              [rows]=\"filteredProducts\">\n              <ngx-datatable-column name=\"photo\" [maxWidth]=\"120\">\n                  <ng-template ngx-datatable-header-template>\n                    Thumbnail\n                  </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        <img height=\"32px\" width=\"32px\" style=\"border-radius: 4px\" [src]=\"value\" alt=\"\">\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"name\" [width]=\"300\">\n                  <ng-template ngx-datatable-header-template>\n                    Title\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"category\">\n                  <ng-template ngx-datatable-header-template>\n                    Category\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"subtitle\">\n                  <ng-template ngx-datatable-header-template>\n                    Description\n                  </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n      </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/app/views/data-tables/filter-table/filter-table.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/data-tables/filter-table/filter-table.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/data-tables/filter-table/filter-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/data-tables/filter-table/filter-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent(productService) {
        this.productService = productService;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    FilterTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (res) {
            _this.products = res.slice();
            _this.filteredProducts = res;
        });
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200))
            .subscribe(function (value) {
            _this.filerData(value);
        });
    };
    FilterTableComponent.prototype.filerData = function (val) {
        if (val) {
            val = val.toLowerCase();
        }
        else {
            return this.filteredProducts = this.products.slice();
        }
        var columns = Object.keys(this.products[0]);
        if (!columns.length) {
            return;
        }
        var rows = this.products.filter(function (d) {
            for (var i = 0; i <= columns.length; i++) {
                var column = columns[i];
                // console.log(d[column]);
                if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
                    return true;
                }
            }
        });
        this.filteredProducts = rows;
    };
    FilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-table',
            template: __webpack_require__(/*! ./filter-table.component.html */ "./src/app/views/data-tables/filter-table/filter-table.component.html"),
            styles: [__webpack_require__(/*! ./filter-table.component.scss */ "./src/app/views/data-tables/filter-table/filter-table.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"breadcrumb\">\n      <h1>Fullscreen</h1>\n      <ul>\n        <li><a href=\"#\">Data Table</a></li>\n        <li>Fullscreen</li>\n      </ul>\n    </div>\n  \n    <div class=\"separator-breadcrumb border-top\"></div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card  o-hidden\">\n              <ngx-datatable\n              style=\"height: calc(100vh - 270px); box-shadow: none\"\n              class=\"material fullscreen\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"0\"\n              [rowHeight]=\"60\"\n              [scrollbarV]=\"true\"\n              [scrollbarH]=\"true\"\n              [rows]=\"products$ | async\">\n              <ngx-datatable-column name=\"photo\" [maxWidth]=\"100\">\n                  <ng-template ngx-datatable-header-template>\n                    Thumbnail\n                  </ng-template>\n                    <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                        <img height=\"32px\" width=\"32px\" style=\"border-radius: 4px\" [src]=\"value\" alt=\"\">\n                    </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"name\" [width]=\"300\">\n                  <ng-template ngx-datatable-header-template>\n                    Title\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"category\">\n                  <ng-template ngx-datatable-header-template>\n                    Category\n                  </ng-template>\n                </ngx-datatable-column>\n                <ngx-datatable-column name=\"subtitle\">\n                  <ng-template ngx-datatable-header-template>\n                    Description\n                  </ng-template>\n                </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n      </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FullscreenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenTableComponent", function() { return FullscreenTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenTableComponent = /** @class */ (function () {
    function FullscreenTableComponent(productService) {
        this.productService = productService;
    }
    FullscreenTableComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
    };
    FullscreenTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen-table',
            template: __webpack_require__(/*! ./fullscreen-table.component.html */ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen-table.component.scss */ "./src/app/views/data-tables/fullscreen-table/fullscreen-table.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], FullscreenTableComponent);
    return FullscreenTableComponent;
}());



/***/ }),

/***/ "./src/app/views/data-tables/list-pagination/list-pagination.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/data-tables/list-pagination/list-pagination.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>List</h1>\n  <ul>\n    <li><a href=\"\">Data Table</a></li>\n    <li>List</li>\n  </ul>\n</div>\n\n<div class=\"separator-breadcrumb border-top\"></div>\n<div class=\"row mb-4\">\n  <!-- GRID AND LIST BUTTONS -->\n  <div class=\"col-6\">\n    <button class=\"btn btn-sm btn-rounded btn-outline-light btn-svg mr-2\" [ngClass]=\"{active: viewMode === 'grid'}\" (click)=\"viewMode = 'grid'\">\n      <svg version=\"1.1\" width=\"16px\" id=\"grid\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        x=\"0px\" y=\"0px\" viewBox=\"0 0 369.946 369.946\" style=\"enable-background:new 0 0 369.946 369.946;\" xml:space=\"preserve\">\n        <path d=\"M250.609,0h-11.934H131.271h-11.934H0v119.337v11.934v107.404v11.934v119.337h119.337h11.934\n            h107.404h11.934h119.337V250.609v-11.934V131.271v-11.934V0H250.609z M238.675,11.934v107.404H131.271V11.934H238.675z\n             M238.675,131.271v107.404H131.271V131.271H238.675z M11.934,11.934h107.404v107.404H11.934V11.934z M11.934,131.271h107.404\n            v107.404H11.934V131.271z M11.934,358.012V250.609h107.404v107.404H11.934z M131.271,358.012V250.609h107.404v107.404H131.271z\n             M358.012,358.012H250.609V250.609h107.404V358.012z M358.012,238.675H250.609V131.271h107.404V238.675z M250.609,119.337V11.934\n            h107.404v107.404H250.609z\" />\n      </svg>\n    </button>\n    <button class=\"btn btn-sm btn-rounded btn-outline-light btn-svg\" [ngClass]=\"{active: viewMode === 'list'}\" (click)=\"viewMode = 'list'\">\n      <svg version=\"1.1\" id=\"list\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n        y=\"0px\" width=\"16px\" height=\"16px\" viewBox=\"0 0 612 612\" style=\"enable-background:new 0 0 612 612;\" xml:space=\"preserve\">\n        <path d=\"M0,97.92v24.48h612V97.92H0z M0,318.24h612v-24.48H0V318.24z M0,514.08h612V489.6H0V514.08z\" />\n      </svg>\n    </button>\n  </div>\n  <!-- SELECT CEHECKBOX -->\n  <div class=\"col-6\">\n    <div class=\"btn-group float-right\">\n      <button type=\"button\" class=\"btn btn-outline-light btn-rounded btn-checkbox\">\n        <label class=\"checkbox checkbox-outline-light\">\n          <input type=\"checkbox\" [(ngModel)]=\"allSelected\" (change)=\"selectAll($event)\">\n          <span></span>\n          <span class=\"checkmark\"></span>\n        </label>\n      </button>\n      <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Select all\" placement=\"left\">\n        <button class=\"btn btn-outline-light btn-rounded\" ngbDropdownToggle></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n          <button class=\"dropdown-item\">Delete</button>\n          <button class=\"dropdown-item\">Move to</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- DATA LIST -->\n<div class=\"row\" [ngClass]=\"{'list-horizontal': viewMode === 'list', 'list-grid': viewMode === 'grid'}\">\n  <!-- SINGLE LIST ITEM -->\n  <div *ngFor=\"let item of products | paginate: { itemsPerPage: pageSize, currentPage: page }; let i = index\" \n    class=\"list-item\"\n    [ngClass]=\"{'col-md-12': viewMode === 'list', 'col-md-3': viewMode === 'grid'}\"\n    [@animate]=\"{value:'*',params:{delay: (i*100)+'ms', y:'50px'}}\"\n  >\n    <div class=\"card o-hidden mb-4 d-flex\" [ngClass]=\"{'flex-row': viewMode === 'list', 'flex-column': viewMode === 'grid'}\">\n      <div class=\"list-thumb d-flex\">\n        <!-- TUMBNAIL -->\n        <img [src]=\"item.photo\" alt=\"\">\n      </div>\n      <div class=\"flex-grow-1\" [ngClass]=\"{'pl-2 d-flex': viewMode === 'list', 'd-bock': viewMode === 'grid'}\">\n        <div class=\"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center\"\n          [ngClass]=\"{'flex-lg-row': viewMode === 'list'}\">\n          <!-- OTHER DATA -->\n          <a href=\"\" class=\"w-40 w-sm-100\">\n            <div class=\"item-title\">{{item.name}}</div>\n          </a>\n          <p class=\"m-0 text-muted text-small w-15 w-sm-100\">Gadget</p>\n          <p class=\"m-0 text-muted text-small w-15 w-sm-100\">\n            {{item?.price?.sale | currency}}\n            <del class=\"text-secondary\">{{item?.price?.previous | currency}}</del>\n          </p>\n          <p class=\"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges\">\n            <span class=\"badge badge-{{item?.badge?.color}}\">{{item?.badge?.text}}</span>\n          </p>\n          <p class=\"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-actions\">\n            <button class=\"btn btn-icon bg-transparent\"\n            [ngClass]=\"{'d-none': viewMode === 'grid'}\">\n              <i class=\"i-File-Edit text-16 text-primary\"></i>\n            </button>\n          </p>\n        </div>\n        <div class=\"align-self-center pl-3 pb-2 pr-3 item-select\">\n          <label class=\"checkbox checkbox-outline-light\">\n            <input type=\"checkbox\" [(ngModel)]=\"item.isSelected\">\n            <span></span>\n            <span class=\"checkmark\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- PAGINATION CONTROL -->\n  <div class=\"col-md-12 mt-3\" *ngIf=\"products?.length\">\n    <pagination-controls (pageChange)=\"page = $event\" previousLabel=\"\" nextLabel=\"\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/data-tables/list-pagination/list-pagination.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/data-tables/list-pagination/list-pagination.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/data-tables/list-pagination/list-pagination.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/data-tables/list-pagination/list-pagination.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPaginationComponent", function() { return ListPaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPaginationComponent = /** @class */ (function () {
    function ListPaginationComponent(dl) {
        this.dl = dl;
        this.viewMode = 'list';
        this.page = 1;
        this.pageSize = 8;
        this.products = [];
    }
    ListPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dl.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        });
    };
    ListPaginationComponent.prototype.selectAll = function (e) {
        var _this = this;
        this.products = this.products.map(function (p) {
            p.isSelected = _this.allSelected;
            return p;
        });
        if (this.allSelected) {
        }
        console.log(this.allSelected);
    };
    ListPaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-pagination',
            template: __webpack_require__(/*! ./list-pagination.component.html */ "./src/app/views/data-tables/list-pagination/list-pagination.component.html"),
            styles: [__webpack_require__(/*! ./list-pagination.component.scss */ "./src/app/views/data-tables/list-pagination/list-pagination.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_2__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_1__["DataLayerService"]])
    ], ListPaginationComponent);
    return ListPaginationComponent;
}());



/***/ }),

/***/ "./src/app/views/data-tables/paging-table/paging-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/data-tables/paging-table/paging-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"breadcrumb\">\n      <h1>Paging</h1>\n      <ul>\n        <li><a href=\"#\">Data Table</a></li>\n        <li>Paging</li>\n      </ul>\n    </div>\n  \n    <div class=\"separator-breadcrumb border-top\"></div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"card o-hidden\">\n            <ngx-datatable\n            style=\"height: calc(100vh - 270px); box-shadow: none\"\n            class=\"material fullscreen\"\n            [columnMode]=\"'force'\"\n            [headerHeight]=\"50\"\n            [footerHeight]=\"50\"\n            [rowHeight]=\"60\"\n            [scrollbarV]=\"true\"\n            [limit]=\"10\"\n            [rows]=\"products$ | async\">\n              <ngx-datatable-column name=\"photo\" [width]=\"80\" [maxWidth]=\"100\">\n                <ng-template ngx-datatable-header-template>\n                  Thumbnail\n                </ng-template>\n                  <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                      <img height=\"32px\" width=\"32px\" style=\"border-radius: 4px\" [src]=\"value\" alt=\"\">\n                  </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"name\" [width]=\"300\">\n                <ng-template ngx-datatable-header-template>\n                  Title\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"category\">\n                <ng-template ngx-datatable-header-template>\n                  Category\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"subtitle\">\n                <ng-template ngx-datatable-header-template>\n                  Description\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n      </div>\n    </div>\n</div>  "

/***/ }),

/***/ "./src/app/views/data-tables/paging-table/paging-table.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/data-tables/paging-table/paging-table.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/data-tables/paging-table/paging-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/data-tables/paging-table/paging-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: PagingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingTableComponent", function() { return PagingTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagingTableComponent = /** @class */ (function () {
    function PagingTableComponent(productService) {
        this.productService = productService;
    }
    PagingTableComponent.prototype.ngOnInit = function () {
        this.products$ = this.productService.getProducts();
    };
    PagingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paging-table',
            template: __webpack_require__(/*! ./paging-table.component.html */ "./src/app/views/data-tables/paging-table/paging-table.component.html"),
            styles: [__webpack_require__(/*! ./paging-table.component.scss */ "./src/app/views/data-tables/paging-table/paging-table.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], PagingTableComponent);
    return PagingTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-data-tables-data-tables-module.js.map