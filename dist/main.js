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

/***/ "./src/adult.js":
/*!**********************!*\
  !*** ./src/adult.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 2.6, COLOR: \"#6666e8\", SPEED: 5, AGE: \"adult\"\n}\n\nfunction Adult(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this.options)\n}\nUtil.inherits(Adult, MovingPerson);\n\nAdult.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Adult\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Adult;\n\n//# sourceURL=webpack:///./src/adult.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"webpack is working!\")\n\nconst Scenario = __webpack_require__(/*! ./scenario.js */ \"./src/scenario.js\")\n// const Menu = require(\"./menu.js\")\nconst MovingPerson = __webpack_require__(/*! ./moving_person.js */ \"./src/moving_person.js\")\nwindow.MovingPerson = MovingPerson;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas-space\");\n    const ctx = canvas.getContext(\"2d\")\n    let demoObj = {\n        population : 100,\n        percentMinors : .15,\n        percentTeens : .20,\n        percentAdults : .45,\n        percentSeniors : .20\n    }\n    let demSick = {\n        minors: 0,\n        teens: 0,\n        adults: 2,\n        seniors: 1\n    }\n    const scen = new Scenario(ctx, demoObj, demSick);\n    scen.createPersons()\n    // const mP = new MovingPerson({\n    //     type: \"sick\",\n    //     radius: 2,\n    //     pos: [50, 250],\n    //     vel: [10, 10],\n    //     color: \"#00FF00\"\n    // })\n    // mP.draw(ctx)\n    // window.ctx = ctx\n    // const menu = new Menu()\n    // menu.requestParameters()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/locale.js":
/*!***********************!*\
  !*** ./src/locale.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Locale(obj) {\n    \n}\n\nmodule.exports = Locale;\n\n//# sourceURL=webpack:///./src/locale.js?");

/***/ }),

/***/ "./src/minor.js":
/*!**********************!*\
  !*** ./src/minor.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n     RADIUS: 2, COLOR: \"#1f7e25\", SPEED: 4, AGE: \"minor\" \n}\n\nfunction Minor(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this.options)\n}\nUtil.inherits(Minor, MovingPerson);\n\nMinor.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.minor\n    if (otherPerson instanceof MovingPerson) {\n        \n\n        return true;\n    }\n}\n\n\nmodule.exports = Minor;\n\n//# sourceURL=webpack:///./src/minor.js?");

/***/ }),

