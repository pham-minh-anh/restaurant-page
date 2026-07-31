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

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const content = document.querySelector(\"div#content\");\n    const heading = document.createElement(\"h1\");\n\n    heading.textContent = \"Contact us\";\n    content.appendChild(heading);\n\n    const contact1 = document.createElement(\"p\");\n    contact1.textContent = \"Email: myemail@gmail.com\";\n    content.appendChild(contact1);\n\n    const contact2 = document.createElement(\"p\");\n    contact2.textContent = \"Telephone: 0123456789\";\n    content.appendChild(contact2);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const content = document.querySelector(\"div#content\");\n    const heading = document.createElement(\"h1\");\n    const description = document.createElement(\"p\");\n\n    heading.textContent = \"Mem's restaurant\";\n    description.textContent = \"A small kitchen serving the food we grew up eating. Broth simmered overnight, herbs picked the same morning, and nothing that needs explaining. Come in on a weeknight, take the corner table, order the phở or whatever the board says we made today. Twelve seats, one shared pot of tea, no rush.\";\n\n    content.appendChild(heading);\n    content.appendChild(description);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeButton = document.querySelector(\"button#home\");\nhomeButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nconst menuButton = document.querySelector(\"button#menu\");\nmenuButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nconst contactButton = document.querySelector(\"button#contact\");\ncontactButton.addEventListener(\"click\", () => {\n    clearContent();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nfunction clearContent() {\n    document.querySelector(\"#content\").replaceChildren()\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    const content = document.querySelector(\"div#content\");\n    const heading = document.createElement(\"h1\");\n\n    heading.textContent = \"Mem's menu\";\n    content.appendChild(heading);\n\n    const item1 = document.createElement(\"p\");\n    item1.textContent = \"$15 Beef Pho\";\n    content.appendChild(item1);\n\n    const item2 = document.createElement(\"p\");\n    item2.textContent = \"$20 Wonton noodles\";\n    content.appendChild(item2);\n\n    const item3 = document.createElement(\"p\");\n    item3.textContent = \"$8 Banh Mi\";\n    content.appendChild(item3);\n\n    const item4 = document.createElement(\"p\");\n    item4.textContent = \"$10 Sticky rice with eggs and grilled pork\";\n    content.appendChild(item4);\n\n    const item5 = document.createElement(\"p\");\n    item5.textContent = \"$2 Iced tea\";\n    content.appendChild(item5);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		// skipped when the property is non-configurable (pre-ES2015 engines),
/******/ 		// where Object.defineProperty would throw
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			var descriptor = Object.getOwnPropertyDescriptor(x, "name");
/******/ 			if (!descriptor || (!descriptor.writable && descriptor.configurable)) Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;