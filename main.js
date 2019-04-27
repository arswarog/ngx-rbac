(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-rbac/fesm5/ngx-rbac.js":
/*!*****************************************!*\
  !*** ./dist/ngx-rbac/fesm5/ngx-rbac.js ***!
  \*****************************************/
/*! exports provided: NgxRbacService, NgxRbacComponent, rbacServiceFactory, ROUTES, NgxRbacModule, NgxRbacGuard, AccessibleComponent, RbacDirective, activatedRouteSnapshotToFullPath, activatedRouteSnapshotToRootPath, segmentsToPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRbacService", function() { return NgxRbacService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRbacComponent", function() { return NgxRbacComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rbacServiceFactory", function() { return rbacServiceFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRbacModule", function() { return NgxRbacModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRbacGuard", function() { return NgxRbacGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibleComponent", function() { return AccessibleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RbacDirective", function() { return RbacDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activatedRouteSnapshotToFullPath", function() { return activatedRouteSnapshotToFullPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activatedRouteSnapshotToRootPath", function() { return activatedRouteSnapshotToRootPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentsToPath", function() { return segmentsToPath; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRbacService = /** @class */ (function () {
    function NgxRbacService(rules, config) {
        var _this = this;
        this.rules = rules;
        this.config = config;
        /**
         * List of current roles
         */
        this.roles = {};
        /**
         * List of current roles
         */
        this.roles$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        /**
         * List of all available roles
         */
        this.allRoles = {};
        setInterval((/**
         * @return {?}
         */
        function () { return console.log(_this.rules); }), 5000);
        setTimeout((/**
         * @return {?}
         */
        function () { return console.log(_this.rules); }), 1000);
        // console.log('ROUTES', routes);
        console.log('SERVICE', rules, config);
        this.registerRules(rules);
        this.can = this.can.bind(this);
        this.setBaseRoles(config.defaultRoles || ['default']);
        console.log('INIT RBAC', rules, config);
    }
    /**
     * @private
     * @param {?} roles
     * @return {?}
     */
    NgxRbacService.prototype.nextRoles = /**
     * @private
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        this.roles = roles;
        console.warn('ROLES', this.roles);
        ((/** @type {?} */ (this.roles$))).next(roles);
    };
    /**
     * @return {?}
     */
    NgxRbacService.prototype.getBaseRoles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Object.keys(this.roles).filter((/**
         * @param {?} role
         * @return {?}
         */
        function (role) { return _this.roles[role].base; }));
    };
    /**
     * @param {?} roles
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.setBaseRoles = /**
     * @param {?} roles
     * @param {?=} data
     * @return {?}
     */
    function (roles, data) {
        this.roles = {};
        this.addBaseRoles(roles, data);
    };
    /**
     * @param {?} roles
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.addBaseRoles = /**
     * @param {?} roles
     * @param {?=} data
     * @return {?}
     */
    function (roles, data) {
        var _this = this;
        /** @type {?} */
        var rules = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.roles);
        roles.forEach((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            _this.setRole(rules, role, data);
            rules[role].base = true;
        }));
        this.nextRoles(Object.freeze(rules));
    };
    /**
     * @param {?} rules
     * @return {?}
     */
    NgxRbacService.prototype.registerRules = /**
     * @param {?} rules
     * @return {?}
     */
    function (rules) {
        var _this = this;
        console.log(rules);
        console.log(this.allRoles);
        /** @type {?} */
        var allRoles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.allRoles);
        Object.keys(rules).forEach((/**
         * @param {?} rule
         * @return {?}
         */
        function (rule) { return _this.registerRule(allRoles, rule, rules[rule]); }));
        this.allRoles = Object.freeze(allRoles);
        this.setBaseRoles(this.getBaseRoles());
    };
    /**
     * @private
     * @param {?} rules
     * @param {?} name
     * @param {?} rule
     * @return {?}
     */
    NgxRbacService.prototype.registerRule = /**
     * @private
     * @param {?} rules
     * @param {?} name
     * @param {?} rule
     * @return {?}
     */
    function (rules, name, rule) {
        rules[name] = rule;
        if (rule.children) {
            rule.children.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!(item in rules)) {
                    rules[item] = {};
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} rules
     * @param {?} role
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.setRole = /**
     * @private
     * @param {?} rules
     * @param {?} role
     * @param {?=} data
     * @return {?}
     */
    function (rules, role, data) {
        var _this = this;
        rules[role] = {};
        if (this.rules[role]) {
            if (this.rules[role].children) {
                this.rules[role].children.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return _this.setRole(rules, item, data); }));
            }
        }
    };
    /**
     * @param {?} rolesToCheck
     * @return {?}
     */
    NgxRbacService.prototype.is = /**
     * @param {?} rolesToCheck
     * @return {?}
     */
    function (rolesToCheck) {
        var _this = this;
        /** @type {?} */
        var toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];
        console.log('check', toCheck, toCheck.some((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            /** @type {?} */
            var rule = _this.roles[role];
            return !!rule;
        })));
        return toCheck.some((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            /** @type {?} */
            var rule = _this.roles[role];
            return !!rule;
        }));
    };
    /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.can = /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    function (rolesToCheck, data) {
        var _this = this;
        /** @type {?} */
        var toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];
        return toCheck.some((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            /** @type {?} */
            var rule = _this.roles[role];
            return !!rule;
        }));
    };
    /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.canAll = /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    function (rolesToCheck, data) {
        var _this = this;
        /** @type {?} */
        var toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];
        return toCheck.every((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            /** @type {?} */
            var rule = _this.roles[role];
            return !!rule;
        }));
    };
    /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    NgxRbacService.prototype.canSome = /**
     * @param {?} rolesToCheck
     * @param {?=} data
     * @return {?}
     */
    function (rolesToCheck, data) {
        var _this = this;
        /** @type {?} */
        var toCheck = Array.isArray(rolesToCheck) ? rolesToCheck : [rolesToCheck];
        return toCheck.some((/**
         * @param {?} role
         * @return {?}
         */
        function (role) {
            /** @type {?} */
            var rule = _this.roles[role];
            return !!rule;
        }));
    };
    NgxRbacService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NgxRbacService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['rules',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['config',] }] }
    ]; };
    /** @nocollapse */ NgxRbacService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgxRbacService_Factory() { return new NgxRbacService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])("rules"), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])("config")); }, token: NgxRbacService, providedIn: "root" });
    return NgxRbacService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRbacComponent = /** @class */ (function () {
    function NgxRbacComponent() {
    }
    /**
     * @return {?}
     */
    NgxRbacComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxRbacComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'rbac-ngx-rbac',
                    template: "\n    <p>\n      ngx-rbac works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    NgxRbacComponent.ctorParameters = function () { return []; };
    return NgxRbacComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} route
 * @return {?}
 */
function activatedRouteSnapshotToFullPath(route) {
    return segmentsToPath(route.pathFromRoot);
}
/**
 * @param {?} route
 * @return {?}
 */
function activatedRouteSnapshotToRootPath(route) {
    return segmentsToPath(route.pathFromRoot, route.url);
}
/**
 * @param {?} root
 * @param {?=} minus
 * @return {?}
 */
function segmentsToPath(root, minus) {
    /** @type {?} */
    var path = [];
    root.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.url.forEach((/**
     * @param {?} url
     * @return {?}
     */
    function (url) { return path.push(url); })); }));
    // console.log(path, minus);
    if (minus)
        path.length = path.length - minus.length;
    return '/' + path.map((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.toString(); })).join('/');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AccessibleComponent = /** @class */ (function () {
    function AccessibleComponent(activatedRoute, rbac, router) {
        this.activatedRoute = activatedRoute;
        this.rbac = rbac;
        this.router = router;
    }
    /**
     * @return {?}
     */
    AccessibleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activatedRoute.routeConfig.children)
            throw new Error('AccessibleComponent can not have children, because it can cause a lot of errors with navigation');
        /** @type {?} */
        var children = this.activatedRoute.parent.routeConfig.children
            .filter((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.component !== AccessibleComponent; }))
            .filter((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.data && _this.rbac.can(route.data['roles']); }));
        if (children.length)
            this.router.navigateByUrl(activatedRouteSnapshotToRootPath(this.activatedRoute.snapshot) + '/' + children[0].path);
        else
            this.router.navigateByUrl('/auth/denied');
    };
    AccessibleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'rbac-accessible',
                    template: "<router-outlet></router-outlet>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AccessibleComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: NgxRbacService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    return AccessibleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxRbacGuard = /** @class */ (function () {
    function NgxRbacGuard(rbac, router) {
        this.rbac = rbac;
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    NgxRbacGuard.prototype.canLoad = /**
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function (route, segments) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            if (!route.data || !route.data.roles || !Array.isArray(route.data.roles)) {
                console.warn('Module doesn\'t have roles', route);
                observer.next(true);
                return observer.complete();
            }
            if (_this.rbac.is(route.data.roles)) {
                observer.next(true);
                return observer.complete();
            }
            console.error('You don\'t have access to load this module');
            // if (route.data.denyRoute) {
            // //     this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route) + route.data.denyRoute);
            // } else {
            // //     this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route));
            // }
            observer.next(false);
            return observer.complete();
        }));
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    NgxRbacGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return true;
    };
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    NgxRbacGuard.prototype.canActivateChild = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            console.log('RBAC GUARD', _this.rbac.roles);
            if (!route.data.roles) {
                return observer.next(true);
            }
            if (_this.rbac.can(route.data.roles)) {
                return observer.next(true);
            }
            console.log('DENY TO REDIRECT');
            if (route.data.denyRoute) {
                _this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route) + route.data.denyRoute);
            }
            else {
                _this.router.navigateByUrl(activatedRouteSnapshotToRootPath(route));
            }
            return observer.next(false);
        }));
    };
    NgxRbacGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    NgxRbacGuard.ctorParameters = function () { return [
        { type: NgxRbacService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    /** @nocollapse */ NgxRbacGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgxRbacGuard_Factory() { return new NgxRbacGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(NgxRbacService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, token: NgxRbacGuard, providedIn: "root" });
    return NgxRbacGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RbacDirective = /** @class */ (function () {
    function RbacDirective(el, service) {
        this.el = el;
        this.service = service;
        this.class = {
            allow: 'rbac-allow',
            deny: 'rbac-deny',
        };
    }
    /**
     * @return {?}
     */
    RbacDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription = this.service.roles$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.warn))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.update(); }));
    };
    /**
     * @return {?}
     */
    RbacDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RbacDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log("ngxRbacClass \"" + this.rule + "\"", this.class);
        this.update();
    };
    /**
     * @return {?}
     */
    RbacDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        console.log(this.service.roles, this.class);
        if (this.service.can(this.rule)) {
            console.log('allow');
            if (this.class.deny) {
                this.el.nativeElement.classList.remove(this.class.deny || '');
            }
            if (this.class.allow) {
                this.el.nativeElement.classList.add(this.class.allow || '');
            }
        }
        else {
            console.log('deny');
            if (this.class.allow) {
                this.el.nativeElement.classList.remove(this.class.allow || '');
            }
            if (this.class.deny) {
                this.el.nativeElement.classList.add(this.class.deny || '');
            }
        }
    };
    RbacDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxRbac]',
                },] }
    ];
    /** @nocollapse */
    RbacDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: NgxRbacService }
    ]; };
    RbacDirective.propDecorators = {
        rule: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngxRbac',] }],
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngxRbacClass',] }]
    };
    return RbacDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ROUTES = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('ROUTES');