/***/ "./src/moving_person.js":
/*!******************************!*\
  !*** ./src/moving_person.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Scenario = __webpack_require__(/*! ./scenario.js */ \"./src/scenario.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction MovingPerson(obj) {\n        this.type = obj.type;\n        this.radius = obj.radius;\n        this.pos = obj.pos;\n        this.vel = obj.vel;\n        this.color = obj.color;\n        this.age = obj.age;\n        this.ctx = obj.ctx;\n        this.name = obj.name;\n        this.currPosObj = {};\n        // type will determine color and velocity, will represent age\n}\nMovingPerson.prototype.draw = function (pos = this.pos) {\n        this.currPosObj[this.name] = [pos, this.vel];\n        let ctx = this.ctx;\n        ctx.fillStyle = this.color;\n        // ctx.strokeStyle = this.color\n        ctx.beginPath();\n        ctx.arc(pos[0], pos[1], this.radius, 0, 2 * Math.PI, true);\n        ctx.fill();\n        this.move(pos)\n        ctx.strokeStyle = \"#000000\";\n        // ctx.clearRect()\n        // console.log(\"Positon Object:\", this.currPosObj)\n}\n\n// was async \n// MovingPerson.prototype.move = async function (pos) {\n//         await this.sleepFunction(1);\n//         let x = pos[0];\n//         let y = pos[1];\n//         let newPos;\n\n//         // turn them around when hitting the perimeter\n//         if (x + this.vel[0] >= 1650 || x + this.vel[0] <= 0) {\n//                 this.vel[0] *= -1;\n//         } \n//         if (y + this.vel[1] >= 1050 || y + this.vel[1] <= 0) {\n//                 this.vel[1] *= -1\n//         }\n//         // turn them around when the collide\n        \n//         newPos = [pos[0] + this.vel[0], pos[1] + this.vel[1]]\n//         // this.asyncMove()\n//         this.draw(newPos)\n        \n// }\n// MovingPerson.prototype.sleepFunction = function (ms) {\n//         return new Promise(res => setTimeout(res, ms));\n// };\n\n\n\nMovingPerson.prototype.collideWith = function collideWith(otherPerson) {\n        \n};\nMovingPerson.prototype.isCollidedWith = function isCollidedWith(otherPerson) {\n        const centerDist = Util.dist(this.pos, otherPerson.pos);\n        return centerDist < (this.radius + otherPerson.radius);\n};\nMovingPerson.prototype.isWrappable = true;\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingPerson.prototype.move = function move(timeDelta) {\n        //timeDelta is number of milliseconds since late move\n        // if computer is busy the time delta will be larger\n        // in this case the MovingPerson should move farther in this frame\n        // velocity of person is how far it should move in 1/60th of a second\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n                offsetX = this.vel[0] * velocityScale,\n                offsetY = this.vel[1] * velocityScale;\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n        if (this.game.isOutOfBounds(this.pos)) {\n                if (this.isWrappable) {\n                        this.pos = this.game.wrap(this.pos)\n                } else {\n                        this.remove()\n                }\n        }\n};\nMovingPerson.prototype.remove = function remove() {\n        this.game.remove(this);\n};\n// MovingPerson.prototype.asyncMove = function () {\n//         return this.move(vel);\n// };\nmodule.exports = MovingPerson;\n\n// for (let i = 0; i < 20; i++){\n        \n//         let signs1 = [-1, 1][Math.floor(Math.random() * 2)]\n//         let signs2 = [-1, 1][Math.floor(Math.random() * 2)]\n//         let arr = [signs1 * Math.random() * 2, signs2 * Math.random() * 2];\n//         console.log(arr)\n// }\n// console.log(Math.floor(Math.random() * 8) + 1)\n\n//# sourceURL=webpack:///./src/moving_person.js?");

/***/ }),

