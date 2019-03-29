(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-chat-module"],{

/***/ "./src/app/views/chat/chat-contents/chat-contents.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/chat/chat-contents/chat-contents.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar\">\n      <a appSidebarToggler=\"chat-sidebar\" class=\"link-icon d-md-none\">\n        <i class=\"icon-regular i-Right ml-0 mr-3\"></i> \n      </a>\n      <div class=\"d-flex align-items-center\" *ngIf=\"activeContact?.id\">\n      <img [src]=\"activeContact?.avatar\" \n      [alt]=\"activeContact?.name\" \n      class=\"avatar-sm rounded-circle mr-2\">\n      <p class=\"m-0 text-title text-16 flex-grow-1\">{{activeContact?.name}}</p>\n    </div>\n  </div>\n\n  <div [perfectScrollbar]=\"{suppressScrollX: true}\" class=\"chat-content rtl-ps-none\" *ngIf=\"!chatService.loadingCollection && chatCollection\">\n    <div *ngFor=\"let chat of chatCollection?.chats\" class=\"mb-4\">\n\n      <div *ngIf=\"chat.contactId !== activeContact.id\" class=\"d-flex user\">\n        <img [src]=\"user?.avatar\" [alt]=\"user?.name\" class=\"avatar-sm rounded-circle mr-3\">\n        <div class=\"message flex-grow-1\">\n          <div class=\"d-flex\">\n            <p class=\"mb-1 text-title text-16 flex-grow-1\">{{user?.name}}</p>\n            <span class=\"text-small text-muted\">{{chat.time | date}}</span>\n          </div>\n          <p class=\"m-0\">{{chat.text}}</p>\n        </div>\n      </div>\n      <div *ngIf=\"chat.contactId === activeContact.id\" class=\"d-flex\">\n        <div class=\"message flex-grow-1\">\n            <div class=\"d-flex\">\n              <p class=\"mb-1 text-title text-16 flex-grow-1\">{{activeContact?.name}}</p>\n              <span class=\"text-small text-muted\">{{chat.time | date}}</span>\n            </div>\n          <p class=\"m-0\">{{chat.text}}</p>\n        </div>\n        <img [src]=\"activeContact?.avatar\" \n        [alt]=\"activeContact?.name\" \n        class=\"avatar-sm rounded-circle ml-3\">\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area\" \n  *ngIf=\"chatCollection && !chatService.loadingCollection\">\n    <form #msgForm=\"ngForm\" \n    class=\"inputForm\" \n    (ngSubmit)=\"sendMessage($event)\" \n    (keyup.enter)=\"sendMessage($event)\">\n      <div class=\"form-group\">\n        <textarea class=\"form-control form-control-rounded\" #msgInput\n        ngModel\n        placeholder=\"Type your message\"\n        name=\"message\" id=\"message\" cols=\"30\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"d-flex\">\n        <div class=\"flex-grow-1\"></div>\n        <button class=\"btn btn-icon btn-rounded btn-primary mr-2\">\n          <i class=\"i-Paper-Plane\"></i>\n        </button>\n        <button class=\"btn btn-icon btn-rounded btn-outline-primary\" type=\"button\">\n          <i class=\"i-Add-File\"></i>\n        </button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"spinner-glow spinner-glow-warning\" \n  *ngIf=\"chatService.loadingCollection\"></div>\n\n  <div class=\"app-inro-circle\" *ngIf=\"!chatCollection && !chatService.loadingCollection\">\n    <div class=\"border rounded-circle big-bubble\"  [@animate]=\"{value:'*',params:{scale:'.2',delay:'400ms', duration: '400ms'}}\">\n      <i class=\"i-Speach-Bubbles\"></i>\n    </div>\n    <p class=\"text-16\" [@animate]=\"{value:'*',params:{y:'120px',delay:'600ms', duration: '400ms'}}\">Select a contact and start chat.</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/chat/chat-contents/chat-contents.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/chat/chat-contents/chat-contents.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/chat/chat-contents/chat-contents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/chat/chat-contents/chat-contents.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContentsComponent", function() { return ChatContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/chat/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/animations/shared-animations */ "./src/app/shared/animations/shared-animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatContentsComponent = /** @class */ (function () {
    function ChatContentsComponent(chatService) {
        this.chatService = chatService;
        this.user = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.activeContact = new _chat_service__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    ChatContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for user update
        this.userUpdateSub = this.chatService.onUserUpdated.subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        // Listen for contact change
        this.chatSelectSub = this.chatService.onChatSelected.subscribe(function (res) {
            if (res) {
                _this.chatCollection = res.chatCollection;
                _this.activeContact = res.contact;
                _this.initMsgForm();
            }
        });
        // Listen for chat update
        this.chatUpdateSub = this.chatService.onChatsUpdated.subscribe(function (chat) {
            _this.chatCollection.chats.push(chat);
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.chatSelectSub) {
            this.chatSelectSub.unsubscribe();
        }
        if (this.chatUpdateSub) {
            this.chatUpdateSub.unsubscribe();
        }
    };
    ChatContentsComponent.prototype.sendMessage = function (e) {
        var _this = this;
        var chat = {
            contactId: this.chatService.user.id,
            text: this.msgForm.form.value.message,
            time: new Date().toISOString()
        };
        this.chatCollection.chats.push(chat);
        this.chatService
            .updateChats(this.chatCollection.id, this.chatCollection.chats.slice())
            .subscribe(function (res) {
            _this.initMsgForm();
        });
        // Only for demo purpose
        this.chatService.autoReply({
            contactId: this.activeContact.id,
            text: "Hi, I'm " + this.activeContact.name + ". Your imaginary friend.",
            time: new Date().toISOString()
        });
    };
    ChatContentsComponent.prototype.initMsgForm = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgForm.reset();
            _this.msgInput.first.nativeElement.focus();
            _this.scrollToBottom();
        });
    };
    ChatContentsComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.psContainer.update();
            _this.psContainer.scrollToBottom(0, 400);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('matSidenav'),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "matSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"]),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["PerfectScrollbarDirective"])
    ], ChatContentsComponent.prototype, "psContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('msgInput'),
        __metadata("design:type", Object)
    ], ChatContentsComponent.prototype, "msgInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('msgForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ChatContentsComponent.prototype, "msgForm", void 0);
    ChatContentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-contents',
            template: __webpack_require__(/*! ./chat-contents.component.html */ "./src/app/views/chat/chat-contents/chat-contents.component.html"),
            styles: [__webpack_require__(/*! ./chat-contents.component.scss */ "./src/app/views/chat/chat-contents/chat-contents.component.scss")],
            animations: [src_app_shared_animations_shared_animations__WEBPACK_IMPORTED_MODULE_4__["SharedAnimations"]]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatContentsComponent);
    return ChatContentsComponent;
}());



