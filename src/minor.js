const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
     RADIUS: 2, COLOR: "#1f7e25", SPEED: 4, AGE: "minor" 
}

function Minor(options) {
    this.options = options || {};
    this.options.color = DEFAULTS.COLOR;
    this.options.pos = options.pos || options.game.randomPosition();
    this.options.radius = DEFAULTS.RADIUS;
    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)
    // options.sick = options.sick
    // MovingPerson.call(this.options)
    new MovingPerson(this.options)
}
Util.inherits(Minor, MovingPerson);

Minor.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.minor
    if (otherPerson instanceof MovingPerson) {
        

        return true;
    }
}


module.exports = Minor;