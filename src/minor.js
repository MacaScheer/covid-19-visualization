const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
     RADIUS: 2, COLOR: "#1f7e25", SPEED: 4, AGE: "minor" 
}

function Minor(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingPerson.call(this.options)
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