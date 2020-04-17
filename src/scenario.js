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
    // let minorLimit;
    // let teenLimits = [[1, 5, 1.5], [-1.5, 1.5], [1.5, -1.5], [-1.5, -1.5]];
    // let adultLimits = [[1.8, 1.8], [-1.8, 1.8], [1.8, -1.8], [-1.8, -1.8]];
    // let seniorLimits = [[.4, .4], [-.4, .4], [.4, -.4], [-.4, -.4]];
    this.minorObj = { radius: 2, color: "#1f7e25", vel: [1, 1.2], age: "1-12"}
    this.teenObj = { radius: 3, color: "#b21c1c", vel: [1.4, 1.9], age: "13-17"};
    this.adultObj = { radius: 4, color: "#6666e8", vel: [2, 2.3], age: "18-65"};
    this.seniorObj = { radius: 3, color: "#60b4f8", vel: [0, 1.8], age: "66 and up"};
}

Scenario.prototype.createPersons = function () {
    // console.log("minors: ", this.minors, " teens: ", this.teens, " adults: ", this.adults, " seniors: ", this.seniors)
    this.createLoop("minor", this.minors)
    this.createLoop("teen", this.teens)
    this.createLoop("adult", this.adults)  //this.adults)
    this.createLoop("senior", this.seniors)
}
Scenario.prototype.randomSelector = function (lowerLimit, upperLimit) {
    
    let rand = Math.floor(Math.random() * upperLimit) + lowerLimit
    let sign1 = [-1, 1][Math.floor(Math.random() * 2)];
    return sign1 * rand


}
Scenario.prototype.createLoop = function (ageGroup, n) {
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
    let type = "sick";
    let {radius, color, age} = obj
    for (let i = 0; i < n; i++) {
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