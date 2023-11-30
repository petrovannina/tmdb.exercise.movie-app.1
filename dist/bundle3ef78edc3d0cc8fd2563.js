/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: #043055;
  margin: 0;
}

main {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

body {
  background-color: #043055;
  color: #01647e;
}

.hidden {
  display: none;
}

.no-favorite-message {
  font-size: 1.5rem;
  text-align: center;
}

#loader-wrapper {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
#loader-wrapper .overlay {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #032541;
  opacity: 0.9;
}
#loader-wrapper .loader {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  width: 3.125rem;
  height: 3.125rem;
  border: 0.5rem solid #f3f3f3;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-top: -1.5rem;
  margin-left: -1.5rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
header {
  background-color: #032541;
  padding: 1rem;
}
header .container {
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 300px;
}
@media screen and (min-width: 664px) {
  header .container {
    max-width: 632px;
  }
}
@media screen and (min-width: 996px) {
  header .container {
    max-width: 964px;
  }
}
@media screen and (min-width: 1328px) {
  header .container {
    max-width: 1296px;
  }
}
@media screen and (min-width: 1660px) {
  header .container {
    max-width: 1628px;
  }
}
@media screen and (min-width: 1992px) {
  header .container {
    max-width: 1960px;
  }
}
@media screen and (min-width: 2324px) {
  header .container {
    max-width: 2292px;
  }
}
header .logo {
  color: #01B4E4;
  cursor: default;
}
header #form {
  width: 40%;
}
@media screen and (min-width: 992px) {
  header #form {
    width: 25%;
  }
}
header #search {
  width: 100%;
  height: 2.063rem;
  padding: 0 1rem;
  border: 0.065px solid #032541;
  border-radius: 1rem;
}
header #search:focus-visible {
  outline: none;
  box-shadow: 0rem 0rem 0.75rem 0.5rem rgba(240, 179, 123, 0.3);
}

.modal {
  position: fixed;
  top: 0.65rem;
  right: 0.65rem;
  max-width: 18.75rem;
  display: none;
  background-color: white;
  padding: 0.65rem 1.5rem;
  border: 0.065px solid #032541;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 0.28rem 0.5rem rgba(0, 0, 0, 0.1);
  opacity: 0.8;
}
.modal:hover {
  opacity: 1;
}
.modal .modal-content {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.modal .close {
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #aaa;
  margin-right: 0.65rem;
}
.modal .close:hover {
  color: black;
}
.modal:hover .close {
  color: black;
}

#control-panel {
  margin: 0.65rem auto;
  /* Style for the dropdown container */
}
#control-panel .container {
  display: flex;
  margin: 0 auto;
  justify-content: start;
  max-width: 300px;
}
@media screen and (min-width: 664px) {
  #control-panel .container {
    max-width: 632px;
  }
}
@media screen and (min-width: 996px) {
  #control-panel .container {
    max-width: 964px;
  }
}
@media screen and (min-width: 1328px) {
  #control-panel .container {
    max-width: 1296px;
  }
}
@media screen and (min-width: 1660px) {
  #control-panel .container {
    max-width: 1628px;
  }
}
@media screen and (min-width: 1992px) {
  #control-panel .container {
    max-width: 1960px;
  }
}
@media screen and (min-width: 2324px) {
  #control-panel .container {
    max-width: 2292px;
  }
}
#control-panel .dropdown {
  position: relative;
  display: inline-block;
  /* Show the dropdown content when the dropdown button is clicked */
  /* Style for the dropdown button */
  /* Style for the dropdown content (hidden by default) */
}
#control-panel .dropdown:hover .dropdown-content {
  display: block;
}
#control-panel .dropdown .dropbtn {
  width: 11.25rem;
  margin-right: 0.65rem;
  padding: 0.65rem;
  text-align: left;
  font-size: 1rem;
  background-color: inherit;
  color: white;
  border: none;
}
#control-panel .dropdown .dropbtn:hover {
  background-color: #032541;
}
#control-panel .dropdown .dropdown-content {
  display: none;
  position: absolute;
  background-color: #032541;
  max-width: 11.25rem;
  width: 100%;
  z-index: 1;
  margin-top: 0.065px;
  border: 0.065px solid #032541;
  border-radius: 0.5rem;
}
#control-panel .dropdown .tag {
  width: 100%;
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  color: white;
}
#control-panel .dropdown .tag:hover {
  background-color: #043055;
}
#control-panel .dropdown .tag.highlight {
  color: #01B4E4;
}
#control-panel .favorite,
#control-panel .remove-all {
  width: 10.625rem;
  margin-right: 0.5rem;
  padding: 0.65rem;
  font-size: 1rem;
  text-align: left;
  background-color: inherit;
  color: white;
  border: none;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#control-panel .favorite:hover,
#control-panel .remove-all:hover {
  background-color: #032541;
}

