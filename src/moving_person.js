const Scenario = require("./scenario.js");


function MovingPerson(obj) {
        this.type = obj.type;
        this.radius = obj.radius;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.color = obj.color;
        this.age = obj.age;
        this.ctx = obj.ctx;
        // type will determine color and velocity, will represent age
}
MovingPerson.prototype.draw = function (pos = this.pos) {
        let ctx = this.ctx;
        ctx.fillStyle = this.color;
        // ctx.strokeStyle = this.color
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], this.radius, 0, 2 * Math.PI, true);
        ctx.fill();
        this.move(pos)
        ctx.strokeStyle = "#000000";

}

// was async 
MovingPerson.prototype.move = async function (pos) {
        await this.sleepFunction(1);
        let newPos = [pos[0] + this.vel[0], pos[1] + this.vel[1]]
        // this.asyncMove()
        this.draw(newPos)
        
}
MovingPerson.prototype.sleepFunction = function (ms) {
        return new Promise(res => setTimeout(res, ms));
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