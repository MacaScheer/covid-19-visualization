const Scenario = require("./scenario.js");


function MovingPerson(obj) {
        this.type = obj.type;
        this.radius = obj.radius;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.color = obj.color;
        this.age = obj.age;
        // type will determine color and velocity, will represent age
}
MovingPerson.prototype.draw = function(ctx){
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(
                this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
        this.move(vel)

}

MovingPerson.prototype.move = function (vel) {
        await this.sleepFunction(10);
        this.asyncMove()
        
}
MovingPerson.prototype.sleepFunction = function (ms) {
        return new Promise(res => setTimeout(res, ms));
};

MovingPerson.prototype.asyncMove = function () {
        return this.move(vel);
};
module.exports = MovingPerson;