.movie {
  position: relative;
  width: 18.75rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.013rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
}
.movie img {
  width: 100%;
  height: -webkit-fill-available;
  border-radius: 1rem;
}
.movie .movie-info {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: #e5f9ff;
  opacity: 0.8;
  color: #01B4E4;
  border-radius: 0 0 1rem 1rem;
}
.movie .movie-info h3 {
  margin: 0;
  font-weight: bold;
  font-size: 1rem;
}
@media screen and (min-width: 992px) {
  .movie .movie-info {
    display: none;
  }
  .movie:hover .movie-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.5rem 1rem 0.5rem;
    background-color: #e5f9ff;
    opacity: 0.8;
    color: #01B4E4;
    border-radius: 0 0 1rem 1rem;
  }
  .movie:hover .movie-info h3 {
    margin: 0;
    font-weight: bold;
    font-size: 1rem;
  }
}
.movie .add-to-favorite,
.movie .remove-from-favorite {
  position: absolute;
  top: 0.65rem;
  right: 0.65rem;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  border: 0.065px solid #01B4E4;
  color: #01B4E4;
  background: #e5f9ff;
  opacity: 0.8;
  border-radius: 50%;
}
.movie .add-to-favorite.hidden,
.movie .remove-from-favorite.hidden {
  display: none;
}

