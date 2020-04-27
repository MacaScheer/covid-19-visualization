const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 6, COLOR: "#6666e8", SPEED: 1.5, AGE: "adult", SICKCOLOR: "#32a850", MASS: 10, DICEASEDCOLOR: "#808080" //, SICK: false
}

function Adult(options) {
    options = options || {};
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED)
    options.type = options.type
    options.mass = DEFAULTS.MASS
    options.color = options.type === "well" ? DEFAULTS.COLOR : DEFAULTS.SICKCOLOR;
    MovingPerson.call(this, options)
    // new MovingPerson(this, option
}
Util.inherits(Adult, MovingPerson);

Adult.prototype.collideWith = function collideWith(otherPerson) {
    // if this.infected, spread to otherPerson
    // if otherPerson.infect and !this.infected spread to this.Adult
    if (this.type === "infect" && otherPerson.type === "infected") {
        // do nothing => both are already infected...but what would actually happen?
    }
    else if (this.type === "infected" || otherPerson.type === "infected") {
    //     // this.type = "infected";
    //     // otherPerson.type = "infected";
    //     // For Both: 
    //     debugger
        let newType = "infected";
        let newColor = DEFAULTS.SICKCOLOR;
        this.type = newType;
        this.color = newColor;
        otherPerson.type = newType;
        otherPerson.color = newColor;
        // will we need to re-instatiate both? removing them first, so they will be colored correctly?
        // also, should there be an incubation period? Where color changes (or not) and then only changes to the infected "green" after the incubation?
        // this will change for the different age groups.
    }

    // let newVel = Util.redirect(this.radius, otherPerson.radius, this.vel, otherPerson.vel);
    // this.vel = newVel[0];
    // otherPerson.vel = newVel[1]
}
Adult.prototype.progressDisease = function progressDisease() {
      if (this.stage < 10) {
            this.stage++
        } else {
            this.color = DEFAULTS.DICEASEDCOLOR;
        }
}


module.exports = Adult;