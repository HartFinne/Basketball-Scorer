const homeScore = document.getElementById("home-score")
const awayScore = document.getElementById("away-score")

const homePlusOneBtn = document.getElementById("home-plus-one-btn")
const homePlusTwoBtn = document.getElementById("home-plus-two-btn")
const homePlusThreeBtn = document.getElementById("home-plus-three-btn")

const awayPlusOneBtn = document.getElementById("away-plus-one-btn")
const awayPlusTwoBtn = document.getElementById("away-plus-two-btn")
const awayPlusThreeBtn = document.getElementById("away-plus-three-btn")

let homeSum = 0
let awaySum = 0

function showResult(team, value) {
    if (team === "home") {
        homeSum += value
        homeScore.textContent = homeSum
    } else if (team === "away") {
        awaySum += value
        awayScore.textContent = awaySum
        console.log(awaySum)
    }
}

homePlusOneBtn.addEventListener("click", () => showResult("home", 1))
homePlusTwoBtn.addEventListener("click", () => showResult("home", 2))
homePlusThreeBtn.addEventListener("click", () => showResult("home", 3))


// --- Away buttons ---
awayPlusOneBtn.addEventListener("click", () => showResult("away", 1));
awayPlusTwoBtn.addEventListener("click", () => showResult("away", 2));
awayPlusThreeBtn.addEventListener("click", () => showResult("away", 3));