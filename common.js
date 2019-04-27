(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/posts.interface.ts":
/*!*********************************************!*\
  !*** ./src/app/services/posts.interface.ts ***!
  \*********************************************/
/*! exports provided: PostStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStatus", function() { return PostStatus; });
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "draft";
    PostStatus["ToApprove"] = "to approve";
    PostStatus["Published"] = "published";
})(PostStatus || (PostStatus = {}));


/***/ }),

/***/ "./src/app/services/posts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/posts.service.ts ***!
  \*******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ "./src/app/services/posts.ts");



var PostsService = /** @class */ (function () {
    function PostsService() {
        this.posts = [];
        this.posts = _posts__WEBPACK_IMPORTED_MODULE_2__["demoPosts"];
    }
    PostsService.prototype.list = function () {
        return this.posts;
    };
    PostsService.prototype.getPost = function (id) {
        return this.posts.find(function (post) { return post.id === id; });
    };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/services/posts.ts":
/*!***********************************!*\
  !*** ./src/app/services/posts.ts ***!
  \***********************************/
/*! exports provided: demoPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoPosts", function() { return demoPosts; });
/* harmony import */ var _posts_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.interface */ "./src/app/services/posts.interface.ts");

var demoPosts = [
    {
        id: 'intro',
        title: 'Intro',
        text: 'This is intro',
        status: _posts_interface__WEBPACK_IMPORTED_MODULE_0__["PostStatus"].Published,
        author: 'admin',
        comments: [
            {
                id: '20166af6-cc10-4917-89d3-d39a57ecd757',
                author: 'vasya',
                text: 'It\'s cool!',
                approved: true,
            },
            {
                id: '56fe77ed-3c4b-4bb8-af63-70b9aa5617c9',
                author: 'alex',
                text: 'Yes, it\'s true',
                approved: false,
            },
        ],
    },
    {
        id: 'secret',
        title: 'Secret post',
        text: 'The text about secrets',
        status: _posts_interface__WEBPACK_IMPORTED_MODULE_0__["PostStatus"].Draft,
        author: 'admin',
        comments: [
            {
                id: '16d38125-adc6-4aaa-83da-587a220e86fc',
                author: 'alex',
                text: 'Nice',
                approved: false,
            },
        ],
    },
];


/***/ })

}]);
//# sourceMappingURL=common.js.map