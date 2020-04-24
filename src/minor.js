const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 3.85, COLOR: "#f59338", SPEED: 2, AGE: "minor", SICKCOLOR: "#32a850" 
}

function Minor(options) {
    this.options = options || {};
    this.options.color = DEFAULTS.COLOR;
    this.options.pos = options.pos || options.game.randomPosition();
    this.options.radius = DEFAULTS.RADIUS;
    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)
    // options.sick = options.sick
    MovingPerson.call(this, options)
    // new MovingPerson(this.options)
}
Util.inherits(Minor, MovingPerson);

Minor.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.minor
    debugger
    if (otherPerson instanceof MovingPerson) {
        

        return true;
    }
}


module.exports = Minor;