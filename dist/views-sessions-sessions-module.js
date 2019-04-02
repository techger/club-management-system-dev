(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"],{

/***/ "./src/app/views/sessions/forgot/forgot.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/forgot/forgot.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card o-hidden\" [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"p-4\">\n          <div class=\"auth-logo text-center mb-4\">\n            <img src=\"assets/images/logo.png\" alt=\"\">\n          </div>\n          <h1 class=\"mb-3 text-18\">Forgot Password</h1>\n          <form action=\"\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email address</label>\n              <input id=\"email\" class=\"form-control form-control-rounded\" type=\"email\">\n            </div>\n            <button class=\"btn btn-primary btn-block btn-rounded mt-3\">Reset Password</button>\n            \n          </form>\n          <div class=\"mt-3 text-center\">\n            <a href=\"\" class=\"text-muted\" routerLink=\"/sessions/signin\"><u>Sign in</u></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 text-center \" style=\"background-size: cover;background-image: url(./assets/images/photo-long-3.jpg)\">\n        <div class=\"pr-3 auth-right\">\n          <button class=\"btn btn-outline-primary btn-outline-email btn-block btn-icon-text btn-rounded\" routerLink=\"/sessions/signup\">\n            <i class=\"i-Mail-with-At-Sign\"></i>\n            Sign up with Email\n          </button>\n          <button class=\"btn btn-outline-primary btn-outline-google btn-block btn-icon-text btn-rounded\">\n            <i class=\"i-Google-Plus\"></i>\n            Sign in with Google\n          </button>\n          <button class=\"btn btn-outline-primary btn-outline-facebook btn-block btn-icon-text btn-rounded\">\n            <i class=\"i-Facebook-2\"></i>\n            Sign in with Facebook\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/views/sessions/forgot/forgot.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/forgot/forgot.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/forgot/forgot.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/forgot/forgot.component.ts ***!
  \***********************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent() {
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/views/sessions/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/views/sessions/forgot/forgot.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/sessions-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SessionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutingModule", function() { return SessionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/views/sessions/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    },
    {
        path: 'forgot',
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_4__["ForgotComponent"]
    }
];
var SessionsRoutingModule = /** @class */ (function () {
    function SessionsRoutingModule() {
    }
    SessionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SessionsRoutingModule);
    return SessionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/sessions/sessions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessions-routing.module */ "./src/app/views/sessions/sessions-routing.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/views/sessions/signup/signup.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/views/sessions/signin/signin.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/views/sessions/forgot/forgot.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SessionsModule = /** @class */ (function () {
    function SessionsModule() {
    }
    SessionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                _sessions_routing_module__WEBPACK_IMPORTED_MODULE_2__["SessionsRoutingModule"]
            ],
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_5__["ForgotComponent"]]
        })
    ], SessionsModule);
    return SessionsModule;
}());



/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card o-hidden\" [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"background-size: cover;background-image: url(./assets/images/photo-long-3.jpg)\">\n        <div class=\"p-4\">\n          <!--<div class=\"auth-logo text-center mb-4\">-->\n            <!--<img src=\"assets/images/logo.png\" alt=\"\">-->\n          <!--</div>-->\n          <h1 class=\"mb-3 text-18\">サインイン</h1>\n          <form [formGroup]=\"signinForm\" (ngSubmit)=\"signin()\">\n            <div class=\"form-group\">\n              <label for=\"email\">ユーザーID</label>\n              <input id=\"email\" class=\"form-control form-control-rounded\" formControlName=\"email\" type=\"email\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">パスワード</label>\n              <input id=\"password\" class=\"form-control form-control-rounded\" formControlName=\"password\" type=\"password\">\n            </div>\n            <!-- <button class=\"btn btn-rounded btn-primary btn-block mt-2\">Sign In</button> -->\n            <btn-loading btnClass=\"btn-primary btn-rounded btn-block mt-3\" [loadingText]=\"loadingText\" [loading]=\"loading\">\n              サインイン\n            </btn-loading>\n          </form>\n\n          <div class=\"mt-3 text-center\">\n            <a href=\"\" class=\"text-muted\" routerLink=\"/sessions/forgot\"><u>パスワードを忘れた</u></a>\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"col-md-6 text-center \" style=\"background-size: cover;background-image: url(./assets/images/photo-long-3.jpg)\">-->\n        <!--<div class=\"pr-3 auth-right\">-->\n          <!--<button class=\"btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text\" routerLink=\"/sessions/signup\">-->\n            <!--<i class=\"i-Mail-with-At-Sign\"></i>-->\n            <!--Sign up with Email-->\n          <!--</button>-->\n          <!--<button class=\"btn btn-rounded btn-outline-primary btn-outline-google btn-block btn-icon-text\">-->\n            <!--<i class=\"i-Google-Plus\"></i>-->\n            <!--Sign up with Google-->\n          <!--</button>-->\n          <!--<button class=\"btn btn-rounded btn-outline-primary btn-block btn-icon-text btn-outline-facebook\">-->\n            <!--<i class=\"i-Facebook-2\"></i>-->\n            <!--Sign up with Facebook-->\n          <!--</button>-->\n        <!--</div>-->\n      <!--</div>-->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/signin/signin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ResolveStart"]) {
                _this.loadingText = 'Loading Dashboard Module...';
                _this.loading = true;
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ResolveEnd"]) {
                _this.loading = false;
            }
        });
        this.signinForm = this.fb.group({
            email: ['test@example.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['1234', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this.loading = true;
        this.loadingText = 'Sigining in...';
        this.auth.signin(this.signinForm.value)
            .subscribe(function (res) {
            _this.router.navigateByUrl('/dashboard/v1');
            _this.loading = false;
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/sessions/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/views/sessions/signin/signin.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card o-hidden\" [@animate]=\"{value:'*',params:{y:'120px',opacity:'0',delay:'100ms', duration: '400ms'}}\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"p-4\">\n        \n        <h1 class=\"mb-3 text-18\">Sign Up</h1>\n        <!-- <p class=\"mb-4 text-muted font-small\">Lorem ipsum dolor sit amet.</p> -->\n        <form action=\"\">\n          <div class=\"form-group\">\n            <label for=\"username\">Your name</label>\n            <input id=\"username\" class=\"form-control form-control-rounded\" type=\"text\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input id=\"email\" class=\"form-control form-control-rounded\" type=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input id=\"password\" class=\"form-control form-control-rounded\" type=\"password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"repassword\">Retype password</label>\n            <input id=\"repassword\" class=\"form-control form-control-rounded\" type=\"password\">\n          </div>\n          <button class=\"btn btn-primary btn-block btn-rounded mt-3\">Sign Up</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/sessions/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/views/sessions/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/views/sessions/signup/signup.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_1__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-sessions-sessions-module.js.map