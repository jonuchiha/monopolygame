//-------------------------------------------
//Plays a players turn. Takes in the player number e.g. player 1 = 1
//-------------------------------------------
function playTurn(player) {
    //updates what ppl have in trading display and arrays
    trade(currentPlayer, tradeWith);

    var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

    var die1 = rollDice();
    var die2 = rollDice();
    //var die1 = 1;
    //var die2 = 1;

    $('#dice1').html(dices[die1 - 1]);
    $('#dice2').html(dices[die2 - 1]);

    //-------------------------------------------
    //Deals with a player who is already in jail
    //-------------------------------------------
    if (players[player].in_jail > 2) {
        players[player].in_jail = 0;
        $('#leaveJail').hide();
    }

    if (players[player].in_jail == 1 || players[player].in_jail == 2) {
        $('#infoBox').html("<strong>Player " + currentPlayer + " </strong>, pay £50 for wait another turn.");




        $('#turn_options').show();
        $('#startTurn').prop('disabled', true);
        $('#leaveJail').show();
    } else {


        //if double is rolled
        if (die1 == die2) {
            //Sending player to jail
            //currentPlayer

            if (doublesRolled > 1) {
                $('#infoBox').html(" 3 Doubles Rolled, you're going to <strong>jail!</strong>");

                sendPlayerToJail(player);
                doublesRolled = 0;

                if (currentPlayer >= noOfPlayers) {
                    currentPlayer = 1;
                } else {
                    currentPlayer++;
                }
                //console.log("Current player--------------- " + currentPlayer + " increment");

                $('#turn_options').hide();
                //completeTurn(player);

                $('#infoBox').html("Its <strong>Player " + currentPlayer + "'s</strong> turn to roll.");

                //Rolled doubles
            } else {
                $('#infoBox').html("<strong>Player " + currentPlayer + " </strong> rolled a double. Please roll again!");

                doublesRolled++;
                //console.log("Doubles rolled --------------- " + doublesRolled + " increment");
                movePlayer(die1 + die2, player);


            }
        } else {
            //Did not roll a double
            doublesRolled = 0;
            movePlayer(die1 + die2, player);
        }
    }
}

//-------------------------------------------
//Moves the player 'roll' ammounts.
//-------------------------------------------
function movePlayer(roll, player) {
    //console.log("Doubles rolled --------------- " + doublesRolled + "b4");
    //mortgageProperty(player);
    console.log("Log - Moving the player " + roll + " places.")
    $("img").remove(".player_" + player);
    for (x = 0; x < roll; x++) {
        if (playersPositions[player] < 40) {
            playersPositions[player]++;
            players[player].location = parseInt(players[player].location + 1);
            //Free Parking
            if (playersPositions[player] == 20) {
                players[player].money = parseInt(players[player].money) + freeParkingValue
                freeParkingValue = 0;
            }

        } else {
            console.log("Log - Player " + player + " has passed go and has recieved +£200");
            updateText("You have recieved £200 for passing go.");
            players[player].passed_go = 1;
            players[player].money = parseInt(players[player].money + 200)
            updateMoney(player, players[player].money);
            playersPositions[player] = 1;
            players[player].location = parseInt(0);
        }
    }
    $("#" + tiles[players[player].location + 1]).append('<img class="player_' + player + '"src="img/' + currentPlayerIcon[player] + '.png" width="35px" />').show('slow');
    console.log("Player location = " + players[player].location)

    if (players[player].location == 30) {
        sendPlayerToJail(player);
    }
    if (tiles2[players[player].location].canBuy == 1) {
        //-------------------------------------------
        //Buy
        //-------------------------------------------
        checkPurchase(player);
        completeTurn(player);
    } else if (tiles2[players[player].location].ownedBy > 0 && tiles2[players[player].location].mortgaged == 0) {
        //-------------------------------------------
        //Pay rent
        //-------------------------------------------
        if (parseInt(players[player].money - calcRent(players[player].location)) < 1) {
            //cant afford rent
            //if (confirm('You cannot afford to pay £' + tiles2[players[player].location].rent + ' rent. Please mortgage proprties.')) {
            rentPayingActive = true;
            payingPlayer = true;
            cantPay(calcRent(players[player].location), tiles2[players[player].location].ownedBy);

            $('#infoBox').html("You cannot afford to pay £" + calcRent(players[player].location) + " rent. Please mortgage proprties.");
            completeTurn(player);
        } else {
            payRent(player);
            completeTurn(player);
        }
    } else {
        //-------------------------------------------
        //Both taxes
        //-------------------------------------------
        //Income tax 1
        console.log("I should trigger tax!");

        if ((players[currentPlayer].location == 4)) {
            if ((parseInt(players[player].money) - 200) < 0) {
                //rentPayingActive = true;
                updateText("You cannot afford £200 income tax. Please mortgage properties or declare bankrupsy.");
                //console.log(players[player].money + " p = " + player);
                cantPay(200, "bank");
                completeTurn(player);
            } else {
                payTax(player, 200);
                completeTurn(player);
            }

        }
        //Super tax
        if ((players[currentPlayer].location == 38)) {
            if ((parseInt(players[player].money) - 100) < 0) {
                //rentPayingActive = true;
                updateText("You cannot afford £100 super tax. Please mortgage properties or declare bankrupsy.");
                //console.log(players[player].money + " p = " + player);
                cantPay(100, "bank");
                completeTurn(player);
            } else {
                payTax(player, 200);
                completeTurn(player);
            }

        }

        //-------------------------------------------
        //Not purchaseable, take appropriate action.
        //-------------------------------------------
        completeTurn(player);
    }
    checkCard(player);
}
//-------------------------------------------
//Player can purchase a property or choose not too.
//-------------------------------------------
function checkPurchase(player) {
    if (parseInt(players[currentPlayer].money - tiles2[players[player].location].cost) < 1) {
        console.log("Log - Player cannot afford propery.")
        updateText("You cannot afford to purchase this property.");
    } else {

        if (players[player].passed_go == 1) {

            if (confirm('Would you like to purchase ' + tiles2[players[player].location].name)) {
                // Buy
                tiles2[players[player].location].ownedBy = currentPlayer;
                tiles2[players[player].location].canBuy = 0;
                console.log("Owned buy set to " + currentPlayer);
                players[currentPlayer].money = parseInt(players[currentPlayer].money - tiles2[players[player].location].cost);

                console.log("Log - Player " + currentPlayer + "'s new balance is " + parseInt(players[currentPlayer].money));
                updateMoney(player, players[currentPlayer].money);

                changeOwnedPropertyIcons(player);
            } else {
                startBidding(players[player].location);
            }
        } else {
            updateText("You must pass go once before you can purchase properties.");
        }

    }
    trade(currentPlayer, tradeWith);
}
