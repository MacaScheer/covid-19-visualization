const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 2.4, COLOR: "#b21c1c", SPEED: 6, AGE: "teen"
}

function Teen(options) {
    this.options = options || {};
    this.options.color = DEFAULTS.COLOR;
    this.options.pos = options.pos || options.game.randomPosition();
    this.options.radius = DEFAULTS.RADIUS;
    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)

    MovingPerson.call(this, options)
    // new MovingPerson(this.options)
}
Util.inherits(Teen, MovingPerson);

Teen.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.Teen
    if (otherPerson instanceof MovingPerson) {


        return true;
    }
}


module.exports = Teen;