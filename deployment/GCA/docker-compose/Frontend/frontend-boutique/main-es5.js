function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./order-complete/order-complete.component */
    "./src/app/order-complete/order-complete.component.ts");

    var routes = [{
      path: '',
      component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }, {
      path: 'orderComplete',
      component: _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_4__["OrderCompleteComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/cart.service */
    "./src/app/shared/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["/cart"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cartService) {
        _classCallCheck(this, AppComponent);

        this.cartService = cartService;
        this.title = 'frontend-boutique';
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"];
        this.cartAmount = 0;
        this.hasUserId = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (!localStorage.getItem('userId')) {
            this.cartService.createUser().subscribe(function (user) {
              console.log(user);
              _this.hasUserId = true;
              localStorage.setItem('userId', user.userId);
            });
          } else {
            console.log('Existing user found: ', localStorage.getItem('userId'));
            this.hasUserId = true;
            this.cartService.getCartAmount().subscribe(function (amount) {
              _this.cartService.setCartAmount(amount);
            });
          }

          this.cartService.shoppingCartItemsCount$.subscribe(function (n) {
            return _this.cartAmount = n;
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 7,
      consts: [[1, "header"], [1, "logoWrapper"], [1, "logo", 3, "routerLink"], [1, "shoppingCart", 3, "routerLink"], [3, "icon"], [1, "numberIcon"], [1, "shoppingCartText"], [1, "banner"], ["class", "router-container", 4, "ngIf"], [1, "router-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Warenkorb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 2, 0, "div", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShoppingCart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasUserId);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".header[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color:  rgb(40, 43, 48);\r\n\r\n}\r\n\r\n.banner[_ngcontent-%COMP%] {\r\n  background: black;\r\n  width: 100%;\r\n  height: 205px;\r\n  background-image: url('bannerv2.PNG');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;\r\n}\r\n\r\n.router-container[_ngcontent-%COMP%]{\r\n  margin: 15px;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right:50px;\r\n  color: white;\r\n  font-size: 15px;\r\n  border-style: solid;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  border-width: 2px;\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n  top: 0;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover {\r\n  border-color: #3a75fd;\r\n}\r\n\r\n.shoppingCartText[_ngcontent-%COMP%]{\r\n  margin: 0 0 0 10px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  background-image: url('logo.png');\r\n  width: 200px;\r\n  height: 50px;\r\n  background-repeat: no-repeat;\r\n  background-size: 200px 50px;\r\n\r\n}\r\n\r\n.logoWrapper[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  display: flex;\r\n  width: 215px;\r\n}\r\n\r\n.numberIcon[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  position: absolute;\r\n  left: 20px;\r\n  background-color: red;\r\n  padding: 1px;\r\n  border-radius: 10px;\r\n  width: 10px;\r\n  height: 10px;\r\n  text-align: center;\r\n  line-height: 1;\r\n  top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQzs7QUFFcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBMkQ7RUFDM0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUNBQXVEO0VBQ3ZELFlBQVk7RUFDWixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDJCQUEyQjs7QUFFN0I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICByZ2IoNDAsIDQzLCA0OCk7XHJcblxyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL3Jlc3NvdXJjZS9pbWFnZS9iYW5uZXJ2Mi5QTkdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJveC1zaGFkb3c6IDAgLjVyZW0gMXJlbSByZ2JhKDAsMCwwLC4xNSkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91dGVyLWNvbnRhaW5lcntcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbi5zaG9wcGluZ0NhcnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDo1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG59XHJcbi5zaG9wcGluZ0NhcnQ6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzNhNzVmZDtcclxufVxyXG5cclxuLnNob3BwaW5nQ2FydFRleHR7XHJcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG59XHJcbi5sb2dvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9yZXNzb3VyY2UvaW1hZ2UvbG9nby5wbmdcIik7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHggNTBweDtcclxuXHJcbn1cclxuLmxvZ29XcmFwcGVye1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDIxNXB4O1xyXG59XHJcblxyXG4ubnVtYmVySWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRvcDogNXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./order-complete/order-complete.component */
    "./src/app/order-complete/order-complete.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"], _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_8__["OrderCompleteComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"], _order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_8__["OrderCompleteComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/products.service */
    "./src/app/shared/products.service.ts");
    /* harmony import */


    var _shared_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/cart.service */
    "./src/app/shared/cart.service.ts");
    /* harmony import */


    var _shared_shipping_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shipping.service */
    "./src/app/shared/shipping.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/checkout.service */
    "./src/app/shared/checkout.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    function CartComponent_h1_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Warenkorb (", ctx_r0.cartItem.length, " Artikel)");
      }
    }

    function CartComponent_h1_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Warenkorb");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Es befinden sich keine Artikel im Warenkorb. Gehe zur Startseite und suche dir ein Artikel aus.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function CartComponent_div_3_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + product_r6.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r6.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r6.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r6.price, " \u20AC ");
      }
    }

    function CartComponent_div_3_p_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bitte f\xFClle die fehlenden Informationen aus.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/"];
    };

    var _c2 = function _c2(a0) {
      return {
        "invalid": a0
      };
    };

    function CartComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Weiter shoppen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.deleteCart();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Warenkorb leeren");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Artikel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Preis ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CartComponent_div_3_tr_20_Template, 11, 6, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Artikelkosten:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Versandkosten:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Gesamtsumme:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Deine Informationen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Gib die Versandinformationen ein, damit wir wissen, wohin wir deine Klamotten schicken m\xFCssen.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CartComponent_div_3_p_47_Template, 2, 0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateName($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.checkEmail($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_50_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.updateStreet($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.updateZip($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_53_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.updateCity($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Kreditkarte");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Gib die Kreditkarteninformationen ein, um die Bestellung abzuschlie\xDFen.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_58_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.checkCreditCard($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.checkMonthYear($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CartComponent_div_3_Template_input_keyup_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.checkCCV($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_div_click_62_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.checkout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Bestellung abschlie\xDFen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faShoppingCart);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTrash);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cartItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.articleCost, "\u20AC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.shippingCost, "\u20AC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.shippingCost + ctx_r3.articleCost, "\u20AC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showMissingInformationHint);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c2, !ctx_r3.validName));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, !ctx_r3.validEmail));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, !ctx_r3.validStreet));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, !ctx_r3.validZip));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, !ctx_r3.validCity));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, !ctx_r3.validCreditNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c2, !ctx_r3.validMonthYear));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c2, !ctx_r3.validCCV));
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(productService, cartService, shippingService, router, checkoutService) {
        _classCallCheck(this, CartComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.shippingService = shippingService;
        this.router = router;
        this.checkoutService = checkoutService;
        this.cartItem = [];
        this.shippingCost = 0;
        this.articleCost = 0;
        this.showMissingInformationHint = false;
        this.validName = true;
        this.validStreet = true;
        this.validCity = true;
        this.validZip = true;
        this.validEmail = true;
        this.validMonthYear = true;
        this.validCreditNumber = true;
        this.validCCV = true; // Icon

        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"]; // Checkoutitem:

        this.checkoutData = {
          userID: '',
          firstLastName: '',
          shippingCost: 0,
          totalPrice: 0,
          creditCardInformation: {
            number: '',
            monthAndYear: '',
            ccv: ''
          },
          street: '',
          zip: '',
          city: '',
          email: ''
        };
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.cartService.getCart().subscribe(function (data) {
            if (data === null) data = [];
            _this2.cartItem = data;
            data.forEach(function (x) {
              return _this2.articleCost += x.price;
            });

            _this2.shippingService.getShippingCost(_this2.articleCost).subscribe(function (n) {
              _this2.shippingCost = n;
            });
          });
        }
      }, {
        key: "checkEmail",
        value: function checkEmail(email) {
          var regex = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$';

          if (email.match(regex) == null) {
            this.validEmail = false;
            this.checkoutData.email = '';
          } else {
            this.validEmail = true;
            this.checkoutData.email = email;
          }

          if (email === '') {
            this.validEmail = true;
          }
        }
      }, {
        key: "checkCreditCard",
        value: function checkCreditCard(card) {
          var regex = '\\d{4}-?\\d{4}-?\\d{4}-?\\d{4}';

          if (card.match(regex) == null) {
            this.validCreditNumber = false;
            this.checkoutData.creditCardInformation.number = '';
          } else {
            this.validCreditNumber = true;
            this.checkoutData.creditCardInformation.number = card;
          }

          if (card === '') {
            this.validCreditNumber = true;
          }
        }
      }, {
        key: "checkMonthYear",
        value: function checkMonthYear(monthYear) {
          var regex = '^((0[1-9])|(1[0-2]))\\/(\\d{2})$';

          if (monthYear.match(regex) == null) {
            this.validMonthYear = false;
            this.checkoutData.creditCardInformation.monthAndYear = '';
          } else {
            this.validMonthYear = true;
            this.checkoutData.creditCardInformation.monthAndYear = monthYear;
          }

          if (monthYear === '') {
            this.validMonthYear = true;
          }
        }
      }, {
        key: "checkCCV",
        value: function checkCCV(ccv) {
          var regex = '^([0-9]{3,4})$';

          if (ccv.match(regex) == null) {
            this.validCCV = false;
            this.checkoutData.creditCardInformation.ccv = '';
          } else {
            this.validCCV = true;
            this.checkoutData.creditCardInformation.ccv = ccv;
          }

          if (ccv === '') {
            this.validCCV = true;
          }
        }
      }, {
        key: "deleteCart",
        value: function deleteCart() {
          var _this3 = this;

          this.cartService.deleteCart().subscribe(function () {
            _this3.cartService.setCartAmount(0);

            _this3.cartItem = [];

            _this3.router.navigate(['/']);
          });
        }
      }, {
        key: "updateName",
        value: function updateName(name) {
          this.checkoutData.firstLastName = name;
          this.validName = true;
        }
      }, {
        key: "updateStreet",
        value: function updateStreet(street) {
          this.checkoutData.street = street;
          this.validStreet = true;
        }
      }, {
        key: "updateZip",
        value: function updateZip(zip) {
          this.checkoutData.zip = zip;
          this.validZip = true;
        }
      }, {
        key: "updateCity",
        value: function updateCity(city) {
          this.checkoutData.city = city;
          this.validCity = true;
        }
      }, {
        key: "checkout",
        value: function checkout() {
          var _this4 = this;

          // Validate Data
          this.validName = this.checkoutData.firstLastName !== undefined && this.checkoutData.firstLastName.length > 0;
          this.validStreet = this.checkoutData.street !== undefined && this.checkoutData.street.length > 0;
          this.validZip = this.checkoutData.zip !== undefined && this.checkoutData.zip.length > 0;
          this.validCity = this.checkoutData.city !== undefined && this.checkoutData.city.length > 0;
          this.validEmail = this.checkoutData.email !== undefined && this.checkoutData.email.length > 0;
          this.validCreditNumber = this.validCreditNumber && this.checkoutData.creditCardInformation.number.length > 0;
          this.validMonthYear = this.validMonthYear && this.checkoutData.creditCardInformation.monthAndYear.length > 0;
          this.validCCV = this.validCCV && this.checkoutData.creditCardInformation.ccv.length > 0; // Abort when parameters are invalid

          if (!this.validName || !this.validStreet || !this.validZip || !this.validCity || !this.validEmail || !this.validCreditNumber || !this.validMonthYear || !this.validCCV) {
            this.showMissingInformationHint = true;
            return;
          } // Fill missing information


          this.checkoutData.userID = localStorage.getItem('userId');
          this.checkoutData.totalPrice = this.articleCost;
          this.checkoutData.shippingCost = this.shippingCost; // Execute checkout

          this.checkoutService.postCart(this.checkoutData).subscribe(function (x) {
            _this4.checkoutService.setCheckoutSummary(x);

            _this4.cartService.setCartAmount(0);

            _this4.cartItem = [];

            _this4.cartService.createUser().subscribe(function (user) {
              localStorage.setItem('userId', user.userId);
            });

            _this4.router.navigate(['/orderComplete']);
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shipping_service__WEBPACK_IMPORTED_MODULE_4__["ShippingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_6__["CheckoutService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["class", "contentWrapper", 4, "ngIf"], [1, "contentWrapper"], [1, "menu"], [1, "shoppingCart", 3, "routerLink"], [1, "continueShoppingIcon", 3, "icon"], [1, "shoppingCartText"], [1, "shoppingCart", 3, "click"], [1, "deleteCartIcon", 3, "icon"], [1, "content"], ["class", "product-showcase", 4, "ngFor", "ngForOf"], [1, "summaryLine"], [1, "contact"], [1, "contactContent"], ["class", "missingInformationHint", 4, "ngIf"], ["placeholder", "Vor- und Nachname", 3, "ngClass", "keyup"], ["placeholder", "E-Mail Adresse", 3, "ngClass", "keyup"], ["placeholder", "Stra\xDFe und Nummer", 3, "ngClass", "keyup"], [1, "inputWrapper"], ["placeholder", "Postleitzahl", 1, "zip", 3, "ngClass", "keyup"], ["placeholder", "Stadt", 1, "city", 3, "ngClass", "keyup"], [1, "creditCardHeader"], ["placeholder", "xxxx-xxxx-xxxx-xxxx", 3, "ngClass", "keyup"], ["placeholder", "MM/YY", 1, "city", 3, "ngClass", "keyup"], ["placeholder", "CVV", 1, "creditCard", 3, "ngClass", "keyup"], [1, "confirmOrder", 3, "click"], [1, "product-showcase"], [1, "imageColumn"], [1, "image-container", 3, "ngStyle"], [1, "missingInformationHint"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_h1_0_Template, 2, 1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_h1_1_Template, 2, 0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_p_2_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 64, 33, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem && ctx.cartItem.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem === null || ctx.cartItem.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem === null || ctx.cartItem.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItem && ctx.cartItem.length != 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  width: 50%;\r\n  min-height: 200px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n  min-width: 50px;\r\n}\r\n\r\n.summaryLine[_ngcontent-%COMP%]{\r\n  border-top-width: 3px;\r\n  border-top-style: solid;\r\n  border-top-color: rgb(40, 43, 48);\r\n}\r\n\r\n.image-container[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: cover;\r\n}\r\n\r\n.imageColumn[_ngcontent-%COMP%] {\r\n  width: 75px;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  border-style: solid;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  border-width: 2px;\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n  width: 150px;\r\n  color: rgb(40, 43, 48);\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover {\r\n  border-color: #3a75fd;\r\n\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover   .deleteCartIcon[_ngcontent-%COMP%] {\r\n  color: darkred;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover   .continueShoppingIcon[_ngcontent-%COMP%] {\r\n  color: darkgreen;\r\n}\r\n\r\n.shoppingCartText[_ngcontent-%COMP%]{\r\n  margin: 0 0 0 10px;\r\n}\r\n\r\n.contentWrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  flex-direction: column;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]{\r\n  margin-right: 15px;\r\n}\r\n\r\n.zip[_ngcontent-%COMP%]{\r\n\r\n  width: 75px !important;\r\n}\r\n\r\n.city[_ngcontent-%COMP%]{\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.invalid[_ngcontent-%COMP%] {\r\n  border: 1px solid red!important;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  margin-right: 15px;\r\n  border-radius: 15px;\r\n  border: 1px solid rgb(40, 43, 48);\r\n}\r\n\r\n.inputWrapper[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  width: calc(100% + 20px);\r\n}\r\n\r\n.creditCard[_ngcontent-%COMP%] {\r\n  margin-right: 0 !important;\r\n  margin-left: 5px;\r\n}\r\n\r\n.creditCardHeader[_ngcontent-%COMP%]{\r\n  margin-top: 15px !important;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n  display:flex;\r\n  width: 40%;\r\n}\r\n\r\n.contactContent[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  width: 350px;\r\n}\r\n\r\n.confirmOrder[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  text-align: center;\r\n  padding: 10px 5px 10px 5px;\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  cursor: pointer;\r\n  border-radius: 18px;\r\n  border-color: #272b30;\r\n  width: 100%;\r\n}\r\n\r\n[hidden][_ngcontent-%COMP%] { display: none !important;}\r\n\r\n.missingInformationHint[_ngcontent-%COMP%] {\r\n  color:red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHFCQUFxQjs7QUFFdkI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFHQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBQ0EsV0FBVyx3QkFBd0IsQ0FBQzs7QUFFcEM7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIG1pbi13aWR0aDogNTBweDtcclxufVxyXG4uc3VtbWFyeUxpbmV7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogM3B4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig0MCwgNDMsIDQ4KTtcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmltYWdlQ29sdW1uIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuLnNob3BwaW5nQ2FydCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBjb2xvcjogcmdiKDQwLCA0MywgNDgpO1xyXG59XHJcbi5zaG9wcGluZ0NhcnQ6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzNhNzVmZDtcclxuXHJcbn1cclxuLnNob3BwaW5nQ2FydDpob3ZlciAuZGVsZXRlQ2FydEljb24ge1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG59XHJcbi5zaG9wcGluZ0NhcnQ6aG92ZXIgLmNvbnRpbnVlU2hvcHBpbmdJY29uIHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG59XHJcblxyXG4uc2hvcHBpbmdDYXJ0VGV4dHtcclxuICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50V3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0IGgxe1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jb250YWN0e1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnppcHtcclxuXHJcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNpdHl7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnZhbGlkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQhaW1wb3J0YW50O1xyXG59XHJcbi5jb250YWN0IGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDQwLCA0MywgNDgpO1xyXG59XHJcblxyXG5cclxuLmlucHV0V3JhcHBlciB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxufVxyXG5cclxuLmNyZWRpdENhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5jcmVkaXRDYXJkSGVhZGVye1xyXG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcbi5jb250YWN0Q29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5jb25maXJtT3JkZXIge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzI3MmIzMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5baGlkZGVuXSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9XHJcblxyXG4ubWlzc2luZ0luZm9ybWF0aW9uSGludCB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: _shared_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _shared_shipping_service__WEBPACK_IMPORTED_MODULE_4__["ShippingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_checkout_service__WEBPACK_IMPORTED_MODULE_6__["CheckoutService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order-complete/order-complete.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/order-complete/order-complete.component.ts ***!
    \************************************************************/

  /*! exports provided: OrderCompleteComponent */

  /***/
  function srcAppOrderCompleteOrderCompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderCompleteComponent", function () {
      return OrderCompleteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_checkout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/checkout.service */
    "./src/app/shared/checkout.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function OrderCompleteComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + product_r1.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.description);
      }
    }

    var OrderCompleteComponent = /*#__PURE__*/function () {
      function OrderCompleteComponent(checkoutServie, router) {
        _classCallCheck(this, OrderCompleteComponent);

        this.checkoutServie = checkoutServie;
        this.router = router;
        this.faShoppingCart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"];
        this.orderSummary = null;
      }

      _createClass(OrderCompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderSummary = this.checkoutServie.getCheckoutSummary();

          if (this.orderSummary === null) {
            window.open('http://localhost:4200');
          }
        }
      }, {
        key: "goHome",
        value: function goHome() {
          window.open('http://localhost:4200', '_self');
        }
      }]);

      return OrderCompleteComponent;
    }();

    OrderCompleteComponent.ɵfac = function OrderCompleteComponent_Factory(t) {
      return new (t || OrderCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    OrderCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderCompleteComponent,
      selectors: [["app-order-complete"]],
      decls: 57,
      vars: 11,
      consts: [[1, "wrapper"], [1, "articleView"], ["class", "product-showcase", 4, "ngFor", "ngForOf"], [1, "informationView"], [1, "informationViewContent"], [1, "shoppingCart", 3, "click"], [1, "continueShoppingIcon", 3, "icon"], [1, "shoppingCartText"], [1, "product-showcase"], [1, "imageColumn"], [1, "image-container", 3, "ngStyle"]],
      template: function OrderCompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bestellung abgeschlossen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xDCbersicht");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderCompleteComponent_tr_12_Template, 8, 5, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Artikelkosten: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Versandkosten: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tracking-Nummer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Anschrift");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stra\xDFe: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ort: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "E-Mail: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Kreditkarte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Kreditkartennummer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderCompleteComponent_Template_div_click_53_listener() {
            return ctx.goHome();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Weiter shoppen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderSummary.products);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.orderSummary.totalCosts, " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.orderSummary.shippingCosts, " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderSummary.trackingNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderSummary.personalData.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderSummary.personalData.street);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.orderSummary.personalData.zip, " ", ctx.orderSummary.personalData.city, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderSummary.personalData.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderSummary.paymentData.creditCardNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShoppingCart);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".wrapper[_ngcontent-%COMP%] {\r\n  display:flex;\r\n}\r\n\r\n.articleView[_ngcontent-%COMP%]{\r\n  width: 25%;\r\n  min-width: 300px;\r\n  flex-direction: column;\r\n}\r\n\r\n.informationView[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: 50px;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  width: 75%;\r\n  min-height: 200px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n  min-width: 50px;\r\n}\r\n\r\n.image-container[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  background-size: cover;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  border-style: solid;\r\n  padding: 10px;\r\n  border-radius: 15px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  border-width: 2px;\r\n  margin-top: 5px;\r\n  cursor: pointer;\r\n  width: 150px;\r\n  color: rgb(40, 43, 48);\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover {\r\n  border-color: #3a75fd;\r\n\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover   .deleteCartIcon[_ngcontent-%COMP%] {\r\n  color: darkred;\r\n}\r\n\r\n.shoppingCart[_ngcontent-%COMP%]:hover   .continueShoppingIcon[_ngcontent-%COMP%] {\r\n  color: darkgreen;\r\n}\r\n\r\n.shoppingCartText[_ngcontent-%COMP%]{\r\n  margin: 0 0 0 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItY29tcGxldGUvb3JkZXItY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UscUJBQXFCOztBQUV2Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1jb21wbGV0ZS9vcmRlci1jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmFydGljbGVWaWV3e1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb25WaWV3IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxudGgsIHRkIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBtaW4td2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2hvcHBpbmdDYXJ0IHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGNvbG9yOiByZ2IoNDAsIDQzLCA0OCk7XHJcbn1cclxuLnNob3BwaW5nQ2FydDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2E3NWZkO1xyXG5cclxufVxyXG4uc2hvcHBpbmdDYXJ0OmhvdmVyIC5kZWxldGVDYXJ0SWNvbiB7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuLnNob3BwaW5nQ2FydDpob3ZlciAuY29udGludWVTaG9wcGluZ0ljb24ge1xyXG4gIGNvbG9yOiBkYXJrZ3JlZW47XHJcbn1cclxuXHJcbi5zaG9wcGluZ0NhcnRUZXh0e1xyXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-complete',
          templateUrl: './order-complete.component.html',
          styleUrls: ['./order-complete.component.css']
        }]
      }], function () {
        return [{
          type: _shared_checkout_service__WEBPACK_IMPORTED_MODULE_2__["CheckoutService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/products.service */
    "./src/app/shared/products.service.ts");
    /* harmony import */


    var _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/cart.service */
    "./src/app/shared/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    function ProductsComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsComponent_div_2_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var product_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.callCartAPI(product_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(" + product_r3.imageUrl + ")"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.price, " \u20AC ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.description, "");
      }
    }

    function ProductsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_div_2_div_1_Template, 8, 6, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
      }
    }

    function ProductsComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Derzeit gibt es keine verf\xFCgbaren Artikel zu Kaufen.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(productService, cartService) {
        _classCallCheck(this, ProductsComponent);

        this.productService = productService;
        this.cartService = cartService; // @ts-ignore

        this.products = null;
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.productService.getAll().subscribe(function (data) {
            var list = data;

            _this5.cartService.getCart().subscribe(function (cartItems) {
              if (cartItems !== null) {
                cartItems.forEach(function (x) {
                  return list = list.filter(function (y) {
                    return y.id !== x.id;
                  });
                });
              }

              _this5.products = list;
            });
          });
        }
      }, {
        key: "callCartAPI",
        value: function callCartAPI(param) {
          var _this6 = this;

          this.cartService.addProductByID(param).subscribe(function (data) {
            _this6.cartService.getCartAmount().subscribe(function (amount) {
              _this6.cartService.setCartAmount(amount);

              _this6.products = _this6.products.filter(function (x) {
                return x.id !== param;
              });
            });
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 4,
      vars: 2,
      consts: [["class", "product-containter", 4, "ngIf"], [4, "ngIf"], [1, "product-containter"], ["class", "product-showcase", 4, "ngFor", "ngForOf"], [1, "product-showcase"], [1, "image-container", 3, "ngStyle", "click"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unsere Produkte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsComponent_p_3_Template, 2, 0, "p", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products !== null && ctx.products.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products !== null && ctx.products.length == 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
      styles: [".image-container[_ngcontent-%COMP%]{\r\n  width: 25em;\r\n  height: 25em;\r\n  background-size: cover;\r\n  background-color: white;\r\n}\r\n\r\n.product-containter[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  justify-content: center;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  max-width: 100%;\r\n}\r\n\r\n.product-showcase[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15px;\r\n  background-color: rgb(40, 43, 48);\r\n  width: 25em;\r\n  height: 35em;\r\n  border-style: solid;\r\n  border-width: 2px;\r\n  color: white;\r\n  border-color: rgb(40, 43, 48);\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.product-showcase[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 0 0 3px rgb(40, 43, 48);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lcntcclxuICB3aWR0aDogMjVlbTtcclxuICBoZWlnaHQ6IDI1ZW07XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGFpbnRlcntcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2hvd2Nhc2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQzLCA0OCk7XHJcbiAgd2lkdGg6IDI1ZW07XHJcbiAgaGVpZ2h0OiAzNWVtO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDQwLCA0MywgNDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zaG93Y2FzZTpob3ZlcntcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYig0MCwgNDMsIDQ4KTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: _shared_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
        }, {
          type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/cart.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/cart.service.ts ***!
    \****************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppSharedCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CartService = /*#__PURE__*/function () {
      function CartService(http) {
        _classCallCheck(this, CartService);

        this.http = http;
        this.node = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.shoppingCartItemsCount$ = this.node.asObservable();
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Basic " + btoa("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userName, ":").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].password))
          })
        };
        this.node.next(0);
      }

      _createClass(CartService, [{
        key: "getCart",
        value: function getCart() {
          return this.http.get('//localhost:8081/cart/' + localStorage.getItem('userId'), this.httpOptions);
        }
      }, {
        key: "getCartAmount",
        value: function getCartAmount() {
          return this.http.get('//localhost:8081/cart/itemNumber/' + localStorage.getItem('userId'), this.httpOptions);
        }
      }, {
        key: "setCartAmount",
        value: function setCartAmount(amount) {
          this.node.next(amount);
        }
      }, {
        key: "addProductByID",
        value: function addProductByID(id) {
          return this.http.get('//localhost:8081/cart/addProduct/' + id + '/' + localStorage.getItem('userId'), this.httpOptions);
        }
      }, {
        key: "createUser",
        value: function createUser() {
          return this.http.get('//localhost:8081/cart/init', this.httpOptions);
        }
      }, {
        key: "deleteCart",
        value: function deleteCart() {
          return this.http.get('//localhost:8081/cart/empty/' + localStorage.getItem('userId'), this.httpOptions);
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/checkout.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/checkout.service.ts ***!
    \********************************************/

  /*! exports provided: CheckoutService */

  /***/
  function srcAppSharedCheckoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutService", function () {
      return CheckoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CheckoutService = /*#__PURE__*/function () {
      function CheckoutService(http) {
        _classCallCheck(this, CheckoutService);

        this.http = http;
        this.checkoutSummary = null;
      }

      _createClass(CheckoutService, [{
        key: "setCheckoutSummary",
        value: function setCheckoutSummary(item) {
          this.checkoutSummary = item;
        }
      }, {
        key: "getCheckoutSummary",
        value: function getCheckoutSummary() {
          return this.checkoutSummary;
        }
      }, {
        key: "postCart",
        value: function postCart(cart) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Basic " + btoa("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userName, ":").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password))
            })
          };
          return this.http.post('//localhost:8083/checkout/validate', cart, httpOptions);
        }
      }]);

      return CheckoutService;
    }();

    CheckoutService.ɵfac = function CheckoutService_Factory(t) {
      return new (t || CheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    CheckoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CheckoutService,
      factory: CheckoutService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/products.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/products.service.ts ***!
    \********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppSharedProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getAll",
        value: function getAll() {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Basic " + btoa("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userName, ":").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password))
            })
          };
          return this.http.get('//localhost:8080/catalog', httpOptions);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shipping.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/shipping.service.ts ***!
    \********************************************/

  /*! exports provided: ShippingService */

  /***/
  function srcAppSharedShippingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingService", function () {
      return ShippingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ShippingService = /*#__PURE__*/function () {
      function ShippingService(http) {
        _classCallCheck(this, ShippingService);

        this.http = http;
      }

      _createClass(ShippingService, [{
        key: "getShippingCost",
        value: function getShippingCost(cost) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Basic " + btoa("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userName, ":").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].password))
            })
          };
          return this.http.get('//localhost:8082/shipping/cost/' + cost, httpOptions);
        }
      }]);

      return ShippingService;
    }();

    ShippingService.ɵfac = function ShippingService_Factory(t) {
      return new (t || ShippingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ShippingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShippingService,
      factory: ShippingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      userName: 'frontendUser',
      password: 'frontendPassword'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Oberordner\Studium\6.Semester\GCA\Abschlussprojekt\Projekt\GCA\web\frontend-boutique\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map