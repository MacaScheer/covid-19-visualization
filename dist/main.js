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

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 6, COLOR: \"#6666e8\", SPEED: 6, AGE: \"adult\", SICKCOLOR: \"#32a850\"//, SICK: false\n}\n\nfunction Adult(options) {\n    options = options || {};\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n    options.type = options.type\n    options.color = options.type === \"well\" ? DEFAULTS.COLOR : DEFAULTS.SICKCOLOR;\n    MovingPerson.call(this, options)\n    // new MovingPerson(this, option\n}\nUtil.inherits(Adult, MovingPerson);\n\nAdult.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Adult\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Adult;\n\n//# sourceURL=webpack:///./src/adult.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"webpack is working!\")\n\nconst Scenario = __webpack_require__(/*! ./scenario.js */ \"./src/scenario.js\");\nconst ScenarioView = __webpack_require__(/*! ./scenario_view */ \"./src/scenario_view.js\");\n// const Menu = require(\"./menu.js\")\n// const MovingPerson = require(\"./moving_person.js\");\n// window.MovingPerson = MovingPerson;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas-space\");\n    const ctx = canvas.getContext(\"2d\");\n    let demoObj = {\n        population: 100,\n        percentMinors: .15,\n        percentTeens: .20,\n        percentAdults: .45,\n        percentSeniors: .20\n    }\n    let demSick = {\n        minors: 0,\n        teens: 0,\n        adults: 2,\n        seniors: 1\n    }\n\n    const scen = new Scenario(ctx, demoObj, demSick);\n    new ScenarioView(scen, ctx).start()\n    // const menu = new Menu()\n    // menu.requestParameters()\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/minor.js":
/*!**********************!*\
  !*** ./src/minor.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n     RADIUS: 3.85, COLOR: \"#1f7e25\", SPEED: 2, AGE: \"minor\" \n}\n\nfunction Minor(options) {\n    this.options = options || {};\n    this.options.color = DEFAULTS.COLOR;\n    this.options.pos = options.pos || options.game.randomPosition();\n    this.options.radius = DEFAULTS.RADIUS;\n    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n    // options.sick = options.sick\n    MovingPerson.call(this, options)\n    // new MovingPerson(this.options)\n}\nUtil.inherits(Minor, MovingPerson);\n\nMinor.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.minor\n    if (otherPerson instanceof MovingPerson) {\n        \n\n        return true;\n    }\n}\n\n\nmodule.exports = Minor;\n\n//# sourceURL=webpack:///./src/minor.js?");

/***/ }),

/***/ "./src/moving_person.js":
/*!******************************!*\
  !*** ./src/moving_person.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Scenario = __webpack_require__(/*! ./scenario.js */ \"./src/scenario.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\nfunction MovingPerson(obj) {\n        this.type = obj.type;\n        this.radius = obj.radius;\n        this.pos = obj.pos;\n        this.vel = obj.vel;\n        this.color = obj.color;\n        this.age = obj.age;\n        this.ctx = obj.ctx;\n        this.scenario = obj.scenario;\n        // type will determine color and velocity, will represent age\n}\nMovingPerson.prototype.draw = function (ctx) {\n        ctx.fillStyle = this.color;\n        ctx.strokeStyle = this.color\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n        ctx.fill();\n        ctx.strokeStyle = \"#000000\";\n}\n\n\nMovingPerson.prototype.collideWith = function collideWith(otherPerson) {\n        \n};\nMovingPerson.prototype.isCollidedWith = function isCollidedWith(otherPerson) {\n        const centerDist = Util.dist(this.pos, otherPerson.pos);\n        return centerDist < (this.radius + otherPerson.radius);\n};\nMovingPerson.prototype.isWrappable = true;\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nMovingPerson.prototype.move = function move(timeDelta) {\n        //timeDelta is number of milliseconds since late move\n        // if computer is busy the time delta will be larger\n        // in this case the MovingPerson should move farther in this frame\n        // velocity of person is how far it should move in 1/60th of a second\n        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n        offsetX = this.vel[0] * velocityScale,\n        offsetY = this.vel[1] * velocityScale;\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n        if (this.scenario.isOutOfBounds(this.pos)) {\n                if (this.isWrappable) {\n                        this.pos = this.scenario.wrap(this.pos)\n                } else {\n                        this.remove()\n                }\n        }\n};\nMovingPerson.prototype.remove = function remove() {\n        this.scenario.remove(this);\n};\n\nmodule.exports = MovingPerson;\n\n\n//# sourceURL=webpack:///./src/moving_person.js?");

/***/ }),

