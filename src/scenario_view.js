const Util = require("./util");
const MovingPerson = require("./moving_person");
const Scenario = require("./scenario");

function ScenarioView() {
    
}
ScenarioView.prototype.start = function start() {
    let demoObj = {
        population: 100,
        percentMinors: .15,
        percentTeens: .20,
        percentAdults: .45,
        percentSeniors: .20
    }
    let demSick = {
        minors: 0,
        teens: 0,
        adults: 2,
        seniors: 1
    }
    const scen = new Scenario(ctx, demoObj, demSick);
    // scen
}

ScenarioView.prototype.start = function start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
};

module.exports = ScenarioView;