const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 2.6, COLOR: "#6666e8", SPEED: 5, AGE: "adult" //, SICK: false
}

function Adult(options) {
    this.options = options || {};
    this.options.color = DEFAULTS.COLOR;
    this.options.pos = options.pos || options.game.randomPosition();
    this.options.radius = DEFAULTS.RADIUS;
    this.options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)
    this.options.type = options.type
    // MovingPerson.call(this.options)
    new MovingPerson(this.options)
}
Util.inherits(Adult, MovingPerson);

Adult.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.Adult
    if (otherPerson instanceof MovingPerson) {


        return true;
    }
}


module.exports = Adult;