// const MovingPerson = require("./moving_person.js");
const Minor = require("./minor.js");
const Teen = require("./teen.js");
const Adult = require("./adult.js");
const Senior = require("./senior.js");
const Util = require("./util");
// const Locale = require("./locale.js")

function Scenario(ctx, demoObj, demSick) {
    
    this.population = demoObj.population;
    this.ctx = ctx;
    this.sickMinors = demSick.minors;
    this.sickTeens = demSick.teens;
    this.sickAdults = demSick.adults;
    this.sickSeniors = demSick.seniors;
    this.minors = demoObj.population * demoObj.percentMinors;
    this.teens = demoObj.population * demoObj.percentTeens;
    this.adults = demoObj.population * demoObj.percentAdults;
    this.seniors = demoObj.population * demoObj.percentSeniors;
    this.popDensity = Math.floor(this.area / this.population);
    this.minors = [];
    this.teens = [];
    this.adults = [];
    this.seniors = [];
    this.infected = [];
    this.addPersons()
    // this.city = obj.city;
    // this.censusObject = {};
    // this.area = demoObj.area;
    // this.numRelig = demoObj.numrelig;
    // this.ageDemo = demoObj.ageDemo;
    // this.size
    
}

Scenario.BG_COLOR = "#ededed";
Scenario.DIM_X = 1000;
Scenario.DIM_Y = 600;
Scenario.FPS = 32;
Scenario.NUM_PPL = this.population ||20;
Scenario.NUM_MINORS = this.minors || 3;
Scenario.NUM_TEENS = this.teens || 4;
Scenario.NUM_ADULTS = this.adults || 8;
Scenario.NUM_SENIORS = 5;
Scenario.NUM_SICK = (this.sickMinors + this.sickTeens + this.sickAdults + this.sickSeniors) || 3;
Scenario.prototype.randomPosition = function randomPosition() {
    return [
        Scenario.DIM_X * Math.random(),
        Scenario.DIM_Y * Math.random()
    ];
};
Scenario.prototype.add = function add(object) {
    if (object instanceof Minor) {
        this.minors.push(object)
    } else if (object instanceof Teen) {
        this.teens.push(object)
    } else if (object instanceof Adult) {
        this.adults.push(object)
    } else if (object instanceof Senior) {
        this.seniors.push(object)
    } else {
        throw new Error("unknown type of object")
    }
}

Scenario.prototype.addPersons = function addPersons() {
    // iterate through each of the age groups, first instantiating the healthy ones from 
    // NUM_MINORS - sickMinors as healthy, then the sickMinors, as infected
    // 
    this.createLoop("minor", Scenario.NUM_MINORS, this.sickMinors)
    this.createLoop("teen", Scenario.NUM_TEENS, this.sickTeens);
    this.createLoop("adult", Scenario.NUM_ADULTS, this.sickAdults);
    this.createLoop("senior", Scenario.NUM_SENIORS, this.sickSeniors);
}



Scenario.prototype.allObjects = function allObjects() {
    return [].concat(this.minors, this.teens, this.adults, this.seniors);
};

Scenario.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, Scenario.DIM_X, Scenario.DIM_Y);
    ctx.fillStyle = Scenario.BG_COLOR;
    ctx.fillRect(0, 0, Scenario.DIM_X, Scenario.DIM_Y);
    this.allObjects().forEach(function (object) {
        object.draw(ctx);
    });
};

Scenario.prototype.movePersons = function movePersons(delta) {
    this.allObjects().forEach(function (object) {
        object.move(delta);
    });
};
Scenario.prototype.checkCollisions = function checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
        for (let j = 0; j < allObjects.length; j++) {
            const obj1 = allObjects[i];
            const obj2 = allObjects[j];

            if (obj1.isCollidedWith(obj2)) {
                const collision = obj1.collideWith(obj2);
                if (collision) return;
            }
        }
    }
};
Scenario.prototype.step = function step(delta) {
    this.movePersons(delta);
    this.checkCollisions();
};

Scenario.prototype.wrap = function wrap(pos) {
    return [
        Util.wrap(pos[0], Scenario.DIM_X), Util.wrap(pos[1], Scenario.DIM_Y)
    ];
};

Scenario.prototype.createLoop = function (ageGroup, n, s) {
    console.log("params: ", ageGroup, n, s)
    switch (ageGroup) {
        case "minor":
            obj = Minor;
            break;
        case "teen":
            obj = Teen;
            break;
        case "adult":
            obj = Adult;
            break;
        case "senior":
            obj = Senior;
            break;
    }
    let scenario = this;
    for (let i = 0; i < n-s; i++) {
        let pos = this.randomPosition();
        let type = "well"
        let person = new obj({ type, pos, scenario })
        this.add(person)
    }
    for (let i = 0; i < s; i++){
        let pos = this.randomPosition();
        let type = "infected"
        let person = new obj({ type, pos, scenario })
        this.add(person);
        this.infected.push(person)

    }
}

Scenario.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > Scenario.DIM_X) || (pos[1] > Scenario.DIM_Y);
};

Scenario.prototype.requestData = function () {
    
}

module.exports = Scenario;

