//-------------------------------------------
//initial functions inc. roll and start
//-------------------------------------------

//-------------------------------------------
//ROLL Button
//-------------------------------------------
$(function () {
    $('#startTurn').click(function () {
        if (!(startGame)) {
            $('#infoBox').html("Please add players and click <strong>Start Game</strong>.");
        } else {
            console.log("Log - Player " + currentPlayer + "'s turn has begun.");


            changeOwnedPropertyIcons(showingPlayer);
            playTurn(currentPlayer);


        }
        //checkIfOwnsSet(currentPlayer);
    });
});


//-------------------------------------------
//START GAME Button
//-------------------------------------------
$(function () {
    $('#startgame').click(function () {
	potLuckCards = shuffle(potLuckCards);
	oppKnocksCards = shuffle(oppKnocksCards);
	//alert(oppKnocksCards[0].action);
        if (!settingUpPlayer && noOfPlayers > 1) {

            var element = document.getElementById("infoBox_col");
            element.classList.remove("spacer_big");
            document.getElementById("inital_buttons").remove();
            //Hides all remaining tokens if not selected.
            hideAllTokens();
            //set player balances
            setBalances();
            //Stats the game state
            startGame = true;
            //Sets player 1 as current player.
            currentPlayer = 1;
            $('#infoBox').html("Game has started! Its <strong>Player 1's</strong> turn to roll.");


        } else if (settingUpPlayer) {
            $('#infoBox').html("Please select a token first.");
        } else if (!(noOfPlayers > 0)) {
            $('#infoBox').html("Please add more players (min 1).");
        } else {
            $('#infoBox').html("Please add more players (min 1).");
        }



    });
});
