console.log("webpack is working!")

const Scenario = require("./scenario.js")
// const Menu = require("./menu.js")
const MovingPerson = require("./moving_person.js")
window.MovingPerson = MovingPerson;

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-space");
    const ctx = canvas.getContext("2d")
    let demoObj = {
        population : 1200,
        percentMinors : .15,
        percentTeens : .20,
        percentAdults : .45,
        percentSeniors : .20
    }
    const scen = new Scenario(ctx, demoObj);
    scen.createPersons()
    // const mP = new MovingPerson({
    //     type: "sick",
    //     radius: 2,
    //     pos: [50, 250],
    //     vel: [10, 10],
    //     color: "#00FF00"
    // })
    // mP.draw(ctx)
    // window.ctx = ctx
    // const menu = new Menu()
    // menu.requestParameters()
})