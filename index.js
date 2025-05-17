let homePointsDiv = document.getElementById("home-score");
let awayPointsDiv = document.getElementById("guest-score");
let homePoints = 0;
let awayPoints = 0;


function addHome1Point(){
    homePoints += 1;
    homePointsDiv.textContent = homePoints;
}

function addHome2Points(){
    homePoints += 2;
    homePointsDiv.textContent = homePoints;
}

function addHome3Points(){
    homePoints += 3;
    homePointsDiv.textContent = homePoints;
}

function addAway1Point(){
    awayPoints += 1;
    awayPointsDiv.textContent = awayPoints;
}

function addAway2Points(){
    awayPoints += 2;
    awayPointsDiv.textContent = awayPoints;
}

function addAway3Points(){
    awayPoints += 3;
    awayPointsDiv.textContent = awayPoints;
}

function newGame(){
    homePoints = 0;
    awayPoints = 0;
    homePointsDiv.textContent = homePoints;
    awayPointsDiv.textContent = awayPoints;
}