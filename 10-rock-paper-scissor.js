let score = JSON.parse(localStorage.getItem('score')) || {
            wins : 0,
            losses : 0,
            ties : 0

        };

        updateSlectElement();

    /*    
    if (!score) {
        score = {
            wins : 0,
            losses : 0,
            ties : 0

        };
    }    */
    
    function playGame(playerMove) {     
        const computerMove = pickComputerMove();
    
        let result = '';
        if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You Lose';    // Handle Rock case
            } else if (computerMove === 'paper') {
                result = 'You Win'; // Handle Paper case
            } else if (computerMove === 'scissors') {
                result = 'Tie';  // Handle Sissors case
                }

        } else if (playerMove ==='paper') {
            if (computerMove === 'rock') {
                result = 'You Win';    // Handle Rock case
            } else if (computerMove === 'paper') {
                result = 'Tie'; // Handle Paper case
            } else if (computerMove === 'scissors') {
                result = 'You Lose';  // Handle Sissors case
            }
            
        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
                result = 'Tie';    // Handle Rock case
            } else if (computerMove === 'paper') {
                result = 'You Lose'; // Handle Paper case
            } else if (computerMove === 'scissors') {
                result = 'You Win';  // Handle Sissors case
            } 
        }
        
        if (result === 'You Win') {
            score.wins +=1
        } else if ( result === 'You Lose') {
            score.losses +=1
        } else if (result = 'You Tie') {
            score.ties +=1
        }
        
        localStorage.setItem('score', JSON.stringify(score))

        updateSlectElement();
        const resultEle = document.querySelector('.js-result');
        const movetEle = document.querySelector('.js-moves');
        resultEle.innerHTML = `Congs ${result}`;
        movetEle.innerHTML = ` You
        <img class="move-icon" src="images/${playerMove}-emoji.png">
        <img class="move-icon" src="images/${computerMove}-emoji.png">
        Computer`;
    
    }

    function updateSlectElement() {
        const p1Ele =  document.querySelector('.js-score');
        p1Ele.innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    }

    function pickComputerMove() {
        let computerMove = '';
        const randomNumber = Math.random(); 
        if (randomNumber >= 0 && randomNumber < 1/3) {
            computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
            computerMove = 'scissors';
        }
        return computerMove;
        
    }