/***/ }),

/***/ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border-right\">\n  <div class=\"pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar\">\n    <a appSidebarToggler=\"chat-sidebar\" class=\"link-icon d-md-none\">\n      <i class=\"icon-regular ml-0 mr-3 i-Left\"></i> \n    </a>\n    <div class=\"form-group m-0 flex-grow-1\">\n      <input type=\"text\" class=\"form-control form-control-rounded\" id=\"search\" placeholder=\"Search contacts\">\n    </div>\n    \n  </div>\n  \n  <div [perfectScrollbar]=\"{suppressScrollX: true}\" class=\"contacts-scrollable rtl-ps-none\">\n    <div class=\"mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom\">Recent</div>\n    <div *ngFor=\"let info of currentUser?.chatInfo; let i = index\" \n    class=\"p-3 d-flex align-items-center contact\"\n    [ngClass]=\"{\n      'border-bottom': i != currentUser?.chatInfo.length - 1, \n      'online': (contacts | getValueByKey:info.contactId:'status') === 'online'\n    }\"\n    (click)=\"getChatByContact(info.contactId)\">\n        <img [src]=\"contacts | getValueByKey:info.contactId:'avatar'\" \n        class=\"avatar-sm rounded-circle mr-3\" alt=\"\">\n        <div>\n            <h6 class=\"m-0\">{{info.contactName}}</h6>\n            <span class=\"text-muted text-small\">{{info.lastChatTime  | date}}</span>\n        </div>\n    </div>\n    <div class=\"mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom\">Contacts</div>\n    <div *ngFor=\"let contact of contacts\" \n    class=\"p-3 d-flex border-bottom align-items-center contact\"\n    [ngClass]=\"{online: contact.status === 'online'}\"\n    (click)=\"getChatByContact(contact.id)\">\n      <img [src]=\"contact.avatar\" alt=\"\" class=\"avatar-sm rounded-circle mr-3\">\n      <h6 class=\"\">{{contact.name}}</h6>\n    </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatLeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidebarComponent", function() { return ChatLeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/views/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatLeftSidebarComponent = /** @class */ (function () {
    function ChatLeftSidebarComponent(chatService) {
        this.chatService = chatService;
        this.isSidenavOpen = true;
        this.currentUser = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ChatLeftSidebarComponent.prototype.ngOnInit = function () {
        // this.chatService.onChatsUpdated
        //   .subscribe(updatedChats => {
        //     this.chats = updatedChats;
        //   });
        var _this = this;
        this.userUpdateSub = this.chatService.onUserUpdated
            .subscribe(function (updatedUser) {
            _this.currentUser = updatedUser;
        });
        this.loadDataSub = this.chatService.loadChatData()
            .subscribe(function (res) {
            _this.currentUser = _this.chatService.user;
            // this.chats = this.chatService.chats;
            _this.contacts = _this.chatService.contacts;
        });
    };
    ChatLeftSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.userUpdateSub) {
            this.userUpdateSub.unsubscribe();
        }
        if (this.loadDataSub) {
            this.loadDataSub.unsubscribe();
        }
    };
    ChatLeftSidebarComponent.prototype.getChatByContact = function (contactId) {
        this.chatService.getChatByContact(contactId)
            .subscribe(function (res) {
            console.log('from sub', res);
        }, function (err) {
            console.log(err);
        });
    };
    ChatLeftSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-left-sidebar',
            template: __webpack_require__(/*! ./chat-left-sidebar.component.html */ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./chat-left-sidebar.component.scss */ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatLeftSidebarComponent);
    return ChatLeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/views/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/views/chat/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/views/chat/chat-routing.module.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/views/chat/chat/chat.component.ts");
/* harmony import */ var _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-left-sidebar/chat-left-sidebar.component */ "./src/app/views/chat/chat-left-sidebar/chat-left-sidebar.component.ts");
/* harmony import */ var _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-contents/chat-contents.component */ "./src/app/views/chat/chat-contents/chat-contents.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_8__["SharedDirectivesModule"],
                src_app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_9__["SharedPipesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatRoutingModule"]
            ],
            declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"], _chat_left_sidebar_chat_left_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["ChatLeftSidebarComponent"], _chat_contents_chat_contents_component__WEBPACK_IMPORTED_MODULE_5__["ChatContentsComponent"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/views/chat/chat.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: User, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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




