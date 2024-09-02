let scoreHome = document.getElementById('home-score');
let scoreAway = document.getElementById('away-score');
let score1 = 0;
let score2 = 0;

function pointsModifier(sign,team){
    
    if((score1 >= 0 && score2 >= 0 )) {

        if(sign === '-' && team === 'home'){
            score1--;
            scoreHome.textContent = score1;
        }else if(sign === '+' && team === 'home'){
            score1++;
            scoreHome.textContent = score1;
        }else if(sign === '-' && team === 'away'){
            score2--;
            scoreAway.textContent = score2;
        }else if(sign === '+' && team === 'away'){
            score2++;
            scoreAway.textContent = score2;
        }
    }
}

