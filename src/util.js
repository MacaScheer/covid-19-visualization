const Util = {
    inherits: function inherits(childClass, parentClass) {
        childClass.prototype = Object.create(ParentClass.prototype);
        childClass.prototype.constructor = childClass;
    },
    randomVec(length) {
        

    },
    dist(pos1, pos2) {
        return Math.sqrt(
            Math.pow((pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2))
        )
    },
    dir(vec) {
        const norm = Util.norm(vec);
        return Util.scale(vec, 1 / norm)
    },
    norm(vec) {
        return Util.dist([0,0], vec)
    },
    scale(vec, m) {
        return [vec[0]]
    }
    
}

module.exports = Util;