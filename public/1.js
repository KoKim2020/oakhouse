(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/quasar.sass":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./src/styles/quasar.sass ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n15 │ @import '~quasar-variables-styl'\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles/quasar.variables.sass 15:9  @import\n  /opt/lampp/htdocs/oakhouse/src/styles/quasar.sass 1:9                              root stylesheet");

/***/ }),

/***/ "./src/quasar.js":
/*!***********************!*\
  !*** ./src/quasar.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_quasar_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/quasar.sass */ "./src/styles/quasar.sass");
/* harmony import */ var _styles_quasar_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_quasar_sass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quasar/extras/material-icons/material-icons.css */ "./node_modules/@quasar/extras/material-icons/material-icons.css");
/* harmony import */ var _quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quasar_src_vue_plugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quasar/src/vue-plugin.js */ "./node_modules/quasar/src/vue-plugin.js");




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(quasar_src_vue_plugin_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
  config: {},
  components: {
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {}
});

/***/ }),

/***/ "./src/styles/quasar.sass":
/*!********************************!*\
  !*** ./src/styles/quasar.sass ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--8-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./quasar.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/quasar.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);