/***/ "./src/scenario.js":
/*!*************************!*\
  !*** ./src/scenario.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingPerson = require(\"./moving_person.js\");\nconst Minor = __webpack_require__(/*! ./minor.js */ \"./src/minor.js\");\nconst Teen = __webpack_require__(/*! ./teen.js */ \"./src/teen.js\");\nconst Adult = __webpack_require__(/*! ./adult.js */ \"./src/adult.js\");\nconst Senior = __webpack_require__(/*! ./senior.js */ \"./src/senior.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// const Locale = require(\"./locale.js\")\n\nfunction Scenario(ctx, demoObj, demSick) {\n    \n    this.population = demoObj.population;\n    this.ctx = ctx;\n    this.sickMinors = demSick.minors;\n    this.sickTeens = demSick.teens;\n    this.sickAdults = demSick.adults;\n    this.sickSeniors = demSick.seniors;\n    this.minors = demoObj.population * demoObj.percentMinors;\n    this.teens = demoObj.population * demoObj.percentTeens;\n    this.adults = demoObj.population * demoObj.percentAdults;\n    this.seniors = demoObj.population * demoObj.percentSeniors;\n    this.popDensity = Math.floor(this.area / this.population);\n    this.minors = [];\n    this.teens = [];\n    this.adults = [];\n    this.seniors = [];\n    this.infected = [];\n    this.addPersons()\n    // this.city = obj.city;\n    // this.censusObject = {};\n    // this.area = demoObj.area;\n    // this.numRelig = demoObj.numrelig;\n    // this.ageDemo = demoObj.ageDemo;\n    // this.size\n    \n}\n\nScenario.BG_COLOR = \"#ededed\";\nScenario.DIM_X = 1000;\nScenario.DIM_Y = 600;\nScenario.FPS = 32;\nScenario.NUM_PPL = this.population ||20;\nScenario.NUM_MINORS = this.minors || 3;\nScenario.NUM_TEENS = this.teens || 4;\nScenario.NUM_ADULTS = this.adults || 8;\nScenario.NUM_SENIORS = 5;\nScenario.NUM_SICK = (this.sickMinors + this.sickTeens + this.sickAdults + this.sickSeniors) || 3;\nScenario.prototype.randomPosition = function randomPosition() {\n    return [\n        Scenario.DIM_X * Math.random(),\n        Scenario.DIM_Y * Math.random()\n    ];\n};\nScenario.prototype.add = function add(object) {\n    if (object instanceof Minor) {\n        this.minors.push(object)\n    } else if (object instanceof Teen) {\n        this.teens.push(object)\n    } else if (object instanceof Adult) {\n        this.adults.push(object)\n    } else if (object instanceof Senior) {\n        this.seniors.push(object)\n    } else {\n        throw new Error(\"unknown type of object\")\n    }\n}\n\nScenario.prototype.addPersons = function addPersons() {\n    // iterate through each of the age groups, first instantiating the healthy ones from \n    // NUM_MINORS - sickMinors as healthy, then the sickMinors, as infected\n    // \n    this.createLoop(\"minor\", Scenario.NUM_MINORS, this.sickMinors)\n    this.createLoop(\"teen\", Scenario.NUM_TEENS, this.sickTeens);\n    this.createLoop(\"adult\", Scenario.NUM_ADULTS, this.sickAdults);\n    this.createLoop(\"senior\", Scenario.NUM_SENIORS, this.sickSeniors);\n}\n\n\n\nScenario.prototype.allObjects = function allObjects() {\n    return [].concat(this.minors, this.teens, this.adults, this.seniors);\n};\n\nScenario.prototype.draw = function draw(ctx) {\n    ctx.clearRect(0, 0, Scenario.DIM_X, Scenario.DIM_Y);\n    ctx.fillStyle = Scenario.BG_COLOR;\n    ctx.fillRect(0, 0, Scenario.DIM_X, Scenario.DIM_Y);\n    this.allObjects().forEach(function (object) {\n        object.draw(ctx);\n    });\n};\n\nScenario.prototype.movePersons = function movePersons(delta) {\n    this.allObjects().forEach(function (object) {\n        object.move(delta);\n    });\n};\nScenario.prototype.checkCollisions = function checkCollisions() {\n    const allObjects = this.allObjects();\n    for (let i = 0; i < allObjects.length; i++) {\n        for (let j = 0; j < allObjects.length; j++) {\n            const obj1 = allObjects[i];\n            const obj2 = allObjects[j];\n\n            if (obj1.isCollidedWith(obj2)) {\n                const collision = obj1.collideWith(obj2);\n                if (collision) return;\n            }\n        }\n    }\n};\nScenario.prototype.step = function step(delta) {\n    this.movePersons(delta);\n    this.checkCollisions();\n};\n\nScenario.prototype.wrap = function wrap(pos) {\n    return [\n        Util.wrap(pos[0], Scenario.DIM_X), Util.wrap(pos[1], Scenario.DIM_Y)\n    ];\n};\n\nScenario.prototype.createLoop = function (ageGroup, n, s) {\n    console.log(\"params: \", ageGroup, n, s)\n    switch (ageGroup) {\n        case \"minor\":\n            obj = Minor;\n            break;\n        case \"teen\":\n            obj = Teen;\n            break;\n        case \"adult\":\n            obj = Adult;\n            break;\n        case \"senior\":\n            obj = Senior;\n            break;\n    }\n    let scenario = this;\n    for (let i = 0; i < n-s; i++) {\n        let pos = this.randomPosition();\n        let type = \"well\"\n        let person = new obj({ type, pos, scenario })\n        this.add(person)\n    }\n    for (let i = 0; i < s; i++){\n        let pos = this.randomPosition();\n        let type = \"infected\"\n        let person = new obj({ type, pos, scenario })\n        this.add(person);\n        this.infected.push(person)\n\n    }\n}\n\nScenario.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n    return (pos[0] < 0) || (pos[1] < 0) ||\n        (pos[0] > Scenario.DIM_X) || (pos[1] > Scenario.DIM_Y);\n};\n\nScenario.prototype.requestData = function () {\n    \n}\n\nmodule.exports = Scenario;\n\n\n\n//# sourceURL=webpack:///./src/scenario.js?");

