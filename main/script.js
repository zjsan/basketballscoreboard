let scoreHome = document.getElementById('home-score');
let scoreAway = document.getElementById('away-score');
let foulsHome = document.getElementById('fouls-val-home');
let foulsAway = document.getElementById('fouls-val-away');
let gamePeriod = document.getElementById('period-val');
let score1 = 0;
let score2 = 0;
let fouls1 = 0;
let fouls2 = 0;
let period = 0;

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

function foulsModifier(sign,team){
    if((fouls1 >= 0 && fouls2 >= 0 )) {

        if(sign === '-' && team === 'home'){
            fouls1--;
            foulsHome.textContent = fouls1;
        }else if(sign === '+' && team === 'home'){
            fouls1++;
            foulsHome.textContent = fouls1;
        }else if(sign === '-' && team === 'away'){
            fouls2--;
            foulsAway.textContent = fouls2;
        }else if(sign === '+' && team === 'away'){
            fouls2++;
            foulsAway.textContent = fouls2;
        }
    }
}

function periodSetter(sign){
    if(period >= 0){

        if(sign === '-'){
            period--;
            gamePeriod.textContent = period;
        }else if(sign === '+'){
            period++
            gamePeriod.textContent = period;
        }
    }
}

