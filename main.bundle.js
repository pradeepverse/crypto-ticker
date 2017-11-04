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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container{\r\n    height: 100%;\r\n    padding: 40px;\r\n    padding-top: 20px;\r\n    background: #f1f1f1;\r\n    color: #313131;\r\n    position: relative;\r\n}\r\n\r\n.app-header{\r\n    text-align: center;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.mylogo img{\r\n    width: 50px;\r\n    margin-bottom: -20px;\r\n    position: relative;\r\n    top: -10px;\r\n}\r\n\r\n.live-tag{\r\n    color: white;\r\n    background: red;\r\n    padding: 5px;\r\n    border-radius: 4px;\r\n    font-size: 20px;\r\n    -webkit-animation-name: color-change;\r\n            animation-name: color-change;  \r\n    -webkit-animation-duration: 1.5s;  \r\n            animation-duration: 1.5s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes color-change {\r\n    from{\r\n        background: red;\r\n    }\r\n    to{\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n}\r\n\r\n@keyframes color-change {\r\n    from{\r\n        background: red;\r\n    }\r\n    to{\r\n        background-color: rgba(255, 0, 0, 0.5);\r\n    }\r\n}\r\n\r\n.drop-down-icon .mat-icon{\r\n    font-size: 75px;\r\n    position: relative;\r\n    left: -25px;\r\n    top: 8px;\r\n}\r\n\r\n.elements-holder{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;  \r\n}\r\n\r\n.no-style-href{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\nul.header-separator{\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    width: calc(100% + 78px);\r\n    margin-left: -40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <h1 class=\"app-header\"> \n    <a  class=\"no-style-href mylogo\" href=\"https://www.youtube.com/knowinminutes\" target=\"_blank\">\n      <img src=\"../assets/knowinmins.PNG\"/>\n    </a>\n    <span> Track Your Cryptocurrencies <span class=\"live-tag\">LIVE</span> </span>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"drop-down-icon\">\n      <!-- <mat-icon>more_vert</mat-icon> -->\n      <span matTooltip=\"Choose cryptos based on your interest\">\n        <mat-icon>arrow_drop_down</mat-icon>\n      </span>\n    </button>\n  </h1> \n  <ul class=\"header-separator\"></ul>\n  <mat-menu #menu=\"matMenu\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\" *ngFor=\"let cryptoConstant of cryptoConstants\">\n        {{cryptoConstant.name}}\n      </mat-checkbox>\n  </mat-menu>\n  <div class=\"elements-holder\">\n    <a class=\"no-style-href\" href=\"{{cryptoConstant?.site}}\" target=\"_blank\"\n    *ngFor=\"let cryptoConstant of cryptoConstants\">\n      <app-coin-element [cryptoDetail] = \"cryptoConstant\"></app-coin-element>\n    </a> \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crypto_service_service__ = __webpack_require__("../../../../../src/app/crypto-service.service.ts");
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
    function AppComponent(crytoService) {
        this.crytoService = crytoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cryptoConstants = this.crytoService.getCryptoConstants();
        this.crytoService.getDefaultCryptoDetails();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crypto_service_service__["a" /* CryptoService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coin_element_coin_element_component__ = __webpack_require__("../../../../../src/app/coin-element/coin-element.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crypto_service_service__ = __webpack_require__("../../../../../src/app/crypto-service.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__coin_element_coin_element_component__["a" /* CoinElementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatTooltipModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__crypto_service_service__["a" /* CryptoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/coin-element/coin-element.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 22px;\r\n    -webkit-box-pack: space-evenly;\r\n        -ms-flex-pack: space-evenly;\r\n            justify-content: space-evenly;\r\n}\r\n\r\n.heading{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-size: 30px;\r\n}\r\n.heading > span{\r\n    width: calc(100% - 16px);\r\n}\r\n\r\n\r\n.label{\r\n    opacity: 0.75;\r\n}\r\n\r\nul{\r\n    border: 1px solid;\r\n}\r\n\r\n.price{\r\n    font-size: 24px;\r\n}\r\n\r\n.price .value{\r\n    font-weight: bold;\r\n}\r\n\r\n.last-price{\r\n    opacity: 0.6;\r\n    font-size: 14px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\nmat-icon{\r\n    font-size: 40px;\r\n    position: relative;\r\n    top: 13px;\r\n}\r\n\r\nmat-icon.green{\r\n    color: green;\r\n}\r\n\r\nmat-icon.red{\r\n    color: red;\r\n}\r\n\r\n.daily-change{\r\n    font-size: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.m-cap{\r\n    padding: 10px 0 6px 25px;\r\n    background: rgb(226, 226, 226);\r\n    color: black;\r\n    margin: 1px -24px 0 -24px;\r\n    border-top: 1px solid;\r\n}\r\n\r\n.up{\r\n    color: green;\r\n}\r\n.down{\r\n    color: red;\r\n}\r\n\r\n.crypto-logo{\r\n    display: inline-block;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/cryptoicons.png") + ");\r\n    background-size: 190px 160px;\r\n}\r\n\r\n.btc-logo-sprite {\r\n    background-position: -64px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.mat-card{\r\n    padding-bottom: 0px;\r\n    width: 215px;\r\n}\r\n\r\n.mat-card > div {\r\n    \r\n}\r\n\r\n.s-s-zencash {\r\n    background-position: 0 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-zcoin {\r\n    background-position: -16px 0;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-zcash {\r\n    background-position: 0 -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-waves {\r\n    background-position: -16px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-walton {\r\n    background-position: -32px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-vertcoin {\r\n    background-position: -32px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-veritaseum {\r\n    background-position: 0 -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-verge {\r\n    background-position: -16px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-vechain {\r\n    background-position: -32px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-ubiq {\r\n    background-position: -48px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-tron {\r\n    background-position: -48px -16px;\r\n    width: 14px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-tether {\r\n    background-position: -48px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-tenx {\r\n    background-position: 0 -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-taas {\r\n    background-position: -16px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-syscoin {\r\n    background-position: -32px -48px;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-stratis {\r\n    background-position: -64px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-storj {\r\n    background-position: -64px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-steem {\r\n    background-position: -64px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-status {\r\n    background-position: -64px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-smartcash {\r\n    background-position: 0 -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-singulardtv {\r\n    background-position: -48px -48px;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-siacoin {\r\n    background-position: -16px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-salt {\r\n    background-position: -32px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-rlc {\r\n    background-position: -48px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-ripple {\r\n    background-position: -64px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-qtum {\r\n    background-position: -80px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-pura {\r\n    background-position: -80px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-populous {\r\n    background-position: -80px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-pivx {\r\n    background-position: -80px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-particl {\r\n    background-position: -80px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-omisego {\r\n    background-position: 0 -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-nxt {\r\n    background-position: -16px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-nexus {\r\n    background-position: -32px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-neo {\r\n    background-position: -48px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-nem {\r\n    background-position: -64px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-neblio {\r\n    background-position: -80px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-nav-coin {\r\n    background-position: -96px 0;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-monero {\r\n    background-position: -96px -14px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-monacoin {\r\n    background-position: -96px -30px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-monaco {\r\n    background-position: -96px -46px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-metaverse {\r\n    background-position: -96px -62px;\r\n    width: 15px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-metal {\r\n    background-position: -96px -78px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-mcap {\r\n    background-position: 0 -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-maidsafecoin {\r\n    background-position: -16px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-lykke {\r\n    background-position: -32px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-loopring {\r\n    background-position: -48px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-litecoin {\r\n    background-position: -64px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-lisk {\r\n    background-position: -80px -96px;\r\n    width: 14px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-kyber-network {\r\n    background-position: -94px -96px;\r\n    width: 14px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-kucoin {\r\n    background-position: -112px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-komodo {\r\n    background-position: -112px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-iota {\r\n    background-position: -112px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-iconomi {\r\n    background-position: -112px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-hshare {\r\n    background-position: -112px -64px;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-gxshares {\r\n    background-position: -112px -78px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-groestlcoin {\r\n    background-position: -112px -94px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-golem-network-tokens {\r\n    background-position: 0 -112px;\r\n    width: 12px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-gnosis-gno {\r\n    background-position: -12px -112px;\r\n    width: 16px;\r\n    height: 12px;\r\n}\r\n\r\n.s-s-gas {\r\n    background-position: -128px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-gamecredits {\r\n    background-position: -128px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-funfair {\r\n    background-position: -128px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-faircoin {\r\n    background-position: -128px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-factom {\r\n    background-position: -128px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-ethereum {\r\n    background-position: -128px -80px;\r\n    width: 14px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-ethereum-classic {\r\n    background-position: -128px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-eos {\r\n    background-position: -128px -112px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-edgeless {\r\n    background-position: 0 -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-dogecoin {\r\n    background-position: -16px -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-digixdao {\r\n    background-position: -32px -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-digibyte {\r\n    background-position: -48px -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-decred {\r\n    background-position: -64px -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-dash {\r\n    background-position: -96px -128px;\r\n    width: 16px;\r\n    height: 14px;\r\n}\r\n\r\n.s-s-civic {\r\n    background-position: -144px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-chainlink {\r\n    background-position: -144px -16px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-cardano {\r\n    background-position: -144px -32px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bytom {\r\n    background-position: -144px -48px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bytecoin-bcn {\r\n    background-position: -144px -64px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-byteball {\r\n    background-position: -144px -80px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-blocknet {\r\n    background-position: -144px -96px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitshares {\r\n    background-position: -144px -112px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitqy {\r\n    background-position: -144px -128px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitquence {\r\n    background-position: 0 -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitdeal {\r\n    background-position: -16px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitcore {\r\n    background-position: -32px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitconnect {\r\n    background-position: -48px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitcoindark {\r\n    background-position: -64px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitcoin {\r\n    background-position: -64px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bitcoin-cash {\r\n    background-position: -80px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-binance-coin {\r\n    background-position: -112px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-basic-attention-token {\r\n    background-position: -128px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-bancor {\r\n    background-position: -144px -144px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-augur {\r\n    background-position: -160px 0;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-attention-token-of-media {\r\n    background-position: -160px -16px;\r\n    width: 14px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-ark {\r\n    background-position: -160px -32px;\r\n    width: 16px;\r\n    height: 15px;\r\n}\r\n\r\n.s-s-ardor {\r\n    background-position: -160px -47px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-aragon {\r\n    background-position: -160px -63px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-aeternity {\r\n    background-position: -160px -79px;\r\n    width: 16px;\r\n    height: 12px;\r\n}\r\n\r\n.s-s-adx-net {\r\n    background-position: -160px -91px;\r\n    width: 10px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-0x {\r\n    background-position: -160px -107px;\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.s-s-stellar {\r\n    background-position: -160px -123px;\r\n    width: 15px;\r\n    height: 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coin-element/coin-element.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"heading\">\n    <span> {{crypto?.name}} </span>\n    <div class=\"{{cryptoDetail?.className}}\"></div>\n  </div>\n  <ul></ul>\n  <div class=\"price\">\n    <span class=\"label\"> Price: </span>\n    <span class=\"value\"> {{crypto?.price_usd | currency}} </span>\n    <mat-icon class=\"green\" *ngIf=\"crypto?.price_usd > lastPrice\">arrow_drop_up</mat-icon>\n    <mat-icon class=\"red\" *ngIf=\"crypto?.price_usd < lastPrice\">arrow_drop_down</mat-icon>\n  </div>\n  <div class=\"last-price\">\n    <span> Last Price: </span>\n    <span class=\"value\"> {{lastPrice | currency}} </span>\n  </div>\n  <div class=\"daily-change\">\n    <span class=\"label\"> 24H Change: </span>\n    <span [ngClass]=\"{'value up': crypto?.percent_change_24h > 0, \n                      'value down': crypto?.percent_change_24h < 0}\"> \n      {{crypto?.percent_change_24h}}% \n    </span>\n  </div>\n\n  <div class=\"m-cap\">\n    <span class=\"label\"> M-Cap: </span>\n    <span class=\"value\"> {{crypto?.market_cap_usd | currency}} </span>\n  </div>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/coin-element/coin-element.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinElementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crypto_service_service__ = __webpack_require__("../../../../../src/app/crypto-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinElementComponent = (function () {
    function CoinElementComponent(CryptoService) {
        this.CryptoService = CryptoService;
        this.lastPrice = null;
        this.lastPriceTemp = null;
    }
    CoinElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CryptoService.fetchFromEndPoint(this.cryptoDetail.api).subscribe(function (data) {
            _this.crypto = data[0];
            if (_this.lastPriceTemp != _this.crypto.price_usd) {
                _this.saveLastPrice();
            }
            _this.lastPriceTemp = _this.crypto.price_usd;
            console.log('Fetched!');
        });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].interval(1000 * 30).subscribe(function (x) {
            _this.CryptoService.fetchFromEndPoint(_this.cryptoDetail.api).subscribe(function (data) {
                _this.crypto = data[0];
                if (_this.lastPriceTemp != _this.crypto.price_usd) {
                    _this.saveLastPrice();
                }
                _this.lastPriceTemp = _this.crypto.price_usd;
                console.log('Fetched!');
            });
        });
    };
    CoinElementComponent.prototype.saveLastPrice = function () {
        if (this.lastPrice == null) {
            this.lastPrice = parseFloat(this.crypto.price_usd) + (parseFloat(this.crypto.price_usd) * parseFloat(this.crypto.percent_change_1h) / 100);
        }
        else {
            this.lastPrice = this.lastPriceTemp;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], CoinElementComponent.prototype, "cryptoDetail", void 0);
    CoinElementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-coin-element',
            template: __webpack_require__("../../../../../src/app/coin-element/coin-element.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coin-element/coin-element.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crypto_service_service__["a" /* CryptoService */]])
    ], CoinElementComponent);
    return CoinElementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/constants/crypto-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CRYPTO_DATA; });
var CRYPTO_DATA = [
    { name: "Bitcoin", api: "https://api.coinmarketcap.com/v1/ticker/bitcoin/", site: "https://coinmarketcap.com/currencies/bitcoin/", className: "s-s-bitcoin crypto-logo" },
    { name: "Ethereum", api: "https://api.coinmarketcap.com/v1/ticker/ethereum/", site: "https://coinmarketcap.com/currencies/ethereum/", className: "s-s-ethereum crypto-logo" },
    { name: "Bitcoin Cash", api: "https://api.coinmarketcap.com/v1/ticker/bitcoin-cash/", site: "https://coinmarketcap.com/currencies/bitcoin-cash/", className: "s-s-bitcoin-cash crypto-logo" },
    { name: "Ripple", api: "https://api.coinmarketcap.com/v1/ticker/ripple/", site: "https://coinmarketcap.com/currencies/ripple/", className: "s-s-ripple crypto-logo" },
    { name: "Litecoin", api: "https://api.coinmarketcap.com/v1/ticker/litecoin/", site: "https://coinmarketcap.com/currencies/litecoin/", className: "s-s-litecoin crypto-logo" },
    { name: "Dash", api: "https://api.coinmarketcap.com/v1/ticker/dash/", site: "https://coinmarketcap.com/currencies/dash/", className: "s-s-dash crypto-logo" },
    { name: "NEO", api: "https://api.coinmarketcap.com/v1/ticker/neo/", site: "https://coinmarketcap.com/currencies/neo/", className: "s-s-neo crypto-logo" },
    { name: "NEM", api: "https://api.coinmarketcap.com/v1/ticker/nem/", site: "https://coinmarketcap.com/currencies/nem/", className: "s-s-nem crypto-logo" },
    { name: "Monero", api: "https://api.coinmarketcap.com/v1/ticker/monero/", site: "https://coinmarketcap.com/currencies/monero/", className: "s-s-monero crypto-logo" },
    { name: "Ethereum Classic", api: "https://api.coinmarketcap.com/v1/ticker/ethereum-classic/", site: "https://coinmarketcap.com/currencies/ethereum-classic/", className: "s-s-ethereum-classic crypto-logo" }
];