// let NB_INSTANCES = 0;
//
// export const UNIQUE_ID = new InjectionToken<string>("UNIQUE_ID");
//
// export const UNIQUE_ID_PROVIDER = {
//     provide: UNIQUE_ID,
//     useFactory: () => "my-unique-id-" + (NB_INSTANCES++)
// };
var NgxRbacModule = /** @class */ (function () {
    function NgxRbacModule() {
    }
    /**
     * @param {?=} rules
     * @param {?=} config
     * @return {?}
     */
    NgxRbacModule.forRoot = /**
     * @param {?=} rules
     * @param {?=} config
     * @return {?}
     */
    function (rules, config) {
        if (rules === void 0) { rules = {}; }
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxRbacModule,
            providers: [
                // {provide: 'rules', useValue: rules, multi: true},
                // {provide: 'config', useValue: config},
                rbacServiceFactory(rules, config),
                // NgxRbacService,
                NgxRbacGuard,
            ],
        };
    };
    /**
     * @param {?} section
     * @param {?} rules
     * @return {?}
     */
    NgxRbacModule.forChild = /**
     * @param {?} section
     * @param {?} rules
     * @return {?}
     */
    function (section, rules) {
        return {
            ngModule: NgxRbacModule,
            providers: [
                rbacServiceFactory(rules, {}),
                // {provide: 'section', useValue: section},
                // {provide: 'rules', useValue: rules, multi: true},
                // NgxRbacService,
                NgxRbacGuard,
            ],
        };
    };
    NgxRbacModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    ],
                    declarations: [
                        NgxRbacComponent,
                        AccessibleComponent,
                        RbacDirective,
                    ],
                    exports: [
                        NgxRbacComponent,
                        AccessibleComponent,
                        RbacDirective,
                    ],
                },] }
    ];
    return NgxRbacModule;
}());
/** @type {?} */
var rbacService = null;
/**
 * @param {?} rules
 * @param {?} config
 * @return {?}
 */
