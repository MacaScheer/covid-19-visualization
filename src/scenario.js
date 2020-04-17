const MovingPerson = require("./moving_person.js")
const Locale = require("./locale.js")

function Scenario(ctx, demoObj) {
    // this.city = obj.city;
    this.population = demoObj.population;
    this.ctx = ctx;
    // this.area = demoObj.area;
    // this.numRelig = demoObj.numrelig;
    // this.ageDemo = demoObj.ageDemo;
    this.minors = demoObj.population * demoObj.percentMinors;
    this.teens = demoObj.population * demoObj.percentTeens;
    this.adults = demoObj.population * demoObj.percentAdults;
    this.seniors = demoObj.population * demoObj.percentSeniors;
    this.popDensity = Math.floor(this.area / this.population);
    // this.size
    this.minorObj = { radius: 5, color: "#2980B9", vel: [-10,10], age: "1-12"}
    this.teenObj = { radius: 15, color: "#27AE60", vel: [18,-18], age: "13-17"};
    this.adultObj = { radius: 20, color: "#BA4A00", vel: [-23,23], age: "18-65"};
    this.seniorObj = { radius: 22, color: "#707B7C", vel: [15, -15], age: "66 and up"};
}

Scenario.prototype.createPersons = function () {
    this.createLoop("minor", this.minors)
    this.createLoop("teen", this.teens)
    this.createLoop("adult", this.adults)
    this.createLoop("senior", this.seniors)
}

Scenario.prototype.createLoop = function (ageGroup, n) {
    switch (ageGroup) {
        case "minor":
            obj = this.minorObj;
            break;
        case "teen":
            obj = this.teenObj;
        case "adult":
            obj = this.adultObj;
        case "senior":
            obj = this.seniorObj;
    }
    let type = "sick";
    let {radius, vel, color, age} = obj
    for (let i = 0; i < n; i++) {
        let pos1 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50)
        let pos2 = Math.floor(Math.random(2) * 100 * Math.random(10) * 50)
        if (pos1 > 1260) pos1 = 1260
        if (pos2 > 650) pos2 = 650
        let pos = [pos1, pos2]
        let person = new MovingPerson({
            type,
            radius,
            pos,
            vel,
            color,
            age, 
            ctx : this.ctx
        })
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