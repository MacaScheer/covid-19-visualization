const Util = require("./util");
const MovingPerson = require("./moving_person")


const DEFAULTS = {
    RADIUS: 4.8, COLOR: "#60b4f8", SPEED: 1.8, AGE: "senior", SICKCOLOR: "#32a850"
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
    if (this.type === "infect" && otherPerson.type === "infected") {
        // do nothing => both are already infected...but what would actually happen?
    }
    else if (this.type === "infected" || otherPerson.type === "infected") {
        // this.type = "infected";
        // otherPerson.type = "infected";
        // For Both: 
        debugger
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

    let newVel = Util.redirect(this.vel, otherPerson.vel);
    this.vel = newVel[0];
    otherPerson.vel = newVel[1]
}


module.exports = Senior;