function rbacServiceFactory(rules, config) {
    console.log('new rbac service', rules, config);
    if (rbacService) {
        console.log('add rules');
        rbacService.registerRules(rules);
    }
    else {
        rbacService = new NgxRbacService(rules, config);
    }
    console.log('all roles', rbacService.allRoles);
    return [{
            provide: NgxRbacService,
            // useFactory: () => rbacService,
            useValue: rbacService,
        }];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-rbac.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"common",
		"admin-admin-module"
	],
	"./client/client.module": [
		"./src/app/client/client.module.ts",
		"common",
		"client-client-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <header>\n        <div class=\"container\">\n            <a routerLink=\"/\">NGX RBAC</a>\n            <ul class=\"navbar\">\n                <li><a [routerLink]=\"['/post/intro']\">Intro</a></li>\n                <li><a [routerLink]=\"['/post/secret']\">Secret</a></li>\n                <li><a [routerLink]=\"['/admin']\" ngxRbac=\"admin\" [ngxRbacClass]=\"{deny: 'disabled'}\">Admin</a></li>\n            </ul>\n        </div>\n    </header>\n    <main>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n        <app-toolbox></app-toolbox>\n    </main>\n    <footer>\n        <div class=\"container\">\n            footer\n        </div>\n    </footer>\n</div>\n"

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
/* harmony import */ var ngx_rbac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-rbac */ "./dist/ngx-rbac/fesm5/ngx-rbac.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(rbac) {
        this.rbac = rbac;
        this.title = 'ngx-rbac-demo';
        console.log(rbac);
        this.rbac.setBaseRoles(['admin']);
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_rbac__WEBPACK_IMPORTED_MODULE_2__["NgxRbacService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_rbac__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-rbac */ "./dist/ngx-rbac/fesm5/ngx-rbac.js");
/* harmony import */ var _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toolbox/toolbox.component */ "./src/app/toolbox/toolbox.component.ts");








var routes = [
    {
        path: '',
        loadChildren: './client/client.module#ClientModule',
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [ngx_rbac__WEBPACK_IMPORTED_MODULE_5__["NgxRbacGuard"]],
        data: {
            roles: ['admin', 'moderator'],
        },
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var rules = {
    admin: {
        children: ['moderator', 'user'],
    },
    moderator: {
        children: ['user'],
    },
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_6__["ToolboxComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { enableTracing: true }),
                ngx_rbac__WEBPACK_IMPORTED_MODULE_5__["NgxRbacModule"].forRoot(rules, { defaultRoles: ['user'] }),
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./src/app/services/users.ts");



var UsersService = /** @class */ (function () {
    function UsersService() {
        this.users = _users__WEBPACK_IMPORTED_MODULE_2__["demoUsers"];
    }
    UsersService.prototype.list = function () {
        return this.users;
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/services/users.ts":
/*!***********************************!*\
  !*** ./src/app/services/users.ts ***!
  \***********************************/
/*! exports provided: demoUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoUsers", function() { return demoUsers; });
var demoUsers = [
    {
        id: 'admin',
        name: 'Admin vseya Rusi',
        roles: ['admin'],
    },
    {
        id: 'modya',
        name: 'I am groot!',
        roles: ['moderator'],
    },
    {
        id: 'vasya',
        name: 'Skromny user',
        roles: ['user'],
    },
];


/***/ }),

/***/ "./src/app/toolbox/toolbox.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbox/toolbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>Control</h1>\n    <h3>Users</h3>\n    <ul class=\"roles\">\n        <li *ngFor=\"let item of users\"\n            [ngClass]=\"{selected: item.id === user}\"\n            class=\"link\"\n            (click)=\"setUser(item)\"\n        >{{item.id}}</li>\n    </ul>\n    <h3>Roles</h3>\n    <ul class=\"roles\">\n        <li *ngFor=\"let role of roles | keyvalue\"\n            [class]=\"role.value\"\n        >{{role.key}}</li>\n    </ul>\n    <pre>{{rbacService.allRoles | json}}</pre>\n    <pre>{{rbacService.roles | json}}</pre>\n</div>\n"

/***/ }),

/***/ "./src/app/toolbox/toolbox.component.scss":
/*!************************************************!*\
  !*** ./src/app/toolbox/toolbox.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toolbox/toolbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbox/toolbox.component.ts ***!
  \**********************************************/
/*! exports provided: ToolboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxComponent", function() { return ToolboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_rbac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-rbac */ "./dist/ngx-rbac/fesm5/ngx-rbac.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");




var ToolboxComponent = /** @class */ (function () {
    function ToolboxComponent(rbacService, usersService) {
        this.rbacService = rbacService;
        this.usersService = usersService;
        this.user = 'modya';
        this.users = [];
        this.roles = {};
    }
    ToolboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.usersService.list();
        this.setUser(this.users[1]);
        this.rbacService.roles$.subscribe(function () { return _this.updateRoles(); });
    };
    ToolboxComponent.prototype.setUser = function (user) {
        this.user = user.id;
        this.rbacService.setBaseRoles(user.roles);
    };
    ToolboxComponent.prototype.updateRoles = function () {
        var _this = this;
        var list = {};
        Object.keys(this.rbacService.allRoles).forEach(function (name) { return list[name] = 'disabled'; });
        Object.keys(this.rbacService.roles).forEach(function (name) { return list[name] = (_this.rbacService.roles[name].base) ? 'selected' : ''; });
        this.roles = list;
    };
    ToolboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbox',
            template: __webpack_require__(/*! ./toolbox.component.html */ "./src/app/toolbox/toolbox.component.html"),
            styles: [__webpack_require__(/*! ./toolbox.component.scss */ "./src/app/toolbox/toolbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_rbac__WEBPACK_IMPORTED_MODULE_2__["NgxRbacService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], ToolboxComponent);
    return ToolboxComponent;
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

module.exports = __webpack_require__(/*! /srv/ngx-rbac/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map