const MovingPerson = require("./moving_person.js")
const Locale = require("./locale.js")

function Scenario(ctx, demoObj) {
    // this.city = obj.city;
    this.population = deomoObj.population;
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
    this.minorObj = { radius: 5, color: "#2980B9", vel: 10, age: "1-12"}
    this.teenObj = { radius: 15, color: "#27AE60", vel: 18, age: "13-17"};
    this.adultObj = { radius: 20, color: "#BA4A00", vel: 23, age: "18-65"};
    this.seniorObj = { radius: 22, color: "#707B7C", vel: 15, age: "66 and up"};
}

Scenario.prototype.createPersons = function () {
    this.createLoop(minor, this.minors)
    this.createLoop(teen, this.teens)
    this.createLoop(minor, this.adults)
    this.createLoop(minor, this.seniors)
}

Scenario.prototype.createLoop = function (ageGroup, n) {
    let type = "sick";
    let age;
    let radius;
    let vel;
    let color;
    switch (ageGroup) {
        case minor:
            radius = this.minorObj.radius;
            vel = [minorObj.vel, minorObj.vel];
            color = this.minorObj.color;
            age = this.minorObj.age;
            break;
        case teen:
            radius = this.teenObj.radius;
            vel = [teenObj.vel, teenObj.vel];
            color = this.teenObj.color;
            age = this.teenObj.age;
        case adult:
            radius = this.adultObj.radius;
            vel = [adultObj.vel, adultObj.vel];
            color = this.adultObj.color;
            age = this.adultObj.age;
        case senior:
            radius = this.seniorObj.radius;
            vel = [seniorObj.vel, seniorObj.vel];
            color = this.seniorObj.color;
            age = this.seniorObj.age;
    }
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
            age
        })
        person.draw(this.ctx)
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