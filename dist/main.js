/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"webpack is working!\")\n\nconst Scenario = __webpack_require__(/*! ./scenario.js */ \"./src/scenario.js\")\n// const Menu = require(\"./menu.js\")\nconst MovingPerson = __webpack_require__(/*! ./moving_person.js */ \"./src/moving_person.js\")\nwindow.MovingPerson = MovingPerson;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas-space\");\n    const ctx = canvas.getContext(\"2d\")\n    let demoObj = {\n        population : 1200,\n        percentMinors : .15,\n        percentTeens : .20,\n        percentAdults : .45,\n        percentSeniors : .20\n    }\n    const scen = new Scenario(ctx, demoObj);\n    scen.createPersons()\n    // const mP = new MovingPerson({\n    //     type: \"sick\",\n    //     radius: 2,\n    //     pos: [50, 250],\n    //     vel: [10, 10],\n    //     color: \"#00FF00\"\n    // })\n    // mP.draw(ctx)\n    // window.ctx = ctx\n    // const menu = new Menu()\n    // menu.requestParameters()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/locale.js":
/*!***********************!*\
  !*** ./src/locale.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Locale(obj) {\n    \n}\n\nmodule.exports = Locale;\n\n//# sourceURL=webpack:///./src/locale.js?");

/***/ }),

/***/ "./src/moving_person.js":
/*!******************************!*\
  !*** ./src/moving_person.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Cannot use keyword 'await' outside an async function (26:8)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| MovingPerson.prototype.move = function (vel) {\\n>         await this.sleepFunction(10);\\n|         this.asyncMove()\\n|         \");\n\n//# sourceURL=webpack:///./src/moving_person.js?");

/***/ }),

/***/ "./src/scenario.js":
/*!*************************!*\
  !*** ./src/scenario.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingPerson = __webpack_require__(/*! ./moving_person.js */ \"./src/moving_person.js\")\nconst Locale = __webpack_require__(/*! ./locale.js */ \"./src/locale.js\")\n\nfunction Scenario(ctx, demoObj) {\n    // this.city = obj.city;\n    this.population = deomoObj.population;\n    this.ctx = ctx;\n    // this.area = demoObj.area;\n    // this.numRelig = demoObj.numrelig;\n    // this.ageDemo = demoObj.ageDemo;\n    this.minors = demoObj.population * demoObj.percentMinors;\n    this.teens = demoObj.population * demoObj.percentTeens;\n    this.adults = demoObj.population * demoObj.percentAdults;\n    this.seniors = demoObj.population * demoObj.percentSeniors;\n    this.popDensity = Math.floor(this.area / this.population);\n    // this.size\n    this.minorObj = { radius: 5, color: \"#2980B9\", vel: 10, age: \"1-12\"}\n    this.teenObj = { radius: 15, color: \"#27AE60\", vel: 18, age: \"13-17\"};\n    this.adultObj = { radius: 20, color: \"#BA4A00\", vel: 23, age: \"18-65\"};\n    this.seniorObj = { radius: 22, color: \"#707B7C\", vel: 15, age: \"66 and up\"};\n}\n\nScenario.prototype.createPersons = function () {\n    this.createLoop(minor, this.minors)\n    this.createLoop(teen, this.teens)\n    this.createLoop(minor, this.adults)\n    this.createLoop(minor, this.seniors)\n}\n\nScenario.prototype.createLoop = function (ageGroup, n) {\n    let type = \"sick\";\n    let age;\n    let radius;\n    let vel;\n    let color;\n    switch (ageGroup) {\n        case minor:\n            radius = this.minorObj.radius;\n            vel = [minorObj.vel, minorObj.vel];\n            color = this.minorObj.color;\n            age = this.minorObj.age;\n            break;\n        case teen:\n            radius = this.teenObj.radius;\n            vel = [teenObj.vel, teenObj.vel];\n            color = this.teenObj.color;\n            age = this.teenObj.age;\n        case adult:\n            radius = this.adultObj.radius;\n            vel = [adultObj.vel, adultObj.vel];\n            color = this.adultObj.color;\n            age = this.adultObj.age;\n        case senior:\n            radius = this.seniorObj.radius;\n            vel = [seniorObj.vel, seniorObj.vel];\n            color = this.seniorObj.color;\n            age = this.seniorObj.age;\n    }\n    for (let i = 0; i < n; i++) {\n        let pos1 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50)\n        let pos2 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50)\n        if (pos1 > 1260) pos1 = 1260\n        if (pos2 > 650) pos2 = 650\n        let pos = [pos1, pos2]\n        let person = new MovingPerson({\n            type,\n            radius,\n            pos,\n            vel,\n            color,\n            age\n        })\n        person.draw(this.ctx)\n    }\n}\nScenario.prototype.requestData = function () {\n    \n}\n\nmodule.exports = Scenario;\n\n// for (let i = 0; i < 100; i++){\n//     console.log(Math.floor(Math.random(2)* 100 * Math.random(10) * 50))    \n// }\n// console.log(Math.floor(Math.random(5) * 100) + Math.random(200))\n// console.log(Math.random(1260) * (Math.random(5) + 1))\n\n//# sourceURL=webpack:///./src/scenario.js?");

/***/ })

/******/ });