webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_client_http_client_component__ = __webpack_require__("../../../../../src/app/http-client/http-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_redirect_service__ = __webpack_require__("../../../../../src/app/auth/redirect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                        canActivate: [
                            __WEBPACK_IMPORTED_MODULE_6__auth_redirect_service__["a" /* RedirectService */]
                        ]
                    },
                    {
                        path: 'callback',
                        component: __WEBPACK_IMPORTED_MODULE_4__callback_callback_component__["a" /* CallbackComponent */]
                    },
                    {
                        path: 'http-client',
                        component: __WEBPACK_IMPORTED_MODULE_5__http_client_http_client_component__["a" /* HttpClientComponent */],
                        canActivate: [
                            __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]
                        ]
                    },
                    {
                        path: '**',
                        redirectTo: '',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard__["a" /* AuthGuard */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"auth0-logo\" [src]=\"'assets/logo-blue.png'\">\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RoutesRecognized */]) {
                var _a = val.state.root.queryParams, clientID = _a.clientID, domain = _a.domain, audience = _a.audience, scope = _a.scope;
                var auth0Config = _this.auth.auth0Config;
                auth0Config.clientID = clientID || auth0Config.clientID;
                auth0Config.domain = domain || auth0Config.domain;
                auth0Config.audience = audience || auth0Config.audience;
                auth0Config.scope = scope || auth0Config.scope;
                _this.auth.configure();
                _this.auth.handleAuth();
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_client_http_client_component__ = __webpack_require__("../../../../../src/app/http-client/http-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_redirect_service__ = __webpack_require__("../../../../../src/app/auth/redirect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_9__http_client_http_client_component__["a" /* HttpClientComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__auth_redirect_service__["a" /* RedirectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring__ = __webpack_require__("../../../../querystring-es3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_web__ = __webpack_require__("../../../../auth0-web/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_web___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_web__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthService = (function () {
    function AuthService(router, document) {
        this.router = router;
        this.document = document;
        this.auth0Config = {
            clientID: 'lOWZ0gU498mVSsn40hKLesEJDQbcfQ8A',
            domain: 'bk-samples.auth0.com',
            audience: 'https://contacts.mycompany.com/',
            scope: 'openid get:contacts post:contacts',
            redirectUri: this.document.location.origin + "/callback"
        };
        this.isAuthenticated = __WEBPACK_IMPORTED_MODULE_4_auth0_web__["isAuthenticated"];
        this.handleAuth = __WEBPACK_IMPORTED_MODULE_4_auth0_web__["handleAuthCallback"];
        this.subscribe = __WEBPACK_IMPORTED_MODULE_4_auth0_web__["subscribe"];
        this.logout = __WEBPACK_IMPORTED_MODULE_4_auth0_web__["signOut"];
    }
    AuthService.prototype.configure = function () {
        var _a = this.auth0Config, clientID = _a.clientID, domain = _a.domain, audience = _a.audience, scope = _a.scope;
        var redirectUri = this.document.location.origin + '/callback' +
            '?clientID=' + clientID + '&domain=' + domain + '&audience=' + audience + '&scope=' + Object(__WEBPACK_IMPORTED_MODULE_3_querystring__["stringify"])(scope);
        var updatedConfig = __assign({}, this.auth0Config, { redirectUri: redirectUri });
        __WEBPACK_IMPORTED_MODULE_4_auth0_web__["configure"](updatedConfig);
    };
    AuthService.prototype.login = function () {
        // Auth0 authorize request
        this.configure();
        __WEBPACK_IMPORTED_MODULE_4_auth0_web__["signIn"]();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], Object])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/redirect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedirectService = (function () {
    function RedirectService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RedirectService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/http-client']);
        return false;
    };
    RedirectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RedirectService);
    return RedirectService;
}());



/***/ }),

/***/ "../../../../../src/app/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  Loading...\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = (function () {
    function CallbackComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.handleAuth();
        this.auth.subscribe(function (signedIn) {
            if (signedIn) {
                _this.router.navigate(['/http-client']);
            }
        });
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.auth0-config {\n  background-color: #D0D2D3;\n  color: #5C666F;\n  border-radius: 3px;\n  line-height: 35px;\n}\n\ndiv.auth0-config {\n  padding: 20px;\n  margin-bottom: 15px;\n}\n\ndiv.auth0-config p {\n  margin: 0 0 7px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\ndiv.auth0-config p.property {\n  margin: 0 0 7px 20px;\n}\n\ndiv.auth0-config input {\n  border: 1px #5C666F dashed;\n  background-color: transparent;\n  font-size: 14px;\n  padding: 7px;\n  border-radius: 3px;\n  color: #444;\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  margin-left: 10px;\n  margin-right: 4px;\n}\n\ndiv.sign-in-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  The button at the bottom sends the user to <a href=\"https://auth0.com\" target=\"_blank\">Auth0</a> to sign in.\n  The token generated during the sign-in process is specific to an environment. This environment can be manipulated by\n  changing the following properties:\n</p>\n\n<div class=\"code auth0-config\">\n  <p>&#x7b;</p>\n  <p class=\"property\">\n    clientID:\n    <input type=\"text\" [(ngModel)]=\"auth.auth0Config.clientID\" name=\"name\" required>,\n  </p>\n  <p class=\"property\">\n    domain:\n    <input type=\"text\" [(ngModel)]=\"auth.auth0Config.domain\" name=\"name\" required>,\n  </p>\n  <p class=\"property\">\n    audience:\n    <input type=\"text\" [(ngModel)]=\"auth.auth0Config.audience\" name=\"name\" required>,\n  </p>\n  <p class=\"property\">\n    <span>scope:</span>\n    <input type=\"text\" [(ngModel)]=\"auth.auth0Config.scope\" name=\"name\" required>\n    <span style=\"color: transparent\">,</span>\n  </p>\n  <p>&#x7d;</p>\n</div>\n\n<p>\n  To share a predefine set of properties, we need a link that contains the following query parameters:\n  <code>clientID</code>, <code>domain</code>, <code>audience</code>, and <code>scope</code>:\n\n  <a [routerLink]=\"[ '/' ]\" [queryParams]=\"{\n    clientID: auth.auth0Config.clientID,\n    domain: auth.auth0Config.domain,\n    audience: auth.auth0Config.audience,\n    scope: auth.auth0Config.scope\n  }\">Auth0 Sample App</a>\n</p>\n\n<div class=\"sign-in-container\">\n  <button class=\"btn btn-success\" (click)=\"auth.login()\">Sign In with Auth0</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Subscribe to login status subject
        // If authenticated, subscribe to dragons data observable
        // If not authenticated, unsubscribe from dragons data
        this.authSubscription = this.auth.subscribe(function (loggedIn) {
            if (loggedIn) {
                console.log('do something');
            }
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from observables
        this.authSubscription.unsubscribe();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-client/http-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.http-server {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\ndiv.http-server p {\n  width: 100%;\n}\n\ndiv.http-server input,\ndiv.req-res-box-container input {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  font-size: 14px;\n  padding-left: 15px;\n  margin: 0 5px 0 5px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n  line-height: 30px;\n}\n\ndiv.http-server select {\n  background-color: #44c7f4;\n  color: #fff;\n  display: block;\n  height: 42px;\n  line-height: 42px;\n  border: 1px solid #2cc0f3;\n  border-radius: 3px;\n  -webkit-appearance: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  width: 80px;\n  text-align-last: center;\n  font-size: 14px;\n}\n\ndiv.req-res-box-container {\n  padding-right: 20px;\n  margin-top: 15px;\n}\n\n.req-res-box {\n  width: 100%;\n  border: 1px solid #ddd;\n  height: 100px;\n  border-radius: 3px;\n  padding: 10px;\n  font-size: 14px;\n  resize: vertical;\n  outline: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\ndiv.current-settings {\n  margin-top: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/http-client/http-client.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This is a simple HTTP client that lets you easily send requests that already ships with your <code>access_token</code>.\n  Note that the targeted HTTP server must explicitly accept requests originated from <code>{{document.location.origin}}</code>\n  or must accept requests from anywhere (not advised).\n</p>\n\n<p>Before issuing the request, you can change the HTTP method and URL. You can also define a body when <code>POST</code>\n  or <code>PUT</code> is the selected method.</p>\n\n<div class=\"http-server\">\n  <select #method (change)=\"changeMethod(method.value)\">\n    <option value=\"get\">Get</option>\n    <option value=\"post\" selected>Post</option>\n    <option value=\"put\">Put</option>\n    <option value=\"delete\">Delete</option>\n  </select>\n  <input [(ngModel)]=\"req.url\" type=\"text\">\n  <button class=\"btn btn-success\" (click)=\"sendRequest()\">Send</button>\n</div>\n\n<div class=\"req-res-box-container\" *ngIf=\"this.req.method === 'post' || this.req.method === 'put'\">\n  <label for=\"req-body\">Request Body:</label>\n  <textarea id=\"req-body\" [(ngModel)]=\"req.body\" class=\"req-res-box request-body\"></textarea>\n</div>\n\n<div class=\"req-res-box-container\" *ngIf=\"this.req.method === 'post' || this.req.method === 'put'\">\n  <label for=\"req-type\">Request Body:</label>\n  <input id=\"req-type\" type=\"text\" [(ngModel)]=\"req.contentType\">\n</div>\n\n<div class=\"req-res-box-container\" *ngIf=\"this.req.response\">\n  <label for=\"req-body\">Request Response:</label>\n  <div class=\"req-res-box\">{{this.req.response | json}}</div>\n</div>\n\n<div class=\"current-settings\">\n  The <code>access_token</code> in the current section contains the following <code>scope</code>:\n  <code>{{scope}}</code>. To change it, <a (click)=\"signOut()\">sign out</a>, and issue a new token.\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/http-client/http-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HttpClientComponent = (function () {
    function HttpClientComponent(router, http, auth, document) {
        this.router = router;
        this.http = http;
        this.auth = auth;
        this.document = document;
        this.req = {
            url: 'http://localhost:8080/contacts/',
            method: 'post',
            contentType: 'application/json'
        };
        this.scope = __WEBPACK_IMPORTED_MODULE_5_jwt_decode___default()(localStorage.getItem('access_token')).scope;
    }
    HttpClientComponent.prototype.changeMethod = function (newMethod) {
        this.req.method = newMethod;
        this.req.response = null;
    };
    HttpClientComponent.prototype.sendRequest = function () {
        var _this = this;
        var accessToken = localStorage.getItem('access_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', 'Bearer ' + accessToken)
            .set('Content-Type', this.req.contentType);
        var requestOptions = {
            headers: headers,
        };
        var url = this.req.url;
        var loadResponse = function (data) {
            _this.req.response = data;
        };
        switch (this.req.method) {
            case 'get':
                this.http.get(url, requestOptions).subscribe(loadResponse, loadResponse);
                break;
            case 'post':
                this.http.post(url, JSON.parse(this.req.body), requestOptions).subscribe(loadResponse, loadResponse);
                break;
            case 'put':
                this.http.put(url, JSON.parse(this.req.body), requestOptions).subscribe(loadResponse, loadResponse);
                break;
            case 'delete':
                this.http.delete(url, requestOptions).subscribe(loadResponse, loadResponse);
                break;
        }
    };
    HttpClientComponent.prototype.signOut = function () {
        this.auth.logout();
        this.router.navigate(['/']);
    };
    HttpClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-http-client',
            template: __webpack_require__("../../../../../src/app/http-client/http-client.component.html"),
            styles: [__webpack_require__("../../../../../src/app/http-client/http-client.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], Object])
    ], HttpClientComponent);
    return HttpClientComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map