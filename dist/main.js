/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  /* pointer-events: none;
  touch-action: none; */
  user-select: none;
}

body {
  height: 100vh;
  width: 100vw;
}

.main {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
}

.header {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.content {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  /* padding-top: 40px; */
}

.commands {
  align-self: center;
  justify-self: start;
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
}

.commands > div {
  /* user-select: none; */
  cursor: pointer;
  font-weight: 100;
  font-size: 20px;
}

.commands > div:hover {
  color: blue;
  text-decoration: underline;
  text-decoration-thickness: 1px;
}

.boards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 50px;
  width: 100%;
  /* gap: 20px; */
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.boards > .playerOne-board,
.boards > .playerTwo-board {
  width: 400px;
  height: 400px;
  outline: 0.5px solid rgb(118, 118, 118, 0.6);
  justify-self: center;
  margin: 20px;
}

.playerOne-board {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.playerTwo-board {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.player-one-board-name {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: flex-start;
  justify-self: center;
}

.player-two-board-name {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: flex-start;
  justify-self: center;
}

.playerOne-board,
.playerTwo-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.playerOne-board > div,
.playerTwo-board > div {
  outline: 0.5px solid rgba(118, 118, 118, 0.6);
  position: relative;
  /* z-index: 1; */
}

.playerTwo-board > .ship-cell {
  background-color: rgba(0, 0, 255, 0.3);
}

.playerOne-board > .ship-cell {
  outline: 0.5px solid rgba(118, 118, 118, 0.2);
}

.ship {
  /* z-index: 2; */
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 255, 0.1);
  outline: 1px solid blue;
}

.ship.droppable {
  background-color: rgba(0, 255, 0, 0.5);
}

.ship.undroppable {
  background-color: rgba(255, 0, 0, 0.5);
}

.draggable {
  cursor: move !important;
  z-index: 5;
  /* pointer-events: all;
  touch-action: all; */
}

/* .ship:hover {
  cursor: move;
} */

[draggable="true"] {
  cursor: move !important;
}

[draggable="true"]:hover {
  z-index: 9999;
  cursor: move !important;
}

/* .draggable {
  cursor: alias;
} */

.mark_col {
  position: absolute;
  width: 100%;
  text-align: center;
  top: -20px;
  font-size: 10px;
  user-select: none;
}

.mark_row {
  position: absolute;
  text-align: right;
  width: 50%;
  left: -30px;
  top: 10px;
  font-size: 10px;
  user-select: none;
}

.dragging {
  outline: 1px green solid;
  background-color: rgba(0, 255, 0, 0.5);
}

[droppable="true"] {
  background-color: rgba(0, 128, 0, 0.2);
}

[droppable="false"] {
  background-color: rgba(255, 0, 0, 0.3);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iCAAiC;EACjC,gBAAgB;EAChB;uBACqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,4CAA4C;EAC5C,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,sCAAsC;AACxC;;AAEA;;EAEE,6CAA6C;EAC7C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,uBAAuB;EACvB,UAAU;EACV;sBACoB;AACtB;;AAEA;;GAEG;;AAEH;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;;GAEG;;AAEH;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,UAAU;EACV,WAAW;EACX,SAAS;EACT,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sCAAsC;AACxC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 300;\n  /* pointer-events: none;\n  touch-action: none; */\n  user-select: none;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n}\n\n.main {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr;\n  grid-template-rows: 100px 1fr;\n}\n\n.header {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.content {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  /* padding-top: 40px; */\n}\n\n.commands {\n  align-self: center;\n  justify-self: start;\n  display: flex;\n  gap: 15px;\n  margin-bottom: 50px;\n}\n\n.commands > div {\n  /* user-select: none; */\n  cursor: pointer;\n  font-weight: 100;\n  font-size: 20px;\n}\n\n.commands > div:hover {\n  color: blue;\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n}\n\n.boards {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 50px;\n  width: 100%;\n  /* gap: 20px; */\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.boards > .playerOne-board,\n.boards > .playerTwo-board {\n  width: 400px;\n  height: 400px;\n  outline: 0.5px solid rgb(118, 118, 118, 0.6);\n  justify-self: center;\n  margin: 20px;\n}\n\n.playerOne-board {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n}\n\n.playerTwo-board {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n}\n\n.player-one-board-name {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.player-two-board-name {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  align-self: flex-start;\n  justify-self: center;\n}\n\n.playerOne-board,\n.playerTwo-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.playerOne-board > div,\n.playerTwo-board > div {\n  outline: 0.5px solid rgba(118, 118, 118, 0.6);\n  position: relative;\n  /* z-index: 1; */\n}\n\n.playerTwo-board > .ship-cell {\n  background-color: rgba(0, 0, 255, 0.3);\n}\n\n.playerOne-board > .ship-cell {\n  outline: 0.5px solid rgba(118, 118, 118, 0.2);\n}\n\n.ship {\n  /* z-index: 2; */\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 255, 0.1);\n  outline: 1px solid blue;\n}\n\n.ship.droppable {\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n.ship.undroppable {\n  background-color: rgba(255, 0, 0, 0.5);\n}\n\n.draggable {\n  cursor: move !important;\n  z-index: 5;\n  /* pointer-events: all;\n  touch-action: all; */\n}\n\n/* .ship:hover {\n  cursor: move;\n} */\n\n[draggable=\"true\"] {\n  cursor: move !important;\n}\n\n[draggable=\"true\"]:hover {\n  z-index: 9999;\n  cursor: move !important;\n}\n\n/* .draggable {\n  cursor: alias;\n} */\n\n.mark_col {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  top: -20px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.mark_row {\n  position: absolute;\n  text-align: right;\n  width: 50%;\n  left: -30px;\n  top: 10px;\n  font-size: 10px;\n  user-select: none;\n}\n\n.dragging {\n  outline: 1px green solid;\n  background-color: rgba(0, 255, 0, 0.5);\n}\n\n[droppable=\"true\"] {\n  background-color: rgba(0, 128, 0, 0.2);\n}\n\n[droppable=\"false\"] {\n  background-color: rgba(255, 0, 0, 0.3);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ }),

/***/ "./src/DOMHandler.js":
/*!***************************!*\
  !*** ./src/DOMHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
// eslint-disable-next-line import/no-cycle


/* eslint-disable prefer-const */
const DOMHandler = (() => {
  const body = document.querySelector("body");
  let playerOneBoard = null;
  let playerTwoBoard = null;
  let playerOneShips = null;
  let playerTwoShips = null;

  const staticLayoutElements = [
    {
      type: "div",
      class: "main",
      childrenElements: [
        {
          type: "div",
          class: "header",
        },
        {
          type: "div",
          class: "content",
          childrenElements: [
            {
              type: "div",
              class: "commands",
              childrenElements: [
                {
                  type: "div",
                  class: "randomize",
                  textContent: "randomize",
                },
                {
                  type: "div",
                  class: "start-game",
                  textContent: "start",
                },
              ],
            },
            {
              type: "div",
              class: "boards",
              childrenElements: [
                {
                  type: "div",
                  class: "playerOne-board",
                },
                {
                  type: "div",
                  class: "playerTwo-board",
                },
                {
                  type: "div",
                  class: "player-one-board-name",
                  textContent: "Your board",
                },
                {
                  type: "div",
                  class: "player-two-board-name",
                  textContent: "Opponent's board",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  function createPageLayout(parent, tree) {
    tree.forEach((element) => {
      const newElement = document.createElement(element.type);
      if (element.class) {
        newElement.classList.add(element.class);
      }
      if (element.textContent) {
        newElement.textContent = element.textContent;
      }
      parent.append(newElement);
      if (element.childrenElements) {
        createPageLayout(newElement, element.childrenElements);
      }
    });
  }

  function createBoardCells() {
    const playerOneBoardDiv = document.querySelector(".playerOne-board");
    const playerTwoBoardDiv = document.querySelector(".playerTwo-board");

    DOMHandler.playerOneBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      newCell.classList.add("cell");
      if (element.occupied) {
        newCell.setAttribute("droppable", false);
      } else {
        newCell.setAttribute("droppable", true);
      }

      playerOneBoardDiv.append(newCell);

      // eslint-disable-next-line no-lone-blocks
      {
        if (newCell.classList[0] === "1,1") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "A";
          newCell.append(markCol);
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "1";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "1,2") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "B";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,3") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "C";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,4") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "D";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,5") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "E";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,6") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "F";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,7") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "G";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,8") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "H";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,9") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "I";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "1,10") {
          const markCol = document.createElement("div");
          markCol.classList.add("mark_col");
          markCol.textContent = "J";
          newCell.append(markCol);
        }
        if (newCell.classList[0] === "2,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "2";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "3,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "3";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "4,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "4";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "5,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "5";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "6,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "6";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "7,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "7";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "8,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "8";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "9,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "9";
          newCell.append(markRow);
        }
        if (newCell.classList[0] === "10,1") {
          const markRow = document.createElement("div");
          markRow.classList.add("mark_row");
          markRow.textContent = "10";
          newCell.append(markRow);
        }
      }
    });

    DOMHandler.playerTwoBoard.forEach((element) => {
      const newCell = document.createElement("div");
      newCell.classList.add(element.coordinates);
      newCell.classList.add("cell");
      playerTwoBoardDiv.append(newCell);
      if (newCell.classList[0] === "1,1") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "A";
        newCell.append(markCol);
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "1";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "1,2") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "B";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,3") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "C";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,4") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "D";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,5") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "E";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,6") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "F";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,7") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "G";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,8") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "H";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,9") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "I";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "1,10") {
        const markCol = document.createElement("div");
        markCol.classList.add("mark_col");
        markCol.textContent = "J";
        newCell.append(markCol);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "3,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "3";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "4,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "4";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "5,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "5";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "6,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "6";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "7,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "7";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "8,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "8";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "2,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "2";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "9,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "9";
        newCell.append(markRow);
      }
      if (newCell.classList[0] === "10,1") {
        const markRow = document.createElement("div");
        markRow.classList.add("mark_row");
        markRow.textContent = "10";
        newCell.append(markRow);
      }
    });
  }

  function findDivByCoordinates(coordinates, parentDiv) {
    const div = parentDiv.querySelector(`[class*="${coordinates}"].cell`);
    return div;
  }

  function drawShips() {
    const parentDivBoardOne = document.querySelector(".playerOne-board");
    DOMHandler.playerOneShips.forEach((ship) => {
      // console.log(`${ship.coordinates[0][0]},${ship.coordinates[0][1]}`);
      const div = findDivByCoordinates(
        `${ship.coordinates[0][0]},${ship.coordinates[0][1]}`,
        parentDivBoardOne,
      );

      const shipDiv = document.createElement("div");
      shipDiv.classList.add("ship");
      shipDiv.classList.add("draggable");
      shipDiv.setAttribute("id", ship.id);
      // shipDiv.setAttribute("draggable", true);
      // shipDiv.setAttribute("draggable", true);

      if (ship.position === "h") {
        const width = 40 * ship.length;
        shipDiv.style.width = `${width}px`;
        shipDiv.style.height = "40px";
      }
      if (ship.position === "v") {
        const height = 40 * ship.length;
        shipDiv.style.height = `${height}px`;
        shipDiv.style.width = "40px";
      }
      div.append(shipDiv);

      ship.coordinates.forEach((c) => {
        const className = `${c[0]},${c[1]}`;
        const shipCells = Array.from(
          parentDivBoardOne.getElementsByTagName("div"),
        ).filter((elem) => elem.classList.contains(className));
        shipCells.forEach((element) => {
          // element.classList.add("ship-cell");
        });
      });
    });

    DOMHandler.playerTwoShips.forEach((ship) => {
      ship.coordinates.forEach((c) => {
        const parentDivBoardTwo = document.querySelector(".playerTwo-board");
        const div = findDivByCoordinates(`${c[0]},${c[1]}`, parentDivBoardTwo);
        div.classList.add("ship-cell");
      });
    });
  }

  function createDom() {
    createPageLayout(body, staticLayoutElements);
    createBoardCells();
    drawShips();
    (0,_eventManager__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  return {
    playerOneBoard,
    playerTwoBoard,
    playerOneShips,
    playerTwoShips,
    createDom,
    findDivByCoordinates,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMHandler);


/***/ }),

/***/ "./src/DS_Graph.js":
/*!*************************!*\
  !*** ./src/DS_Graph.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable max-classes-per-file */

class Vertex {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.adjacencyList = [];
    this.occupied = false;
    this.occupiedByShip = false;
  }

  addNeighbor(vertex) {
    if (!this.adjacencyList.includes(vertex)) {
      this.adjacencyList.push(vertex);
    }
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(x, y) {
    const vertex = new Vertex([x, y]);
    this.vertices.push(vertex);
  }

  // eslint-disable-next-line class-methods-use-this
  addEdge(vertex1, vertex2) {
    vertex1.addNeighbor(vertex2);
    vertex2.addNeighbor(vertex1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);


/***/ }),

/***/ "./src/eventManager.js":
/*!*****************************!*\
  !*** ./src/eventManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDocumentEventListeners: () => (/* binding */ addDocumentEventListeners),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle



function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    (0,___WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners);

function addDocumentEventListeners() {
  let draggableElement = null;
  let draggableElementRect = null;

  let isDragging = false;
  let offSetX;
  let offSetY;
  let mouseDownOffsetHor = 0;
  let mouseDownOffsetVer = 0;
  let originalElementBelow = null;
  let elementBelow = null;
  let previousElementBelow = null;

  // Find cells under the ship
  function findShipCells(firstElement, orientation, length) {
    const cells = [];
    cells.push(firstElement);
    const firstCellClassArray = firstElement.classList[0]
      .split(",")
      .map(Number);
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    for (let i = 1; i <= length; i += 1) {
      if (orientation === "h") {
        const cell = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
          `${firstCellClassArray[0]},${firstCellClassArray[1] + i}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
      if (orientation === "v") {
        const cell = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
          `${firstCellClassArray[0] + i},${firstCellClassArray[1]}`,
          parentDivBoardOne,
        );
        cells.push(cell);
      }
    }
    return cells;
  }

  // Find cells to change to "droppable = true" after drag & dropping a ship
  function identifyCellsToMakeDroppable(event) {
    const shipObject = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id);
    if (event.type === "mouseup") {
      if (elementBelow !== null) {
        if (elementBelow.getAttribute("droppable") === "true") {
          elementBelow.append(draggableElement);
          return findShipCells(
            elementBelow,
            shipObject.position,
            shipObject.length - 1,
          );
        }
        if (elementBelow.getAttribute("droppable") === "false") {
          originalElementBelow.append(draggableElement);
          return findShipCells(
            originalElementBelow,
            shipObject.position,
            shipObject.length - 1,
          );
        }
      } else {
        originalElementBelow.append(draggableElement);
        return findShipCells(
          originalElementBelow,
          shipObject.position,
          shipObject.length - 1,
        );
      }
      return null;
    }

    if (event.type === "mousedown") {
      return findShipCells(
        draggableElement.parentElement,
        shipObject.position,
        shipObject.length - 1,
      );
    }
    return null;
  }

  // Checks if dropping the ship on the position will cause
  // overlap with another ship
  function checkOtherShipOverlap(event) {
    let noOverlap = true;
    if (draggableElementRect.width > 40 || draggableElementRect.height > 40) {
      let lastShipElement;

      if (draggableElementRect.width === 80) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 40,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.width === 120) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 80,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.width === 160) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor + 120,
          event.clientY - mouseDownOffsetVer,
        );
      } else if (draggableElementRect.height === 80) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 40,
        );
      } else if (draggableElementRect.height === 120) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 80,
        );
      } else if (draggableElementRect.height === 160) {
        lastShipElement = document.elementsFromPoint(
          event.clientX - mouseDownOffsetHor,
          event.clientY - mouseDownOffsetVer + 120,
        );
      }

      lastShipElement.forEach((element) => {
        if (element.classList.contains("cell")) {
          const className = element.classList[0];
          const array = className.split(",").map(Number);
          const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);

          vertex.adjacencyList.forEach((adjacency) => {
            if (adjacency.occupiedByShip === true) {
              if (elementBelow) {
                noOverlap = false;
              }
            }
          });
        }
      });
    }
    return noOverlap;
  }

  // Checks if the element is getting dropped within the borders of the board
  function checkWithinBorders(event) {
    const elementBelowCoordinates = elementBelow.classList[0]
      .split(",")
      .map(Number);
    if (draggableElementRect.height === 80) {
      if (elementBelowCoordinates[0] > 9) {
        return false;
      }
    }
    if (draggableElementRect.height === 120) {
      if (elementBelowCoordinates[0] > 8) {
        return false;
      }
    }
    if (draggableElementRect.height === 160) {
      if (elementBelowCoordinates[0] > 7) {
        return false;
      }
    }
    if (draggableElementRect.width === 80) {
      if (elementBelowCoordinates[1] > 9) {
        return false;
      }
    }
    if (draggableElementRect.width === 120) {
      if (elementBelowCoordinates[1] > 8) {
        return false;
      }
    }
    if (draggableElementRect.width === 160) {
      if (elementBelowCoordinates[1] > 7) {
        return false;
      }
    }
    const outOfBoardElements = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );
    let cellElement = null;
    outOfBoardElements.forEach((element) => {
      if (element.classList.contains("cell")) {
        // console.log(element);
        cellElement = element;
      }
    });

    if (cellElement === null) {
      return false;
    }
    return true;
  }

  // Update droppable attribute on board for each cell based on occupied value in the graph
  function updateDroppableAttribute() {
    const parentDivBoardOne = document.querySelector(".playerOne-board");

    ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.board.vertices.forEach((vertex) => {
      const div = _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].findDivByCoordinates(
        `${vertex.coordinates[0]},${vertex.coordinates[1]}`,
        parentDivBoardOne,
      );
      if (vertex.occupied === true) {
        div.setAttribute("droppable", false);
      }
      if (vertex.occupied === false) {
        div.setAttribute("droppable", true);
      }
    });
  }

  // The cells under the draggable element will be made droppable when the mouse is down
  function makeDroppable(cells) {
    const cellsVertices = [];

    // Set droppable attribute on the cells under draggable element to true
    cells.forEach((cell) => {
      cell.setAttribute("droppable", true);
      const className = cell.classList[0];
      const array = className.split(",").map(Number);
      const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);
      cellsVertices.push(vertex);
    });

    /// Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = false;
      cellVertex.occupied = false;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = false;
        adjacency.adjacencyList.forEach((adj) => {
          if (adj.occupiedByShip) {
            adjacency.occupied = true;
          }
        });
        if (adjacency.occupied === false) {
          const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
          const parentDiv = document.querySelector(".playerOne-board");
          const div = parentDiv.querySelector(`[class*="${className}"].cell`);
          div.setAttribute("droppable", true);
        }
      });
    });
  }

  // The cells under the draggable element will be made undroppable when the mouse is up
  function makeUndroppable(cells) {
    const cellsVertices = [];
    // Set droppable attribute on the cells under draggable element to false
    cells.forEach((cell) => {
      if (cell) {
        cell.setAttribute("droppable", false);
        const className = cell.classList[0];
        const array = className.split(",").map(Number);
        const vertex = ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findVertextObjectByCoordinates(array);
        cellsVertices.push(vertex);
      }
    });

    // Update the graph accordingly
    cellsVertices.forEach((cellVertex) => {
      cellVertex.occupiedByShip = true;
      cellVertex.occupied = true;

      // Update adjacent cells:
      cellVertex.adjacencyList.forEach((adjacency) => {
        // In the graph
        adjacency.occupied = true;
        const className = `${adjacency.coordinates[0]},${adjacency.coordinates[1]}`;
        const parentDiv = document.querySelector(".playerOne-board");
        const div = parentDiv.querySelector(`[class*="${className}"].cell`);
        // In DOM
        div.setAttribute("droppable", false);
      });
    });
  }

  // Mouse down
  const onMouseDown = (event) => {
    const elementsFromPoint = document.elementsFromPoint(
      event.clientX,
      event.clientY,
    );

    elementsFromPoint.forEach((element) => {
      if (element.classList.contains("draggable")) {
        draggableElement = element;
        draggableElementRect = draggableElement.getBoundingClientRect();
      }
    });

    if (draggableElement) {
      isDragging = true;
      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 0;
      offSetX = event.clientX;
      offSetY = event.clientY;
      draggableElement.classList.add("dragging");

      const cells = identifyCellsToMakeDroppable(event);
      makeDroppable(cells);

      const parentRect = draggableElement.parentElement.getBoundingClientRect();

      if (offSetX > parentRect.x + 120) {
        mouseDownOffsetHor = 120;
      } else if (offSetX > parentRect.x + 80) {
        mouseDownOffsetHor = 80;
      } else if (offSetX > parentRect.x + 40) {
        mouseDownOffsetHor = 40;
      } else if (offSetY > parentRect.y + 120) {
        mouseDownOffsetVer = 120;
      } else if (offSetY > parentRect.y + 80) {
        mouseDownOffsetVer = 80;
      } else if (offSetY > parentRect.y + 40) {
        mouseDownOffsetVer = 40;
      }

      const elementsBelow = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer,
      );

      elementsBelow.forEach((element) => {
        if (element.classList.contains("cell")) {
          if (element.getAttribute("droppable") === "true") {
            elementBelow = element;
            originalElementBelow = element;
          } else {
            elementBelow = null;
            originalElementBelow = null;
            previousElementBelow = null;
          }
        }
      });
    }
  };

  // Mouse move
  const onMouseMove = (event) => {
    if (isDragging) {
      const elementsFromPoint = document.elementsFromPoint(
        event.clientX - mouseDownOffsetHor,
        event.clientY - mouseDownOffsetVer,
      );
      elementsFromPoint.forEach((element) => {
        if (
          element.classList.contains("cell") &&
          element.getAttribute("droppable")
        ) {
          previousElementBelow = elementBelow;
          if (previousElementBelow.classList.contains("temp")) {
            previousElementBelow.setAttribute("droppable", true);
            draggableElement.classList.remove("undroppable");
            previousElementBelow.classList.remove("temp");
          }
          elementBelow = element;
        }
      });

      if (!checkOtherShipOverlap(event) || !checkWithinBorders(event)) {
        elementBelow.setAttribute("droppable", false);
        elementBelow.classList.add("temp");
      }

      if (elementBelow.getAttribute("droppable") === "false") {
        draggableElement.classList.add("undroppable");
        draggableElement.classList.remove("droppable");
      } else {
        draggableElement.classList.add("droppable");
        draggableElement.classList.remove("undroppable");
      }

      if (draggableElement) {
        draggableElement.style.left = `${event.clientX - offSetX}px`;
        draggableElement.style.top = `${event.clientY - offSetY}px`;
      }
    }
  };

  // Mouse up
  const onMouseUp = (event) => {
    const ship = draggableElement
      ? ___WEBPACK_IMPORTED_MODULE_0__.playerOneBoard.findShipById(draggableElement.id)
      : null;
    if (elementBelow === originalElementBelow) {
      if (draggableElement) {
        const width = `${draggableElementRect.height}px`;
        const height = `${draggableElementRect.width}px`;

        draggableElement.style.width = width;
        draggableElement.style.height = height;

        draggableElementRect = draggableElement.getBoundingClientRect();

        console.log(checkOtherShipOverlap(event));
        if (!checkOtherShipOverlap(event) || !checkWithinBorders(event)) {
          draggableElement.style.width = height;
          draggableElement.style.height = width;
        } else if (draggableElementRect.width > draggableElementRect.height) {
          ship.position = "h";
        } else {
          ship.position = "v";
        }
      }
    }

    if (isDragging) {
      draggableElement.classList.remove("droppable");
      draggableElement.classList.remove("undroppable");
      if (elementBelow) {
        if (!checkOtherShipOverlap(event)) {
          elementBelow.setAttribute("droppable", false);
        }
        if (!checkWithinBorders(event)) {
          elementBelow.setAttribute("droppable", false);
        }
      }

      const cells = identifyCellsToMakeDroppable(event);
      makeUndroppable(cells);

      const newShipCoordinates = [];
      cells.forEach((cell) => {
        newShipCoordinates.push(
          Array.from(cell.classList[0].split(",").map(Number)),
        );
      });
      ship.assignCoordinates(newShipCoordinates);

      isDragging = false;
      draggableElement.style.left = 0;
      draggableElement.style.top = 0;
      draggableElement.style.zIndex = 5;
      offSetX = null;
      offSetY = null;
      mouseDownOffsetHor = 0;
      mouseDownOffsetVer = 0;
      draggableElement.classList.remove("dragging");
    }
    draggableElement = null;
    draggableElementRect = null;
    updateDroppableAttribute();
  };

  document.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _DS_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DS_Graph */ "./src/DS_Graph.js");
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */



function GameboardModule() {
  const board = new _DS_Graph__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const ships = [];
  const missingShots = [];

  // Create 10x10 cells as graph vertexes
  function createCells() {
    for (let i = 1; i < 11; i += 1) {
      for (let j = 1; j < 11; j += 1) {
        board.addVertex(i, j);
      }
    }
  }

  // Find the vertex object matching the given coordinates
  function findVertextObjectByCoordinates(coordinates) {
    // console.log(coordinates);
    const foundVertex = board.vertices.find(
      (vertex) =>
        JSON.stringify(vertex.coordinates) === JSON.stringify(coordinates),
    );

    if (foundVertex) {
      return foundVertex;
    }
    return null;
  }

  // Fill out adjacencyList for a vertex
  function addCellAdjacencies(vertex) {
    const y = vertex.coordinates[0];
    const x = vertex.coordinates[1];
    const potentialAdjacencies = [
      [y - 1, x - 1],
      [y - 1, x],
      [y - 1, x + 1],
      [y, x - 1],
      [y, x + 1],
      [y + 1, x - 1],
      [y + 1, x],
      [y + 1, x + 1],
    ];
    const adjacencies = [];
    potentialAdjacencies.forEach((adjacency) => {
      if (
        adjacency[0] > 0 &&
        adjacency[0] <= 10 &&
        adjacency[1] > 0 &&
        adjacency[1] <= 10
      ) {
        const adjacencyObject = findVertextObjectByCoordinates(adjacency);
        adjacencies.push(adjacencyObject);
      }
    });
    return adjacencies;
  }

  // Fill out adjacencyList for each cell vertex
  function createAdjacencies() {
    board.vertices.forEach((vertex) => {
      // eslint-disable-next-line no-param-reassign
      const adjacentVertices = addCellAdjacencies(vertex);
      adjacentVertices.forEach((adjacentVertex) => {
        board.addEdge(vertex, adjacentVertex);
      });
    });
  }

  // Fill the Board array
  function createBoard() {
    createCells();
    createAdjacencies();
  }

  // Fill the Ships array
  function createShips() {
    const shipsConfig = [
      //   {
      //     shipLength: 1,
      //     shipId: 0,
      //   },
      //   {
      //     shipLength: 1,
      //     shipId: 1,
      //   },
      //   {
      //     shipLength: 1,
      //     shipId: 2,
      //   },
      //   {
      //     shipLength: 2,
      //     shipId: 3,
      //   },
      //   {
      //     shipLength: 2,
      //     shipId: 4,
      //   },
      {
        shipLength: 3,
        shipId: 5,
      },
      {
        shipLength: 4,
        shipId: 6,
      },
    ];
    shipsConfig.forEach((element) => {
      const ship = _ship__WEBPACK_IMPORTED_MODULE_0__["default"].createShip(element.shipLength, element.shipId);
      ships.push(ship);
    });
  }

  // Fill the missingShots array
  function recordMissingShot(coordinates) {
    const missedShotVertex = findVertextObjectByCoordinates(coordinates);
    if (!missingShots.includes(missedShotVertex.coordinates)) {
      missingShots.push(missedShotVertex.coordinates);
    }
    missedShotVertex.adjacencyList.forEach((element) => {
      if (!missingShots.includes(element.coordinates)) {
        missingShots.push(element.coordinates);
      }
    });
  }

  // Find ship by shipId
  function findShipById(id) {
    let ship = null;
    ships.forEach((s) => {
      if (s.id === parseInt(id)) {
        ship = s;
      }
    });
    return ship;
  }

  // Register and process attacks
  function receiveAttack(coordinates) {
    let hitRegistered = false;
    ships.some((ship) => {
      if (
        JSON.stringify(ship.coordinates).includes(JSON.stringify(coordinates))
      ) {
        ship.hit();
        hitRegistered = true;
        return true;
      }
      return false;
    });
    if (!hitRegistered) {
      recordMissingShot(coordinates);
    }
  }

  // Check if all ships on a board have been sunk
  function allShipsSunk() {
    return ships.every((ship) => ship.isSunk());
  }

  function positionShips() {
    ships.sort((a, b) => b.length - a.length);
    ships.forEach((ship) => {
      const orientation = Math.floor(Math.random() * 2) === 0 ? "v" : "h";
      ship.position = orientation;

      const filteredBoard = board.vertices.filter(
        (obj) => obj.occupied === false,
      );

      if (filteredBoard.length > 0) {
        let positionFound = false;
        while (!positionFound) {
          // eslint-disable-next-line prefer-const
          let position = [];
          // eslint-disable-next-line prefer-const
          let positionCoordinates = [];
          const firstCellIndex = Math.floor(
            Math.random() * filteredBoard.length,
          );
          const firstCellObject = filteredBoard[firstCellIndex];
          positionCoordinates.push(firstCellObject.coordinates);
          position.push(firstCellObject);
          //   console.log(position);
          for (let i = 1; i < ship.length; i += 1) {
            const nextCellObjectCoordinates =
              ship.position === "v"
                ? [
                    firstCellObject.coordinates[0] + i,
                    firstCellObject.coordinates[1],
                  ]
                : [
                    firstCellObject.coordinates[0],
                    firstCellObject.coordinates[1] + i,
                  ];
            // console.log(nextCellObjectCoordinates);
            const nextCellObject = board.vertices.filter(
              (obj) =>
                JSON.stringify(obj.coordinates) ===
                JSON.stringify(nextCellObjectCoordinates),
            );
            // console.log(nextCellObject[0]);
            if (nextCellObject[0]) {
              if (nextCellObject[0].occupied === false) {
                positionCoordinates.push(nextCellObject[0].coordinates);
                position.push(nextCellObject[0]);
              } else {
                continue;
              }
            } else {
              continue;
            }
          }

          if (position.length === ship.length) {
            ship.assignCoordinates(...positionCoordinates);
            ship.setOrientation();

            position.forEach((p) => {
              p.occupied = true;
              p.occupiedByShip = true;
              p.adjacencyList.forEach((adj) => {
                adj.occupied = true;
              });
            });
            positionFound = true;
          }
        }
      }
    });
  }

  return {
    board,
    ships,
    missingShots,
    createBoard,
    createShips,
    receiveAttack,
    allShipsSunk,
    positionShips,
    findVertextObjectByCoordinates,
    findShipById,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameboardModule);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   playerOneBoard: () => (/* binding */ playerOneBoard)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _DOMHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHandler */ "./src/DOMHandler.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");

// eslint-disable-next-line import/no-cycle




let playerOneBoard = null;

function gameLoop() {
  const main = document.querySelector(".main");
  if (main) {
    main.remove();
  }
  playerOneBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  playerOneBoard.createBoard();
  playerOneBoard.createShips();
  playerOneBoard.positionShips();

  const playerTwoBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"])();
  playerTwoBoard.createBoard();
  playerTwoBoard.createShips();
  playerTwoBoard.positionShips();

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerOneBoard = playerOneBoard.board.vertices;
  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerOneShips = playerOneBoard.ships;

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerTwoBoard = playerTwoBoard.board.vertices;
  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].playerTwoShips = playerTwoBoard.ships;

  _DOMHandler__WEBPACK_IMPORTED_MODULE_1__["default"].createDom();
}

gameLoop();
(0,_eventManager__WEBPACK_IMPORTED_MODULE_3__.addDocumentEventListeners)();

document.addEventListener("keydown", (event) => {
  if (event.key === "c" || event.key === "C") {
    console.log(playerOneBoard);
    console.log(playerOneBoard.ships[0]);
    console.log(playerOneBoard.ships[1]);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ShipModule = (() => {
  // Creates a ship
  function createShip(shipLength, shipId) {
    const ship = {
      id: shipId,
      hitCount: 0,
      coordinates: [],
      length: shipLength,
      position: "h",

      hit() {
        ship.hitCount += 1;
      },

      isSunk() {
        if (ship.hitCount === ship.length) {
          return true;
        }
        return false;
      },

      assignCoordinates(...args) {
        ship.coordinates = args;
        // console.log(ship.coordinates);
      },

      setOrientation() {
        // Determine if ship position is horizontal or vertical
        if (ship.coordinates.length === 1) {
          this.position = "h";
        } else if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
          this.position = "h";
        } else {
          this.position = "v";
        }
      },
    };

    return ship;
  }

  return {
    createShip,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipModule);


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHdLQUF3SyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxpRUFBaUU7QUFDN1E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQVU7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVBUO0FBQ3RCO0FBQ3NDO0FBQ0k7QUFDaUI7O0FBRTNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQWU7QUFDbEM7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixzREFBZTtBQUN4QztBQUNBO0FBQ0E7O0FBRUEsRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7O0FBRVosRUFBRSxtREFBVTtBQUNaLEVBQUUsbURBQVU7O0FBRVosRUFBRSxtREFBVTtBQUNaOztBQUVBO0FBQ0Esd0VBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7QUM1QzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQzlDMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET01IYW5kbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRFNfR3JhcGguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC8qIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7ICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuXG4uaGVhZGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5jb250ZW50IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgLyogcGFkZGluZy10b3A6IDQwcHg7ICovXG59XG5cbi5jb21tYW5kcyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uY29tbWFuZHMgPiBkaXYge1xuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb21tYW5kcyA+IGRpdjpob3ZlciB7XG4gIGNvbG9yOiBibHVlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMXB4O1xufVxuXG4uYm9hcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogZ2FwOiAyMHB4OyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uYm9hcmRzID4gLnBsYXllck9uZS1ib2FyZCxcbi5ib2FyZHMgPiAucGxheWVyVHdvLWJvYXJkIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCwgMC42KTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLnBsYXllck9uZS1ib2FyZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4ucGxheWVyVHdvLWJvYXJkIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG59XG5cbi5wbGF5ZXItb25lLWJvYXJkLW5hbWUge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXItdHdvLWJvYXJkLW5hbWUge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQsXG4ucGxheWVyVHdvLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQgPiBkaXYsXG4ucGxheWVyVHdvLWJvYXJkID4gZGl2IHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjYpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHotaW5kZXg6IDE7ICovXG59XG5cbi5wbGF5ZXJUd28tYm9hcmQgPiAuc2hpcC1jZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMyk7XG59XG5cbi5wbGF5ZXJPbmUtYm9hcmQgPiAuc2hpcC1jZWxsIHtcbiAgb3V0bGluZTogMC41cHggc29saWQgcmdiYSgxMTgsIDExOCwgMTE4LCAwLjIpO1xufVxuXG4uc2hpcCB7XG4gIC8qIHotaW5kZXg6IDI7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsdWU7XG59XG5cbi5zaGlwLmRyb3BwYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xufVxuXG4uc2hpcC51bmRyb3BwYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xufVxuXG4uZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDU7XG4gIC8qIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRvdWNoLWFjdGlvbjogYWxsOyAqL1xufVxuXG4vKiAuc2hpcDpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn0gKi9cblxuW2RyYWdnYWJsZT1cInRydWVcIl0ge1xuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbn1cblxuW2RyYWdnYWJsZT1cInRydWVcIl06aG92ZXIge1xuICB6LWluZGV4OiA5OTk5O1xuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcbn1cblxuLyogLmRyYWdnYWJsZSB7XG4gIGN1cnNvcjogYWxpYXM7XG59ICovXG5cbi5tYXJrX2NvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAtMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm1hcmtfcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogLTMwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRyYWdnaW5nIHtcbiAgb3V0bGluZTogMXB4IGdyZWVuIHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcbn1cblxuW2Ryb3BwYWJsZT1cInRydWVcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC4yKTtcbn1cblxuW2Ryb3BwYWJsZT1cImZhbHNlXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQjt1QkFDcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDRDQUE0QztFQUM1QyxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWO3NCQUNvQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgLyogcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG5vbmU7ICovXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAvKiBwYWRkaW5nLXRvcDogNDBweDsgKi9cXG59XFxuXFxuLmNvbW1hbmRzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLmNvbW1hbmRzID4gZGl2IHtcXG4gIC8qIHVzZXItc2VsZWN0OiBub25lOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmNvbW1hbmRzID4gZGl2OmhvdmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAxcHg7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIGdhcDogMjBweDsgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5ib2FyZHMgPiAucGxheWVyT25lLWJvYXJkLFxcbi5ib2FyZHMgPiAucGxheWVyVHdvLWJvYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2IoMTE4LCAxMTgsIDExOCwgMC42KTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLnBsYXllclR3by1ib2FyZCB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5wbGF5ZXItb25lLWJvYXJkLW5hbWUge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLXR3by1ib2FyZC1uYW1lIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCxcXG4ucGxheWVyVHdvLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnBsYXllck9uZS1ib2FyZCA+IGRpdixcXG4ucGxheWVyVHdvLWJvYXJkID4gZGl2IHtcXG4gIG91dGxpbmU6IDAuNXB4IHNvbGlkIHJnYmEoMTE4LCAxMTgsIDExOCwgMC42KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbi5wbGF5ZXJUd28tYm9hcmQgPiAuc2hpcC1jZWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjMpO1xcbn1cXG5cXG4ucGxheWVyT25lLWJvYXJkID4gLnNoaXAtY2VsbCB7XFxuICBvdXRsaW5lOiAwLjVweCBzb2xpZCByZ2JhKDExOCwgMTE4LCAxMTgsIDAuMik7XFxufVxcblxcbi5zaGlwIHtcXG4gIC8qIHotaW5kZXg6IDI7ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuMSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmx1ZTtcXG59XFxuXFxuLnNoaXAuZHJvcHBhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjUpO1xcbn1cXG5cXG4uc2hpcC51bmRyb3BwYWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmRyYWdnYWJsZSB7XFxuICBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6IDU7XFxuICAvKiBwb2ludGVyLWV2ZW50czogYWxsO1xcbiAgdG91Y2gtYWN0aW9uOiBhbGw7ICovXFxufVxcblxcbi8qIC5zaGlwOmhvdmVyIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59ICovXFxuXFxuW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5bZHJhZ2dhYmxlPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGN1cnNvcjogbW92ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiAuZHJhZ2dhYmxlIHtcXG4gIGN1cnNvcjogYWxpYXM7XFxufSAqL1xcblxcbi5tYXJrX2NvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRvcDogLTIwcHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm1hcmtfcm93IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDUwJTtcXG4gIGxlZnQ6IC0zMHB4O1xcbiAgdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICBvdXRsaW5lOiAxcHggZ3JlZW4gc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC41KTtcXG59XFxuXFxuW2Ryb3BwYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjIpO1xcbn1cXG5cXG5bZHJvcHBhYmxlPVxcXCJmYWxzZVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZXZlbnRNYW5hZ2VyXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuY29uc3QgRE9NSGFuZGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgbGV0IHBsYXllck9uZUJvYXJkID0gbnVsbDtcbiAgbGV0IHBsYXllclR3b0JvYXJkID0gbnVsbDtcbiAgbGV0IHBsYXllck9uZVNoaXBzID0gbnVsbDtcbiAgbGV0IHBsYXllclR3b1NoaXBzID0gbnVsbDtcblxuICBjb25zdCBzdGF0aWNMYXlvdXRFbGVtZW50cyA9IFtcbiAgICB7XG4gICAgICB0eXBlOiBcImRpdlwiLFxuICAgICAgY2xhc3M6IFwibWFpblwiLFxuICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICBjbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgY2xhc3M6IFwiY29udGVudFwiLFxuICAgICAgICAgIGNoaWxkcmVuRWxlbWVudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgY2xhc3M6IFwiY29tbWFuZHNcIixcbiAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJyYW5kb21pemVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcInJhbmRvbWl6ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInN0YXJ0LWdhbWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBcInN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBcImJvYXJkc1wiLFxuICAgICAgICAgICAgICBjaGlsZHJlbkVsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllck9uZS1ib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllclR3by1ib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllci1vbmUtYm9hcmQtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiWW91ciBib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInBsYXllci10d28tYm9hcmQtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiT3Bwb25lbnQncyBib2FyZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnZUxheW91dChwYXJlbnQsIHRyZWUpIHtcbiAgICB0cmVlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQudHlwZSk7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzcykge1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5jbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIHBhcmVudC5hcHBlbmQobmV3RWxlbWVudCk7XG4gICAgICBpZiAoZWxlbWVudC5jaGlsZHJlbkVsZW1lbnRzKSB7XG4gICAgICAgIGNyZWF0ZVBhZ2VMYXlvdXQobmV3RWxlbWVudCwgZWxlbWVudC5jaGlsZHJlbkVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbHMoKSB7XG4gICAgY29uc3QgcGxheWVyT25lQm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyVHdvLWJvYXJkXCIpO1xuXG4gICAgRE9NSGFuZGxlci5wbGF5ZXJPbmVCb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBpZiAoZWxlbWVudC5vY2N1cGllZCkge1xuICAgICAgICBuZXdDZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDZWxsLnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyT25lQm9hcmREaXYuYXBwZW5kKG5ld0NlbGwpO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiAgICAgIHtcbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwyXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJCXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsM1wiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDRcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkRcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw1XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJFXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNlwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDdcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkdcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw4XCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJIXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDEwXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJKXCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjIsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIzLDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNCwxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI0XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjUsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI2LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjZcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNywxXCIpIHtcbiAgICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI3XCI7XG4gICAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjgsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOFwiO1xuICAgICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI5LDFcIikge1xuICAgICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjlcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMTAsMVwiKSB7XG4gICAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMTBcIjtcbiAgICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgRE9NSGFuZGxlci5wbGF5ZXJUd29Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChlbGVtZW50LmNvb3JkaW5hdGVzKTtcbiAgICAgIG5ld0NlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBwbGF5ZXJUd29Cb2FyZERpdi5hcHBlbmQobmV3Q2VsbCk7XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJBXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjFcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSwyXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJCXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsM1wiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDRcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkRcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw1XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJFXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsNlwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDdcIikge1xuICAgICAgICBjb25zdCBtYXJrQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya0NvbC5jbGFzc0xpc3QuYWRkKFwibWFya19jb2xcIik7XG4gICAgICAgIG1hcmtDb2wudGV4dENvbnRlbnQgPSBcIkdcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya0NvbCk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiMSw4XCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJIXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEsOVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrQ29sLmNsYXNzTGlzdC5hZGQoXCJtYXJrX2NvbFwiKTtcbiAgICAgICAgbWFya0NvbC50ZXh0Q29udGVudCA9IFwiSVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrQ29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIxLDEwXCIpIHtcbiAgICAgICAgY29uc3QgbWFya0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtDb2wuY2xhc3NMaXN0LmFkZChcIm1hcmtfY29sXCIpO1xuICAgICAgICBtYXJrQ29sLnRleHRDb250ZW50ID0gXCJKXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtDb2wpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjIsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiMlwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIzLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjNcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNCwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI0XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjUsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiNVwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCI2LDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjZcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiNywxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI3XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjgsMVwiKSB7XG4gICAgICAgIGNvbnN0IG1hcmtSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXJrUm93LmNsYXNzTGlzdC5hZGQoXCJtYXJrX3Jvd1wiKTtcbiAgICAgICAgbWFya1Jvdy50ZXh0Q29udGVudCA9IFwiOFwiO1xuICAgICAgICBuZXdDZWxsLmFwcGVuZChtYXJrUm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChuZXdDZWxsLmNsYXNzTGlzdFswXSA9PT0gXCIyLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjJcIjtcbiAgICAgICAgbmV3Q2VsbC5hcHBlbmQobWFya1Jvdyk7XG4gICAgICB9XG4gICAgICBpZiAobmV3Q2VsbC5jbGFzc0xpc3RbMF0gPT09IFwiOSwxXCIpIHtcbiAgICAgICAgY29uc3QgbWFya1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1hcmtSb3cuY2xhc3NMaXN0LmFkZChcIm1hcmtfcm93XCIpO1xuICAgICAgICBtYXJrUm93LnRleHRDb250ZW50ID0gXCI5XCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgICAgaWYgKG5ld0NlbGwuY2xhc3NMaXN0WzBdID09PSBcIjEwLDFcIikge1xuICAgICAgICBjb25zdCBtYXJrUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFya1Jvdy5jbGFzc0xpc3QuYWRkKFwibWFya19yb3dcIik7XG4gICAgICAgIG1hcmtSb3cudGV4dENvbnRlbnQgPSBcIjEwXCI7XG4gICAgICAgIG5ld0NlbGwuYXBwZW5kKG1hcmtSb3cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZERpdkJ5Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIHBhcmVudERpdikge1xuICAgIGNvbnN0IGRpdiA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKGBbY2xhc3MqPVwiJHtjb29yZGluYXRlc31cIl0uY2VsbGApO1xuICAgIHJldHVybiBkaXY7XG4gIH1cblxuICBmdW5jdGlvbiBkcmF3U2hpcHMoKSB7XG4gICAgY29uc3QgcGFyZW50RGl2Qm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICBET01IYW5kbGVyLnBsYXllck9uZVNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGAke3NoaXAuY29vcmRpbmF0ZXNbMF1bMF19LCR7c2hpcC5jb29yZGluYXRlc1swXVsxXX1gKTtcbiAgICAgIGNvbnN0IGRpdiA9IGZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgICBgJHtzaGlwLmNvb3JkaW5hdGVzWzBdWzBdfSwke3NoaXAuY29vcmRpbmF0ZXNbMF1bMV19YCxcbiAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBzaGlwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIik7XG4gICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIHNoaXAuaWQpO1xuICAgICAgLy8gc2hpcERpdi5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgdHJ1ZSk7XG4gICAgICAvLyBzaGlwRGl2LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCB0cnVlKTtcblxuICAgICAgaWYgKHNoaXAucG9zaXRpb24gPT09IFwiaFwiKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gNDAgKiBzaGlwLmxlbmd0aDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICAgICAgc2hpcERpdi5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGlmIChzaGlwLnBvc2l0aW9uID09PSBcInZcIikge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA0MCAqIHNoaXAubGVuZ3RoO1xuICAgICAgICBzaGlwRGl2LnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHNoaXBEaXYuc3R5bGUud2lkdGggPSBcIjQwcHhcIjtcbiAgICAgIH1cbiAgICAgIGRpdi5hcHBlbmQoc2hpcERpdik7XG5cbiAgICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjWzBdfSwke2NbMV19YDtcbiAgICAgICAgY29uc3Qgc2hpcENlbGxzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBwYXJlbnREaXZCb2FyZE9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxcbiAgICAgICAgKS5maWx0ZXIoKGVsZW0pID0+IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpO1xuICAgICAgICBzaGlwQ2VsbHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIERPTUhhbmRsZXIucGxheWVyVHdvU2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jb29yZGluYXRlcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudERpdkJvYXJkVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJUd28tYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IGZpbmREaXZCeUNvb3JkaW5hdGVzKGAke2NbMF19LCR7Y1sxXX1gLCBwYXJlbnREaXZCb2FyZFR3byk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVEb20oKSB7XG4gICAgY3JlYXRlUGFnZUxheW91dChib2R5LCBzdGF0aWNMYXlvdXRFbGVtZW50cyk7XG4gICAgY3JlYXRlQm9hcmRDZWxscygpO1xuICAgIGRyYXdTaGlwcygpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsYXllck9uZUJvYXJkLFxuICAgIHBsYXllclR3b0JvYXJkLFxuICAgIHBsYXllck9uZVNoaXBzLFxuICAgIHBsYXllclR3b1NoaXBzLFxuICAgIGNyZWF0ZURvbSxcbiAgICBmaW5kRGl2QnlDb29yZGluYXRlcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUhhbmRsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuXG5jbGFzcyBWZXJ0ZXgge1xuICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmFkamFjZW5jeUxpc3QgPSBbXTtcbiAgICB0aGlzLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICB9XG5cbiAgYWRkTmVpZ2hib3IodmVydGV4KSB7XG4gICAgaWYgKCF0aGlzLmFkamFjZW5jeUxpc3QuaW5jbHVkZXModmVydGV4KSkge1xuICAgICAgdGhpcy5hZGphY2VuY3lMaXN0LnB1c2godmVydGV4KTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR3JhcGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gIH1cblxuICBhZGRWZXJ0ZXgoeCwgeSkge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoW3gsIHldKTtcbiAgICB0aGlzLnZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gIGFkZEVkZ2UodmVydGV4MSwgdmVydGV4Mikge1xuICAgIHZlcnRleDEuYWRkTmVpZ2hib3IodmVydGV4Mik7XG4gICAgdmVydGV4Mi5hZGROZWlnaGJvcih2ZXJ0ZXgxKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCBnYW1lTG9vcCwgeyBwbGF5ZXJPbmVCb2FyZCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET01IYW5kbGVyXCI7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCByYW5kb21pemVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbWl6ZVwiKTtcbiAgcmFuZG9taXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2FtZUxvb3AoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZEV2ZW50TGlzdGVuZXJzO1xuXG5mdW5jdGlvbiBhZGREb2N1bWVudEV2ZW50TGlzdGVuZXJzKCkge1xuICBsZXQgZHJhZ2dhYmxlRWxlbWVudCA9IG51bGw7XG4gIGxldCBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IG51bGw7XG5cbiAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgbGV0IG9mZlNldFg7XG4gIGxldCBvZmZTZXRZO1xuICBsZXQgbW91c2VEb3duT2Zmc2V0SG9yID0gMDtcbiAgbGV0IG1vdXNlRG93bk9mZnNldFZlciA9IDA7XG4gIGxldCBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IG51bGw7XG4gIGxldCBlbGVtZW50QmVsb3cgPSBudWxsO1xuICBsZXQgcHJldmlvdXNFbGVtZW50QmVsb3cgPSBudWxsO1xuXG4gIC8vIEZpbmQgY2VsbHMgdW5kZXIgdGhlIHNoaXBcbiAgZnVuY3Rpb24gZmluZFNoaXBDZWxscyhmaXJzdEVsZW1lbnQsIG9yaWVudGF0aW9uLCBsZW5ndGgpIHtcbiAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgIGNlbGxzLnB1c2goZmlyc3RFbGVtZW50KTtcbiAgICBjb25zdCBmaXJzdENlbGxDbGFzc0FycmF5ID0gZmlyc3RFbGVtZW50LmNsYXNzTGlzdFswXVxuICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgLm1hcChOdW1iZXIpO1xuICAgIGNvbnN0IHBhcmVudERpdkJvYXJkT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhcIikge1xuICAgICAgICBjb25zdCBjZWxsID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgICBgJHtmaXJzdENlbGxDbGFzc0FycmF5WzBdfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV0gKyBpfWAsXG4gICAgICAgICAgcGFyZW50RGl2Qm9hcmRPbmUsXG4gICAgICAgICk7XG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidlwiKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBET01IYW5kbGVyLmZpbmREaXZCeUNvb3JkaW5hdGVzKFxuICAgICAgICAgIGAke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMF0gKyBpfSwke2ZpcnN0Q2VsbENsYXNzQXJyYXlbMV19YCxcbiAgICAgICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICAgICAgKTtcbiAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNlbGxzO1xuICB9XG5cbiAgLy8gRmluZCBjZWxscyB0byBjaGFuZ2UgdG8gXCJkcm9wcGFibGUgPSB0cnVlXCIgYWZ0ZXIgZHJhZyAmIGRyb3BwaW5nIGEgc2hpcFxuICBmdW5jdGlvbiBpZGVudGlmeUNlbGxzVG9NYWtlRHJvcHBhYmxlKGV2ZW50KSB7XG4gICAgY29uc3Qgc2hpcE9iamVjdCA9IHBsYXllck9uZUJvYXJkLmZpbmRTaGlwQnlJZChkcmFnZ2FibGVFbGVtZW50LmlkKTtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGVsZW1lbnRCZWxvdy5nZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIikgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gZmluZFNoaXBDZWxscyhcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyxcbiAgICAgICAgICAgIHNoaXBPYmplY3QucG9zaXRpb24sXG4gICAgICAgICAgICBzaGlwT2JqZWN0Lmxlbmd0aCAtIDEsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudEJlbG93LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3cuYXBwZW5kKGRyYWdnYWJsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBmaW5kU2hpcENlbGxzKFxuICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3csXG4gICAgICAgICAgICBzaGlwT2JqZWN0LnBvc2l0aW9uLFxuICAgICAgICAgICAgc2hpcE9iamVjdC5sZW5ndGggLSAxLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsRWxlbWVudEJlbG93LmFwcGVuZChkcmFnZ2FibGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGZpbmRTaGlwQ2VsbHMoXG4gICAgICAgICAgb3JpZ2luYWxFbGVtZW50QmVsb3csXG4gICAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgICBzaGlwT2JqZWN0Lmxlbmd0aCAtIDEsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgICAgcmV0dXJuIGZpbmRTaGlwQ2VsbHMoXG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICAgICAgc2hpcE9iamVjdC5wb3NpdGlvbixcbiAgICAgICAgc2hpcE9iamVjdC5sZW5ndGggLSAxLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDaGVja3MgaWYgZHJvcHBpbmcgdGhlIHNoaXAgb24gdGhlIHBvc2l0aW9uIHdpbGwgY2F1c2VcbiAgLy8gb3ZlcmxhcCB3aXRoIGFub3RoZXIgc2hpcFxuICBmdW5jdGlvbiBjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpIHtcbiAgICBsZXQgbm9PdmVybGFwID0gdHJ1ZTtcbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPiA0MCB8fCBkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPiA0MCkge1xuICAgICAgbGV0IGxhc3RTaGlwRWxlbWVudDtcblxuICAgICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSA4MCkge1xuICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgNDAsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDEyMCkge1xuICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgODAsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlcixcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDE2MCkge1xuICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yICsgMTIwLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gODApIHtcbiAgICAgICAgbGFzdFNoaXBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgICAgZXZlbnQuY2xpZW50WCAtIG1vdXNlRG93bk9mZnNldEhvcixcbiAgICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyICsgNDAsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gMTIwKSB7XG4gICAgICAgIGxhc3RTaGlwRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSAtIG1vdXNlRG93bk9mZnNldFZlciArIDgwLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkcmFnZ2FibGVFbGVtZW50UmVjdC5oZWlnaHQgPT09IDE2MCkge1xuICAgICAgICBsYXN0U2hpcEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIgKyAxMjAsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RTaGlwRWxlbWVudC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxcIikpIHtcbiAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTGlzdFswXTtcbiAgICAgICAgICBjb25zdCBhcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gcGxheWVyT25lQm9hcmQuZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFycmF5KTtcblxuICAgICAgICAgIHZlcnRleC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkamFjZW5jeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkamFjZW5jeS5vY2N1cGllZEJ5U2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoZWxlbWVudEJlbG93KSB7XG4gICAgICAgICAgICAgICAgbm9PdmVybGFwID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBub092ZXJsYXA7XG4gIH1cblxuICAvLyBDaGVja3MgaWYgdGhlIGVsZW1lbnQgaXMgZ2V0dGluZyBkcm9wcGVkIHdpdGhpbiB0aGUgYm9yZGVycyBvZiB0aGUgYm9hcmRcbiAgZnVuY3Rpb24gY2hlY2tXaXRoaW5Cb3JkZXJzKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudEJlbG93Q29vcmRpbmF0ZXMgPSBlbGVtZW50QmVsb3cuY2xhc3NMaXN0WzBdXG4gICAgICAuc3BsaXQoXCIsXCIpXG4gICAgICAubWFwKE51bWJlcik7XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodCA9PT0gODApIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSAxMjApIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0ID09PSAxNjApIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1swXSA+IDcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDgwKSB7XG4gICAgICBpZiAoZWxlbWVudEJlbG93Q29vcmRpbmF0ZXNbMV0gPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID09PSAxMjApIHtcbiAgICAgIGlmIChlbGVtZW50QmVsb3dDb29yZGluYXRlc1sxXSA+IDgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudFJlY3Qud2lkdGggPT09IDE2MCkge1xuICAgICAgaWYgKGVsZW1lbnRCZWxvd0Nvb3JkaW5hdGVzWzFdID4gNykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG91dE9mQm9hcmRFbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgZXZlbnQuY2xpZW50WCxcbiAgICAgIGV2ZW50LmNsaWVudFksXG4gICAgKTtcbiAgICBsZXQgY2VsbEVsZW1lbnQgPSBudWxsO1xuICAgIG91dE9mQm9hcmRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjZWxsXCIpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICBjZWxsRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2VsbEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBVcGRhdGUgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvbiBib2FyZCBmb3IgZWFjaCBjZWxsIGJhc2VkIG9uIG9jY3VwaWVkIHZhbHVlIGluIHRoZSBncmFwaFxuICBmdW5jdGlvbiB1cGRhdGVEcm9wcGFibGVBdHRyaWJ1dGUoKSB7XG4gICAgY29uc3QgcGFyZW50RGl2Qm9hcmRPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcblxuICAgIHBsYXllck9uZUJvYXJkLmJvYXJkLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gRE9NSGFuZGxlci5maW5kRGl2QnlDb29yZGluYXRlcyhcbiAgICAgICAgYCR7dmVydGV4LmNvb3JkaW5hdGVzWzBdfSwke3ZlcnRleC5jb29yZGluYXRlc1sxXX1gLFxuICAgICAgICBwYXJlbnREaXZCb2FyZE9uZSxcbiAgICAgICk7XG4gICAgICBpZiAodmVydGV4Lm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKHZlcnRleC5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFRoZSBjZWxscyB1bmRlciB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQgd2lsbCBiZSBtYWRlIGRyb3BwYWJsZSB3aGVuIHRoZSBtb3VzZSBpcyBkb3duXG4gIGZ1bmN0aW9uIG1ha2VEcm9wcGFibGUoY2VsbHMpIHtcbiAgICBjb25zdCBjZWxsc1ZlcnRpY2VzID0gW107XG5cbiAgICAvLyBTZXQgZHJvcHBhYmxlIGF0dHJpYnV0ZSBvbiB0aGUgY2VsbHMgdW5kZXIgZHJhZ2dhYmxlIGVsZW1lbnQgdG8gdHJ1ZVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIsIHRydWUpO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gY2VsbC5jbGFzc0xpc3RbMF07XG4gICAgICBjb25zdCBhcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIixcIikubWFwKE51bWJlcik7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBwbGF5ZXJPbmVCb2FyZC5maW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoYXJyYXkpO1xuICAgICAgY2VsbHNWZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgfSk7XG5cbiAgICAvLy8gVXBkYXRlIHRoZSBncmFwaCBhY2NvcmRpbmdseVxuICAgIGNlbGxzVmVydGljZXMuZm9yRWFjaCgoY2VsbFZlcnRleCkgPT4ge1xuICAgICAgY2VsbFZlcnRleC5vY2N1cGllZEJ5U2hpcCA9IGZhbHNlO1xuICAgICAgY2VsbFZlcnRleC5vY2N1cGllZCA9IGZhbHNlO1xuXG4gICAgICAvLyBVcGRhdGUgYWRqYWNlbnQgY2VsbHM6XG4gICAgICBjZWxsVmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICAgIC8vIEluIHRoZSBncmFwaFxuICAgICAgICBhZGphY2VuY3kub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgYWRqYWNlbmN5LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoYWRqKSA9PiB7XG4gICAgICAgICAgaWYgKGFkai5vY2N1cGllZEJ5U2hpcCkge1xuICAgICAgICAgICAgYWRqYWNlbmN5Lm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWRqYWNlbmN5Lm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke2FkamFjZW5jeS5jb29yZGluYXRlc1swXX0sJHthZGphY2VuY3kuY29vcmRpbmF0ZXNbMV19YDtcbiAgICAgICAgICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllck9uZS1ib2FyZFwiKTtcbiAgICAgICAgICBjb25zdCBkaXYgPSBwYXJlbnREaXYucXVlcnlTZWxlY3RvcihgW2NsYXNzKj1cIiR7Y2xhc3NOYW1lfVwiXS5jZWxsYCk7XG4gICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUaGUgY2VsbHMgdW5kZXIgdGhlIGRyYWdnYWJsZSBlbGVtZW50IHdpbGwgYmUgbWFkZSB1bmRyb3BwYWJsZSB3aGVuIHRoZSBtb3VzZSBpcyB1cFxuICBmdW5jdGlvbiBtYWtlVW5kcm9wcGFibGUoY2VsbHMpIHtcbiAgICBjb25zdCBjZWxsc1ZlcnRpY2VzID0gW107XG4gICAgLy8gU2V0IGRyb3BwYWJsZSBhdHRyaWJ1dGUgb24gdGhlIGNlbGxzIHVuZGVyIGRyYWdnYWJsZSBlbGVtZW50IHRvIGZhbHNlXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjZWxsLmNsYXNzTGlzdFswXTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBjbGFzc05hbWUuc3BsaXQoXCIsXCIpLm1hcChOdW1iZXIpO1xuICAgICAgICBjb25zdCB2ZXJ0ZXggPSBwbGF5ZXJPbmVCb2FyZC5maW5kVmVydGV4dE9iamVjdEJ5Q29vcmRpbmF0ZXMoYXJyYXkpO1xuICAgICAgICBjZWxsc1ZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgZ3JhcGggYWNjb3JkaW5nbHlcbiAgICBjZWxsc1ZlcnRpY2VzLmZvckVhY2goKGNlbGxWZXJ0ZXgpID0+IHtcbiAgICAgIGNlbGxWZXJ0ZXgub2NjdXBpZWRCeVNoaXAgPSB0cnVlO1xuICAgICAgY2VsbFZlcnRleC5vY2N1cGllZCA9IHRydWU7XG5cbiAgICAgIC8vIFVwZGF0ZSBhZGphY2VudCBjZWxsczpcbiAgICAgIGNlbGxWZXJ0ZXguYWRqYWNlbmN5TGlzdC5mb3JFYWNoKChhZGphY2VuY3kpID0+IHtcbiAgICAgICAgLy8gSW4gdGhlIGdyYXBoXG4gICAgICAgIGFkamFjZW5jeS5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGAke2FkamFjZW5jeS5jb29yZGluYXRlc1swXX0sJHthZGphY2VuY3kuY29vcmRpbmF0ZXNbMV19YDtcbiAgICAgICAgY29uc3QgcGFyZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJPbmUtYm9hcmRcIik7XG4gICAgICAgIGNvbnN0IGRpdiA9IHBhcmVudERpdi5xdWVyeVNlbGVjdG9yKGBbY2xhc3MqPVwiJHtjbGFzc05hbWV9XCJdLmNlbGxgKTtcbiAgICAgICAgLy8gSW4gRE9NXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNb3VzZSBkb3duXG4gIGNvbnN0IG9uTW91c2VEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHNGcm9tUG9pbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChcbiAgICAgIGV2ZW50LmNsaWVudFgsXG4gICAgICBldmVudC5jbGllbnRZLFxuICAgICk7XG5cbiAgICBlbGVtZW50c0Zyb21Qb2ludC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcmFnZ2FibGVcIikpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnRSZWN0ID0gZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUubGVmdCA9IDA7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnRvcCA9IDA7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLnpJbmRleCA9IDA7XG4gICAgICBvZmZTZXRYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgIG9mZlNldFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHJhZ2dpbmdcIik7XG5cbiAgICAgIGNvbnN0IGNlbGxzID0gaWRlbnRpZnlDZWxsc1RvTWFrZURyb3BwYWJsZShldmVudCk7XG4gICAgICBtYWtlRHJvcHBhYmxlKGNlbGxzKTtcblxuICAgICAgY29uc3QgcGFyZW50UmVjdCA9IGRyYWdnYWJsZUVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyAxMjApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gMTIwO1xuICAgICAgfSBlbHNlIGlmIChvZmZTZXRYID4gcGFyZW50UmVjdC54ICsgODApIHtcbiAgICAgICAgbW91c2VEb3duT2Zmc2V0SG9yID0gODA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFggPiBwYXJlbnRSZWN0LnggKyA0MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSA0MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDEyMCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSAxMjA7XG4gICAgICB9IGVsc2UgaWYgKG9mZlNldFkgPiBwYXJlbnRSZWN0LnkgKyA4MCkge1xuICAgICAgICBtb3VzZURvd25PZmZzZXRWZXIgPSA4MDtcbiAgICAgIH0gZWxzZSBpZiAob2ZmU2V0WSA+IHBhcmVudFJlY3QueSArIDQwKSB7XG4gICAgICAgIG1vdXNlRG93bk9mZnNldFZlciA9IDQwO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50c0JlbG93ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoXG4gICAgICAgIGV2ZW50LmNsaWVudFggLSBtb3VzZURvd25PZmZzZXRIb3IsXG4gICAgICAgIGV2ZW50LmNsaWVudFkgLSBtb3VzZURvd25PZmZzZXRWZXIsXG4gICAgICApO1xuXG4gICAgICBlbGVtZW50c0JlbG93LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSkge1xuICAgICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiKSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IGVsZW1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRCZWxvdyA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gTW91c2UgbW92ZVxuICBjb25zdCBvbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBjb25zdCBlbGVtZW50c0Zyb21Qb2ludCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KFxuICAgICAgICBldmVudC5jbGllbnRYIC0gbW91c2VEb3duT2Zmc2V0SG9yLFxuICAgICAgICBldmVudC5jbGllbnRZIC0gbW91c2VEb3duT2Zmc2V0VmVyLFxuICAgICAgKTtcbiAgICAgIGVsZW1lbnRzRnJvbVBvaW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2VsbFwiKSAmJlxuICAgICAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIHByZXZpb3VzRWxlbWVudEJlbG93ID0gZWxlbWVudEJlbG93O1xuICAgICAgICAgIGlmIChwcmV2aW91c0VsZW1lbnRCZWxvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wXCIpKSB7XG4gICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmRyb3BwYWJsZVwiKTtcbiAgICAgICAgICAgIHByZXZpb3VzRWxlbWVudEJlbG93LmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50QmVsb3cgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpIHx8ICFjaGVja1dpdGhpbkJvcmRlcnMoZXZlbnQpKSB7XG4gICAgICAgIGVsZW1lbnRCZWxvdy5zZXRBdHRyaWJ1dGUoXCJkcm9wcGFibGVcIiwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50QmVsb3cuY2xhc3NMaXN0LmFkZChcInRlbXBcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50QmVsb3cuZ2V0QXR0cmlidXRlKFwiZHJvcHBhYmxlXCIpID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidW5kcm9wcGFibGVcIik7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyb3BwYWJsZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyb3BwYWJsZVwiKTtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidW5kcm9wcGFibGVcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnZ2FibGVFbGVtZW50KSB7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggLSBvZmZTZXRYfXB4YDtcbiAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZIC0gb2ZmU2V0WX1weGA7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIE1vdXNlIHVwXG4gIGNvbnN0IG9uTW91c2VVcCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBkcmFnZ2FibGVFbGVtZW50XG4gICAgICA/IHBsYXllck9uZUJvYXJkLmZpbmRTaGlwQnlJZChkcmFnZ2FibGVFbGVtZW50LmlkKVxuICAgICAgOiBudWxsO1xuICAgIGlmIChlbGVtZW50QmVsb3cgPT09IG9yaWdpbmFsRWxlbWVudEJlbG93KSB7XG4gICAgICBpZiAoZHJhZ2dhYmxlRWxlbWVudCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGAke2RyYWdnYWJsZUVsZW1lbnRSZWN0LmhlaWdodH1weGA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGAke2RyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRofXB4YDtcblxuICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIGRyYWdnYWJsZUVsZW1lbnRSZWN0ID0gZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpKTtcbiAgICAgICAgaWYgKCFjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpIHx8ICFjaGVja1dpdGhpbkJvcmRlcnMoZXZlbnQpKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS53aWR0aCA9IGhlaWdodDtcbiAgICAgICAgICBkcmFnZ2FibGVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZUVsZW1lbnRSZWN0LndpZHRoID4gZHJhZ2dhYmxlRWxlbWVudFJlY3QuaGVpZ2h0KSB7XG4gICAgICAgICAgc2hpcC5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXAucG9zaXRpb24gPSBcInZcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wcGFibGVcIik7XG4gICAgICBkcmFnZ2FibGVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmRyb3BwYWJsZVwiKTtcbiAgICAgIGlmIChlbGVtZW50QmVsb3cpIHtcbiAgICAgICAgaWYgKCFjaGVja090aGVyU2hpcE92ZXJsYXAoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjaGVja1dpdGhpbkJvcmRlcnMoZXZlbnQpKSB7XG4gICAgICAgICAgZWxlbWVudEJlbG93LnNldEF0dHJpYnV0ZShcImRyb3BwYWJsZVwiLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2VsbHMgPSBpZGVudGlmeUNlbGxzVG9NYWtlRHJvcHBhYmxlKGV2ZW50KTtcbiAgICAgIG1ha2VVbmRyb3BwYWJsZShjZWxscyk7XG5cbiAgICAgIGNvbnN0IG5ld1NoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBuZXdTaGlwQ29vcmRpbmF0ZXMucHVzaChcbiAgICAgICAgICBBcnJheS5mcm9tKGNlbGwuY2xhc3NMaXN0WzBdLnNwbGl0KFwiLFwiKS5tYXAoTnVtYmVyKSksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHNoaXAuYXNzaWduQ29vcmRpbmF0ZXMobmV3U2hpcENvb3JkaW5hdGVzKTtcblxuICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgZHJhZ2dhYmxlRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTtcbiAgICAgIG9mZlNldFggPSBudWxsO1xuICAgICAgb2ZmU2V0WSA9IG51bGw7XG4gICAgICBtb3VzZURvd25PZmZzZXRIb3IgPSAwO1xuICAgICAgbW91c2VEb3duT2Zmc2V0VmVyID0gMDtcbiAgICAgIGRyYWdnYWJsZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRyYWdnaW5nXCIpO1xuICAgIH1cbiAgICBkcmFnZ2FibGVFbGVtZW50ID0gbnVsbDtcbiAgICBkcmFnZ2FibGVFbGVtZW50UmVjdCA9IG51bGw7XG4gICAgdXBkYXRlRHJvcHBhYmxlQXR0cmlidXRlKCk7XG4gIH07XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvbk1vdXNlRG93bik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvbk1vdXNlVXApO1xufVxuXG5leHBvcnQgeyBhZGREb2N1bWVudEV2ZW50TGlzdGVuZXJzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29udGludWUgKi9cbmltcG9ydCBTaGlwTW9kdWxlIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9EU19HcmFwaFwiO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmRNb2R1bGUoKSB7XG4gIGNvbnN0IGJvYXJkID0gbmV3IEdyYXBoKCk7XG4gIGNvbnN0IHNoaXBzID0gW107XG4gIGNvbnN0IG1pc3NpbmdTaG90cyA9IFtdO1xuXG4gIC8vIENyZWF0ZSAxMHgxMCBjZWxscyBhcyBncmFwaCB2ZXJ0ZXhlc1xuICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGogKz0gMSkge1xuICAgICAgICBib2FyZC5hZGRWZXJ0ZXgoaSwgaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRmluZCB0aGUgdmVydGV4IG9iamVjdCBtYXRjaGluZyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXNcbiAgZnVuY3Rpb24gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgLy8gY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgIGNvbnN0IGZvdW5kVmVydGV4ID0gYm9hcmQudmVydGljZXMuZmluZChcbiAgICAgICh2ZXJ0ZXgpID0+XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZlcnRleC5jb29yZGluYXRlcykgPT09IEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSxcbiAgICApO1xuXG4gICAgaWYgKGZvdW5kVmVydGV4KSB7XG4gICAgICByZXR1cm4gZm91bmRWZXJ0ZXg7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gRmlsbCBvdXQgYWRqYWNlbmN5TGlzdCBmb3IgYSB2ZXJ0ZXhcbiAgZnVuY3Rpb24gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCkge1xuICAgIGNvbnN0IHkgPSB2ZXJ0ZXguY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeCA9IHZlcnRleC5jb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBwb3RlbnRpYWxBZGphY2VuY2llcyA9IFtcbiAgICAgIFt5IC0gMSwgeCAtIDFdLFxuICAgICAgW3kgLSAxLCB4XSxcbiAgICAgIFt5IC0gMSwgeCArIDFdLFxuICAgICAgW3ksIHggLSAxXSxcbiAgICAgIFt5LCB4ICsgMV0sXG4gICAgICBbeSArIDEsIHggLSAxXSxcbiAgICAgIFt5ICsgMSwgeF0sXG4gICAgICBbeSArIDEsIHggKyAxXSxcbiAgICBdO1xuICAgIGNvbnN0IGFkamFjZW5jaWVzID0gW107XG4gICAgcG90ZW50aWFsQWRqYWNlbmNpZXMuZm9yRWFjaCgoYWRqYWNlbmN5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGFkamFjZW5jeVswXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzBdIDw9IDEwICYmXG4gICAgICAgIGFkamFjZW5jeVsxXSA+IDAgJiZcbiAgICAgICAgYWRqYWNlbmN5WzFdIDw9IDEwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5T2JqZWN0ID0gZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzKGFkamFjZW5jeSk7XG4gICAgICAgIGFkamFjZW5jaWVzLnB1c2goYWRqYWNlbmN5T2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYWRqYWNlbmNpZXM7XG4gIH1cblxuICAvLyBGaWxsIG91dCBhZGphY2VuY3lMaXN0IGZvciBlYWNoIGNlbGwgdmVydGV4XG4gIGZ1bmN0aW9uIGNyZWF0ZUFkamFjZW5jaWVzKCkge1xuICAgIGJvYXJkLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBjb25zdCBhZGphY2VudFZlcnRpY2VzID0gYWRkQ2VsbEFkamFjZW5jaWVzKHZlcnRleCk7XG4gICAgICBhZGphY2VudFZlcnRpY2VzLmZvckVhY2goKGFkamFjZW50VmVydGV4KSA9PiB7XG4gICAgICAgIGJvYXJkLmFkZEVkZ2UodmVydGV4LCBhZGphY2VudFZlcnRleCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIEJvYXJkIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xuICAgIGNyZWF0ZUNlbGxzKCk7XG4gICAgY3JlYXRlQWRqYWNlbmNpZXMoKTtcbiAgfVxuXG4gIC8vIEZpbGwgdGhlIFNoaXBzIGFycmF5XG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXBzKCkge1xuICAgIGNvbnN0IHNoaXBzQ29uZmlnID0gW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMSxcbiAgICAgIC8vICAgICBzaGlwSWQ6IDAsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAxLFxuICAgICAgLy8gICAgIHNoaXBJZDogMSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHNoaXBMZW5ndGg6IDEsXG4gICAgICAvLyAgICAgc2hpcElkOiAyLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgc2hpcExlbmd0aDogMixcbiAgICAgIC8vICAgICBzaGlwSWQ6IDMsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBzaGlwTGVuZ3RoOiAyLFxuICAgICAgLy8gICAgIHNoaXBJZDogNCxcbiAgICAgIC8vICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogMyxcbiAgICAgICAgc2hpcElkOiA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc2hpcExlbmd0aDogNCxcbiAgICAgICAgc2hpcElkOiA2LFxuICAgICAgfSxcbiAgICBdO1xuICAgIHNoaXBzQ29uZmlnLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBTaGlwTW9kdWxlLmNyZWF0ZVNoaXAoZWxlbWVudC5zaGlwTGVuZ3RoLCBlbGVtZW50LnNoaXBJZCk7XG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmlsbCB0aGUgbWlzc2luZ1Nob3RzIGFycmF5XG4gIGZ1bmN0aW9uIHJlY29yZE1pc3NpbmdTaG90KGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgbWlzc2VkU2hvdFZlcnRleCA9IGZpbmRWZXJ0ZXh0T2JqZWN0QnlDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMobWlzc2VkU2hvdFZlcnRleC5jb29yZGluYXRlcykpIHtcbiAgICAgIG1pc3NpbmdTaG90cy5wdXNoKG1pc3NlZFNob3RWZXJ0ZXguY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBtaXNzZWRTaG90VmVydGV4LmFkamFjZW5jeUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKCFtaXNzaW5nU2hvdHMuaW5jbHVkZXMoZWxlbWVudC5jb29yZGluYXRlcykpIHtcbiAgICAgICAgbWlzc2luZ1Nob3RzLnB1c2goZWxlbWVudC5jb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBGaW5kIHNoaXAgYnkgc2hpcElkXG4gIGZ1bmN0aW9uIGZpbmRTaGlwQnlJZChpZCkge1xuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBzaGlwcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICBpZiAocy5pZCA9PT0gcGFyc2VJbnQoaWQpKSB7XG4gICAgICAgIHNoaXAgPSBzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgLy8gUmVnaXN0ZXIgYW5kIHByb2Nlc3MgYXR0YWNrc1xuICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGhpdFJlZ2lzdGVyZWQgPSBmYWxzZTtcbiAgICBzaGlwcy5zb21lKChzaGlwKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHNoaXAuY29vcmRpbmF0ZXMpLmluY2x1ZGVzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSlcbiAgICAgICkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBoaXRSZWdpc3RlcmVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgaWYgKCFoaXRSZWdpc3RlcmVkKSB7XG4gICAgICByZWNvcmRNaXNzaW5nU2hvdChjb29yZGluYXRlcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIG9uIGEgYm9hcmQgaGF2ZSBiZWVuIHN1bmtcbiAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwb3NpdGlvblNoaXBzKCkge1xuICAgIHNoaXBzLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBcInZcIiA6IFwiaFwiO1xuICAgICAgc2hpcC5wb3NpdGlvbiA9IG9yaWVudGF0aW9uO1xuXG4gICAgICBjb25zdCBmaWx0ZXJlZEJvYXJkID0gYm9hcmQudmVydGljZXMuZmlsdGVyKFxuICAgICAgICAob2JqKSA9PiBvYmoub2NjdXBpZWQgPT09IGZhbHNlLFxuICAgICAgKTtcblxuICAgICAgaWYgKGZpbHRlcmVkQm9hcmQubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgcG9zaXRpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXBvc2l0aW9uRm91bmQpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gW107XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1jb25zdFxuICAgICAgICAgIGxldCBwb3NpdGlvbkNvb3JkaW5hdGVzID0gW107XG4gICAgICAgICAgY29uc3QgZmlyc3RDZWxsSW5kZXggPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIGZpbHRlcmVkQm9hcmQubGVuZ3RoLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgZmlyc3RDZWxsT2JqZWN0ID0gZmlsdGVyZWRCb2FyZFtmaXJzdENlbGxJbmRleF07XG4gICAgICAgICAgcG9zaXRpb25Db29yZGluYXRlcy5wdXNoKGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlcyk7XG4gICAgICAgICAgcG9zaXRpb24ucHVzaChmaXJzdENlbGxPYmplY3QpO1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPYmplY3RDb29yZGluYXRlcyA9XG4gICAgICAgICAgICAgIHNoaXAucG9zaXRpb24gPT09IFwidlwiXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1swXSArIGksXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Q2VsbE9iamVjdC5jb29yZGluYXRlc1sxXSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDZWxsT2JqZWN0LmNvb3JkaW5hdGVzWzBdLFxuICAgICAgICAgICAgICAgICAgICBmaXJzdENlbGxPYmplY3QuY29vcmRpbmF0ZXNbMV0gKyBpLFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5leHRDZWxsT2JqZWN0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgY29uc3QgbmV4dENlbGxPYmplY3QgPSBib2FyZC52ZXJ0aWNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgIChvYmopID0+XG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkob2JqLmNvb3JkaW5hdGVzKSA9PT1cbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShuZXh0Q2VsbE9iamVjdENvb3JkaW5hdGVzKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXh0Q2VsbE9iamVjdFswXSk7XG4gICAgICAgICAgICBpZiAobmV4dENlbGxPYmplY3RbMF0pIHtcbiAgICAgICAgICAgICAgaWYgKG5leHRDZWxsT2JqZWN0WzBdLm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ29vcmRpbmF0ZXMucHVzaChuZXh0Q2VsbE9iamVjdFswXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24ucHVzaChuZXh0Q2VsbE9iamVjdFswXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwb3NpdGlvbi5sZW5ndGggPT09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaGlwLmFzc2lnbkNvb3JkaW5hdGVzKC4uLnBvc2l0aW9uQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgc2hpcC5zZXRPcmllbnRhdGlvbigpO1xuXG4gICAgICAgICAgICBwb3NpdGlvbi5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgIHAub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBwLm9jY3VwaWVkQnlTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcC5hZGphY2VuY3lMaXN0LmZvckVhY2goKGFkaikgPT4ge1xuICAgICAgICAgICAgICAgIGFkai5vY2N1cGllZCA9IHRydWU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwb3NpdGlvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsXG4gICAgc2hpcHMsXG4gICAgbWlzc2luZ1Nob3RzLFxuICAgIGNyZWF0ZUJvYXJkLFxuICAgIGNyZWF0ZVNoaXBzLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHBvc2l0aW9uU2hpcHMsXG4gICAgZmluZFZlcnRleHRPYmplY3RCeUNvb3JkaW5hdGVzLFxuICAgIGZpbmRTaGlwQnlJZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkTW9kdWxlO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgRE9NSGFuZGxlciBmcm9tIFwiLi9ET01IYW5kbGVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkTW9kdWxlIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgYWRkRG9jdW1lbnRFdmVudExpc3RlbmVycyB9IGZyb20gXCIuL2V2ZW50TWFuYWdlclwiO1xuXG5sZXQgcGxheWVyT25lQm9hcmQgPSBudWxsO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgaWYgKG1haW4pIHtcbiAgICBtYWluLnJlbW92ZSgpO1xuICB9XG4gIHBsYXllck9uZUJvYXJkID0gR2FtZWJvYXJkTW9kdWxlKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZUJvYXJkKCk7XG4gIHBsYXllck9uZUJvYXJkLmNyZWF0ZVNoaXBzKCk7XG4gIHBsYXllck9uZUJvYXJkLnBvc2l0aW9uU2hpcHMoKTtcblxuICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IEdhbWVib2FyZE1vZHVsZSgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVCb2FyZCgpO1xuICBwbGF5ZXJUd29Cb2FyZC5jcmVhdGVTaGlwcygpO1xuICBwbGF5ZXJUd29Cb2FyZC5wb3NpdGlvblNoaXBzKCk7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJPbmVCb2FyZCA9IHBsYXllck9uZUJvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllck9uZVNoaXBzID0gcGxheWVyT25lQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5wbGF5ZXJUd29Cb2FyZCA9IHBsYXllclR3b0JvYXJkLmJvYXJkLnZlcnRpY2VzO1xuICBET01IYW5kbGVyLnBsYXllclR3b1NoaXBzID0gcGxheWVyVHdvQm9hcmQuc2hpcHM7XG5cbiAgRE9NSGFuZGxlci5jcmVhdGVEb20oKTtcbn1cblxuZ2FtZUxvb3AoKTtcbmFkZERvY3VtZW50RXZlbnRMaXN0ZW5lcnMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiY1wiIHx8IGV2ZW50LmtleSA9PT0gXCJDXCIpIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJPbmVCb2FyZCk7XG4gICAgY29uc29sZS5sb2cocGxheWVyT25lQm9hcmQuc2hpcHNbMF0pO1xuICAgIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkLnNoaXBzWzFdKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuZXhwb3J0IHsgcGxheWVyT25lQm9hcmQgfTtcbiIsImNvbnN0IFNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuICAvLyBDcmVhdGVzIGEgc2hpcFxuICBmdW5jdGlvbiBjcmVhdGVTaGlwKHNoaXBMZW5ndGgsIHNoaXBJZCkge1xuICAgIGNvbnN0IHNoaXAgPSB7XG4gICAgICBpZDogc2hpcElkLFxuICAgICAgaGl0Q291bnQ6IDAsXG4gICAgICBjb29yZGluYXRlczogW10sXG4gICAgICBsZW5ndGg6IHNoaXBMZW5ndGgsXG4gICAgICBwb3NpdGlvbjogXCJoXCIsXG5cbiAgICAgIGhpdCgpIHtcbiAgICAgICAgc2hpcC5oaXRDb3VudCArPSAxO1xuICAgICAgfSxcblxuICAgICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAoc2hpcC5oaXRDb3VudCA9PT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBhc3NpZ25Db29yZGluYXRlcyguLi5hcmdzKSB7XG4gICAgICAgIHNoaXAuY29vcmRpbmF0ZXMgPSBhcmdzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzaGlwLmNvb3JkaW5hdGVzKTtcbiAgICAgIH0sXG5cbiAgICAgIHNldE9yaWVudGF0aW9uKCkge1xuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc2hpcCBwb3NpdGlvbiBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gICAgICAgIGlmIChzaGlwLmNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcImhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmNvb3JkaW5hdGVzWzBdWzBdID09PSBzaGlwLmNvb3JkaW5hdGVzWzFdWzBdKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IFwiaFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBcInZcIjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNoaXA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVNoaXAsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwTW9kdWxlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=