/*challenge 6*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {

        //1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        //2. Display Result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


        
        //3. Update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            // roundScore = roundScore + dice *same as above, above is more simple*
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
        nextPlayer();
        }
        /*
        if (dice === 6 && lastDice === 6)  {
            // player loses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;   
        } else {
        nextPlayer();
        }
        lastDice = dice;
        */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {

    
        //1. Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        // scores[activePlayer] = scores[activePlayer] + roundScore same exact thing as above

        //2. Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // you can change the final score of the game 
        var input = document.querySelector('.final-score').value;
        var winningScore;
        // Undefined, 0, null or '' are COERCED to false
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }


        //3. Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //4. next player
            nextPlayer();
        }
    }

});

function nextPlayer() {
         //Next player
         activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         // if(activePlayer === 0) {
         //     activePlayer = 0;
         // } else {
         //     activePlayer = 1;
         // }
         // the if/else block is the same as the ternary operator but the ternary operator is more cleaner to use and easy to debug.
         roundScore = 0; 
 
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';
 
 
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
         //document.querySelector('.player-0-panel').classList.remove('active');
         //document.querySelector('.player-1-panel').classList.add('active');
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display = 'none';
     
}


document.querySelector('.btn-new').addEventListener('click', init);
    

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


// What is a state variable??
// simply tells us a condition of a system, helps us remember a state of something so for this game whether is our game playing or is it not playing 
















