

var elem = document.getElementById("cloud")
var animation = elem.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(100%,0)" }
], {
    duration: 8000,
    iterations: Infinity,
    direction: "reverse"
})

var elem = document.getElementById("bird")
var animation = elem.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(100%,25px)" }
], {
    duration: 10000,
    iterations: Infinity,
    direction: "normal"
})

var elem = document.getElementById("plane")
var animation = elem.animate([
    { transform: "translate(0,0)" },
    { transform: "translate(20%,25px)" },
    { transform: "translate(50%,250px)" },
    { transform: "translate(90%,800px)" }
], {
    duration: 5000,
    iterations: Infinity,
    // direction: "normal"
})

