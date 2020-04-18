(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@quasar/extras/material-icons/material-icons.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@quasar/extras/material-icons/material-icons.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../css-loader??ref--6-1!../../../postcss-loader/src??ref--6-2!./material-icons.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@quasar/extras/material-icons/material-icons.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@quasar/extras/material-icons/web-flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff?29b882f018fa6fe75fd338aaae6235b8";

/***/ }),

/***/ "./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2 ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@quasar/extras/material-icons/web-flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2?0509ab09c1b0d2200a4135803c91d6ce";

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@quasar/extras/material-icons/material-icons.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@quasar/extras/material-icons/material-icons.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(" + escape(__webpack_require__(/*! ./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2 */ "./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2")) + ") format('woff2'), url(" + escape(__webpack_require__(/*! ./web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff */ "./node_modules/@quasar/extras/material-icons/web-font/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff")) + ") format('woff');\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/quasar/icon-set/material-icons.js":
/*!********************************************************!*\
  !*** ./node_modules/quasar/icon-set/material-icons.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'material-icons',
  type: {
    positive: 'check_circle',
    negative: 'warning',
    info: 'info',
    warning: 'priority_high'
  },
  arrow: {
    up: 'arrow_upward',
    right: 'arrow_forward',
    down: 'arrow_downward',
    left: 'arrow_back',
    dropdown: 'arrow_drop_down'
  },
  chevron: {
    left: 'chevron_left',
    right: 'chevron_right'
  },
  colorPicker: {
    spectrum: 'gradient',
    tune: 'tune',
    palette: 'style'
  },
  pullToRefresh: {
    icon: 'refresh'
  },
  carousel: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down',
    navigationIcon: 'lens'
  },
  chip: {
    remove: 'cancel',
    selected: 'check'
  },
  datetime: {
    arrowLeft: 'chevron_left',
    arrowRight: 'chevron_right',
    now: 'access_time',
    today: 'today'
  },
  editor: {
    bold: 'format_bold',
    italic: 'format_italic',
    strikethrough: 'strikethrough_s',
    underline: 'format_underlined',
    unorderedList: 'format_list_bulleted',
    orderedList: 'format_list_numbered',
    subscript: 'vertical_align_bottom',
    superscript: 'vertical_align_top',
    hyperlink: 'link',
    toggleFullscreen: 'fullscreen',
    quote: 'format_quote',
    left: 'format_align_left',
    center: 'format_align_center',
    right: 'format_align_right',
    justify: 'format_align_justify',
    print: 'print',
    outdent: 'format_indent_decrease',
    indent: 'format_indent_increase',
    removeFormat: 'format_clear',
    formatting: 'text_format',
    fontSize: 'format_size',
    align: 'format_align_left',
    hr: 'remove',
    undo: 'undo',
    redo: 'redo',
    heading: 'format_size',
    code: 'code',
    size: 'format_size',
    font: 'font_download',
    viewSource: 'code'
  },
  expansionItem: {
    icon: 'keyboard_arrow_down',
    denseIcon: 'arrow_drop_down'
  },
  fab: {
    icon: 'add',
    activeIcon: 'close'
  },
  field: {
    clear: 'cancel',
    error: 'error'
  },
  pagination: {
    first: 'first_page',
    prev: 'keyboard_arrow_left',
    next: 'keyboard_arrow_right',
    last: 'last_page'
  },
  rating: {
    icon: 'grade'
  },
  stepper: {
    done: 'check',
    active: 'edit',
    error: 'warning'
  },
  tabs: {
    left: 'chevron_left',
    right: 'chevron_right',
    up: 'keyboard_arrow_up',
    down: 'keyboard_arrow_down'
  },
  table: {
    arrowUp: 'arrow_upward',
    warning: 'warning',
    prevPage: 'chevron_left',
    nextPage: 'chevron_right'
  },
  tree: {
    icon: 'play_arrow'
  },
  uploader: {
    done: 'done',
    clear: 'clear',
    add: 'add_box',
    upload: 'cloud_upload',
    removeQueue: 'clear_all',
    removeUploaded: 'done_all'
  }
});


/***/ }),

/***/ "./node_modules/quasar/lang/en-us.js":
/*!*******************************************!*\
  !*** ./node_modules/quasar/lang/en-us.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  isoName: 'en-us',
  nativeName: 'English (US)',
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    close: 'Close',
    set: 'Set',
    select: 'Select',
    reset: 'Reset',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search',
    filter: 'Filter',
    refresh: 'Refresh'
  },
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    firstDayOfWeek: 0, // 0-6, 0 - Sunday, 1 Monday, ...
    format24h: false
  },
  table: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loading: 'Loading...',
    selectedRecords: function (rows) {
      return rows === 1
        ? '1 record selected.'
        : (rows === 0 ? 'No' : rows) + ' records selected.'
    },
    recordsPerPage: 'Records per page:',
    allRows: 'All',
    pagination: function (start, end, total) {
      return start + '-' + end + ' of ' + total
    },
    columns: 'Columns'
  },
  editor: {
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    formatting: 'Formatting',
    fontSize: 'Font Size',
    align: 'Align',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font',
    viewSource: 'View Source'
  },
  tree: {
    noNodes: 'No nodes available',
    noResults: 'No matching nodes found'
  }
});


/***/ }),

