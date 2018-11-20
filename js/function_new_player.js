//-------------------------------------------
//Deals with new players
//-------------------------------------------
$(function () {
    $('#newPlayer').click(function () {

        if (startGame == false) {
            if (noOfPlayers < 6) {



                if (settingUpPlayer) {
                    $('#infoBox').html("Please select a token for <strong>Player " + noOfPlayers + "</strong> first.");
                } else {

                    settingUpPlayer = true;


                    noOfPlayers++;
                    currentPlayer = currentPlayer + 1;
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);

                    $('#player' + noOfPlayers + 'InfoButton').show();


                    $('#infoBox').html("Please select a token for <strong>Player " + noOfPlayers + "</strong>.");

                    playersPositions[currentPlayer] = 1;
                    $("#" + tiles[playersPositions[currentPlayer]]).append('<img class="player_' + currentPlayer + '"src="img/unknownplayer.png" id="tempToken_' + currentPlayer + '" width="35px" />').show('slow');




                }

            }

        }
    });
});