/***/ "./src/scenario.js":
/*!*************************!*\
  !*** ./src/scenario.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingPerson = __webpack_require__(/*! ./moving_person.js */ \"./src/moving_person.js\");\nconst Minor = __webpack_require__(/*! ./minor.js */ \"./src/minor.js\");\nconst Teen = __webpack_require__(/*! ./teen.js */ \"./src/teen.js\");\nconst Adult = __webpack_require__(/*! ./adult.js */ \"./src/adult.js\");\nconst Senior = __webpack_require__(/*! ./senior.js */ \"./src/senior.js\");\nconst Locale = __webpack_require__(/*! ./locale.js */ \"./src/locale.js\")\n\nfunction Scenario(ctx, demoObj, demSick) {\n    \n    // this.city = obj.city;\n    this.population = demoObj.population;\n    this.ctx = ctx;\n    // this.censusObject = {};\n    // this.area = demoObj.area;\n    // this.numRelig = demoObj.numrelig;\n    // this.ageDemo = demoObj.ageDemo;\n    let numSickMinors = demSick.minors;\n    let numSickTeens = demSick.teens;\n    let numSickAdults = demSick.adults;\n    let numSickSeniors = demSick.seniors;\n    this.minors = (demoObj.population * demoObj.percentMinors) - numSickMinors;\n    this.teens = (demoObj.population * demoObj.percentTeens) - numSickTeens;\n    this.adults = (demoObj.population * demoObj.percentAdults) - numSickAdults;\n    this.seniors = (demoObj.population * demoObj.percentSeniors) - numSickSeniors;\n    this.popDensity = Math.floor(this.area / this.population);\n    // this.size\n    // let minorLimit;\n    // let teenLimits = [[1, 5, 1.5], [-1.5, 1.5], [1.5, -1.5], [-1.5, -1.5]];\n    // let adultLimits = [[1.8, 1.8], [-1.8, 1.8], [1.8, -1.8], [-1.8, -1.8]];\n    // let seniorLimits = [[.4, .4], [-.4, .4], [.4, -.4], [-.4, -.4]];\n    // this.minorObj = { radius: 2, color: \"#1f7e25\", vel: [.4, 1.2], age: \"minor\"}\n    // this.teenObj = { radius: 2.6, color: \"#b21c1c\", vel: [.8, 1.9], age: \"teen\"};\n    // this.adultObj = { radius: 2.9, color: \"#6666e8\", vel: [1, 2.3], age: \"adult\"};\n    // this.seniorObj = { radius: 2.4, color: \"#60b4f8\", vel: [1, 1.4], age: \"senior\"};\n    this.minors = [];\n    this.teens = [];\n    this.adults = [];\n    this.seniors = [];\n    this.createPersons();\n}\n\nScenario.BG_COLOR = \"#000000\";\nScenario.DIM_X = 1000;\nScenario.DIM_Y = 600;\nScenario.FPS = 32;\nScenario.NUM_PPL = 20;\nScenario.NUM_MINORS = 3;\nScenario.NUM_TEENS = 4;\nScenario.NUM_ADULTS = 8;\nScenario.NUM_SENIORS = 5;\nScenario.NUM_SICK = 3;\n\nScenario.prototype.createPersons = function () {\n    // console.log(\"minors: \", this.minors, \" teens: \", this.teens, \" adults: \", this.adults, \" seniors: \", this.seniors)\n    // this.createLoop(\"minor\", this.minors);\n    this.createLoop(\"teen\", this.teens);\n    // this.createLoop(\"adult\", this.adults);\n    // this.createLoop(\"senior\", this.seniors);\n}\n\nScenario.prototype.randomSelector = function (lowerLimit, upperLimit) {    \n    let rand = (Math.random() * upperLimit) + lowerLimit\n    let sign1 = [-1, 1][Math.floor(Math.random() * 2)];\n    let answ = sign1 * rand\n    return answ\n}\nScenario.prototype.createLoop = function (ageGroup, n) {\n    switch (ageGroup) {\n        case \"minor\":\n            obj = this.minorObj;\n            break;\n        case \"teen\":\n            obj = this.teenObj;\n            break;\n        case \"adult\":\n            obj = this.adultObj;\n            break;\n        case \"senior\":\n            obj = this.seniorObj;\n            break;\n    }\n    // let type = \"sick\";\n    let {radius, color, age} = obj\n    for (let i = 0; i < n; i++) {\n        let name = `${i}-${age}`;\n        let pos1 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50) % 1260\n        let pos2 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50) % 650\n        let vel = [this.randomSelector(obj.vel[0], obj.vel[1]), this.randomSelector(obj.vel[0], obj.vel[1])]\n        let pos = [pos1, pos2]\n        let person = new MovingPerson({\n            type,\n            radius,\n            pos,\n            vel,\n            color,\n            age,\n            name,\n            ctx : this.ctx\n        })\n        // this.censusObject[pos] = vel\n        person.draw()\n\n    }\n}\nScenario.prototype.requestData = function () {\n    \n}\n\nmodule.exports = Scenario;\n\n// for (let i = 0; i < 100; i++){\n//     console.log(Math.floor(Math.random(2)* 100 * Math.random(10) * 50))    \n// }\n// console.log(Math.floor(Math.random(5) * 100) + Math.random(200))\n// console.log(Math.random(1260) * (Math.random(5) + 1))\n\n//# sourceURL=webpack:///./src/scenario.js?");

/***/ }),

/***/ "./src/senior.js":
/*!***********************!*\
  !*** ./src/senior.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 2.4, COLOR: \"#60b4f8\", SPEED: 3, AGE: \"senior\"\n}\n\nfunction Senior(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this.options)\n}\nUtil.inherits(Senior, MovingPerson);\n\nSenior.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Senior\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Senior;\n\n//# sourceURL=webpack:///./src/senior.js?");

/***/ }),

/***/ "./src/teen.js":
/*!*********************!*\
  !*** ./src/teen.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 2.4, COLOR: \"#b21c1c\", SPEED: 6, AGE: \"teen\"\n}\n\nfunction Teen(options) {\n    options = options || {};\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this.options)\n}\nUtil.inherits(Teen, MovingPerson);\n\nTeen.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Teen\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Teen;\n\n//# sourceURL=webpack:///./src/teen.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(ParentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length)\n    },\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow((pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2))\n        )\n    },\n    dir(vec) {\n        const norm = Util.norm(vec);\n        return Util.scale(vec, 1 / norm)\n    },\n    norm(vec) {\n        return Util.dist([0,0], vec)\n    },\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m]\n    }\n    \n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });