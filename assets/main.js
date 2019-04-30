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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");







var routes = [
    { path: '', redirectTo: '/timeline', pathMatch: 'full' },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{ title }}!\n  </h1>\n  <!-- <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"> -->\n</div>\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'VeryConnect Timeline';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_sails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-sails */ "./node_modules/ngx-sails/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post-form/post-form.component */ "./src/app/post-form/post-form.component.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/comment/comment.component.ts");
/* harmony import */ var _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comment-form/comment-form.component */ "./src/app/comment-form/comment-form.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");



















var socketConfig = { uri: 'http://localhost:1337' };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"],
                _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_12__["PostFormComponent"],
                _comment_comment_component__WEBPACK_IMPORTED_MODULE_13__["CommentComponent"],
                _comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_14__["CommentFormComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_17__["LoginFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_sails__WEBPACK_IMPORTED_MODULE_5__["SailsClientModule"].configureClient(socketConfig)
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:1337';
        this.httpOptions = {
            withCredentials: true
        };
        this._loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "loggedIn", {
        get: function () {
            return this._loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserId = function () {
        if (!this.currentUser) {
            return null;
        }
        return this.currentUser.id;
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.apiUrl + '/signup', user, this.httpOptions);
    };
    AuthService.prototype.login = function (user, cb) {
        var _this = this;
        this.http.post(this.apiUrl + '/login', user, this.httpOptions)
            .subscribe(function (resp) {
            if (resp['user']) {
                _this.currentUser = resp['user'];
                _this._loggedIn.next(true);
            }
            cb(resp['message']);
        }, function (err) {
            cb(err);
        });
    };
    AuthService.prototype.logout = function (cb) {
        var _this = this;
        this.http.get(this.apiUrl + '/logout', this.httpOptions)
            .subscribe(function (resp) {
            _this._loggedIn.next(false);
            cb(resp);
        }, function (err) {
            cb(err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/comment-form/comment-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/comment-form/comment-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- implement form validation if possible -->\n<form #commentForm=\"ngForm\" novalidate (ngSubmit)=\"comment(commentForm)\" autocomplete=\"off\">\n  <div class=\"col-12 comment-input\">\n    <div class=\"input-group\">\n      <textarea\n        name=\"comment\"\n        class=\"form-control\"\n        placeholder=\"Add a comment\"\n        type=\"text\"\n        rows=\"1\"\n        (keydown.enter)=\"comment(commentForm);false\"\n        [(ngModel)]=\"newComment\"></textarea>\n      <div>\n        <button class=\"btn btn-primary sm\" type=\"submit\">Send</button>\n      </div>\n    </div>\n    <small class=\"form-text text-muted\">\n      Shift+Enter newline. Close comments to resync timeline or click the button at the top of timeline.\n    </small>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/comment-form/comment-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/comment-form/comment-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-input {\n  padding: 0px 0px 15px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvd2tlbW9uL1Byb2plY3RzL3RpbWVsaW5lLWZyb250ZW5kL3NyYy9hcHAvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWlucHV0IHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE1cHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comment-form/comment-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comment-form/comment-form.component.ts ***!
  \********************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent() {
        this.commented = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CommentFormComponent.prototype.ngOnInit = function () {
    };
    CommentFormComponent.prototype.comment = function (form) {
        // check for valid input via form instead of regex
        if (this.newComment && this.newComment.trim() !== '') {
            this.commented.emit(this.newComment);
            // use Post Service comment method to update server and client's data
            // console.log(`comment form emitted "${this.newComment}"`);
            form.resetForm();
            // this.newComment = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentFormComponent.prototype, "commented", void 0);
    CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-form',
            template: __webpack_require__(/*! ./comment-form.component.html */ "./src/app/comment-form/comment-form.component.html"),
            styles: [__webpack_require__(/*! ./comment-form.component.scss */ "./src/app/comment-form/comment-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/comment/comment.component.html":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{ comment.name + \":\"}}</h4>\n    <p class=\"card-text\"> {{ comment.contents }}</p>\n    <p>{{ comment.date | date:'d MMMM, h:mm a' }}</p>\n  </div>\n</div>\n -->\n\n<div class=\"comment\">\n  <!-- <a class=\"pull-left\" href=\"#\">\n    <img class=\"avatar\" src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"avatar\">\n  </a> -->    <!-- implement profile pictures -->\n  <div class=\"comment-body\">\n    <div class=\"comment-heading\">\n      <h4 class=\"user\">{{ comment.user.firstName + ' ' + comment.user.lastName }}</h4>\n      <h5 class=\"time\">{{ comment.updatedAt | date:'d MMMM, h:mm a' }}</h5>\n    </div>\n    <p>{{ comment.message }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comment/comment.component.scss":
/*!************************************************!*\
  !*** ./src/app/comment/comment.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment {\n  display: block;\n  width: 100%;\n  margin: 20px 0;\n  /* .comment-body {\n        margin-left: 50px;\n    } */ }\n  .comment .avatar {\n    width: 35px;\n    height: 35px; }\n  .comment .comment-heading {\n    display: block;\n    width: 100%; }\n  .comment .comment-heading .user {\n      font-size: 14px;\n      font-weight: bold;\n      display: inline;\n      margin-top: 0;\n      margin-right: 10px; }\n  .comment .comment-heading .time {\n      font-size: 12px;\n      color: #aaa;\n      margin-top: 0;\n      display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvd2tlbW9uL1Byb2plY3RzL3RpbWVsaW5lLWZyb250ZW5kL3NyYy9hcHAvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUF5QmQ7O09DdEJHLEVEd0JDO0VBOUJSO0lBS1EsV0FBVztJQUNYLFlBQVksRUFBQTtFQU5wQjtJQVNRLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFWbkI7TUFhWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixhQUFhO01BQ2Isa0JBQWtCLEVBQUE7RUFqQjlCO01BcUJZLGVBQWU7TUFDZixXQUFXO01BQ1gsYUFBYTtNQUNiLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICAuYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG4gICAgLmNvbW1lbnQtaGVhZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAudXNlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAuY29tbWVudC1ib2R5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgfSAqL1xuXG59IiwiLmNvbW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwO1xuICAvKiAuY29tbWVudC1ib2R5IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgfSAqLyB9XG4gIC5jb21tZW50IC5hdmF0YXIge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDsgfVxuICAuY29tbWVudCAuY29tbWVudC1oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5jb21tZW50IC5jb21tZW50LWhlYWRpbmcgLnVzZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG4gICAgLmNvbW1lbnQgLmNvbW1lbnQtaGVhZGluZyAudGltZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogI2FhYTtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/comment/comment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comment/comment.component.ts ***!
  \**********************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-comment */ "./src/app/post-comment.ts");



var CommentComponent = /** @class */ (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _post_comment__WEBPACK_IMPORTED_MODULE_2__["Comment"])
    ], CommentComponent.prototype, "comment", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/comment/comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"loginForm\" (submit)=\"onLoginSubmit()\" novalidate autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          id=\"inputEmail\"\n          placeholder=\"Email\"\n          formControlName=\"email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          id=\"inputPassword\"\n          placeholder=\"Password\"\n          formControlName=\"password\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n  </form>\n\n  <p>Email: {{ loginForm.value.email }}</p>\n  <p>Password: {{ loginForm.value.password }}</p>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.createForm();
    }
    LoginFormComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginFormComponent.prototype.onLoginSubmit = function () {
        this.authService.login(this.loginForm.value, function (resp) {
            console.log(resp);
        });
        this.loginForm.reset();
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/login-form/login-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      routerLink=\"timeline\"\n      [routerLinkActive]=\"['active']\">Timeline</a>\n  </li>\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      routerLink=\"profile\"\n      [routerLinkActive]=\"['active']\">Profile</a>\n  </li>\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      routerLink=\"signup\"\n      [routerLinkActive]=\"['active']\"\n      *ngIf=\"!(isLoggedIn$ | async)\">Signup</a>\n  </li>\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      routerLink=\"login\"\n      [routerLinkActive]=\"['active']\"\n      *ngIf=\"!(isLoggedIn$ | async)\">Login</a>\n  </li>\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      routerLink=\"timeline\"\n      *ngIf=\"(isLoggedIn$ | async)\"\n      (click)=\"onLogout();\">Logout</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(authService) {
        this.authService = authService;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.loggedIn;
    };
    NavComponent.prototype.onLogout = function () {
        this.authService.logout(function (resp) {
            console.log(resp);
        });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/post-comment.ts":
/*!*********************************!*\
  !*** ./src/app/post-comment.ts ***!
  \*********************************/
/*! exports provided: User, Comment, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
//refactor with users.ts
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());

var Post = /** @class */ (function () {
    function Post() {
        this.comments = [];
        this.showComments = false;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/post-form/post-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-form/post-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #postForm=\"ngForm\" novalidate (ngSubmit)=\"post(postForm)\" autocomplete=\"off\">\n  <div class=\"input-group\">\n    <textarea\n      name=\"comment\"\n      class=\"form-control\"\n      placeholder=\"Post\"\n      type=\"text\"\n      rows=\"1\"\n      (keydown.enter)=\"post();false\"\n      [(ngModel)]=\"newPost\"></textarea>\n    <div>\n      <button class=\"btn btn-primary sm\" type=\"submit\">Send</button>\n    </div>\n  </div>\n  <small class=\"form-text text-muted\">\n    Shift+Enter newline.\n  </small>\n</form>"

/***/ }),

/***/ "./src/app/post-form/post-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/post-form/post-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtZm9ybS9wb3N0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/post-form/post-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-form/post-form.component.ts ***!
  \**************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostFormComponent = /** @class */ (function () {
    function PostFormComponent() {
        this.posted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PostFormComponent.prototype.post = function () {
        if (this.newPost && this.newPost.trim() !== '') {
            this.posted.emit(this.newPost);
            console.log("Post: \n\"" + this.newPost + "\"");
            this.newPost = undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostFormComponent.prototype, "posted", void 0);
    PostFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-form',
            template: __webpack_require__(/*! ./post-form.component.html */ "./src/app/post-form/post-form.component.html"),
            styles: [__webpack_require__(/*! ./post-form.component.scss */ "./src/app/post-form/post-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"card\">\n  <div class=\"card-header\">\n    <h4 class=\"card-title\">{{ post.name }}</h4>\n  </div>\n  <div class=\"card-body\">\n    <p class=\"card-text\"> {{ post.contents }}</p>\n  </div>\n  <div class=\"card-footer\">\n    {{ post.date | date:'d MMMM, h:mm a' }}\n    <button class=\"btn btn-sm\" [ngClass]=\"enabledComments ? 'btn-secondary' : 'btn-primary'\" (click)=\"toggleComments();\">Comments</button>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"enabledComments\">\n  hide form if not authenticated\n  <app-comment-form></app-comment-form>\n  <div *ngIf=\"post.comments.length == 0\">\n    Be the first to comment!\n  </div>\n  <div class=\"container\" *ngIf=\"post.comments.length > 0\">\n    <app-comment [comment]=\"comment\" *ngFor=\"let comment of post.comments\"></app-comment>\n  </div>\n</div> -->\n\n<div class=\"card gedf-card\">\n    <div class=\"card-header\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n                <div class=\"mr-2\">\n                    <!-- <img class=\"rounded-circle\" width=\"45\" src=\"https://picsum.photos/50/50\" alt=\"\"> -->\n                </div>\n                <div class=\"ml-2\">\n                    <div class=\"h5 m-0\">{{ post.user.firstName + ' ' + post.user.lastName }}</div>\n                    <!-- <div class=\"h7 text-muted\">Miracles Lee Cross</div> -->\n                </div>\n            </div>\n            <div>\n              <!-- implement delete button for current user posts -->\n              <!-- <button type=\"button\" class=\"btn btn-sm btn-danger pull-right\" (click)=\"deletePost();\">Delete</button> -->\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deletePost();\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"card-body\">\n      \n      <div class=\"text-muted h7 mb-2\"> {{ post.updatedAt | date:'d MMMM, h:mm a' }}<!-- <i class=\"fa fa-clock-o\"></i>10 min ago --></div>\n\n      <p class=\"card-text\">\n        {{ post.message }}\n      </p>\n    </div>\n    <div class=\"card-footer\">\n      <!-- <a href=\"#\" class=\"card-link\"><i class=\"fa fa-gittip\"></i> Like</a> -->\n      <button class=\"btn btn-sm\" [ngClass]=\"enabledComments ? 'btn-secondary' : 'btn-primary'\" (click)=\"toggleComments();\">Comments</button>\n      <!-- <a href=\"#\" class=\"card-link\"><i class=\"fa fa-mail-forward\"></i> Share</a> -->\n    </div>\n    <div class=\"container\" *ngIf=\"post.showComments\">\n      <!-- hide form if not authenticated -->\n      <app-comment-form (commented)=\"onComment($event);\"></app-comment-form>\n      <div *ngIf=\"post.comments.length === 0\">\n        Be the first to comment!\n      </div>\n      <ul class=\"list-group comments-list\" *ngIf=\"post.comments.length > 0\">\n        <li class=\"list-group-item\" *ngFor=\"let comment of post.comments\">\n            <app-comment [comment]=\"comment\"></app-comment>\n        </li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comments-list {\n  padding: 20px;\n  list-style-type: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvd2tlbW9uL1Byb2plY3RzL3RpbWVsaW5lLWZyb250ZW5kL3NyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUViLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbW1lbnRzLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeline.service */ "./src/app/timeline.service.ts");
/* harmony import */ var _post_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-comment */ "./src/app/post-comment.ts");




var PostComponent = /** @class */ (function () {
    function PostComponent(timelineService) {
        this.timelineService = timelineService;
        this.enabledComments = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        // implement pub sub without reinitialising
        // console.log('post initialised: ', this.post);
    };
    PostComponent.prototype.toggleComments = function () {
        this.timelineService.toggleComments(this.post.id);
        // this.post.showComments = !this.enabledComments;
        if (this.enabledComments) {
            // get comments to ensure updated or monitor all/comment events from timeline
            //add to service from here
            /* console.log('client getting post details');
            this.sails.get('/post/' + this.post.id)
              .subscribe((resp) => {
                console.log(resp);
                // this.post.comments = resp.data.comments;
              }); */
            // monitor all post events from timeline or only creates?
            /* this.postConn = this.sails.on('post')
              .subscribe((resp) => {
                console.log(resp);
              }); */
            console.log('listening for comments');
            /* this.commentConn = this.sails.on('comment')
              .subscribe((resp) => {
                console.log(resp);
              }); */
        }
        else {
            console.log('listening for comments');
            // only if monitoring event from comment component
            // this.postConn.unsubscribe();
            // this.commentConn.unsubscribe();
        }
    };
    PostComponent.prototype.onComment = function (content) {
        // console.log(content);
        var comment = {
            message: content,
            post: this.post.id
        };
        this.timelineService.createComment(comment)
            .subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
        });
    };
    PostComponent.prototype.deletePost = function () {
        console.log('delete');
        this.timelineService.deletePost(this.post.id)
            .subscribe(function () { }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _post_comment__WEBPACK_IMPORTED_MODULE_3__["Post"])
    ], PostComponent.prototype, "post", void 0);
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"signupForm\" (submit)=\"onSignupSubmit()\" novalidate autocomplete=\"off\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputFName\">First Name</label>\n        <div\n          [ngClass]=\"{\n            'has-error': signupForm.controls.firstName.errors?.required \n            && signupForm.controls.firstName.dirty,\n            'has-success': !signupForm.controls.firstName.errors}\">\n          <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"inputFName\"\n          placeholder=\"First Name\"\n          formControlName=\"firstName\">\n          <ul class=\"help-block\">\n            <li\n              *ngIf=\"signupForm.controls.firstName.errors?.required \n              && signupForm.controls.firstName.dirty\">Required field</li>\n          </ul>  \n        </div>\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputLName\">Last Name</label>\n        <div\n          [ngClass]=\"{\n            'has-error': signupForm.controls.lastName.errors?.required \n            && signupForm.controls.lastName.dirty,\n            'has-success': !signupForm.controls.lastName.errors}\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"inputLName\"\n            placeholder=\"Last Name\"\n            formControlName=\"lastName\">\n          <ul class=\"help-block\">\n            <li\n              *ngIf=\"signupForm.controls.lastName.errors?.required \n              && signupForm.controls.lastName.dirty\">Required field</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          id=\"inputEmail\"\n          placeholder=\"Email\"\n          formControlName=\"email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          id=\"inputPassword\"\n          placeholder=\"Password\"\n          formControlName=\"password\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Sign up</button>\n  </form>\n\n  <p>First Name: {{ signupForm.value.firstName + ' errors:'}}</p><pre>{{ signupForm.controls.firstName.dirty }}</pre>\n  <p>Last Name: {{ signupForm.value.lastName }}</p>\n  <p>Email: {{ signupForm.value.email }}</p>\n  <p>Password: {{ signupForm.value.password }}</p>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".help-block {\n  margin-bottom: 0px; }\n\n.has-error {\n  color: red; }\n\n.has-error input {\n    border: 2px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tvd2tlbW9uL1Byb2plY3RzL3RpbWVsaW5lLWZyb250ZW5kL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVUsRUFBQTs7QUFEZDtJQUdRLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5oYXMtZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgaW5wdXQge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.signupForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    SignupComponent.prototype.onSignupSubmit = function () {
        this.authService.registerUser(this.signupForm.value)
            .subscribe(function (data) {
            console.log(data);
        });
        console.log(this.signupForm.value);
        this.signupForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/timeline.service.ts":
/*!*************************************!*\
  !*** ./src/app/timeline.service.ts ***!
  \*************************************/
/*! exports provided: TimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_sails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-sails */ "./node_modules/ngx-sails/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var TimelineService = /** @class */ (function () {
    function TimelineService(sails, authService) {
        this.sails = sails;
        this.authService = authService;
        this.dataStore = { posts: [], defPosts: [] };
        this._posts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._defPosts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
    }
    Object.defineProperty(TimelineService.prototype, "posts", {
        get: function () {
            return this._posts.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimelineService.prototype, "defPosts", {
        get: function () {
            return this._defPosts.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    TimelineService.prototype.loadAll = function () {
        var _this = this;
        // retrieves all posts via socket
        this.sails.get('/post')
            .subscribe(function (resp) {
            // updates dataStore of posts
            _this.dataStore.posts = resp.data.reverse();
            // emits updated list of posts as a copy of dataStore via _posts Subject
            _this._posts.next(Object.assign({}, _this.dataStore).posts);
        }, function (error) { return console.log('Could not load todos.', error); });
    };
    TimelineService.prototype.watchPosts = function () {
        var _this = this;
        // watches for pub sub events from sails regarding posts
        this.connPost = this.sails.on('post')
            .subscribe(function (resp) {
            console.log('post event!', resp);
            // seperate handler logic based on event verb
            switch (resp.verb) {
                case 'created':
                    // updates dataStore of posts with newly created post
                    _this.dataStore.posts.unshift(resp.data);
                    // emits updated list of posts as a copy of dataStore via _posts Subject
                    _this._posts.next(Object.assign({}, _this.dataStore).posts);
                    break;
                default:
                    // unhandled event verb
                    console.log('unhandled event verb');
            }
        });
    };
    TimelineService.prototype.unwatchPosts = function () {
        this.connPost.unsubscribe();
        if (this.connComment) {
            this.connComment.unsubscribe();
        }
        if (this.connDefPost) {
            this.connDefPost.unsubscribe();
        }
    };
    TimelineService.prototype.resetDefPosts = function () {
        this.unwatchPosts();
        this.dataStore.defPosts = [];
        this._defPosts.next(Object.assign({}, this.dataStore).defPosts.length);
        this.loadAll();
        this.watchPosts();
    };
    // implementing scroll service to maintain view of post on post updates might take more time
    // https://stackblitz.com/edit/angular-scroll-service?file=src%2Fapp%2Fwindow-scroll.service.ts
    TimelineService.prototype.toggleComments = function (id) {
        var _this = this;
        var toggled;
        // toggle showComments boolean of post specified by id
        this.dataStore.posts.forEach(function (post, idx) {
            if (post.id === id) {
                // storing comment state for async posts updates (in case scroll service is implemented)
                _this.dataStore.posts[idx].showComments = !post.showComments;
                // comment state stored in toggled to implement new on post logic
                toggled = _this.dataStore.posts[idx].showComments;
            }
        });
        // emits updated list of posts as a copy of dataStore via _posts Subject
        this._posts.next(Object.assign({}, this.dataStore).posts);
        /* stops timeline async post updates until comments untoggled to prevent need for
        scroll service (avoid too much time spent on trivial features)*/
        console.log('toggled comment', toggled);
        if (toggled) {
            this.unwatchPosts();
            this.connDefPost = this.sails.on('post')
                .subscribe(function (resp) {
                console.log('post event!', resp);
                // seperate handler logic based on event verb
                switch (resp.verb) {
                    case 'created':
                        // updates dataStore of deferred posts with newly created post
                        _this.dataStore.defPosts.push(resp.data);
                        // emits updated count of deferred posts via _defPosts Subject
                        _this._defPosts.next(Object.assign({}, _this.dataStore).defPosts.length);
                        break;
                    case 'addedTo':
                        // updates dataStore post comments with new comment
                        _this.dataStore.posts.map(function (post) {
                            if (post.id === resp.id) {
                                post.comments.unshift(resp.added);
                            }
                        });
                        // emits updated list of posts as a copy of dataStore via _posts Subject
                        _this._posts.next(Object.assign({}, _this.dataStore).posts);
                        break;
                    default:
                        // unhandled event verb
                        console.log('unhandled event verb');
                }
            });
        }
        else {
            // check if any other posts have comments shown before updating with deferred posts
            if (!this.dataStore.posts.find(function (post) { return post.showComments === true; })) {
                this.resetDefPosts();
            }
        }
    };
    TimelineService.prototype.createPost = function (postString) {
        var _this = this;
        var post = {
            message: postString,
            user: this.authService.getUserId()
        };
        console.log(post);
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.sails.post('/post', post)
                .subscribe(function (resp) {
                // updates dataStore of posts with newly created post
                _this.dataStore.posts.unshift(resp.data);
                // emits updated list of posts as a copy of dataStore via _posts Subject
                _this._posts.next(Object.assign({}, _this.dataStore).posts);
                observer.next(resp.status);
                observer.complete();
                // interpret error, send appropriate message for display
            }, function (err) { return observer.error(err); });
        });
    };
    TimelineService.prototype.deletePost = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.sails.delete('/post/' + id)
                .subscribe(function (resp) {
                _this.dataStore.posts.splice(_this.dataStore.posts.findIndex(function (post) { return post.id === id; }), 1);
                _this._posts.next(Object.assign({}, _this.dataStore).posts);
                observer.complete();
            }, function (err) { return observer.error(err); });
        });
    };
    // ensure comment create is working correctly, return interpreted error as per above
    TimelineService.prototype.createComment = function (comment) {
        var _this = this;
        comment.user = this.authService.getUserId();
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.sails.post('/comment', comment)
                .subscribe(function (resp) {
                console.log(resp);
                // updates dataStore of post with newly created comment
                _this.dataStore.posts.map(function (post) {
                    if (post.id === resp.data.post) {
                        post.comments.unshift(resp.data);
                    }
                });
                // emits updated list of posts as a copy of dataStore via _posts Subject
                _this._posts.next(Object.assign({}, _this.dataStore).posts);
                observer.next(resp.status);
                observer.complete();
            }, function (err) { return observer.error(err); });
        });
    };
    TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_sails__WEBPACK_IMPORTED_MODULE_3__["SailsClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], TimelineService);
    return TimelineService;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- hide form if not authenticated -->\n  <app-post-form (posted)=\"onPosted($event);\"></app-post-form>\n  <button class=\"btn btn-primary sm\" *ngIf=\"(defPosts | async) > 0\" (click)=\"reloadTimeline();\">+ {{ defPosts | async }} Posts</button>\n  <div class=\"container\" *ngFor=\"let post of posts | async\">\n    <app-post [post]=\"post\"></app-post>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timeline.service */ "./src/app/timeline.service.ts");



var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(timelineService) {
        this.timelineService = timelineService;
    }
    TimelineComponent.prototype.reloadTimeline = function () {
        this.timelineService.resetDefPosts();
    };
    TimelineComponent.prototype.onPosted = function (message) {
        this.timelineService.createPost(message)
            .subscribe(function (resp) {
            console.log(resp);
        }, function (err) {
            console.log(err);
        });
    };
    TimelineComponent.prototype.ngOnInit = function () {
        this.posts = this.timelineService.posts;
        this.defPosts = this.timelineService.defPosts;
        this.timelineService.loadAll();
        this.timelineService.watchPosts();
    };
    TimelineComponent.prototype.ngOnDestroy = function () {
        this.timelineService.unwatchPosts();
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]])
    ], TimelineComponent);
    return TimelineComponent;
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

module.exports = __webpack_require__(/*! /home/kowkemon/Projects/timeline-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map