let scoreHome = document.getElementById('home-score')
let scoreAway = document.getElementById('away-score')
let score1 = 0
let score2 = 0

function increasePoints(team, score){

    if(team == "home" && score == '1'){
        score1 += 1
        scoreHome.textContent = score1 
    }
    else if(team == "home" && score == '2'){
        score1 += 2
        scoreHome.textContent = score1 
    }
    else if(team == "home" && score == "3"){
        score1 += 3
        scoreHome.textContent = score1 
    }
    else if(team == "away" && score == '1'){
        score2 += 1
        scoreAway.textContent = score2 
    }
    else if(team == "away" && score == '2'){
        score2 += 2
        scoreAway.textContent = score2
    }
    else if(team == "away" && score == '3'){
        score2 += 3
        scoreAway.textContent = score2
    }
}

