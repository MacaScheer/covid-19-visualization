const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 2.4, COLOR: "#60b4f8", SPEED: 3, AGE: "senior"
}

function Senior(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingPerson.call(this.options)
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