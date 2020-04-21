const MovingPerson = require("./moving_person.js");
const Minor = require("./minor.js");
const Teen = require("./teen.js");
const Adult = require("./adult.js");
const Senior = require("./senior.js");
const Locale = require("./locale.js")

function Scenario(ctx, demoObj, demSick) {
    
    this.population = demoObj.population;
    this.ctx = ctx;
    let sickMinors = demSick.minors;
    let sickTeens = demSick.teens;
    let sickAdults = demSick.adults;
    let sickSeniors = demSick.seniors;
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
    this.createPersons();
    // this.city = obj.city;
    // this.censusObject = {};
    // this.area = demoObj.area;
    // this.numRelig = demoObj.numrelig;
    // this.ageDemo = demoObj.ageDemo;
    // this.size
    // let minorLimit;
    // let teenLimits = [[1, 5, 1.5], [-1.5, 1.5], [1.5, -1.5], [-1.5, -1.5]];
    // let adultLimits = [[1.8, 1.8], [-1.8, 1.8], [1.8, -1.8], [-1.8, -1.8]];
    // let seniorLimits = [[.4, .4], [-.4, .4], [.4, -.4], [-.4, -.4]];
    // this.minorObj = { radius: 2, color: "#1f7e25", vel: [.4, 1.2], age: "minor"}
    // this.teenObj = { radius: 2.6, color: "#b21c1c", vel: [.8, 1.9], age: "teen"};
    // this.adultObj = { radius: 2.9, color: "#6666e8", vel: [1, 2.3], age: "adult"};
    // this.seniorObj = { radius: 2.4, color: "#60b4f8", vel: [1, 1.4], age: "senior"};
}

Scenario.BG_COLOR = "#000000";
Scenario.DIM_X = 1000;
Scenario.DIM_Y = 600;
Scenario.FPS = 32;
Scenario.NUM_PPL = this.population ||20;
Scenario.NUM_MINORS = this.minors || 3;
Scenario.NUM_TEENS = this.teens || 4;
Scenario.NUM_ADULTS = this.adults || 8;
Scenario.NUM_SENIORS = 5;
Scenario.NUM_SICK = (this.sickMinors + this.sickTeens + this.sickAdults + this.sickSeniors) || 3;

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

Scenario.prototype.createPersons = function () {
    // console.log("minors: ", this.minors, " teens: ", this.teens, " adults: ", this.adults, " seniors: ", this.seniors)
    // this.createLoop("minor", this.minors, this.sickMinors);
    this.createLoop("teen", this.teens, this.sickTeens);
    // this.createLoop("adult", this.adults, this.sickAdults);
    // this.createLoop("senior", this.seniors, this.sickSeniors);
}

Scenario.prototype.randomSelector = function (lowerLimit, upperLimit) {    
    let rand = (Math.random() * upperLimit) + lowerLimit
    let sign1 = [-1, 1][Math.floor(Math.random() * 2)];
    let answ = sign1 * rand
    return answ
}

Scenario.prototype.createLoop = function (ageGroup, n, s) {
    switch (ageGroup) {
        case "minor":
            obj = this.minorObj;
            break;
        case "teen":
            obj = this.teenObj;
            break;
        case "adult":
            obj = this.adultObj;
            break;
        case "senior":
            obj = this.seniorObj;
            break;
    }
    // let type = "sick";
    let {radius, color, age} = obj
    for (let i = 0; i < n; i++) {
        let name = `${i}-${age}`;
        let pos1 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50) % 1260
        let pos2 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50) % 650
        let vel = [this.randomSelector(obj.vel[0], obj.vel[1]), this.randomSelector(obj.vel[0], obj.vel[1])]
        let pos = [pos1, pos2]
        let person = new MovingPerson({
            type,
            radius,
            pos,
            vel,
            color,
            age,
            name,
            ctx : this.ctx
        })
        // this.censusObject[pos] = vel
        person.draw()

    }
}
Scenario.prototype.requestData = function () {
    
}

module.exports = Scenario;

// for (let i = 0; i < 100; i++){
//     console.log(Math.floor(Math.random(2)* 100 * Math.random(10) * 50))    
// }
// console.log(Math.floor(Math.random(5) * 100) + Math.random(200))
// console.log(Math.random(1260) * (Math.random(5) + 1))