/***/ "./node_modules/quasar/package.json":
/*!******************************************!*\
  !*** ./node_modules/quasar/package.json ***!
  \******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browserslist, bugs, bundleDependencies, deprecated, description, devDependencies, engines, files, funding, homepage, keywords, license, main, module, name, repository, resolutions, scripts, typings, version, vetur, web-types, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"quasar@^1.0.0\",\"_id\":\"quasar@1.9.15\",\"_inBundle\":false,\"_integrity\":\"sha1-qLofeLlDQC/GDgihYA4mOyhjYTg=\",\"_location\":\"/quasar\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"quasar@^1.0.0\",\"name\":\"quasar\",\"escapedName\":\"quasar\",\"rawSpec\":\"^1.0.0\",\"saveSpec\":null,\"fetchSpec\":\"^1.0.0\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npm.taobao.org/quasar/download/quasar-1.9.15.tgz\",\"_shasum\":\"a8ba1f78b943402fc60e08a1600e263b28636138\",\"_spec\":\"quasar@^1.0.0\",\"_where\":\"/opt/lampp/htdocs/oakhouse\",\"author\":{\"name\":\"Razvan Stoenescu\",\"email\":\"razvan.stoenescu@gmail.com\",\"url\":\"https://quasar.dev\"},\"browserslist\":[\"last 1 version, not dead, ie >= 11\"],\"bugs\":{\"url\":\"https://github.com/quasarframework/quasar/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"Build high-performance VueJS user interfaces (SPA, PWA, SSR, Mobile and Desktop) in record time\",\"devDependencies\":{\"@quasar/app\":\"^1.6.1\",\"@quasar/extras\":\"^1.6.1\",\"@rollup/plugin-buble\":\"^0.21.1\",\"@rollup/plugin-json\":\"^4.0.2\",\"@rollup/plugin-node-resolve\":\"^7.1.0\",\"babel-eslint\":\"^10.0.2\",\"babel-preset-es2015-rollup\":\"^3.0.0\",\"eslint\":\"^5.15.3\",\"eslint-config-standard\":\"^12.0.0\",\"eslint-friendly-formatter\":\"^4.0.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-import\":\"^2.18.2\",\"eslint-plugin-node\":\"^9.1.0\",\"eslint-plugin-promise\":\"^4.2.1\",\"eslint-plugin-standard\":\"^4.0.1\",\"eslint-plugin-vue\":\"^5.2.3\",\"friendly-errors-webpack-plugin\":\"^1.7.0\",\"json-beautify\":\"^1.1.1\",\"module-alias\":\"^2.2.2\",\"recast\":\"^0.18.5\",\"rimraf\":\"^3.0.1\",\"rollup\":\"^1.31.0\",\"table\":\"^5.4.6\",\"uglify-es\":\"^3.3.9\",\"vue\":\"^2.6.11\"},\"engines\":{\"node\":\">= 10.0.0\",\"npm\":\">= 5.6.0\",\"yarn\":\">= 1.6.0\"},\"files\":[\"dist\",\"lang\",\"icon-set\",\"src\",\"wrappers\"],\"funding\":{\"type\":\"github\",\"url\":\"https://donate.quasar.dev\"},\"homepage\":\"https://quasar.dev\",\"keywords\":[\"vuejs\",\"vue\",\"quasar\",\"js\",\"phone\",\"tablet\",\"desktop\",\"spa\",\"pwa\",\"website\",\"electron\"],\"license\":\"MIT\",\"main\":\"dist/quasar.common.js\",\"module\":\"src/index.esm.js\",\"name\":\"quasar\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/quasarframework/quasar.git\"},\"resolutions\":{\"@babel/parser\":\"7.7.5\"},\"scripts\":{\"build\":\"node build/script.build.js\",\"clean\":\"node build/script.clean.js\",\"dev\":\"cd ./dev && node ./script.dev.js dev && cd ..\",\"dev:capacitor:android\":\"cd ./dev && node ./script.dev.js dev -m capacitor -T android && cd ..\",\"dev:capacitor:ios\":\"cd ./dev && node ./script.dev.js dev -m capacitor -T ios && cd ..\",\"dev:cordova:android\":\"cd ./dev && node ./script.dev.js dev -m cordova -T android && cd ..\",\"dev:cordova:ios\":\"cd ./dev && node ./script.dev.js dev -m cordova -T ios && cd ..\",\"dev:quploader\":\"cd dev/upload-server && yarn && cd ../.. && node dev/upload-server/server.js\",\"dev:ssr\":\"cd ./dev && node ./script.dev.js dev -m ssr && cd ..\",\"dev:umd\":\"node build/script.test-umd.js\",\"lint\":\"eslint --ext .js,.vue src dev\",\"lint-fix\":\"eslint --ext .js,.vue src dev --fix\",\"test\":\"yarn lint && yarn build\"},\"typings\":\"dist/types/index.d.ts\",\"version\":\"1.9.15\",\"vetur\":{\"tags\":\"dist/vetur/quasar-tags.json\",\"attributes\":\"dist/vetur/quasar-attributes.json\"},\"web-types\":\"dist/web-types/web-types.json\"}");

/***/ }),

/***/ "./node_modules/quasar/src/body.js":
/*!*****************************************!*\
  !*** ./node_modules/quasar/src/body.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/colors.js */ "./node_modules/quasar/src/utils/colors.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/event.js */ "./node_modules/quasar/src/utils/event.js");
/* harmony import */ var _utils_key_composition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/key-composition.js */ "./node_modules/quasar/src/utils/key-composition.js");
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");





function getMobilePlatform (is) {
  if (is.ios === true) return 'ios'
  if (is.android === true) return 'android'
}

function getBodyClasses ({ is, has, within }, cfg) {
  const cls = [
    is.desktop === true ? 'desktop' : 'mobile',
    `${has.touch === false ? 'no-' : ''}touch`
  ]

  if (is.mobile === true) {
    const mobile = getMobilePlatform(is)
    mobile !== void 0 && cls.push('platform-' + mobile)
  }

  if (is.nativeMobile === true) {
    const type = is.nativeMobileWrapper

    cls.push(type)
    cls.push('native-mobile')

    if (
      is.ios === true &&
      (cfg[type] === void 0 || cfg[type].iosStatusBarPadding !== false)
    ) {
      cls.push('q-ios-padding')
    }
  }
  else if (is.electron === true) {
    cls.push('electron')
  }
  else if (is.bex === true) {
    cls.push('bex')
  }

  within.iframe === true && cls.push('within-iframe')

  return cls
}

// SSR takeover corrections
function clientUpdate () {
  const classes = document.body.className
  let newCls = classes

  if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["iosCorrection"] !== void 0) {
    newCls = newCls.replace('desktop', 'platform-ios mobile')
  }

  if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"].has.touch === true) {
    newCls = newCls.replace('no-touch', 'touch')
  }

  if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"].within.iframe === true) {
    newCls += ' within-iframe'
  }

  if (classes !== newCls) {
    document.body.className = newCls
  }
}

function setColors (brand) {
  for (let color in brand) {
    Object(_utils_colors_js__WEBPACK_IMPORTED_MODULE_0__["setBrand"])(color, brand[color])
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  install (queues, cfg) {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["isSSR"] === true) {
      queues.server.push((q, ctx) => {
        const
          cls = getBodyClasses(q.platform, cfg),
          fn = ctx.ssr.setBodyClasses

        if (cfg.screen !== void 0 && cfg.screen.bodyClass === true) {
          cls.push('screen--xs')
        }

        if (typeof fn === 'function') {
          fn(cls)
        }
        else {
          ctx.ssr.Q_BODY_CLASSES = cls.join(' ')
        }
      })

      return
    }

    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["fromSSR"] === true) {
      clientUpdate()
    }
    else {
      const cls = getBodyClasses(_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"], cfg)

      if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"].is.ie === true && _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"].is.versionNumber === 11) {
        cls.forEach(c => document.body.classList.add(c))
      }
      else {
        document.body.classList.add.apply(document.body.classList, cls)
      }
    }

    cfg.brand !== void 0 && setColors(cfg.brand)

    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_3__["client"].is.ios === true) {
      // needed for iOS button active state
      document.body.addEventListener('touchstart', _utils_event_js__WEBPACK_IMPORTED_MODULE_1__["noop"])
    }

    window.addEventListener('keydown', _utils_key_composition_js__WEBPACK_IMPORTED_MODULE_2__["onKeyDownComposition"], true)
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/history.js":
/*!********************************************!*\
  !*** ./node_modules/quasar/src/history.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/event.js */ "./node_modules/quasar/src/utils/event.js");



const getTrue = () => true

/* harmony default export */ __webpack_exports__["default"] = ({
  __history: [],
  add: _utils_event_js__WEBPACK_IMPORTED_MODULE_1__["noop"],
  remove: _utils_event_js__WEBPACK_IMPORTED_MODULE_1__["noop"],

  install (cfg) {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__["isSSR"] === true) {
      return
    }

    const { cordova, capacitor } = _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_0__["client"].is

    if (cordova !== true && capacitor !== true) {
      return
    }

    this.add = entry => {
      if (entry.condition === void 0) {
        entry.condition = getTrue
      }
      this.__history.push(entry)
    }
    this.remove = entry => {
      const index = this.__history.indexOf(entry)
      if (index >= 0) {
        this.__history.splice(index, 1)
      }
    }

    const fn = () => {
      if (this.__history.length) {
        const entry = this.__history[this.__history.length - 1]

        if (entry.condition() === true) {
          this.__history.pop()
          entry.handler()
        }
      }
      else if (exit && window.location.hash === '#/') {
        navigator.app.exitApp()
      }
      else {
        window.history.back()
      }
    }

    const prop = cordova === true ? 'cordova' : 'capacitor'
    const exit = cfg[prop] === void 0 || cfg[prop].backButtonExit !== false

    if (cordova === true) {
      document.addEventListener('deviceready', () => {
        document.addEventListener('backbutton', fn, false)
      })
    }
    else {
      window.Capacitor.Plugins.App.addListener('backButton', fn)
    }
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/icon-set.js":
/*!*********************************************!*\
  !*** ./node_modules/quasar/src/icon-set.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");
/* harmony import */ var _icon_set_material_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon-set/material-icons.js */ "./node_modules/quasar/icon-set/material-icons.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  install ($q, iconSet) {
    this.set = (iconDef = _icon_set_material_icons_js__WEBPACK_IMPORTED_MODULE_2__["default"]) => {
      iconDef.set = this.set

      if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__["isSSR"] === true || $q.iconSet !== void 0) {
        $q.iconSet = iconDef
      }
      else {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'iconSet', iconDef)
      }

      this.name = iconDef.name
      this.def = iconDef
    }

    this.set(iconSet)

    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__["isSSR"] !== true) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'iconMapFn', void 0)
    }
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/install.js":
/*!********************************************!*\
  !*** ./node_modules/quasar/src/install.js ***!
  \********************************************/
/*! exports provided: queues, $q, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queues", function() { return queues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return $q; });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ "./node_modules/quasar/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./node_modules/quasar/package.json", 1);
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");
/* harmony import */ var _plugins_Screen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/Screen.js */ "./node_modules/quasar/src/plugins/Screen.js");
/* harmony import */ var _plugins_Dark_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/Dark.js */ "./node_modules/quasar/src/plugins/Dark.js");
/* harmony import */ var _history_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history.js */ "./node_modules/quasar/src/history.js");
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang.js */ "./node_modules/quasar/src/lang.js");
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body.js */ "./node_modules/quasar/src/body.js");
/* harmony import */ var _icon_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon-set.js */ "./node_modules/quasar/src/icon-set.js");









const autoInstalled = [
  _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__["default"], _plugins_Screen_js__WEBPACK_IMPORTED_MODULE_2__["default"], _plugins_Dark_js__WEBPACK_IMPORTED_MODULE_3__["default"]
]

const queues = {
  server: [], // on SSR update
  takeover: [] // on client takeover
}

const $q = {
  version: _package_json__WEBPACK_IMPORTED_MODULE_0__["version"],
  config: {}
}

/* harmony default export */ __webpack_exports__["default"] = (function (Vue, opts = {}) {
  if (this.__qInstalled === true) { return }
  this.__qInstalled = true

  const cfg = $q.config = Object.freeze(opts.config || {})

  // required plugins
  _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__["default"].install($q, queues)
  _body_js__WEBPACK_IMPORTED_MODULE_6__["default"].install(queues, cfg)
  _plugins_Dark_js__WEBPACK_IMPORTED_MODULE_3__["default"].install($q, queues, cfg)
  _plugins_Screen_js__WEBPACK_IMPORTED_MODULE_2__["default"].install($q, queues, cfg)
  _history_js__WEBPACK_IMPORTED_MODULE_4__["default"].install(cfg)
  _lang_js__WEBPACK_IMPORTED_MODULE_5__["default"].install($q, queues, opts.lang)
  _icon_set_js__WEBPACK_IMPORTED_MODULE_7__["default"].install($q, opts.iconSet)

  if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_1__["isSSR"] === true) {
    Vue.mixin({
      beforeCreate () {
        this.$q = this.$root.$options.$q
      }
    })
  }
  else {
    Vue.prototype.$q = $q
  }

  opts.components && Object.keys(opts.components).forEach(key => {
    const c = opts.components[key]
    if (typeof c === 'function') {
      Vue.component(c.options.name, c)
    }
  })

  opts.directives && Object.keys(opts.directives).forEach(key => {
    const d = opts.directives[key]
    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d)
    }
  })

  if (opts.plugins) {
    const param = { $q, queues, cfg }
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key]
      if (typeof p.install === 'function' && autoInstalled.includes(p) === false) {
        p.install(param)
      }
    })
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/lang.js":
/*!*****************************************!*\
  !*** ./node_modules/quasar/src/lang.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lang_en_us_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lang/en-us.js */ "./node_modules/quasar/lang/en-us.js");
/* harmony import */ var _plugins_Platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  install ($q, queues, lang) {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_2__["isSSR"] === true) {
      queues.server.push((q, ctx) => {
        const
          opt = {
            lang: q.lang.isoName,
            dir: q.lang.rtl === true ? 'rtl' : 'ltr'
          },
          fn = ctx.ssr.setHtmlAttrs

        if (typeof fn === 'function') {
          fn(opt)
        }
        else {
          ctx.ssr.Q_HTML_ATTRS = Object.keys(opt)
            .map(key => `${key}=${opt[key]}`)
            .join(' ')
        }
      })
    }

    this.set = (lang = _lang_en_us_js__WEBPACK_IMPORTED_MODULE_1__["default"]) => {
      lang.set = this.set
      lang.getLocale = this.getLocale
      lang.rtl = lang.rtl === true || false

      if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_2__["isSSR"] === false) {
        const el = document.documentElement
        el.setAttribute('dir', lang.rtl ? 'rtl' : 'ltr')
        el.setAttribute('lang', lang.isoName)
      }

      if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_2__["isSSR"] === true || $q.lang !== void 0) {
        $q.lang = lang
      }
      else {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'lang', lang)
      }

      this.isoName = lang.isoName
      this.nativeName = lang.nativeName
      this.props = lang
    }

    this.set(lang)
  },

  getLocale () {
    if (_plugins_Platform_js__WEBPACK_IMPORTED_MODULE_2__["isSSR"] === true) { return }

    let val =
      navigator.language ||
      navigator.languages[0] ||
      navigator.browserLanguage ||
      navigator.userLanguage ||
      navigator.systemLanguage

    if (val) {
      return val.toLowerCase()
    }
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/plugins/Dark.js":
/*!*************************************************!*\
  !*** ./node_modules/quasar/src/plugins/Dark.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event.js */ "./node_modules/quasar/src/utils/event.js");





const Dark = {
  isActive: false,
  mode: false,

  install ($q, queues, { dark }) {
    this.isActive = dark === true

    if (_Platform_js__WEBPACK_IMPORTED_MODULE_1__["isSSR"] === true) {
      queues.server.push((q, ctx) => {
        q.dark = {
          isActive: false,
          mode: false,
          set: val => {
            ctx.ssr.Q_BODY_CLASSES = ctx.ssr.Q_BODY_CLASSES
              .replace(' body--light', '')
              .replace(' body--dark', '') + ` body--${val === true ? 'dark' : 'light'}`

            q.dark.isActive = val === true
            q.dark.mode = val
          },
          toggle: () => {
            q.dark.set(q.dark.isActive === false)
          }
        }

        q.dark.set(dark)
      })

      this.set = _utils_event_js__WEBPACK_IMPORTED_MODULE_2__["noop"]
      return
    }

    const initialVal = dark !== void 0
      ? dark
      : false

    if (_Platform_js__WEBPACK_IMPORTED_MODULE_1__["fromSSR"] === true) {
      const ssrSet = val => {
        this.__fromSSR = val
      }

      const originalSet = this.set

      this.set = ssrSet
      ssrSet(initialVal)

      queues.takeover.push(() => {
        this.set = originalSet
        this.set(this.__fromSSR)
      })
    }
    else {
      this.set(initialVal)
    }

    vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive(this, 'isActive', this.isActive)
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'dark', this)
  },

  set (val) {
    this.mode = val

    if (val === 'auto') {
      if (this.__media === void 0) {
        this.__media = window.matchMedia('(prefers-color-scheme: dark)')
        this.__updateMedia = () => { this.set('auto') }
        this.__media.addListener(this.__updateMedia)
      }

      val = this.__media.matches
    }
    else if (this.__media !== void 0) {
      this.__media.removeListener(this.__updateMedia)
      this.__media = void 0
    }

    this.isActive = val === true

    document.body.classList.remove(`body--${val === true ? 'light' : 'dark'}`)
    document.body.classList.add(`body--${val === true ? 'dark' : 'light'}`)
  },

  toggle () {
    Dark.set(Dark.isActive === false)
  },

  __media: void 0
}

/* harmony default export */ __webpack_exports__["default"] = (Dark);


/***/ }),

/***/ "./node_modules/quasar/src/plugins/Platform.js":
/*!*****************************************************!*\
  !*** ./node_modules/quasar/src/plugins/Platform.js ***!
  \*****************************************************/
/*! exports provided: isSSR, fromSSR, onSSR, iosEmulated, iosCorrection, client, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSSR", function() { return isSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromSSR", function() { return fromSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSSR", function() { return onSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosEmulated", function() { return iosEmulated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosCorrection", function() { return iosCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */



const isSSR = typeof window === 'undefined'
let fromSSR = false
let onSSR = isSSR

let iosEmulated = false
let iosCorrection

function getMatch (userAgent, platformMatch) {
  const match = /(edge|edga|edgios)\/([\w.]+)/.exec(userAgent) ||
    /(opr)[\/]([\w.]+)/.exec(userAgent) ||
    /(vivaldi)[\/]([\w.]+)/.exec(userAgent) ||
    /(chrome|crios)[\/]([\w.]+)/.exec(userAgent) ||
    /(iemobile)[\/]([\w.]+)/.exec(userAgent) ||
    /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) ||
    /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(userAgent) ||
    /(firefox|fxios)[\/]([\w.]+)/.exec(userAgent) ||
    /(webkit)[\/]([\w.]+)/.exec(userAgent) ||
    /(opera)(?:.*version|)[\/]([\w.]+)/.exec(userAgent) ||
    /(msie) ([\w.]+)/.exec(userAgent) ||
    (userAgent.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(userAgent)) ||
    (userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent)) ||
    []

  return {
    browser: match[5] || match[3] || match[1] || '',
    version: match[2] || match[4] || '0',
    versionNumber: match[4] || match[2] || '0',
    platform: platformMatch[0] || ''
  }
}

function getPlatformMatch (userAgent) {
  return /(ipad)/.exec(userAgent) ||
    /(ipod)/.exec(userAgent) ||
    /(windows phone)/.exec(userAgent) ||
    /(iphone)/.exec(userAgent) ||
    /(kindle)/.exec(userAgent) ||
    /(silk)/.exec(userAgent) ||
    /(android)/.exec(userAgent) ||
    /(win)/.exec(userAgent) ||
    /(mac)/.exec(userAgent) ||
    /(linux)/.exec(userAgent) ||
    /(cros)/.exec(userAgent) ||
    /(playbook)/.exec(userAgent) ||
    /(bb)/.exec(userAgent) ||
    /(blackberry)/.exec(userAgent) ||
    []
}

const hasTouch = isSSR === false
  ? 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
  : false

function applyIosCorrection (is) {
  iosCorrection = { is: Object.assign({}, is) }

  delete is.mac
  delete is.desktop

  const platform = Math.min(window.innerHeight, window.innerWidth) > 414
    ? 'ipad'
    : 'iphone'

  Object.assign(is, {
    mobile: true,
    ios: true,
    platform,
    [ platform ]: true
  })
}

