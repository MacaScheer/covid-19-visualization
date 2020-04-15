function MovingPerson(obj){
        this.type = obj.type;
        this.radius = obj.radius;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.color = obj.color;
        // type will determine color and velocity, will represent age
}
MovingPerson.prototype.draw = function(ctx){

}
module.exports = MovingPerson;