/***/ }),

/***/ "./src/scenario_view.js":
/*!******************************!*\
  !*** ./src/scenario_view.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n// const MovingPerson = require(\"./moving_person\");\nconst Scenario = __webpack_require__(/*! ./scenario */ \"./src/scenario.js\");\n\nfunction ScenarioView(scenario, ctx) {\n    this.ctx = ctx;\n    this.scenario = scenario;\n}\n\nScenarioView.prototype.bindKeyHandlers = function bindKeyHandlers() {\n    // const \n    // Object.keys()\n}\n\nScenarioView.prototype.start = function start() {\n    // this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n};\nScenarioView.prototype.animate = function animate(time) {\n    \n    const timeDelta = time - this.lastTime;\n    this.scenario.step(timeDelta);\n    this.scenario.draw(this.ctx);\n    this.lastTime = time;\n    requestAnimationFrame(this.animate.bind(this))\n}\nmodule.exports = ScenarioView;\n\n//# sourceURL=webpack:///./src/scenario_view.js?");

/***/ }),

/***/ "./src/senior.js":
/*!***********************!*\
  !*** ./src/senior.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 4.8, COLOR: \"#60b4f8\", SPEED: 1.8, AGE: \"senior\"\n}\n\nfunction Senior(options) {\n    this.options = options || {};\n    this.options.color = DEFAULTS.COLOR;\n    this.options.pos = options.pos || options.game.randomPosition();\n    this.options.radius = DEFAULTS.RADIUS;\n    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this, options)\n    // new MovingPerson(this, options)\n}\nUtil.inherits(Senior, MovingPerson);\n\nSenior.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Senior\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Senior;\n\n//# sourceURL=webpack:///./src/senior.js?");

/***/ }),

/***/ "./src/teen.js":
/*!*********************!*\
  !*** ./src/teen.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingPerson = __webpack_require__(/*! ./moving_person */ \"./src/moving_person.js\")\n\n\nconst DEFAULTS = {\n    RADIUS: 4, COLOR: \"#b21c1c\", SPEED: 5, AGE: \"teen\"\n}\n\nfunction Teen(options) {\n    this.options = options || {};\n    this.options.color = DEFAULTS.COLOR;\n    this.options.pos = options.pos || options.game.randomPosition();\n    this.options.radius = DEFAULTS.RADIUS;\n    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)\n\n    MovingPerson.call(this, options)\n    // new MovingPerson(this.options)\n}\nUtil.inherits(Teen, MovingPerson);\n\nTeen.prototype.collideWith = function collideWith(otherPerson) {\n    // if this.infected, spread to otherPerson\n    // if otherPerson.infect and !this.infected spread to this.Teen\n    if (otherPerson instanceof MovingPerson) {\n\n\n        return true;\n    }\n}\n\n\nmodule.exports = Teen;\n\n//# sourceURL=webpack:///./src/teen.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits: function inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length)\n    },\n    // distance\n    dist(pos1, pos2) {\n        return Math.sqrt(\n            Math.pow((pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2))\n        )\n    },\n    // \n    dir(vec) {\n        const norm = Util.norm(vec);\n        return Util.scale(vec, 1 / norm)\n    },\n    norm(vec) {\n        return Util.dist([0,0], vec)\n    },\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m]\n    },\n    wrap(coord, max) {\n        if (coord < 0) {\n            return max - (coord % max);\n        } else if (coord > max) {\n            return coord % max;\n        } else {\n            return coord;\n        }\n    }\n    \n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });