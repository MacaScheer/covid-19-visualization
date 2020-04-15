console.log("webpack is working!")
const MovingPerson = require("./moving_person.js")
// const Locale = require("./locale.js")
// const Scenario = require("./scenario.js")
window.MovingPerson = MovingPerson;

documment.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas-space");
    const ctx = canvas.getContext("2d")
    // const scenario = new Scenario();
    // const locale = new Locale({})
})