var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ChatService.prototype.loadChatData = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.getAllContacts(), this.getAllChats(), this.getCurrentUser(), function (contacts, chats, user) {
            _this.contacts = contacts;
            _this.chats = chats;
            _this.user = user;
            // console.log('next.willCall')
            _this.onUserUpdated.next(user);
            // console.log('next.called')
            // console.log(
            //   "contacts:",
            //   contacts,
            //   "\n chats:",
            //   chats,
            //   "\n currUser:",
            //   user
            // );
        });
    };
    ChatService.prototype.getChatByContact = function (contactId) {
        var _this = this;
        this.loadingCollection = true;
        var chatInfo = this.user.chatInfo.find(function (chat) { return chat.contactId === contactId; });
        if (!chatInfo) {
            return this.createChatCollection(contactId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (chatColl) {
                return _this.getChatByContact(contactId);
            }));
        }
        return this.getAllChats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (chats) {
            var chatCollection = chats.find(function (chat) { return chat.id === chatInfo.chatId; });
            var contact = _this.contacts.find(function (contact) { return contact.id === contactId; });
            _this.onChatSelected.next({
                chatCollection: chatCollection,
                contact: contact
            });
            _this.loadingCollection = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(chatCollection);
        }));
    };
    ChatService.prototype.createChatCollection = function (contactId) {
        var _this = this;
        var contact = this.contacts.find(function (contact) { return contact.id === contactId; });
        var chatId = (Math.random() * 1000000000).toString();
        var chatCollection = {
            id: chatId,
            chats: []
        };
        var chatInfo = {
            chatId: chatId,
            lastChatTime: new Date(),
            contactId: contact.id,
            contactName: contact.name,
            unread: null
        };
        return this.http
            .post('api/chat-collections', __assign({}, chatCollection))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (updatedChatCollection) {
            _this.user.chatInfo.push(chatInfo);
            return _this.updateUser(_this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
                return _this.getCurrentUser()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                    _this.user = user;
                    // console.log(user)
                    _this.onUserUpdated.next(user);
                }));
                // return updatedChatCollection
            }));
        }));
    };
    ChatService.prototype.getAllContacts = function () {
        return this.http.get('api/contacts');
    };
    ChatService.prototype.getAllChats = function () {
        return this.http.get('api/chat-collections');
    };
    ChatService.prototype.getCurrentUser = function () {
        return this.http.get('api/chat-user')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res[0]; }));
    };
    ChatService.prototype.updateUser = function (user) {
        return this.http.put("api/chat-user/" + user.id, __assign({}, user));
    };
    ChatService.prototype.updateChats = function (chatId, chats) {
        var chatCollection = {
            id: chatId,
            chats: chats
        };
        return this.http.put('api/chat-collections', chatCollection);
    };
    ChatService.prototype.autoReply = function (chat) {
        var _this = this;
        setTimeout(function () {
            _this.onChatsUpdated.next(chat);
        }, 1500);
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/views/chat/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/chat/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appSidebarContainer class=\"card chat-sidebar-container\">\n  <div appSidebarContent class=\"chat-content-wrap\">\n    <app-chat-contents></app-chat-contents>\n  </div>\n  <div appSidebar=\"chat-sidebar\" class=\"chat-sidebar-wrap\">\n    <app-chat-left-sidebar></app-chat-left-sidebar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/chat/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/chat/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/chat/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/chat/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/views/chat/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/views/chat/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-chat-chat-module.js.map