function getPlatform (userAgent) {
  const
    platformMatch = getPlatformMatch(userAgent),
    matched = getMatch(userAgent, platformMatch),
    browser = {}

  if (matched.browser) {
    browser[matched.browser] = true
    browser.version = matched.version
    browser.versionNumber = parseInt(matched.versionNumber, 10)
  }

  if (matched.platform) {
    browser[matched.platform] = true
  }

  const knownMobiles = browser.android ||
    browser.ios ||
    browser.bb ||
    browser.blackberry ||
    browser.ipad ||
    browser.iphone ||
    browser.ipod ||
    browser.kindle ||
    browser.playbook ||
    browser.silk ||
    browser['windows phone']

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (knownMobiles === true || userAgent.indexOf('mobile') > -1) {
    browser.mobile = true

    if (browser.edga || browser.edgios) {
      browser.edge = true
      matched.browser = 'edge'
    }
    else if (browser.crios) {
      browser.chrome = true
      matched.browser = 'chrome'
    }
    else if (browser.fxios) {
      browser.firefox = true
      matched.browser = 'firefox'
    }
  }
  // If it's not mobile we should consider it's desktop platform, meaning it runs a desktop browser
  // It's a workaround for anonymized user agents
  // (browser.cros || browser.mac || browser.linux || browser.win)
  else {
    browser.desktop = true
  }

  // Set iOS if on iPod, iPad or iPhone
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true
  }

  if (browser['windows phone']) {
    browser.winphone = true
    delete browser['windows phone']
  }

  // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  if (
    browser.chrome ||
    browser.opr ||
    browser.safari ||
    browser.vivaldi ||
    // we expect unknown, non iOS mobile browsers to be webkit based
    (
      browser.mobile === true &&
      browser.ios !== true &&
      knownMobiles !== true
    )
  ) {
    browser.webkit = true
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if (browser.rv || browser.iemobile) {
    matched.browser = 'ie'
    browser.ie = true
  }

  // Blackberry browsers are marked as Safari on BlackBerry
  if (browser.safari && browser.blackberry || browser.bb) {
    matched.browser = 'blackberry'
    browser.blackberry = true
  }

  // Playbook browsers are marked as Safari on Playbook
  if (browser.safari && browser.playbook) {
    matched.browser = 'playbook'
    browser.playbook = true
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
    matched.browser = 'opera'
    browser.opera = true
  }

  // Stock Android browsers are marked as Safari on Android.
  if (browser.safari && browser.android) {
    matched.browser = 'android'
    browser.android = true
  }

  // Kindle browsers are marked as Safari on Kindle
  if (browser.safari && browser.kindle) {
    matched.browser = 'kindle'
    browser.kindle = true
  }

  // Kindle Silk browsers are marked as Safari on Kindle
  if (browser.safari && browser.silk) {
    matched.browser = 'silk'
    browser.silk = true
  }

  if (browser.vivaldi) {
    matched.browser = 'vivaldi'
    browser.vivaldi = true
  }

  // Assign the name and platform variable
  browser.name = matched.browser
  browser.platform = matched.platform

  if (isSSR === false) {
    if (userAgent.indexOf('electron') > -1) {
      browser.electron = true
    }
    else if (document.location.href.indexOf('-extension://') > -1) {
      browser.bex = true
    }
    else if (window.Capacitor !== void 0) {
      browser.capacitor = true
      browser.nativeMobile = true
      browser.nativeMobileWrapper = 'capacitor'
    }
    else if (window._cordovaNative !== void 0 || window.cordova !== void 0) {
      browser.cordova = true
      browser.nativeMobile = true
      browser.nativeMobileWrapper = 'cordova'
    }
    else if (
      hasTouch === true &&
      browser.desktop === true &&
      browser.mac === true &&
      browser.safari === true
    ) {
      /*
       * Correction needed for iOS since the default
       * setting on iPad is to request desktop view; if we have
       * touch support and the user agent says it's a
       * desktop, we infer that it's an iPhone/iPad with desktop view
       * so we must fix the false positives
       */
      applyIosCorrection(browser)
    }

    fromSSR = browser.nativeMobile === void 0 &&
      browser.electron === void 0 &&
      !!document.querySelector('[data-server-rendered]')

    if (fromSSR === true) {
      onSSR = true
    }
  }

  return browser
}

const userAgent = isSSR === false
  ? (navigator.userAgent || navigator.vendor || window.opera).toLowerCase()
  : ''

const ssrClient = {
  has: {
    touch: false,
    webStorage: false
  },
  within: { iframe: false }
}

// We export "client" for hydration error-free parts,
// like touch directives who do not (and must NOT) wait
// for the client takeover;
// Do NOT import this directly in your app, unless you really know
// what you are doing.
const client = isSSR === false
  ? {
    userAgent,
    is: getPlatform(userAgent),
    has: {
      touch: hasTouch,
      webStorage: (() => {
        try {
          if (window.localStorage) {
            return true
          }
        }
        catch (e) {}
        return false
      })()
    },
    within: {
      iframe: window.self !== window.top
    }
  }
  : ssrClient

const Platform = {
  install ($q, queues) {
    if (isSSR === true) {
      // we're on server-side, so we push
      // to the server queue instead of
      // applying directly
      queues.server.push((q, ctx) => {
        q.platform = this.parseSSR(ctx.ssr)
      })
    }
    else if (fromSSR === true) {
      // must match with server-side before
      // client taking over in order to prevent
      // hydration errors
      Object.assign(this, client, iosCorrection, ssrClient)

      // takeover should increase accuracy for
      // the rest of the props; we also avoid
      // hydration errors
      queues.takeover.push(q => {
        onSSR = fromSSR = false
        Object.assign(q.platform, client)
        iosCorrection = void 0
      })

      // we need to make platform reactive
      // for the takeover phase
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'platform', this)
    }
    else {
      // we don't have any business with SSR, so
      // directly applying...
      Object.assign(this, client)
      $q.platform = this
    }
  }
}

if (isSSR === true) {
  Platform.parseSSR = (/* ssrContext */ ssr) => {
    const userAgent = (ssr.req.headers['user-agent'] || ssr.req.headers['User-Agent'] || '').toLowerCase()
    return {
      ...client,
      userAgent,
      is: getPlatform(userAgent)
    }
  }
}
else {
  iosEmulated = client.is.ios === true &&
    window.navigator.vendor.toLowerCase().indexOf('apple') === -1
}

/* harmony default export */ __webpack_exports__["default"] = (Platform);


/***/ }),

/***/ "./node_modules/quasar/src/plugins/Screen.js":
/*!***************************************************!*\
  !*** ./node_modules/quasar/src/plugins/Screen.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform.js */ "./node_modules/quasar/src/plugins/Platform.js");
/* harmony import */ var _utils_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/event.js */ "./node_modules/quasar/src/utils/event.js");
/* harmony import */ var _utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/debounce.js */ "./node_modules/quasar/src/utils/debounce.js");






const SIZE_LIST = ['sm', 'md', 'lg', 'xl']
const { passive } = _utils_event_js__WEBPACK_IMPORTED_MODULE_2__["listenOpts"]

/* harmony default export */ __webpack_exports__["default"] = ({
  width: 0,
  height: 0,

  name: 'xs',

  sizes: {
    sm: 600,
    md: 1024,
    lg: 1440,
    xl: 1920
  },

  lt: {
    sm: true,
    md: true,
    lg: true,
    xl: true
  },
  gt: {
    xs: false,
    sm: false,
    md: false,
    lg: false
  },
  xs: true,
  sm: false,
  md: false,
  lg: false,
  xl: false,

  setSizes: _utils_event_js__WEBPACK_IMPORTED_MODULE_2__["noop"],
  setDebounce: _utils_event_js__WEBPACK_IMPORTED_MODULE_2__["noop"],

  install ($q, queues, cfg) {
    if (_Platform_js__WEBPACK_IMPORTED_MODULE_1__["isSSR"] === true) {
      $q.screen = this
      return
    }

    const classes = cfg.screen !== void 0 && cfg.screen.bodyClasses === true

    const update = force => {
      const
        w = window.innerWidth,
        h = window.innerHeight

      if (h !== this.height) {
        this.height = h
      }

      if (w !== this.width) {
        this.width = w
      }
      else if (force !== true) {
        return
      }

      let s = this.sizes

      this.gt.xs = w >= s.sm
      this.gt.sm = w >= s.md
      this.gt.md = w >= s.lg
      this.gt.lg = w >= s.xl
      this.lt.sm = w < s.sm
      this.lt.md = w < s.md
      this.lt.lg = w < s.lg
      this.lt.xl = w < s.xl
      this.xs = this.lt.sm
      this.sm = this.gt.xs === true && this.lt.md === true
      this.md = this.gt.sm === true && this.lt.lg === true
      this.lg = this.gt.md === true && this.lt.xl === true
      this.xl = this.gt.lg

      s = (this.xs === true && 'xs') ||
        (this.sm === true && 'sm') ||
        (this.md === true && 'md') ||
        (this.lg === true && 'lg') ||
        'xl'

      if (s !== this.name) {
        if (classes === true) {
          document.body.classList.remove(`screen--${this.name}`)
          document.body.classList.add(`screen--${s}`)
        }
        this.name = s
      }
    }

    let updateEvt, updateSizes = {}, updateDebounce = 16

    this.setSizes = sizes => {
      SIZE_LIST.forEach(name => {
        if (sizes[name] !== void 0) {
          updateSizes[name] = sizes[name]
        }
      })
    }
    this.setDebounce = deb => {
      updateDebounce = deb
    }

    const start = () => {
      const
        style = getComputedStyle(document.body),
        target = window.visualViewport !== void 0
          ? window.visualViewport
          : window

      // if css props available
      if (style.getPropertyValue('--q-size-sm')) {
        SIZE_LIST.forEach(name => {
          this.sizes[name] = parseInt(style.getPropertyValue(`--q-size-${name}`), 10)
        })
      }

      this.setSizes = sizes => {
        SIZE_LIST.forEach(name => {
          if (sizes[name]) {
            this.sizes[name] = sizes[name]
          }
        })
        update(true)
      }

      this.setDebounce = delay => {
        updateEvt !== void 0 && target.removeEventListener('resize', updateEvt, passive)
        updateEvt = delay > 0
          ? Object(_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["default"])(update, delay)
          : update
        target.addEventListener('resize', updateEvt, passive)
      }

      this.setDebounce(updateDebounce)

      if (Object.keys(updateSizes).length > 0) {
        this.setSizes(updateSizes)
        updateSizes = void 0 // free up memory
      }
      else {
        update()
      }

      // due to optimizations, this would be left out otherwise
      classes === true && this.name === 'xs' &&
        document.body.classList.add(`screen--xs`)
    }

    if (_Platform_js__WEBPACK_IMPORTED_MODULE_1__["fromSSR"] === true) {
      queues.takeover.push(start)
    }
    else {
      start()
    }

    vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.defineReactive($q, 'screen', this)
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/ssr-update.js":
/*!***********************************************!*\
  !*** ./node_modules/quasar/src/ssr-update.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _install_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install.js */ "./node_modules/quasar/src/install.js");


const mixin = {
  mounted () {
    _install_js__WEBPACK_IMPORTED_MODULE_0__["queues"].takeover.forEach(run => {
      run(this.$q)
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  if (ctx.ssr) {
    const q = { ..._install_js__WEBPACK_IMPORTED_MODULE_0__["$q"] }

    Object.assign(ctx.ssr, {
      Q_HEAD_TAGS: '',
      Q_BODY_ATTRS: '',
      Q_BODY_TAGS: ''
    })

    _install_js__WEBPACK_IMPORTED_MODULE_0__["queues"].server.forEach(run => {
      run(q, ctx)
    })

    ctx.app.$q = q
  }
  else {
    const mixins = ctx.app.mixins || []
    if (mixins.includes(mixin) === false) {
      ctx.app.mixins = mixins.concat(mixin)
    }
  }
});


/***/ }),

/***/ "./node_modules/quasar/src/utils/colors.js":
/*!*************************************************!*\
  !*** ./node_modules/quasar/src/utils/colors.js ***!
  \*************************************************/
/*! exports provided: rgbToHex, rgbToString, stringToRgb, hexToRgb, hsvToRgb, rgbToHsv, textToRgb, lighten, luminosity, brightness, blend, changeAlpha, setBrand, getBrand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToString", function() { return rgbToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToRgb", function() { return stringToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToRgb", function() { return textToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "luminosity", function() { return luminosity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightness", function() { return brightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blend", function() { return blend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeAlpha", function() { return changeAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBrand", function() { return setBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrand", function() { return getBrand; });
function rgbToHex ({ r, g, b, a }) {
  const alpha = a !== void 0

  r = Math.round(r)
  g = Math.round(g)
  b = Math.round(b)

  if (
    r > 255 ||
    g > 255 ||
    b > 255 ||
    (alpha && a > 100)
  ) {
    throw new TypeError('Expected 3 numbers below 256 (and optionally one below 100)')
  }

  a = alpha
    ? (Math.round(255 * a / 100) | 1 << 8).toString(16).slice(1)
    : ''

  return '#' + ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1) + a
}

function rgbToString ({ r, g, b, a }) {
  return `rgb${a !== void 0 ? 'a' : ''}(${r},${g},${b}${a !== void 0 ? ',' + (a / 100) : ''})`
}

function stringToRgb (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  str = str.replace(/ /g, '')

  if (str.startsWith('#')) {
    return hexToRgb(str)
  }

  const model = str.substring(str.indexOf('(') + 1, str.length - 1).split(',')

  return {
    r: parseInt(model[0], 10),
    g: parseInt(model[1], 10),
    b: parseInt(model[2], 10),
    a: model[3] !== void 0 ? parseFloat(model[3]) * 100 : void 0
  }
}

function hexToRgb (hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('Expected a string')
  }

  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  else if (hex.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3]
  }

  let num = parseInt(hex, 16)

  return hex.length > 6
    ? { r: num >> 24 & 255, g: num >> 16 & 255, b: num >> 8 & 255, a: Math.round((num & 255) / 2.55) }
    : { r: num >> 16, g: num >> 8 & 255, b: num & 255 }
}

function hsvToRgb ({ h, s, v, a }) {
  let r, g, b, i, f, p, q, t
  s = s / 100
  v = v / 100

  h = h / 360
  i = Math.floor(h * 6)
  f = h * 6 - i
  p = v * (1 - s)
  q = v * (1 - f * s)
  t = v * (1 - (1 - f) * s)

  switch (i % 6) {
    case 0:
      r = v
      g = t
      b = p
      break
    case 1:
      r = q
      g = v
      b = p
      break
    case 2:
      r = p
      g = v
      b = t
      break
    case 3:
      r = p
      g = q
      b = v
      break
    case 4:
      r = t
      g = p
      b = v
      break
    case 5:
      r = v
      g = p
      b = q
      break
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
    a
  }
}

function rgbToHsv ({ r, g, b, a }) {
  let
    max = Math.max(r, g, b), min = Math.min(r, g, b),
    d = max - min,
    h,
    s = (max === 0 ? 0 : d / max),
    v = max / 255

  switch (max) {
    case min:
      h = 0
      break
    case r:
      h = (g - b) + d * (g < b ? 6 : 0)
      h /= 6 * d
      break
    case g:
      h = (b - r) + d * 2
      h /= 6 * d
      break
    case b:
      h = (r - g) + d * 4
      h /= 6 * d
      break
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    v: Math.round(v * 100),
    a
  }
}

const reRGBA = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/

function textToRgb (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string')
  }

  const color = str.replace(/ /g, '')

  const m = reRGBA.exec(color)

  if (m === null) {
    return hexToRgb(color)
  }

  const rgb = {
    r: Math.min(255, parseInt(m[2], 10)),
    g: Math.min(255, parseInt(m[3], 10)),
    b: Math.min(255, parseInt(m[4], 10))
  }

  if (m[1]) {
    const alpha = parseFloat(m[5])
    rgb.a = Math.min(1, isNaN(alpha) === true ? 1 : alpha) * 100
  }

  return rgb
}

/* works as darken if percent < 0 */
function lighten (color, percent) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }
  if (typeof percent !== 'number') {
    throw new TypeError('Expected a numeric percent')
  }

  const rgb = textToRgb(color),
    t = percent < 0 ? 0 : 255,
    p = Math.abs(percent) / 100,
    R = rgb.r,
    G = rgb.g,
    B = rgb.b

  return '#' + (
    0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  ).toString(16).slice(1)
}

function luminosity (color) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const
    rgb = typeof color === 'string' ? textToRgb(color) : color,
    r = rgb.r / 255,
    g = rgb.g / 255,
    b = rgb.b / 255,
    R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4),
    G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4),
    B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

function brightness (color) {
  if (typeof color !== 'string' && (!color || color.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b} object as color')
  }

  const rgb = typeof color === 'string'
    ? textToRgb(color)
    : color

  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
}

function blend (fgColor, bgColor) {
  if (typeof fgColor !== 'string' && (!fgColor || fgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as fgColor')
  }

  if (typeof bgColor !== 'string' && (!bgColor || bgColor.r === void 0)) {
    throw new TypeError('Expected a string or a {r, g, b[, a]} object as bgColor')
  }

  const
    rgb1 = typeof fgColor === 'string' ? textToRgb(fgColor) : fgColor,
    r1 = rgb1.r / 255,
    g1 = rgb1.g / 255,
    b1 = rgb1.b / 255,
    a1 = rgb1.a !== void 0 ? rgb1.a / 100 : 1,
    rgb2 = typeof bgColor === 'string' ? textToRgb(bgColor) : bgColor,
    r2 = rgb2.r / 255,
    g2 = rgb2.g / 255,
    b2 = rgb2.b / 255,
    a2 = rgb2.a !== void 0 ? rgb2.a / 100 : 1,
    a = a1 + a2 * (1 - a1),
    r = Math.round(((r1 * a1 + r2 * a2 * (1 - a1)) / a) * 255),
    g = Math.round(((g1 * a1 + g2 * a2 * (1 - a1)) / a) * 255),
    b = Math.round(((b1 * a1 + b2 * a2 * (1 - a1)) / a) * 255)

  const ret = { r, g, b, a: Math.round(a * 100) }
  return typeof fgColor === 'string'
    ? rgbToHex(ret)
    : ret
}

function changeAlpha (color, offset) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }

  if (offset === void 0 || offset < -1 || offset > 1) {
    throw new TypeError('Expected offset to be between -1 and 1')
  }

  const { r, g, b, a } = textToRgb(color)
  const alpha = a !== void 0 ? a / 100 : 0

  return rgbToHex({
    r, g, b, a: Math.round(Math.min(1, Math.max(0, alpha + offset)) * 100)
  })
}

function setBrand (color, value, element = document.body) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }
  if (typeof value !== 'string') {
    throw new TypeError('Expected a string as value')
  }
  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element')
  }

  element.style.setProperty(`--q-color-${color}`, value)
}

function getBrand (color, element = document.body) {
  if (typeof color !== 'string') {
    throw new TypeError('Expected a string as color')
  }
  if (!(element instanceof Element)) {
    throw new TypeError('Expected a DOM element')
  }

  return getComputedStyle(element).getPropertyValue(`--q-color-${color}`).trim() || null
}

