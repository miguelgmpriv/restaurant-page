/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header-footer.js":
/*!******************************!*\
  !*** ./src/header-footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageHeader\": () => (/* binding */ pageHeader),\n/* harmony export */   \"pageFooter\": () => (/* binding */ pageFooter),\n/* harmony export */   \"navLinks\": () => (/* binding */ navLinks)\n/* harmony export */ });\nconst pageTitle = 'The Hungry Cat Cafe';\nconst navLinks = ['home', 'menu', 'contact']\n\nconst header = document.createElement('div');\nheader.classList.add('header');\nheader.textContent = pageTitle;\n\nconst navBar = document.createElement('ul');\nnavBar.classList.add('navbar');\n\nnavLinks.forEach(element => {\n    const li = document.createElement('li');\n    li.textContent = element[0].toUpperCase() + element.slice(1);\n    li.id = element;\n    navBar.appendChild(li);\n});\n\nconst pageHeader = ((element) => {\n    element.appendChild(header);\n    header.appendChild(navBar);\n});\n\n\nconst footer = document.createElement('div');\nconst footerBar = document.createElement('ul');\n\nfooter.classList.add('footer');\n\nclass footerBarLink {\n    constructor(text, url){\n        this.text = text;\n        this.url = url;\n    }\n}\nlet footerLinks = [];\nfooterLinks[0] = new footerBarLink('Food photo created by timolina - www.freepik.com', 'https://www.freepik.com/photos/food');\n\nfooterLinks.forEach(element => {\n    const a = document.createElement('a');\n    a.title = element.text;\n    a.href = element.url;\n\n    const li = document.createElement('li');\n    li.textContent = element.text;\n    \n    a.appendChild(li);\n    footerBar.appendChild(a);\n});\n\nconst pageFooter = ((element) => {\n    footer.appendChild(footerBar);\n    element.appendChild(footer)\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header-footer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/header-footer.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;