(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboad-default/dashboad-default.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboad-default/dashboad-default.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"breadcrumb\">\n        <h1>Version 1</h1>\n        <ul>\n            <li><a href=\"\">Dashboard</a></li>\n            <li>Version 1</li>\n        </ul>\n    </div>\n\n    <div class=\"separator-breadcrumb border-top\"></div>\n\n    <div class=\"row\">\n        <!-- ICON BG -->\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n                <div class=\"card-body text-center\">\n                    <i class=\"i-Add-User\"></i>\n                    <div class=\"content\">\n                        <p class=\"text-muted mt-2 mb-0\">New Leads</p>\n                        <p class=\"text-primary text-24 line-height-1 mb-2\">205</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n                <div class=\"card-body text-center\">\n                    <i class=\"i-Financial\"></i>\n                    <div class=\"content\">\n                        <p class=\"text-muted mt-2 mb-0\">Sales</p>\n                        <p class=\"text-primary text-24 line-height-1 mb-2\">4021</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n                <div class=\"card-body text-center\">\n                    <i class=\"i-Checkout-Basket\"></i>\n                    <div class=\"content\">\n                        <p class=\"text-muted mt-2 mb-0\">Orders</p>\n                        <p class=\"text-primary text-24 line-height-1 mb-2\">80</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-icon-bg card-icon-bg-primary o-hidden mb-4\">\n                <div class=\"card-body text-center\">\n                    <i class=\"i-Money-2\"></i>\n                    <div class=\"content\">\n                        <p class=\"text-muted mt-2 mb-0\">Expense</p>\n                        <p class=\"text-primary text-24 line-height-1 mb-2\">120</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-8 col-md-12\">\n            <div class=\"card mb-4\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\">This Year Sales</div>\n                    <div echarts [options]=\"salesChartBar\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-sm-12\">\n            <div class=\"card mb-4\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\">Sales by Countries</div>\n                    <div echarts [options]=\"salesChartPie\" [autoResize]=\"true\" style=\"height: 300px;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card card-chart-bottom o-hidden mb-4\">\n                        <div class=\"card-body\">\n                            <div class=\"text-muted\">Last Month Sales</div>\n                            <p class=\"mb-4 text-primary text-24\">$40250</p>\n                        </div>\n                        <div echarts [options]=\"chartLineOption1\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card card-chart-bottom o-hidden mb-4\">\n                        <div class=\"card-body\">\n                            <div class=\"text-muted\">Last Week Sales</div>\n                            <p class=\"mb-4 text-warning text-24\">$10250</p>\n                        </div>\n                        <div echarts [options]=\"chartLineOption2\" [autoResize]=\"true\" style=\"height: 260px;\"></div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card mb-4\">\n                        <div class=\"card-body\">\n                            <h6 class=\"mb-2 text-muted\">iPhone x Stock</h6>\n                            <p class=\"mb-1 text-24 font-weight-light text-title\">50%</p>\n                            <p class=\"mb-1\">\n                                <ngb-progressbar type=\"success\" [value]=\"50\" height=\"4px\"></ngb-progressbar>\n                            </p>\n                            <small class=\"text-muted\">Most sold in last 3 days</small>\n                        </div>\n                    </div>\n\n                    <div class=\"card mb-4\">\n                        <div class=\"card-body\">\n                            <h6 class=\"mb-2 text-muted\">iPhone 6 Stock</h6>\n                            <p class=\"mb-1 text-24 font-weight-light text-title\">90%</p>\n                            <p class=\"mb-1\">\n                                <ngb-progressbar type=\"danger\" [value]=\"90\" height=\"4px\"></ngb-progressbar>\n                            </p>\n                            <small class=\"text-muted\">Most sold in last 7 days</small>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-12\">\n\n            <div class=\"card mb-4\">\n                <div class=\"card-body\">\n                    <div class=\"card-title\">Top Selling Products</div>\n                    <div class=\"d-flex flex-column flex-sm-row align-items-sm-center mb-3\">\n                        <img class=\"avatar-lg mb-3 mb-sm-0 rounded mr-sm-3\" src=\"./assets/images/products/headphone-4.jpg\" alt=\"\">\n                        <div class=\"flex-grow-1\">\n                            <h5 class=\"\"><a href=\"\">Wireless Headphone E23</a></h5>\n                            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <p class=\"text-small text-danger m-0\">$450 <del class=\"text-muted\">$500</del></p>\n                        </div>\n                        <div>\n                            <button class=\"btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-rounded btn-sm\">View details</button>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column flex-sm-row align-items-sm-center mb-3\">\n                        <img class=\"avatar-lg mb-3 mb-sm-0 rounded mr-sm-3\" src=\"./assets/images/products/headphone-2.jpg\" alt=\"\">\n                        <div class=\"flex-grow-1\">\n                            <h5 class=\"\"><a href=\"\">Wireless Headphone Y902</a></h5>\n                            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <p class=\"text-small text-danger m-0\">$550 <del class=\"text-muted\">$600</del></p>\n                        </div>\n                        <div>\n                            <button class=\"btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded\">View details</button>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column flex-sm-row align-items-sm-center mb-3\">\n                        <img class=\"avatar-lg mb-3 mb-sm-0 rounded mr-sm-3\" src=\"./assets/images/products/headphone-3.jpg\" alt=\"\">\n                        <div class=\"flex-grow-1\">\n                            <h5 class=\"\"><a href=\"\">Wireless Headphone E09</a></h5>\n                            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <p class=\"text-small text-danger m-0\">$250 <del class=\"text-muted\">$300</del></p>\n                        </div>\n                        <div>\n                            <button class=\"btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded\">View details</button>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column flex-sm-row align-items-sm-center mb-3\">\n                        <img class=\"avatar-lg mb-3 mb-sm-0 rounded mr-sm-3\" src=\"./assets/images/products/headphone-4.jpg\" alt=\"\">\n                        <div class=\"flex-grow-1\">\n                            <h5 class=\"\"><a href=\"\">Wireless Headphone X89</a></h5>\n                            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n                            <p class=\"text-small text-danger m-0\">$450 <del class=\"text-muted\">$500</del></p>\n                        </div>\n                        <div>\n                            <button class=\"btn btn-outline-primary mt-3 mb-3 m-sm-0 btn-sm btn-rounded\">View details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card mb-4\">\n                <div class=\"card-body p-0\">\n                    <div class=\"card-title border-bottom d-flex align-items-center m-0 p-3\">\n                        <span>User activity</span>\n                        <span class=\"flex-grow-1\"></span>\n                        <span class=\"badge badge-pill badge-warning\">Updated daily</span>\n                    </div>\n                    <div class=\"d-flex border-bottom justify-content-between p-3\">\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Pages / Visit</span>\n                            <h5 class=\"m-0\">2065</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">New user</span>\n                            <h5 class=\"m-0\">465</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Last week</span>\n                            <h5 class=\"m-0\">23456</h5>\n                        </div>\n                    </div>\n                    <div class=\"d-flex border-bottom justify-content-between p-3\">\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Pages / Visit</span>\n                            <h5 class=\"m-0\">1829</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">New user</span>\n                            <h5 class=\"m-0\">735</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Last week</span>\n                            <h5 class=\"m-0\">92565</h5>\n                        </div>\n                    </div>\n                    <div class=\"d-flex justify-content-between p-3\">\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Pages / Visit</span>\n                            <h5 class=\"m-0\">3165</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">New user</span>\n                            <h5 class=\"m-0\">165</h5>\n                        </div>\n                        <div class=\"flex-grow-1\">\n                            <span class=\"text-small text-muted\">Last week</span>\n                            <h5 class=\"m-0\">32165</h5>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"card mb-4\">\n                <div class=\"card-body p-0\">\n                    <h5 class=\"card-title m-0 p-3\">Last 20 Days Sales</h5>\n                    <div echarts [options]=\"chartLineOption3\"></div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboadDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboadDefaultComponent", function() { return DashboadDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/echart-styles */ "./src/app/shared/echart-styles.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboadDefaultComponent = /** @class */ (function () {
    function DashboadDefaultComponent() {
    }
    DashboadDefaultComponent.prototype.ngOnInit = function () {
        this.chartLineOption1 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90] }, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#663399',
                    }, itemStyle: {
                        color: '#663399'
                    } })]
        });
        this.chartLineOption2 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [30, 10, 40, 10, 40, 20, 90] }, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 193, 7, 0.2)',
                        origin: 'start'
                    }, lineStyle: {
                        color: '#FFC107'
                    }, itemStyle: {
                        color: '#FFC107'
                    } })]
        });
        this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.chartLineOption3 = __assign({}, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
                    lineStyle: __assign({ color: 'rgba(102, 51, 153, 0.86)', width: 3 }, _shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    label: { show: true, color: '#212121' },
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        borderColor: 'rgba(102, 51, 153, 1)'
                    }
                }]
        });
        // this.chartLineOption3.xAxis.data = ['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.salesChartBar = {
            legend: {
                borderRadius: 0,
                orient: 'horizontal',
                x: 'right',
                data: ['Online', 'Offline']
            },
            grid: {
                left: '8px',
                right: '8px',
                bottom: '0',
                containLabel: true
            },
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true
                    }
                }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '${value}'
                    },
                    min: 0,
                    max: 100000,
                    interval: 25000,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: 'auto'
                    }
                }
            ],
            series: [{
                    name: 'Online',
                    data: [35000, 69000, 22500, 60000, 50000, 50000, 30000, 80000, 70000, 60000, 20000, 30005],
                    label: { show: false, color: '#0168c1' },
                    type: 'bar',
                    barGap: 0,
                    color: '#bcbbdd',
                    smooth: true,
                },
                {
                    name: 'Offline',
                    data: [45000, 82000, 35000, 93000, 71000, 89000, 49000, 91000, 80200, 86000, 35000, 40050],
                    label: { show: false, color: '#639' },
                    type: 'bar',
                    color: '#7569b3',
                    smooth: true
                }
            ]
        };
        this.salesChartPie = {
            color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },
            xAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            yAxis: [{
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [{
                    name: 'Sales by Country',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 535, name: 'USA' },
                        { value: 310, name: 'Brazil' },
                        { value: 234, name: 'France' },
                        { value: 155, name: 'Germany' },
                        { value: 130, name: 'UK' },
                        { value: 348, name: 'India' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    };
    DashboadDefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboad-default',
            template: __webpack_require__(/*! ./dashboad-default.component.html */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.html"),
            styles: [__webpack_require__(/*! ./dashboad-default.component.css */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboadDefaultComponent);
    return DashboadDefaultComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboad-default/dashboad-default.component */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts");
/* harmony import */ var _dashboard_v2_dashboard_v2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-v2/dashboard-v2.component */ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.ts");
/* harmony import */ var _dashboard_v3_dashboard_v3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-v3/dashboard-v3.component */ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.ts");
/* harmony import */ var _dashboard_v4_dashboard_v4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-v4/dashboard-v4.component */ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'v1',
        component: _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_2__["DashboadDefaultComponent"]
    },
    {
        path: 'v2',
        component: _dashboard_v2_dashboard_v2_component__WEBPACK_IMPORTED_MODULE_3__["DashboardV2Component"]
    },
    {
        path: 'v3',
        component: _dashboard_v3_dashboard_v3_component__WEBPACK_IMPORTED_MODULE_4__["DashboardV3Component"]
    },
    {
        path: 'v4',
        component: _dashboard_v4_dashboard_v4_component__WEBPACK_IMPORTED_MODULE_5__["DashboardV4Component"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n  <h1>Version 2</h1>\n  <ul>\n    <li><a href=\"\">Dashboard</a></li>\n    <li>Version 2</li>\n  </ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n  <div class=\"col-lg-6 col-md-12\">\n    <!-- CARD ICON -->\n  <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Share-on-Cloud\"></i>\n            <p class=\"text-muted mt-2 mb-2\">Today's Upload</p>\n            <p class=\"text-primary text-24 line-height-1 m-0\">21</p>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Add-User\"></i>\n            <p class=\"text-muted mt-2 mb-2\">New Users</p>\n            <p class=\"text-primary text-24 line-height-1 m-0\">21</p>\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Money-2\"></i>\n            <p class=\"text-muted mt-2 mb-2\">Total sales</p>\n            <p class=\"text-primary text-24 line-height-1 m-0\">4021</p>\n          </div>\n        </div>\n      </div>\n  \n    \n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon-big mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Money-2\"></i>\n            <p class=\"line-height-1 text-title text-18 mt-2 mb-0\">4021</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon-big mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Gear\"></i>\n            <p class=\"line-height-1 text-title text-18 mt-2 mb-0\">4021</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-6\">\n        <div class=\"card card-icon-big mb-4\">\n          <div class=\"card-body text-center\">\n            <i class=\"i-Bell\"></i>\n            <p class=\"line-height-1 text-title text-18 mt-2 mb-0\">4021</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body p-0\">\n        <h5 class=\"card-title m-0 p-3\">Sales</h5>\n        <div echarts [options]=\"chartLineOption3\" style=\"height: 300px\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Last Month Summary</div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <table class=\"table\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\">Item</th>\n                  <th scope=\"col\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Portable Speaker</td>\n                  <td class=\"font-weight-bold text-success\">+ $1200</td>\n                </tr>\n                <tr>\n                  <td>Portable Headphone</td>\n                  <td class=\"font-weight-bold\">In Stock</td>\n                </tr>\n                <tr>\n                  <td>Speaker</td>\n                  <td class=\"text-danger font-weight-bold\">Out of stock</td>\n                </tr>\n                <tr>\n                  <td>Watch</td>\n                  <td class=\"text-warning font-weight-bold\">Low stock</td>\n                </tr>\n                \n              </tbody>\n            </table>\n          </div>\n          <div class=\"col-md-6\">\n              <div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 200px;\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6 col-md-12\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"card-title\">Top Authors</div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/2.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">David Hopkins</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n            <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/3.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">James Mitchell</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n              <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n        <div class=\"d-flex align-items-center border-bottom-dotted-dim pb-3 mb-3\">\n          <img class=\"avatar-md rounded mr-3\" src=\"./assets/images/faces/4.jpg\" alt=\"\">\n          <div class=\"flex-grow-1\">\n            <h6 class=\"m-0\">Jessica Mitchell</h6>\n            <p class=\"m-0 text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n          </div>\n          <div>\n              <button class=\"btn btn-outline-primary btn-rounded btn-sm\">Follow</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-12\">\n    <div class=\"card o-hidden mb-4\">\n      <ngx-datatable\n      style=\"height: calc(100vh - 270px); box-shadow: none\"\n      class=\"material fullscreen\"\n      [columnMode]=\"'force'\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"50\"\n      [rowHeight]=\"60\"\n      [scrollbarV]=\"true\"\n      [scrollbarH]=\"true\"\n      [limit]=\"10\"\n      [rows]=\"products$ | async\">\n        <ngx-datatable-column name=\"photo\" [maxWidth]=\"100\">\n          <ng-template ngx-datatable-header-template>\n            Thumbnail\n          </ng-template>\n            <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n                <img height=\"32px\" width=\"32px\" style=\"border-radius: 4px\" [src]=\"value\" alt=\"\">\n            </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"name\" [width]=\"300\">\n          <ng-template ngx-datatable-header-template>\n            Title\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"category\">\n          <ng-template ngx-datatable-header-template>\n            Category\n          </ng-template>\n        </ngx-datatable-column>\n        <ngx-datatable-column name=\"subtitle\">\n          <ng-template ngx-datatable-header-template>\n            Description\n          </ng-template>\n        </ngx-datatable-column>\n      </ngx-datatable>\n    </div>\n  </div>\n\n  \n</div>\n\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV2Component", function() { return DashboardV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardV2Component = /** @class */ (function () {
    function DashboardV2Component(productService) {
        this.productService = productService;
    }
    DashboardV2Component.prototype.ngOnInit = function () {
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [__assign({ type: 'pie' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieRing, { label: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelCenterHover, data: [{
                            name: 'Completed',
                            value: 80,
                            itemStyle: {
                                color: '#663399',
                            }
                        }, {
                            name: 'Pending',
                            value: 20,
                            itemStyle: {
                                color: '#ced4da',
                            }
                        }] })]
        });
        this.chartLineOption3 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineNoAxis, {
            series: [{
                    data: [40, 80, 20, 90, 30, 80, 40],
                    lineStyle: {
                        color: 'rgba(102, 51, 153, .86)',
                        width: 3,
                        shadowColor: 'rgba(0, 0, 0, .2)',
                        shadowOffsetX: -1,
                        shadowOffsetY: 8,
                        shadowBlur: 10
                    },
                    label: { show: true, color: '#212121' },
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        borderColor: 'rgba(69, 86, 172, 0.86)'
                    }
                }]
        });
        this.chartLineOption3.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.products$ = this.productService.getProducts();
    };
    DashboardV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-v2',
            template: __webpack_require__(/*! ./dashboard-v2.component.html */ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-v2.component.scss */ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardV2Component);
    return DashboardV2Component;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<h1>Version 3</h1>\n\t<ul>\n\t\t<li><a href=\"\">Dashboard</a></li>\n\t\t<li>Version 3</li>\n\t</ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row\">\n\t<div class=\"col-lg-6 col-md-12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"card-title m-0\">Network Stats</div>\n\t\t\t\t\t\t<p class=\"text-small text-muted\">Lorem ipsum dolor sit amet consectetur.</p>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12 mb-4\">\n\t\t\t\t\t\t\t\t<div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Data-Backup text-32 mr-3\"></i>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-18 mb-1 text-white\">Backups</h4>\n\t\t\t\t\t\t\t\t\t\t<span>Total: 32</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12 mb-4\">\n\t\t\t\t\t\t\t\t<div class=\"p-4 rounded d-flex align-items-center bg-primary text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Big-Data text-32 mr-3\"></i>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-18 mb-1 text-white\">Databases</h4>\n\t\t\t\t\t\t\t\t\t\t<span>Total: 302</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12 mb-4\">\n\t\t\t\t\t\t\t\t<div class=\"p-4 border border-light rounded d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Data-Cloud text-32 mr-3\"></i>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-18 mb-1\">Space used</h4>\n\t\t\t\t\t\t\t\t\t\t<span>Total: 160GB</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-6 col-md-12 mb-4\">\n\t\t\t\t\t\t\t\t<div class=\"p-4 border border-light rounded d-flex align-items-center\">\n\t\t\t\t\t\t\t\t\t<i class=\"i-Data-Download text-32 mr-3\"></i>\n\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"text-18 mb-1\">Downloaded</h4>\n\t\t\t\t\t\t\t\t\t\t<span>Total: 30GB</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card card-profile-1 mb-4\">\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<div class=\"avatar box-shadow-2 mb-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/images/faces/16.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h5 class=\"m-0\">Jassica Hike</h5>\n\t\t\t\t\t\t<p class=\"mt-0 text-muted\">UI/UX Designer</p>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-rounded\">Contact Jassica</button>\n\t\t\t\t\t\t<div class=\"card-socials-simple mt-4\">\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Linkedin-2\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Facebook-2\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Twitter\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card card-profile-1 mb-4\">\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<div class=\"avatar box-shadow-2 mb-3\">\n\t\t\t\t\t\t\t<img src=\"./assets/images/faces/2.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h5 class=\"m-0\">James Hike</h5>\n\t\t\t\t\t\t<p class=\"mt-0 text-muted\">VR Developer</p>\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cumque.</p>\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-rounded\">Contact James</button>\n\t\t\t\t\t\t<div class=\"card-socials-simple mt-4\">\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Linkedin-2\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Facebook-2\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"\">\n\t\t\t\t\t\t\t\t<i class=\"i-Twitter\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card card-ecommerce-3 o-hidden mb-4\">\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<img class=\"card-img-left\" src=\"./assets/images/photo-wide-1.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-grow-1 p-4\">\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Product featured</h5>\n\t\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">By ABC Cafe</p>\n\t\t\t\t\t\t\t<p class=\"m-0\">$40 <del>$55</del></p>\n\t\t\t\t\t\t\t<p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n\t\t\t\t\t\t\t\tNesciunt placeat esse tempore debitis.</p>\n\t\t\t\t\t\t\t<div class=\"actions\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-sm rounded-circle btn-icon btn-outline-primary\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon i-Add-Cart\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card card-ecommerce-3 o-hidden mb-4\">\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t<img class=\"card-img-left\" src=\"./assets/images/photo-wide-2.jpg\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"flex-grow-1 p-4\">\n\t\t\t\t\t\t\t<h5 class=\"m-0\">Product featured</h5>\n\t\t\t\t\t\t\t<p class=\"m-0 text-small text-muted\">By Apple</p>\n\t\t\t\t\t\t\t<p class=\"m-0\">$40 <del>$55</del></p>\n\t\t\t\t\t\t\t<p class=\"text-muted mt-3\">Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n\t\t\t\t\t\t\t\tNesciunt placeat esse tempore debitis.</p>\n\t\t\t\t\t\t\t<div class=\"actions\">\n\t\t\t\t\t\t\t\t<button class=\"btn btn-sm rounded-circle btn-icon btn-outline-primary\">\n\t\t\t\t\t\t\t\t\t<i class=\"icon i-Add-Cart\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col-lg-6 col-md-12\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-6 col-sm-6\">\n\t\t\t\t<div class=\"card bg-dark text-white o-hidden mb-4\">\n\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-long-1.jpg\" alt=\"Card image\">\n\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t<h5 class=\"card-title mb-2 text-white\">Card title</h5>\n\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-6 col-sm-6\">\n\t\t\t\t<div class=\"card bg-dark text-white o-hidden mb-4\">\n\t\t\t\t\t<img class=\"card-img\" src=\"./assets/images/photo-long-2.jpg\" alt=\"Card image\">\n\t\t\t\t\t<div class=\"card-img-overlay\">\n\t\t\t\t\t\t<div class=\"text-center pt-4\">\n\t\t\t\t\t\t\t<h5 class=\"card-title mb-2 text-white\">Card title</h5>\n\t\t\t\t\t\t\t<div class=\"separator border-top mb-2\"></div>\n\t\t\t\t\t\t\t<p class=\"text-small font-italic\">Last updated 3 mins ago</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"p-1 text-left card-footer font-weight-light d-flex\">\n\t\t\t\t\t\t\t<span class=\"mr-3 d-flex align-items-center\"><i class=\"i-Speach-Bubble-6 mr-1\"></i> 12 </span>\n\t\t\t\t\t\t\t<span class=\"d-flex align-items-center\"><i class=\"i-Calendar-4 mr-2\"></i>03.12.2018</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h6 class=\"mb-0 text-muted\">Subscription/Registration</h6>\n\t\t\t\t\t\t<p class=\"text-24 font-weight-light mb-1\">20/80</p>\n\t\t\t\t\t\t<div echarts [options]=\"chartPie1\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 mb-4\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h6 class=\"mb-0 text-muted\">Project Running/Completed</h6>\n\t\t\t\t\t\t<p class=\"text-24 font-weight-light mb-1\">40/60</p>\n\t\t\t\t\t\t<div echarts [options]=\"chartPie2\" [autoResize]=\"true\" style=\"height: 140px;\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h6 class=\"mb-2\">Last 7 days traffic status</h6>\n\t\t\t\t\t\t<p class=\"text-24 font-weight-light mb-1\"><i class=\"i-Up text-success\"></i> 15%</p>\n\t\t\t\t\t\t<div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<div class=\"card mb-4\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<h6 class=\"mb-2\">Server failures</h6>\n\t\t\t\t\t\t<p class=\"text-24 font-weight-light mb-1\"><i class=\"i-Down text-danger\"></i> 5%</p>\n\t\t\t\t\t\t<div echarts [options]=\"chartBar1\" [autoResize]=\"true\" style=\"height: 60px;\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardV3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV3Component", function() { return DashboardV3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardV3Component = /** @class */ (function () {
    function DashboardV3Component() {
    }
    DashboardV3Component.prototype.ngOnInit = function () {
        this.chartPie1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Email Subscription', value: 80 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } }), __assign({ name: 'Registration', value: 20 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#df0029',
                            } })]
                }]
        });
        this.chartPie2 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'pie',
                    itemStyle: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLineStyle,
                    data: [__assign({ name: 'Running', value: 40 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#ff9800',
                            } }), __assign({ name: 'Completed', value: 60 }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelOff, { itemStyle: {
                                borderColor: '#4CAF50',
                            } })]
                }]
        });
        this.chartBar1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            series: [{
                    type: 'bar',
                    barWidth: 6,
                    itemStyle: __assign({ color: '#ff9800' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow),
                    data: [{
                            name: 'Bar 1',
                            value: 40
                        }, {
                            name: 'Bar 2',
                            value: 60,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }, {
                            name: 'Bar 3',
                            value: 80,
                        }, {
                            name: 'Bar 4',
                            value: 70,
                        }, {
                            name: 'Bar 5',
                            value: 60,
                        }, {
                            name: 'Bar 6',
                            value: 70,
                        }, {
                            name: 'Bar 7',
                            value: 80,
                        }, {
                            name: 'Bar 8',
                            value: 40,
                        }, {
                            name: 'Bar 9',
                            value: 70,
                            itemStyle: {
                                color: '#4CAF50'
                            }
                        }]
                }]
        });
    };
    DashboardV3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-v3',
            template: __webpack_require__(/*! ./dashboard-v3.component.html */ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-v3.component.scss */ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardV3Component);
    return DashboardV3Component;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb\">\n\t<h1>Version 4</h1>\n\t<ul>\n\t\t<li><a href=\"\">Dashboard</a></li>\n\t\t<li>Version 4</li>\n\t</ul>\n</div>\n<div class=\"separator-breadcrumb border-top\"></div>\n\n<div class=\"row mb-5\">\n\t<div class=\"col-md-4 mb-5\">\n\t\t<span class=\"text-28\">$20038</span>\n\t\t<p class=\"text-small text-muted m-0\">Sales in current month</p>\n\t\t<div echarts [options]=\"chartLineSmall1\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n\t\t<div class=\"d-flex justify-content-between mt-4\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">Pages / Visit</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">2065</h5>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">New user</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">465</h5>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">Last week</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">23456</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-4 mb-5\">\n\t\t<span class=\"text-28\">$7038</span>\n\t\t<p class=\"text-small text-muted m-0\">Sales in current week</p>\n\t\t<div echarts [options]=\"chartLineSmall1\" [autoResize]=\"true\" style=\"height: 65px;\"></div>\n\t\t<div class=\"d-flex justify-content-between mt-4\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">Pages / Visit</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">2065</h5>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">New user</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">465</h5>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<span class=\"text-small\">Last week</span>\n\t\t\t\t<h5 class=\"m-0 font-weight-bold text-muted\">23456</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-4\">\n\t\t<div class=\"d-flex justify-content-between mb-2\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-small text-muted m-0\">Sales in current month</p>\n\t\t\t\t<p class=\"text-24 mb-3\"><i class=\"i-Arrow-Up-in-Circle text-success\"></i> 80765</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-small text-muted m-0\">Sales in last month</p>\n\t\t\t\t<p class=\"text-24 mb-3\"><i class=\"i-Arrow-Down-in-Circle text-danger\"></i> 10765</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between border-bottom p-2\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>2070</strong> Sales</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>100</strong> Expense</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between border-bottom p-2\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>4000</strong> Sales</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>2000</strong> Expense</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"d-flex justify-content-between p-2\">\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>3070</strong> Sales</p>\n\t\t\t</div>\n\t\t\t<div class=\"flex-grow-1\">\n\t\t\t\t<p class=\"text-12 text-muted m-0\"><strong>1770</strong> Expense</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-md-12\">\n\t\t<div echarts [options]=\"lineChart1\" [autoResize]=\"true\" style=\"height: 180px;\"></div>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"card o-hidden mb-4\">\n\t\t\t<ngx-datatable style=\"height: calc(100vh - 270px); box-shadow: none\" class=\"material fullscreen\" [columnMode]=\"'force'\"\n\t\t\t [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"60\" [scrollbarV]=\"true\" [limit]=\"10\" [rows]=\"products$ | async\">\n\t\t\t\t<ngx-datatable-column name=\"photo\" [maxWidth]=\"100\">\n\t\t\t\t\t<ng-template ngx-datatable-header-template>\n\t\t\t\t\t\tThumbnail\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\n\t\t\t\t\t\t<img height=\"32px\" width=\"32px\" style=\"border-radius: 4px\" [src]=\"value\" alt=\"\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"name\" [width]=\"300\">\n\t\t\t\t\t<ng-template ngx-datatable-header-template>\n\t\t\t\t\t\tTitle\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"category\">\n\t\t\t\t\t<ng-template ngx-datatable-header-template>\n\t\t\t\t\t\tCategory\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t\t<ngx-datatable-column name=\"subtitle\">\n\t\t\t\t\t<ng-template ngx-datatable-header-template>\n\t\t\t\t\t\tDescription\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngx-datatable-column>\n\t\t\t</ngx-datatable>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardV4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardV4Component", function() { return DashboardV4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardV4Component = /** @class */ (function () {
    function DashboardV4Component(productService) {
        this.productService = productService;
    }
    DashboardV4Component.prototype.ngOnInit = function () {
        this.chartLineSmall1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions, {
            grid: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].gridAlignLeft,
            series: [__assign({ data: [30, 40, 20, 50, 40, 80, 90, 40] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { lineStyle: __assign({ color: '#4CAF50' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineShadow), itemStyle: {
                        color: '#4CAF50'
                    } })]
        });
        this.lineChart1 = __assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].lineFullWidth, {
            series: [__assign({ data: [80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30, 90] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(102, 51, 153, .15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(102, 51, 153, 0.68)',
                    }, itemStyle: {
                        color: '#663399'
                    } }), __assign({ data: [20, 80, 40, 90, 20, 80, 30, 90, 30, 80, 10, 70, 30] }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].smoothLine, { markArea: {
                        label: {
                            show: true
                        }
                    }, areaStyle: {
                        color: 'rgba(255, 152, 0, 0.15)',
                        origin: 'start'
                    }, lineStyle: {
                        // width: 1,
                        color: 'rgba(255, 152, 0, .6)',
                    }, itemStyle: {
                        color: 'rgba(255, 152, 0, 1)'
                    } })]
        });
        this.products$ = this.productService.getProducts();
    };
    DashboardV4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-v4',
            template: __webpack_require__(/*! ./dashboard-v4.component.html */ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-v4.component.scss */ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardV4Component);
    return DashboardV4Component;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/views/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboad-default/dashboad-default.component */ "./src/app/views/dashboard/dashboad-default/dashboad-default.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _dashboard_v2_dashboard_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-v2/dashboard-v2.component */ "./src/app/views/dashboard/dashboard-v2/dashboard-v2.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_v3_dashboard_v3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-v3/dashboard-v3.component */ "./src/app/views/dashboard/dashboard-v3/dashboard-v3.component.ts");
/* harmony import */ var _dashboard_v4_dashboard_v4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-v4/dashboard-v4.component */ "./src/app/views/dashboard/dashboard-v4/dashboard-v4.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_4__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
            ],
            declarations: [_dashboad_default_dashboad_default_component__WEBPACK_IMPORTED_MODULE_3__["DashboadDefaultComponent"], _dashboard_v2_dashboard_v2_component__WEBPACK_IMPORTED_MODULE_6__["DashboardV2Component"], _dashboard_v3_dashboard_v3_component__WEBPACK_IMPORTED_MODULE_9__["DashboardV3Component"], _dashboard_v4_dashboard_v4_component__WEBPACK_IMPORTED_MODULE_10__["DashboardV4Component"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module.js.map