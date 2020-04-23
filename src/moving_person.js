const Scenario = require("./scenario.js");
const Util = require("./util")

function MovingPerson(obj) {
        this.type = obj.type;
        this.radius = obj.radius;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.color = obj.color;
        this.age = obj.age;
        this.ctx = obj.ctx;
        // this.name = obj.name;
        this.scenario = obj.scenario;
        debugger
        // type will determine color and velocity, will represent age
}
MovingPerson.prototype.draw = function (ctx) {
        // this.currPosObj[this.name] = [pos, this.vel];
        // let ctx = this.ctx;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.fill();
        // this.move(pos)
        ctx.strokeStyle = "#000000";
        // ctx.clearRect()
        // console.log("Positon Object:", this.currPosObj)
}

// was async 
// MovingPerson.prototype.move = async function (pos) {
//         await this.sleepFunction(1);
//         let x = pos[0];
//         let y = pos[1];
//         let newPos;

//         // turn them around when hitting the perimeter
//         if (x + this.vel[0] >= 1650 || x + this.vel[0] <= 0) {
//                 this.vel[0] *= -1;
//         } 
//         if (y + this.vel[1] >= 1050 || y + this.vel[1] <= 0) {
//                 this.vel[1] *= -1
//         }
//         // turn them around when the collide
        
//         newPos = [pos[0] + this.vel[0], pos[1] + this.vel[1]]
//         // this.asyncMove()
//         this.draw(newPos)
        
// }
// MovingPerson.prototype.sleepFunction = function (ms) {
//         return new Promise(res => setTimeout(res, ms));
// };



MovingPerson.prototype.collideWith = function collideWith(otherPerson) {
        
};
MovingPerson.prototype.isCollidedWith = function isCollidedWith(otherPerson) {
        const centerDist = Util.dist(this.pos, otherPerson.pos);
        return centerDist < (this.radius + otherPerson.radius);
};
MovingPerson.prototype.isWrappable = true;
const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
MovingPerson.prototype.move = function move(timeDelta) {
        //timeDelta is number of milliseconds since late move
        // if computer is busy the time delta will be larger
        // in this case the MovingPerson should move farther in this frame
        // velocity of person is how far it should move in 1/60th of a second
        debugger
        const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale,
        offsetY = this.vel[1] * velocityScale;
        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        if (this.scenario.isOutOfBounds(this.pos)) {
                if (this.isWrappable) {
                        this.pos = this.scenario.wrap(this.pos)
                } else {
                        this.remove()
                }
        }
        console.log("position: ", this.pos, "")
};
MovingPerson.prototype.remove = function remove() {
        this.scenario.remove(this);
};
// MovingPerson.prototype.asyncMove = function () {
//         return this.move(vel);
// };
module.exports = MovingPerson;

// for (let i = 0; i < 20; i++){
        
//         let signs1 = [-1, 1][Math.floor(Math.random() * 2)]
//         let signs2 = [-1, 1][Math.floor(Math.random() * 2)]
//         let arr = [signs1 * Math.random() * 2, signs2 * Math.random() * 2];
//         console.log(arr)
// }
// console.log(Math.floor(Math.random() * 8) + 1)