

var elem = document.getElementById("cloud")
var animation = elem.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(100%,0)" }
], {
    duration: 5000,
    iterations: Infinity,
    direction: "reverse"
})

var elem = document.getElementById("bird")
var animation = elem.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(100%,0)" }
], {
    duration: 5000,
    iterations: Infinity,
    direction: "normal"
})