/***/ }),

/***/ "../../../../../src/app/crypto-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_crypto_constants__ = __webpack_require__("../../../../../src/app/constants/crypto-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CryptoService = (function () {
    function CryptoService(http) {
        this.http = http;
        this.defaultCryptoDetailsArray = new Array();
    }
    CryptoService.prototype.ngOnInit = function () {
        this.getDefaultCryptoDetails();
    };
    CryptoService.prototype.getCryptoConstants = function () {
        return __WEBPACK_IMPORTED_MODULE_3__constants_crypto_constants__["a" /* CRYPTO_DATA */];
    };
    CryptoService.prototype.getDefaultCryptoDetails = function () {
        var _this = this;
        for (var _i = 0, CRYPTO_DATA_1 = __WEBPACK_IMPORTED_MODULE_3__constants_crypto_constants__["a" /* CRYPTO_DATA */]; _i < CRYPTO_DATA_1.length; _i++) {
            var crypto_1 = CRYPTO_DATA_1[_i];
            this.fetchFromEndPoint(crypto_1.api).subscribe(function (data) {
                _this.defaultCryptoDetailsArray.push(data);
            });
        }
    };
    CryptoService.prototype.fetchFromEndPoint = function (endpointURI) {
        return this.http.get(endpointURI)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CryptoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CryptoService);
    return CryptoService;
}());



/***/ }),

/***/ "../../../../../src/assets/cryptoicons.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cryptoicons.8f995332e2d97a400b23.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map