.pagination {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0.65rem 2rem;
  color: white;
}
.pagination.hidden {
  display: none;
}
.pagination .page {
  cursor: pointer;
  padding: 1.5rem;
}
.pagination .page .disabled {
  cursor: not-allowed;
  color: grey;
}
.pagination .current {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 4.5rem;
  padding: 0.65rem 1.5rem;
  border: 0.5rem solid #01B4E4;
  border-radius: 50%;
  color: #01B4E4;
  font-size: 1.5rem;
  font-weight: 600;
}`, "",{"version":3,"sources":["webpack://./src/styles/assets/base.scss","webpack://./src/styles/main.scss","webpack://./src/styles/assets/settings.scss","webpack://./src/styles/components/loader.scss","webpack://./src/styles/components/header.scss","webpack://./src/styles/components/modal.scss","webpack://./src/styles/components/control-panel.scss","webpack://./src/styles/components/movie-product.scss","webpack://./src/styles/components/pagination.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,kCAAA;ACDJ;;ADIA;EACI,yBEToB;EFUpB,SAAA;ACDJ;;ADIA;EEMI,aAAA;EACA,eFNwB;EEOxB,mBFP8B;EEQ9B,uBFRmC;EESnC,mBFT2C;ACG/C;;ADAA;EACI,yBElBoB;EFmBpB,cEfqB;ADkBzB;;ADAA;EACI,aAAA;ACGJ;;ADAA;EACI,iBEhBO;EFiBP,kBAAA;ACGJ;;AEhCA;EACI,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WDQG;ECPH,YDOG;ECNH,YAAA;AFmCJ;AEjCI;EACI,kBAAA;EACA,cAAA;EACA,MAAA;EACA,OAAA;EACA,WDDD;ECEC,YDFD;ECGC,mBDhBQ;ECiBR,YDDE;ADoCV;AEhCI;EACI,kBAAA;EACA,cAAA;EACA,QDTD;ECUC,SDVD;ECWC,eAAA;EACA,gBAAA;EACA,4BAAA;EACA,gCAAA;EACA,kBDfD;ECgBC,kCAAA;EACA,mBAAA;EACA,oBAAA;AFkCR;;AE9BA;EACI;IACI,uBAAA;EFiCN;EE9BE;IACI,yBAAA;EFgCN;AACF;AG3EA;EACI,yBFDY;EEEZ,aFSU;ADoEd;AG3EI;EF8BA,aE7BuB;EF8BvB,cAAA;EACA,8BE/BmC;EFgCnC,gBAJ6E;ADoDjF;ACzDI;EExBA;IFoCI,gBAAA;EDiDN;AACF;AC9DI;EExBA;IFwCI,gBAAA;EDkDN;AACF;ACnEI;EExBA;IF4CI,iBAAA;EDmDN;AACF;ACxEI;EExBA;IFgDI,iBAAA;EDoDN;AACF;AC7EI;EExBA;IFoDI,iBAAA;EDqDN;AACF;AClFI;EExBA;IFwDI,iBAAA;EDsDN;AACF;AG3GI;EACI,cFNU;EEOV,eAAA;AH6GR;AG1GI;EACI,UAAA;AH4GR;AC9FI;EEfA;IAIQ,UAAA;EH6GV;AACF;AG1GI;EACI,WFTD;EEUC,gBAAA;EACA,eAAA;EACA,6BAAA;EACA,mBFfM;AD2Hd;AG1GQ;EACI,aAAA;EACA,6DAAA;AH4GZ;;AI1IA;EACI,eAAA;EACA,YHQiB;EGPjB,cHOiB;EGNjB,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,6BAAA;EACA,UAAA;EACA,gBAAA;EACA,+CAAA;EACA,YHKc;ADwIlB;AI3II;EACI,UAAA;AJ6IR;AI1II;EHEA,aAAA;EACA,iBGF4B;EHG5B,mBGHoC;EHIpC,8BGJyC;EHKzC,mBGLwD;AJgJ5D;AI7II;EACI,eHZM;EGaN,iBAAA;EACA,eAAA;EACA,WHpBD;EGqBC,qBHjBa;ADgKrB;AI7IQ;EACI,YAAA;AJ+IZ;AI3II;EACI,YAAA;AJ6IR;;AK/KA;EACI,oBAAA;EAMA,qCAAA;AL6KJ;AKjLI;EJ8BA,aI7BuB;EJ8BvB,cAAA;EACA,sBI/BmC;EJgCnC,gBAJ6E;AD0JjF;AC/JI;EIxBA;IJoCI,gBAAA;EDuJN;AACF;ACpKI;EIxBA;IJwCI,gBAAA;EDwJN;AACF;ACzKI;EIxBA;IJ4CI,iBAAA;EDyJN;AACF;AC9KI;EIxBA;IJgDI,iBAAA;ED0JN;AACF;ACnLI;EIxBA;IJoDI,iBAAA;ED2JN;AACF;ACxLI;EIxBA;IJwDI,iBAAA;ED4JN;AACF;AKhNI;EACI,kBAAA;EACA,qBAAA;EAEA,kEAAA;EAOA,kCAAA;EAgBA,uDAAA;AL4LR;AKjNY;EACI,cAAA;ALmNhB;AK9MQ;EACI,eAAA;EACA,qBJbS;EIcT,gBJdS;EIeT,gBAAA;EACA,eJfE;EIgBF,yBAAA;EACA,YAAA;EACA,YAAA;ALgNZ;AK9MY;EACI,yBJhCA;ADgPhB;AK3MQ;EACI,aAAA;EACA,kBAAA;EACA,yBJxCI;EIyCJ,mBAAA;EACA,WJ7BL;EI8BK,UAAA;EACA,mBJpCH;EIqCG,6BAAA;EACA,qBJrCC;ADkPb;AKzMQ;EACI,WJtCL;EIuCK,aAAA;EACA,eJ5CC;EI6CD,eAAA;EACA,YAAA;AL2MZ;AKzMY;EACI,yBJzDQ;ADoQxB;AKxMY;EACI,cJ3DE;ADqQlB;AKrMI;;EAEI,gBAAA;EACA,oBJ7DK;EI8DL,gBJ7Da;EI8Db,eJ7DM;EI8DN,gBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,qBJpEK;EIqEL,aAAA;EACA,uBAAA;EACA,mBAAA;ALuMR;AKrMQ;;EACI,yBJnFI;AD2RhB;;AMzRA;EACI,kBAAA;EACA,eAAA;EACA,YLMU;EKLV,qBLGS;EKFT,sDAAA;ELaA,aAAA;EACA,iBKbwB;ELcxB,sBKdgC;ELehC,8BKfwC;ELgBxC,oBKhBuD;ANgS3D;AM9RI;EACI,WLED;EKDC,8BAAA;EACA,mBLFM;ADkSd;AM7RI;EACI,kBAAA;EACA,SAAA;EACA,WLND;EKOC,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,yBLnBkB;EKoBlB,YLPU;EKQV,cLtBU;EKuBV,4BAAA;AN+RR;AM7RQ;EACI,SAAA;EACA,iBAAA;EACA,eLpBE;ADmTd;AClSI;EKQI;IACI,aAAA;EN6RV;EMzRU;IACI,aAAA;IACA,sBAAA;IACA,kBAAA;IACA,SAAA;IACA,WLjCT;IKkCS,2BAAA;IACA,yBL5CU;IK6CV,YLhCE;IKiCF,cL/CE;IKgDF,4BAAA;EN2Rd;EMzRc;IACI,SAAA;IACA,iBAAA;IACA,eL7CN;EDwUZ;AACF;AMtRI;;EAEI,kBAAA;EACA,YLvDa;EKwDb,cLxDa;EKyDb,aAAA;EACA,cAAA;EACA,iBLzDG;EK0DH,6BAAA;EACA,cLpEU;EKqEV,mBLpEkB;EKqElB,YLxDU;EKyDV,kBL5DD;ADoVP;AMtRQ;;EACI,aAAA;ANyRZ;;AOtWA;ENoBI,aAAA;EACA,eAFyB;EAGzB,mBAH2C;EAI3C,uBAJ0D;EAK1D,mBAL0E;EMjB1E,oBAAA;EACA,YAAA;AP6WJ;AO3WI;EACI,aAAA;AP6WR;AO1WI;EACI,eAAA;EACA,eNCG;AD2WX;AO1WQ;EACI,mBAAA;EACA,WAAA;AP4WZ;AOxWI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,cAAA;EACA,uBAAA;EACA,4BAAA;EACA,kBNbD;EMcC,cNzBU;EM0BV,iBNjBG;EMkBH,gBAAA;AP0WR","sourcesContent":["// _base.scss\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color-lighter;\r\n    margin: 0;\r\n}\r\n\r\nmain {\r\n    @include flex-container(wrap, row, center, center);\r\n}\r\n\r\nbody {\r\n    background-color: $primary-color-lighter;\r\n    color: $secondary-color-darker;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.no-favorite-message {\r\n    font-size: $big-size;\r\n    text-align: center;\r\n}","@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');\r\n// Import your partials\r\n@import 'assets/settings';\r\n@import 'assets/base';\r\n\r\n// components\r\n@import 'components/loader';\r\n@import 'components/header';\r\n@import 'components/modal';\r\n@import 'components/control-panel';\r\n@import 'components/movie-product';\r\n@import 'components/pagination';\r\n","$primary-color: #032541;\r\n$primary-color-lighter: lighten($primary-color, 4%);\r\n$primary-color-darker: darken(#032541, 10%);\r\n$secondary-color: #01B4E4;\r\n$secondary-color-lighter: lighten($secondary-color, 50%);\r\n$secondary-color-darker: darken(#01B4E4, 20%);\r\n$text: #aaa;\r\n\r\n$border: 0.065px;             //1px\r\n$small-size: 0.5rem;          //8px \r\n$normal-size-ligher: 0.65rem; //10px\r\n$normal-size: 1rem;           //16px\r\n$big-size: 1.5rem;            //24px\r\n$full: 100%;\r\n$half: 50%;\r\n$full-opacity: 1;\r\n$opacity: 0.9;\r\n$opacity-lighter: 0.8;\r\n\r\n@mixin flex-container($wrap: wrap, $direction: row, $justify: center, $align: center) {\r\n    display: flex;\r\n    flex-wrap: $wrap;\r\n    flex-direction: $direction;\r\n    justify-content: $justify;\r\n    align-items: $align;\r\n}\r\n\r\n@mixin respond-to($breakpoint) {\r\n    @media screen and (min-width: $breakpoint) {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin container($display: flex, $margin: auto, $justify: space-between, $width: 300px) {\r\n    display: $display;\r\n    margin: 0 $margin;\r\n    justify-content: $justify;\r\n    max-width: $width;\r\n\r\n    @include respond-to(664px) {\r\n        max-width: 632px;\r\n    }\r\n\r\n    @include respond-to(996px) {\r\n        max-width: 964px;\r\n    }\r\n\r\n    @include respond-to(1328px) {\r\n        max-width: 1296px;\r\n    }\r\n\r\n    @include respond-to(1660px) {\r\n        max-width: 1628px;\r\n    }\r\n\r\n    @include respond-to(1992px) {\r\n        max-width: 1960px;\r\n    }\r\n\r\n    @include respond-to(2324px) {\r\n        max-width: 2292px;\r\n    }\r\n}","#loader-wrapper {\r\n    position: fixed;\r\n    display: none;\r\n    top: 0;\r\n    left: 0;\r\n    width: $full;\r\n    height: $full;\r\n    z-index: 999;\r\n\r\n    .overlay {\r\n        position: absolute;\r\n        display: block;\r\n        top: 0;\r\n        left: 0;\r\n        width: $full;\r\n        height: $full;\r\n        background: $primary-color;\r\n        opacity: $opacity;\r\n    }\r\n\r\n    .loader {\r\n        position: absolute;\r\n        display: block;\r\n        top: $half;\r\n        left: $half;\r\n        width: 3.125rem; // 50px\r\n        height: 3.125rem; // 50px\r\n        border: $small-size solid #f3f3f3;\r\n        border-top: $small-size solid #3498db;\r\n        border-radius: $half;\r\n        animation: spin 1s linear infinite;\r\n        margin-top: -$big-size;\r\n        margin-left: -$big-size;\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}","header {\r\n    background-color: $primary-color;\r\n    padding: $normal-size;\r\n\r\n    .container {\r\n        @include container(flex, auto, space-between);\r\n    }\r\n\r\n    .logo {\r\n        color: $secondary-color;\r\n        cursor: default;\r\n    }\r\n\r\n    #form {\r\n        width: 40%;\r\n\r\n        @include respond-to(992px) {\r\n            width: 25%;\r\n        }\r\n    }\r\n\r\n    #search {\r\n        width: $full;\r\n        height: 2.063rem; // 33px\r\n        padding: 0 $normal-size;\r\n        border: $border solid $primary-color;\r\n        border-radius: $normal-size;\r\n\r\n        &:focus-visible {\r\n            outline: none;\r\n            box-shadow: 0rem 0rem 0.75rem $small-size rgba(240, 179, 123, 0.3);\r\n        }\r\n    }\r\n}",".modal {\r\n    position: fixed;\r\n    top: $normal-size-ligher;\r\n    right: $normal-size-ligher;\r\n    max-width: 18.75rem; // 300px\r\n    display: none;\r\n    background-color: white;\r\n    padding: $normal-size-ligher $big-size;\r\n    border: $border solid $primary-color;\r\n    z-index: 1;\r\n    overflow: hidden;\r\n    box-shadow: 0 0.28rem $small-size rgba(0, 0, 0, 0.1);\r\n    opacity: $opacity-lighter;\r\n\r\n    &:hover {\r\n        opacity: $full-opacity;\r\n    }\r\n\r\n    .modal-content {\r\n        @include flex-container(nowrap, row, space-between, center);\r\n    }\r\n\r\n    .close {\r\n        font-size: $normal-size;\r\n        font-weight: bold;\r\n        cursor: pointer;\r\n        color: $text;\r\n        margin-right: $normal-size-ligher;\r\n\r\n        &:hover {\r\n            color: black;\r\n        }\r\n    }\r\n\r\n    &:hover .close {\r\n        color: black;\r\n    }\r\n}","// Genre component \r\n#control-panel {\r\n    margin: $normal-size-ligher auto;\r\n\r\n    .container {\r\n        @include container(flex, auto, start);\r\n    }\r\n\r\n    /* Style for the dropdown container */\r\n    .dropdown {\r\n        position: relative;\r\n        display: inline-block;\r\n\r\n        /* Show the dropdown content when the dropdown button is clicked */\r\n        &:hover {\r\n            .dropdown-content {\r\n                display: block;\r\n            }\r\n        }\r\n\r\n        /* Style for the dropdown button */\r\n        .dropbtn {\r\n            width: 11.25rem; //180px\r\n            margin-right: $normal-size-ligher;\r\n            padding: $normal-size-ligher;\r\n            text-align: left;\r\n            font-size: $normal-size;\r\n            background-color: inherit;\r\n            color: white;\r\n            border: none;\r\n\r\n            &:hover {\r\n                background-color: $primary-color;\r\n            }\r\n        }\r\n\r\n        /* Style for the dropdown content (hidden by default) */\r\n        .dropdown-content {\r\n            display: none;\r\n            position: absolute;\r\n            background-color: $primary-color;\r\n            max-width: 11.25rem; //180px\r\n            width: $full;\r\n            z-index: 1;\r\n            margin-top: $border;\r\n            border: $border solid $primary-color;\r\n            border-radius: $small-size;\r\n        }\r\n\r\n        // genres\r\n        .tag {\r\n            width: $full;\r\n            display: flex;\r\n            padding: $small-size;\r\n            cursor: pointer;\r\n            color: white;\r\n    \r\n            &:hover {\r\n                background-color: $primary-color-lighter;\r\n            }\r\n    \r\n            &.highlight {\r\n                color: $secondary-color;\r\n            }\r\n        }\r\n    }\r\n\r\n    .favorite,\r\n    .remove-all {\r\n        width: 10.625rem; //170px\r\n        margin-right: $small-size;\r\n        padding: $normal-size-ligher;\r\n        font-size: $normal-size;\r\n        text-align: left;\r\n        background-color: inherit;\r\n        color: white;\r\n        border: none;\r\n        border-radius: $small-size;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        &:hover {\r\n            background-color: $primary-color;\r\n        }\r\n    }\r\n}","// movie-product.scss\r\n\r\n.movie {\r\n    position: relative;\r\n    width: 18.75rem;  // 300px\r\n    margin: $normal-size;\r\n    border-radius: $small-size;\r\n    box-shadow: 0.013rem 0.25rem $small-size rgba(0, 0, 0, 0.1);\r\n    @include flex-container(nowrap, column, space-between, stretch);\r\n\r\n    img {\r\n        width: $full;\r\n        height: -webkit-fill-available;\r\n        border-radius: $normal-size;\r\n    }\r\n\r\n    .movie-info {\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: $full;\r\n        padding: $small-size $normal-size $small-size;\r\n        display: flex;\r\n        flex-direction: column;\r\n        background-color: $secondary-color-lighter;\r\n        opacity: $opacity-lighter;\r\n        color: $secondary-color;\r\n        border-radius: 0 0 $normal-size $normal-size;\r\n\r\n        h3 {\r\n            margin: 0;\r\n            font-weight: bold;\r\n            font-size: $normal-size;\r\n        }\r\n    }\r\n\r\n    @include respond-to(992px) {\r\n        .movie-info {\r\n            display: none;\r\n        }\r\n\r\n        &:hover {\r\n            .movie-info {\r\n                display: flex;\r\n                flex-direction: column;\r\n                position: absolute;\r\n                bottom: 0;\r\n                width: $full;\r\n                padding: $small-size $normal-size $small-size;\r\n                background-color: $secondary-color-lighter;\r\n                opacity: $opacity-lighter;\r\n                color: $secondary-color;\r\n                border-radius: 0 0 $normal-size $normal-size;\r\n\r\n                h3 {\r\n                    margin: 0;\r\n                    font-weight: bold;\r\n                    font-size: $normal-size;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .add-to-favorite,\r\n    .remove-from-favorite {\r\n        position: absolute;\r\n        top: $normal-size-ligher;\r\n        right: $normal-size-ligher;\r\n        width: 2.5rem;\r\n        height: 2.5rem;\r\n        font-size: $big-size;\r\n        border: $border solid $secondary-color;\r\n        color: $secondary-color;\r\n        background: $secondary-color-lighter;\r\n        opacity: $opacity-lighter;\r\n        border-radius: $half;\r\n\r\n        &.hidden {\r\n            display: none;\r\n        }\r\n    }\r\n}",".pagination {\r\n    @include flex-container();\r\n    margin: $normal-size-ligher 2rem;\r\n    color: white;\r\n\r\n    &.hidden {\r\n        display: none;\r\n    }\r\n\r\n    .page {\r\n        cursor: pointer;\r\n        padding: $big-size;\r\n\r\n        .disabled {\r\n            cursor: not-allowed;\r\n            color: grey;\r\n        }\r\n    }\r\n\r\n    .current {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 4.5rem;\r\n        height: 4.5rem;\r\n        padding: $normal-size-ligher $big-size;\r\n        border: $small-size solid $secondary-color;\r\n        border-radius: $half;\r\n        color: $secondary-color;\r\n        font-size: $big-size;\r\n        font-weight: 600;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// -- Start of configuration setting/variables
// TMDB configurations
var API_KEY = "api_key=280cea638de62fa610523ecbebf23321";
var BASE_URL = "https://api.themoviedb.org/3";
var API_URL = "".concat(BASE_URL, "/discover/movie?sort_by=popularity.desc&").concat(API_KEY);
var IMG_URL = "https://image.tmdb.org/t/p/w500";
var searchURL = "".concat(BASE_URL, "/search/movie?").concat(API_KEY);

// variables
var main = document.getElementById("main");
var form = document.getElementById("form");
var search = document.getElementById("search");
var controlPanelEl = document.getElementById("control-panel").querySelector(".container");
var pagination = document.querySelector(".pagination");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = document.getElementById("current");
var logo = document.querySelector(".logo");
var favoritesButton = createButton("Favorites", showFavorites);
var removeAllButton = createButton("Remove All", removeAllFavorites);
var currentPage = 1;
var nextPage = 2;
var prevPage = 3;
var lastUrl = "";
var totalPages = 100;
var selectedGenre = [];
var genres = [{
  id: 28,
  name: "Action"
}, {
  id: 12,
  name: "Adventure"
}, {
  id: 16,
  name: "Animation"
}, {
  id: 35,
  name: "Comedy"
}, {
  id: 80,
  name: "Crime"
}, {
  id: 99,
  name: "Documentary"
}, {
  id: 18,
  name: "Drama"
}, {
  id: 14,
  name: "Fantasy"
}, {
  id: 36,
  name: "History"
}, {
  id: 27,
  name: "Horror"
}, {
  id: 53,
  name: "Thriller"
}, {
  id: 37,
  name: "Western"
}, {
  id: 878,
  name: "Science Fiction"
}, {
  id: 9648,
  name: "Mystery"
}, {
  id: 10751,
  name: "Family"
}, {
  id: 10402,
  name: "Music"
}, {
  id: 10749,
  name: "Romance"
}, {
  id: 10770,
  name: "TV Movie"
}, {
  id: 10752,
  name: "War"
}];
//* End of configuration setting/variables

// --- Start of movie component 
var Movie = /*#__PURE__*/function () {
  function Movie(_ref) {
    var title = _ref.title,
      poster_path = _ref.poster_path,
      id = _ref.id,
      release_date = _ref.release_date;
    _classCallCheck(this, Movie);
    this.title = title;
    this.poster_path = poster_path;
    this.id = id;
    this.release_date = release_date;
  }
  _createClass(Movie, [{
    key: "formatDate",
    value: function formatDate() {
      var options = {
        month: "short",
        day: "numeric",
        year: "numeric"
      };
      return new Date(this.release_date).toLocaleDateString(undefined, options);
    }
  }, {
    key: "createMovieElement",
    value: function createMovieElement() {
      var _this = this;
      var formattedReleaseDate = this.formatDate();
      var movieEl = document.createElement("div");
      movieEl.classList.add("movie");
      movieEl.dataset.movieId = this.id;
      movieEl.innerHTML = "\n      <img src=\"".concat(this.poster_path ? IMG_URL + this.poster_path : "http://via.placeholder.com/1080x1580", "\" alt=\"").concat(this.title, "\">\n      <div class=\"movie-info\">\n          <h3>").concat(this.title, "</h3>\n          <span>").concat(formattedReleaseDate, "</span>\n      </div>\n    ");
      var addToFavoriteButton = createButton("+", function () {
        return addToFavorites(_this);
      });
      addToFavoriteButton.classList.add("add-to-favorite");
      movieEl.appendChild(addToFavoriteButton);
      return movieEl;
    }
  }]);
  return Movie;
}(); // Usage
function showMovies(data) {
  main.innerHTML = "";
  console.log(data);
  data.forEach(function (movieData) {
    var movie = new Movie(movieData);
    var movieEl = movie.createMovieElement();
    main.appendChild(movieEl);
  });
}
function getMovies(_x) {
  return _getMovies.apply(this, arguments);
} //* End of movie component
// --- Start of Modal
// Function to create a new modal element
function _getMovies() {
  _getMovies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          if (data.results.length !== 0) {
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;
            current.innerText = currentPage;
            prev.classList.toggle("disabled", currentPage <= 1);
            next.classList.toggle("disabled", currentPage >= totalPages);
            controlPanelEl.scrollIntoView({
              behavior: "smooth"
            });
          } else {
            main.innerHTML = "<h1 class=\"no-results\">No Results Found</h1>";
          }
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching movies:", _context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getMovies.apply(this, arguments);
}
function createModal() {
  var modal = document.createElement("div");
  modal.classList.add("modal");
  var modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  var closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  closeBtn.onclick = function () {
    modal.style.display = "none";
    document.body.removeChild(modal);
    adjustModalPositions();
  };
  var modalMessage = document.createElement("p");
  modalMessage.classList.add("modal-message");
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalMessage);
  modal.appendChild(modalContent);
  return modal;
}

// Function to adjust the positions of modals
function adjustModalPositions() {
  var modals = document.querySelectorAll(".modal");
  var topOffset = 60;
  modals.forEach(function (modal, index) {
    modal.style.top = topOffset + "px";
    topOffset += modal.offsetHeight + 10;
  });
}
// * End of Modal

// --- Start Genre
setGenre();
function setGenre() {
  var dropdownContainer = document.createElement("div");
  dropdownContainer.classList.add("dropdown");
  var dropdownButton = document.createElement("button");
  dropdownButton.innerText = "Genres";
  dropdownButton.classList.add("dropbtn");
  var dropdownContent = document.createElement("div");
  dropdownContent.classList.add("dropdown-content");
  genres.forEach(function (genre) {
    var t = document.createElement("div");
    t.classList.add("tag");
    t.id = genre.id;
    t.innerText = genre.name;
    t.addEventListener("click", function () {
      toggleGenreSelection(genre.id);
    });
    dropdownContent.append(t);
  });
  dropdownContainer.appendChild(dropdownButton);
  dropdownContainer.appendChild(dropdownContent);
  controlPanelEl.appendChild(dropdownContainer);
}
function toggleGenreSelection(id) {
  var index = selectedGenre.indexOf(id);
  if (index !== -1) {
    selectedGenre.splice(index, 1);
  } else {
    selectedGenre.push(id);
  }
  getMovies(API_URL + "&with_genres=" + encodeURI(selectedGenre.join(",")));
  highlightSelection();
}
function highlightSelection() {
  var tags = document.querySelectorAll(".tag");
  tags.forEach(function (tag) {
    return tag.classList.remove("highlight");
  });
  if (selectedGenre.length !== 0) {
    selectedGenre.forEach(function (id) {
      var highlightedTag = document.getElementById(id);
      highlightedTag && highlightedTag.classList.add("highlight");
    });
  }
}
// *End Genre

// --- Start of Favorites functionality
// Add class 'favorites' and appent to controlPanel
favoritesButton.classList.add("favorite");
controlPanelEl.appendChild(favoritesButton);

// Function to add a movie to favorites
function addToFavorites(movie) {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Create a new modal element
  var newModal = createModal();
  document.body.appendChild(newModal);
  var modalMessage = newModal.querySelector(".modal-message");
  if (modalMessage) {
    var modalNumber = document.querySelectorAll(".modal").length + 1;
    newModal.dataset.modalNumber = modalNumber;
    if (!favorites.some(function (fav) {
      return fav.id === movie.id;
    })) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      modalMessage.textContent = "Movie added to favorites!";
    } else {
      modalMessage.textContent = "Movie is already in favorites!";
    }

    // Display the new modal
    newModal.style.display = "block";

    // Adjust the position of the new modal
    adjustModalPositions();

    // Close the new modal after 10 seconds
    setTimeout(function () {
      // Check if the newModal is still a child of the document.body
      if (document.body.contains(newModal)) {
        newModal.style.display = "none";
        // Remove the new modal from the DOM after it disappears
        document.body.removeChild(newModal);
        // Adjust the position of remaining modals
        adjustModalPositions();
      } else {
        console.error("newModal is not a child or was already deleted");
      }
    }, 3000);
  } else {
    console.error("Modal message element not found");
  }
}

// Function to show favorites
function showFavorites() {
  // Retrieve favorites from local storage
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Display favorites in the main container
  showMovies(favorites);
  pagination.classList.add("hidden");

  // Toggle visibility of "Remove All" button based on whether there are favorites
  removeAllButton.style.display = favorites.length > 0 ? "inline-block" : "none";

  // Attach a "Remove from Favorite" button for each movie
  var movieElementsFromFavorite = document.querySelectorAll(".movie");
  movieElementsFromFavorite.forEach(function (element) {
    var movieId = element.dataset.movieId;
    var removeFromFavoriteButton = createButton("X", function () {
      return removeFromFavorites(movieId);
    });
    removeFromFavoriteButton.classList.add("remove-from-favorite");
    element.appendChild(removeFromFavoriteButton);
  });

  // Add the 'hidden' class to all elements with the class 'add-to-favorite'
  var addToFavoriteButtons = document.querySelectorAll(".add-to-favorite");
  addToFavoriteButtons.forEach(function (button) {
    button.classList.add("hidden");
  });

  // Update the URL to include '/favorite'
  history.pushState(null, null, "/favorite");

  // Check if there are no favorites
  if (favorites.length === 0) {
    // Create a paragraph element with a message
    var noFavoritesMessage = document.createElement("p");
    noFavoritesMessage.innerHTML = "You have no favorite movies. Add some movies to your favorites! </br>\n              If you want to see all the movies, click the logo";
    noFavoritesMessage.classList.add("no-favorite-message");
    // Append the message to the body
    main.appendChild(noFavoritesMessage);
    // Hide the "Remove All" button
    removeAllButton.style.display = "none";
  }
}

// Function to remove all movies from favorites
function removeAllFavorites() {
  // Clear favorites in local storage
  localStorage.removeItem("favorites");

  // Display updated favorites (which will be an empty array)
  showFavorites();
}

// Add class 'remove-all' and append to controlPanel
removeAllButton.classList.add("remove-all");
controlPanelEl.appendChild(removeAllButton);
removeAllButton.style.display = "none"; // Hide initially

// Remove from favorite function
function removeFromFavorites(movieId) {
  // Retrieve existing favorites from local storage or initialize an empty array
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the movie is in favorites
  var updatedFavorites = favorites.filter(function (fav) {
    return String(fav.id) !== String(movieId);
  }); // Compare as strings

  if (updatedFavorites.length !== favorites.length) {
    // Update the local storage with the new favorites array
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Display updated favorites
    showFavorites();
  } else {
    modalMessage.textContent = "Movie is not in favorites!";
  }
}

// when resize
// Function to update the button text based on screen width
function updateButtonText() {
  // Check if the screen width is greater than 992px
  if (window.innerWidth > 992) {
    favoritesButton.innerHTML = "Favorites";
    removeAllButton.innerHTML = "Remove All";
  } else {
    // Use the heart icon if the screen width is 992px or smaller
    favoritesButton.innerHTML = "&#10084;";
    removeAllButton.innerHTML = "&#128465;";
  }
}

// Add an event listener to update the button text on window resize
window.addEventListener("resize", updateButtonText);

// Call the function initially to set the button text
updateButtonText();
//* End of favorite functionality

// --- Start of header functionality
// Add an event listener to the logo
logo.addEventListener("click", function () {
  // Remove '/favorite' from the URL
  history.pushState(null, null, "/");
  pagination.classList.remove('hidden');
  // Call the function to show the home page content
  getMovies(API_URL);
});

// Event listener for form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var searchTerm = search.value;
  selectedGenre = [];
  setGenre();

  // Use template literals for string concatenation
  var url = searchTerm ? "".concat(searchURL, "&query=").concat(searchTerm) : API_URL;
  getMovies(url);
});
// *End of header functionality

// --- Start of general functions
function createButton(text, clickHandler) {
  var button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", clickHandler);
  return button;
}
// *End of general functions

// --- Start pagination
// Refactored pageCall function
function pageCall(page) {
  // Check if lastUrl is defined before splitting
  if (lastUrl) {
    var urlSplit = lastUrl.split("?");
    var queryParams = urlSplit[1] ? urlSplit[1].split("&") : [];
    var key = queryParams[queryParams.length - 1] ? queryParams[queryParams.length - 1].split("=") : [];

    // Use ternary operator for cleaner conditional
    var url = key[0] !== "page" ? "".concat(lastUrl, "&page=").concat(page) : "".concat(urlSplit[0], "?").concat(queryParams.join("&"), "&").concat(key[0], "=").concat(page);
    getMovies(url);
  } else {
    console.error("lastUrl is undefined");
  }
}

// Event listener for previous button
prev.addEventListener("click", function () {
  if (prevPage > 0) {
    // Update lastUrl before calling pageCall
    lastUrl = "".concat(BASE_URL, "/discover/movie?sort_by=popularity.desc&").concat(API_KEY, "&page=").concat(prevPage);
    var loader = document.getElementById("loader-wrapper");
    loader.style.display = "block";
    setTimeout(function () {
      loader.style.display = "none"; // Hide the loader after 500 milliseconds
      pageCall(prevPage);
    }, 500);
  }
});

// Event listener for next button
next.addEventListener("click", function () {
  if (nextPage <= totalPages) {
    // Update lastUrl before calling pageCall
    lastUrl = "".concat(BASE_URL, "/discover/movie?sort_by=popularity.desc&").concat(API_KEY, "&page=").concat(nextPage);
    var loader = document.getElementById("loader-wrapper");
    loader.style.display = "block";
    setTimeout(function () {
      loader.style.display = "none";
      pageCall(nextPage);
    }, 500);
  }
});
// *End pagination

// --- start loader
document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.getElementById("loader-wrapper");

  // Check if the element exists before accessing its style
  if (loaderWrapper) {
    // Display the loader and overlay
    loaderWrapper.style.display = "block";

    // Hide the loader and overlay after 5 seconds
    setTimeout(function () {
      loaderWrapper.style.display = "none";
    }, 500);
  } else {
    console.error('Element with ID "loader-wrapper" not found');
  }
});
// *End the loader

// Shows the *home page 
getMovies(API_URL);
})();

/******/ })()
;
//# sourceMappingURL=bundle3ef78edc3d0cc8fd2563.js.map