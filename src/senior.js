const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 4.8, COLOR: "#60b4f8", SPEED: 1.8, AGE: "senior"
}

function Senior(options) {
    this.options = options || {};
    this.options.color = DEFAULTS.COLOR;
    this.options.pos = options.pos || options.game.randomPosition();
    this.options.radius = DEFAULTS.RADIUS;
    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingPerson.call(this, options)
    // new MovingPerson(this, options)
}
Util.inherits(Senior, MovingPerson);

Senior.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.Senior
    if (otherPerson instanceof MovingPerson) {


        return true;
    }
}


module.exports = Senior;