/* harmony default export */ __webpack_exports__["default"] = ({
  rgbToHex,
  hexToRgb,
  hsvToRgb,
  rgbToHsv,
  textToRgb,
  lighten,
  luminosity,
  brightness,
  blend,
  changeAlpha,
  setBrand,
  getBrand
});


/***/ }),

/***/ "./node_modules/quasar/src/utils/debounce.js":
/*!***************************************************!*\
  !*** ./node_modules/quasar/src/utils/debounce.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (fn, wait = 250, immediate) {
  let timeout

  function debounced (/* ...args */) {
    const args = arguments

    const later = () => {
      timeout = void 0
      if (immediate !== true) {
        fn.apply(this, args)
      }
    }

    clearTimeout(timeout)
    if (immediate === true && timeout === void 0) {
      fn.apply(this, args)
    }
    timeout = setTimeout(later, wait)
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
  }

  return debounced
});


/***/ }),

/***/ "./node_modules/quasar/src/utils/event.js":
/*!************************************************!*\
  !*** ./node_modules/quasar/src/utils/event.js ***!
  \************************************************/
/*! exports provided: listenOpts, noop, leftClick, middleClick, rightClick, position, getEventPath, getMouseWheelDistance, stop, prevent, stopAndPrevent, preventDraggable, create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenOpts", function() { return listenOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftClick", function() { return leftClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middleClick", function() { return middleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightClick", function() { return rightClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventPath", function() { return getEventPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMouseWheelDistance", function() { return getMouseWheelDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevent", function() { return prevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAndPrevent", function() { return stopAndPrevent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDraggable", function() { return preventDraggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
const listenOpts = {
  hasPassive: false,
  passiveCapture: true,
  notPassiveCapture: true
}

try {
  var opts = Object.defineProperty({}, 'passive', {
    get () {
      Object.assign(listenOpts, {
        hasPassive: true,
        passive: { passive: true },
        notPassive: { passive: false },
        passiveCapture: { passive: true, capture: true },
        notPassiveCapture: { passive: false, capture: true }
      })
    }
  })
  window.addEventListener('qtest', null, opts)
  window.removeEventListener('qtest', null, opts)
}
catch (e) {}

function noop () {}

function leftClick (e) {
  return e.button === 0
}

function middleClick (e) {
  return e.button === 1
}

function rightClick (e) {
  return e.button === 2
}

function position (e) {
  if (e.touches && e.touches[0]) {
    e = e.touches[0]
  }
  else if (e.changedTouches && e.changedTouches[0]) {
    e = e.changedTouches[0]
  }
  else if (e.targetTouches && e.targetTouches[0]) {
    e = e.targetTouches[0]
  }

  return {
    top: e.clientY,
    left: e.clientX
  }
}

function getEventPath (e) {
  if (e.path) {
    return e.path
  }
  if (e.composedPath) {
    return e.composedPath()
  }

  const path = []
  let el = e.target

  while (el) {
    path.push(el)

    if (el.tagName === 'HTML') {
      path.push(document)
      path.push(window)
      return path
    }

    el = el.parentElement
  }
}

// Reasonable defaults
const
  LINE_HEIGHT = 40,
  PAGE_HEIGHT = 800

function getMouseWheelDistance (e) {
  let x = e.deltaX, y = e.deltaY

  if ((x || y) && e.deltaMode) {
    const multiplier = e.deltaMode === 1 ? LINE_HEIGHT : PAGE_HEIGHT
    x *= multiplier
    y *= multiplier
  }

  if (e.shiftKey && !x) {
    [y, x] = [x, y]
  }

  return { x, y }
}

function stop (e) {
  e.stopPropagation()
}

function prevent (e) {
  e.cancelable !== false && e.preventDefault()
}

function stopAndPrevent (e) {
  e.cancelable !== false && e.preventDefault()
  e.stopPropagation()
}

function preventDraggable (el, status) {
  if (el === void 0 || (status === true && el.__dragPrevented === true)) {
    return
  }

  const fn = status === true
    ? el => {
      el.__dragPrevented = true
      el.addEventListener('dragstart', prevent, listenOpts.notPassiveCapture)
    }
    : el => {
      delete el.__dragPrevented
      el.removeEventListener('dragstart', prevent, listenOpts.notPassiveCapture)
    }

  el.querySelectorAll('a, img').forEach(fn)
}

function create (name, { bubbles = false, cancelable = false } = {}) {
  try {
    return new Event(name, { bubbles, cancelable })
  }
  catch (e) {
    // IE doesn't support `new Event()`, so...
    const evt = document.createEvent('Event')
    evt.initEvent(name, bubbles, cancelable)
    return evt
  }
}

/*
 * also update /types/utils/event.d.ts
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  listenOpts,
  leftClick,
  middleClick,
  rightClick,
  position,
  getEventPath,
  getMouseWheelDistance,
  stop,
  prevent,
  stopAndPrevent,
  preventDraggable,
  create
});


/***/ }),

/***/ "./node_modules/quasar/src/utils/key-composition.js":
/*!**********************************************************!*\
  !*** ./node_modules/quasar/src/utils/key-composition.js ***!
  \**********************************************************/
/*! exports provided: onKeyDownComposition, shouldIgnoreKey, isKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyDownComposition", function() { return onKeyDownComposition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldIgnoreKey", function() { return shouldIgnoreKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyCode", function() { return isKeyCode; });
let lastKeyCompositionStatus = false

function onKeyDownComposition (evt) {
  lastKeyCompositionStatus = evt.isComposing === true
}

function shouldIgnoreKey (evt) {
  return lastKeyCompositionStatus === true ||
    evt !== Object(evt) ||
    evt.isComposing === true ||
    evt.qKeyEvent === true
}

function isKeyCode (evt, keyCodes) {
  return shouldIgnoreKey(evt) === true
    ? false
    : [].concat(keyCodes).includes(evt.keyCode)
}


/***/ }),

/***/ "./node_modules/quasar/src/vue-plugin.js":
/*!***********************************************!*\
  !*** ./node_modules/quasar/src/vue-plugin.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _install_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./install.js */ "./node_modules/quasar/src/install.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../package.json */ "./node_modules/quasar/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./node_modules/quasar/package.json", 1);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang.js */ "./node_modules/quasar/src/lang.js");
/* harmony import */ var _icon_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon-set.js */ "./node_modules/quasar/src/icon-set.js");
/* harmony import */ var _ssr_update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ssr-update.js */ "./node_modules/quasar/src/ssr-update.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  version: _package_json__WEBPACK_IMPORTED_MODULE_1__["version"],
  install: _install_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  lang: _lang_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  iconSet: _icon_set_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  ssrUpdate: _ssr_update_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});


/***/ })

}]);