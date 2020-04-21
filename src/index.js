console.log("webpack is working!")

const Scenario = require("./scenario.js");
const ScenarioView = require("./scenario_view");
const Menu = require("./menu.js")
const MovingPerson = require("./moving_person.js");
window.MovingPerson = MovingPerson;

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-space");
    const ctx = canvas.getContext("2d");
    const scen = new Scenario(ctx, demoObj, demSick);
    new ScenarioView(scen, ctx).start()
    // const menu = new Menu()
    // menu.requestParameters()
})