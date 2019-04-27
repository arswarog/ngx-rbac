(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/admin/posts/posts.component.ts");
/* harmony import */ var _post_post_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post-edit.component */ "./src/app/admin/post/post-edit.component.ts");
/* harmony import */ var ngx_rbac__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-rbac */ "./dist/ngx-rbac/fesm5/ngx-rbac.js");








var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
            },
            {
                path: 'post/:id',
                component: _post_post_edit_component__WEBPACK_IMPORTED_MODULE_6__["PostEditComponent"],
            },
        ],
    },
];
var rules = {
    admin: {
        children: ['human'],
    },
};
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_5__["PostsComponent"],
                _post_post_edit_component__WEBPACK_IMPORTED_MODULE_6__["PostEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_rbac__WEBPACK_IMPORTED_MODULE_7__["NgxRbacModule"].forChild('admin', rules),
            ],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/post/post-edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/admin/post/post-edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{post.title}}</h1>\n<div class=\"post\" *ngIf=\"post\">\n    <div class=\"header\">\n        <div class=\"author\">Author: <a [routerLink]=\"['/user', post.author]\">{{post.author}}</a></div>\n        <div class=\"status\">Status: {{post.status}}</div>\n    </div>\n    <div class=\"content\">{{post.text}}</div>\n</div>\n<h3>Comments:</h3>\n<table>\n    <tr>\n        <th>Author</th>\n        <th>Text</th>\n        <th>Approved</th>\n    </tr>\n    <tr *ngFor=\"let comment of post.comments\">\n        <td>{{comment.author}}</td>\n        <td>{{comment.text}}</td>\n        <td *ngIf=\"comment.approved\">approved</td>\n        <td *ngIf=\"!comment.approved\">\n            not approved\n            <button (click)=\"approve(comment)\">Approve</button>\n        </td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/post/post-edit.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/post/post-edit.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post {\n  border: var(--border) 1px solid;\n  margin: 5px 10px; }\n  .post .header {\n    width: 100%;\n    display: flex;\n    align-items: stretch; }\n  .post .header > div {\n      flex: 1 1;\n      background-color: var(--border); }\n  .post .header .status {\n      text-align: right;\n      padding: 5px; }\n  .post .content {\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvbmd4LXJiYWMvc3JjL2FwcC9hZG1pbi9wb3N0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUErQjtFQUMvQixnQkFBZ0IsRUFBQTtFQUZwQjtJQUtRLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQW9CLEVBQUE7RUFQNUI7TUFVWSxTQUFTO01BQ1QsK0JBQStCLEVBQUE7RUFYM0M7TUFlWSxpQkFBaUI7TUFDakIsWUFBWSxFQUFBO0VBaEJ4QjtJQXFCUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9wb3N0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0IHtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcikgMXB4IHNvbGlkO1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/post/post-edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/post/post-edit.component.ts ***!
  \***************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.interface */ "./src/app/services/posts.interface.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");





var PostEditComponent = /** @class */ (function () {
    function PostEditComponent(activatedRoute, postsService) {
        this.activatedRoute = activatedRoute;
        this.postsService = postsService;
        this.post = null;
    }
    PostEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.post = _this.postsService.getPost(params.id);
            if (!_this.post) {
                _this.post = {
                    id: '',
                    title: 'Post not found',
                    author: '',
                    status: _services_posts_interface__WEBPACK_IMPORTED_MODULE_2__["PostStatus"].Published,
                    text: 'Post not found, try go back',
                    comments: [],
                };
            }
        });
    };
    PostEditComponent.prototype.approve = function (comment) {
    };
    PostEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post-edit.component.html */ "./src/app/admin/post/post-edit.component.html"),
            styles: [__webpack_require__(/*! ./post-edit.component.scss */ "./src/app/admin/post/post-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]])
    ], PostEditComponent);
    return PostEditComponent;
}());



/***/ }),

/***/ "./src/app/admin/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n    <tr>\n        <th>ID</th>\n        <th>Title</th>\n        <th>Author</th>\n        <th>Status</th>\n    </tr>\n    <tr *ngFor=\"let post of posts\">\n        <td><a [routerLink]=\"['post', post.id]\">{{post.id}}</a></td>\n        <td>{{post.title}}</td>\n        <td>{{post.author}}</td>\n        <td>{{post.status}}</td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/admin/posts/posts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/posts/posts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/posts.service */ "./src/app/services/posts.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postsService) {
        this.postsService = postsService;
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.posts = this.postsService.list();
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/admin/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/admin/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map