 $("#changeShowing").click(function () {

     if (showingPlayer < noOfPlayers) {
         showingPlayer++;
     } else {
         showingPlayer = 1;
     }
     changeOwnedPropertyIcons(showingPlayer);
 });


 //-------------------------------------------
 //Function to shuffle pot luck and opportunity knocks
 //-------------------------------------------
 function shuffle(cardsarray) {
     var shuff = cardsarray.length,
         temp, index;

     // While there are elements in the array
     while (shuff > 0) {
         // Pick a random index
         index = Math.floor(Math.random() * shuff);
         // Decrease shuff by 1
         shuff--;
         // And swap the last element with it
         temp = cardsarray[shuff];
         cardsarray[shuff] = cardsarray[index];
         cardsarray[index] = temp;
     }
     return cardsarray;
 }


 //-------------------------------------------
 //Attempt payment
 //-------------------------------------------

 $(function () {
     $('#attempt_payment').click(function () {
         var player = currentPlayer;
         if ((parseInt(players[currentPlayer].money) - outstandingPayment) < 0) {
             outstandingPayment = outstandingPayment - parseInt(players[currentPlayer].money);
             if (payingPlayer) {
                 players[tiles2[players[player].location].ownedBy].money = parseInt(players[tiles2[players[player].location].ownedBy].money) + parseInt(players[currentPlayer].money);
                 updateMoney(players[tiles2[players[player].location].ownedBy].id, players[tiles2[players[player].location].ownedBy].money);
             }
             players[currentPlayer].money = 0;
             updateMoney(currentPlayer, parseInt(players[currentPlayer].money));

             cantPay(outstandingPayment, players[tiles2[players[player].location].ownedBy].id);
             updateText("You still owe £" + outstandingPayment + ", please mortgage more or declare bankruptsy.");
         } else {
             if (payingPlayer) {
                 var payerBal = parseInt(players[currentPlayer].money) - outstandingPayment;
                 updateMoney(currentPlayer, payerBal);
                 var ownerBal = parseInt(players[tiles2[players[player].location].ownedBy].money) + outstandingPayment;
                 updateMoney(players[tiles2[players[player].location].ownedBy].id, ownerBal);
             }
             rentPayingActive = false;
             resetOutstanding();
         }



     });
 });

 //-------------------------------------------
 //Allow the player to complete their turn by showing other turn options
 //-------------------------------------------

 function completeTurn(player) {


     if (doublesRolled == 0) {
         $('#startTurn').prop('disabled', true);
     } else {}

     if (players[player].in_jail > 0) {
         $('#startTurn').prop('disabled', true);
         $('#leaveJail').show();
     } else {
         $('#leaveJail').hide();
     }

     $('#turn_options').show();
 }
 //-------------------------------------------
 //Manage houses/hotels button
 //-------------------------------------------

 $(function () {
     $('#buysellhouses_window').click(function () {
         //unmortgageProperty(currentPlayer);
     });
 });
 //-------------------------------------------
 //declare Bankruptcy
 //-------------------------------------------

 $(function () {
     $('#declareBankruptcy').click(function () {
         updateMoney(currentPlayer, 0);
         $('#player' + currentPlayer + 'Model').prop('disabled', true);

         $('#leaveJail').hide();
         //$('#declareBankruptcy').hide();
         $('#turn_options').hide();


         resetOutstanding();

         $('#startTurn').prop('disabled', false);
         $('#endTurn').prop('disabled', false);

         players[currentPlayer].bankrupt = 1;

         for (i = 0; i < tiles[2].length; i++) {
             if (tiles[i].ownedBy == currentPlayer) {
                 tiles2[i].ownedBy = -1;
             }
         }
         incrementTurn();
var i;
var count = 0;
var playerid = "";
for(i = 1; i < noOfPlayers+1; i++) {
	if(parseInt(players[i].bankrupt) == 1) {
		count = count + 1;
	}
}
if(count == (noOfPlayers - 1) ) {
	for(i = 1; i < noOfPlayers+1; i++) {
		if(parseInt(players[i].bankrupt) == 0) {
			playerid = players[i].id;
			console.log("Player: " + playerid);
		}
		else {
			console.log("Failed: " + players[i].bankrupt + " ID: " + players[i].id);
		}
	}
	alert("1 Player Left: Player " + playerid + " Wins!!! Well Done!");
}
console.log(count + " - " + noOfPlayers);
     });
 });
 //-------------------------------------------
 //All other/uncategorised functions
 //-------------------------------------------


 function housesAvailableText() {
     $('#housesAvailableText').html(availableHouses);
     $('#hotelsAvailableText').html(availableHotels);
 }


 //-------------------------------------------
 //Checks if player can afford somthing
 //-------------------------------------------

 function canAfford(player, cost) {
     if (parseInt(players[player].money) - cost > 0) {
         return true;
     } else {
         return false;
     }
 }

 //-------------------------------------------
 //Pay tax to bank
 //-------------------------------------------

 function payTax(player, ammount) {
     var newBal = parseInt(players[player].money) - ammount;
     players[player].money = newBal;
     updateMoney(player, newBal);
     updateText("You have paid <strong>£" + ammount + " </strong> income tax.");
     freeParkingValue = parseInt(freeParkingValue) + ammount;
     $('#freeParkingText').html("£" + freeParkingValue);
 }

 //-------------------------------------------
 //Returns a properties rent based on the houses it has
 //-------------------------------------------

 function calcRent(location) {
     console.log("house -> " + tiles2[location].houses);
     switch (parseInt(tiles2[location].houses)) {
         case 0:
             console.log("Returning rent of - " + tiles2[location].rent)
             return tiles2[location].rent;
         case 1:
             console.log("Returning rent of - " + tiles2[location].renth1)
             return tiles2[location].renth1;
         case 2:
             console.log("Returning rent of - " + tiles2[location].renth2)
             return tiles2[location].renth2;
         case 3:
             console.log("Returning rent of - " + tiles2[location].renth3)
             return tiles2[location].renth3;
         case 4:
             console.log("Returning rent of - " + tiles2[location].renth4)
             return tiles2[location].renth4;
         case 5:
             console.log("Returning rent of - " + tiles2[location].renth5)
             return tiles2[location].renth5;;
     }
 }

 //-------------------------------------------
 //Pay to leave jail
 //-------------------------------------------

 $(function () {
     $('#leaveJail').click(function () {
         updateText("You have paid £50 to leave jail.")
         players[currentPlayer].location = 10;
         players[currentPlayer].in_jail = 0;
         players[currentPlayer].money = (parseInt(players[currentPlayer].money) - 50);
         freeParkingValue = parseInt(freeParkingValue + 50);
         $('#freeParkingText').html("£" + freeParkingValue);
         $('#leaveJail').hide();

     });
 });

 //-------------------------------------------
 //hide all left window windows
 //-------------------------------------------

 function hideAllWindows() {
     $('#unmortgage_window').hide();
     $('#mortgage_window').hide();
     $('#buysellhouses_window').hide();
     $('#sell_properties_window').hide();
     $('#add_houses_window').hide();

     //$('#cant_pay_window').hide();
 }


 //-------------------------------------------
 //Hides all tokens from the menu
 //-------------------------------------------
 function hideAllTokens() {
     document.getElementById("tokenRow").remove();
     $('#playerButton1').hide();
     $('#playerButton2').hide();
     $('#playerButton3').hide();
     $('#playerButton4').hide();
     $('#playerButton5').hide();
     $('#playerButton6').hide();
 }

 //-------------------------------------------
 //Retuns a single random number between 1 & 6
 //-------------------------------------------
 function rollDice() {
     var dice = Math.floor((Math.random() * 6) + 1);
     //var dice = 3;
     return dice;

 }

 //-------------------------------------------
 //Update the text in top left container
 //-------------------------------------------

 function updateText(text) {
     $('#infoBox').html(text);
 }

 //-------------------------------------------
 //Update the players inital money (seen on the left)
 //-------------------------------------------

 function setBalances() {
     for (i = 0; i < noOfPlayers; i++) {
         updateMoney(i, players[i].money);
     }

 }

 //-------------------------------------------
 //Update the players money (seen on the left)
 //-------------------------------------------

 function updateMoney(player, value) {
     $('#player' + player + 'Money').html("£" + value);
 }

 function updateP(player) {
     $('#player' + player + 'Money').html("£" + players[player].money);

 }

 //-------------------------------------------
 //Moves the player to JAIL
 //-------------------------------------------
 function sendPlayerToJail(player) {
     $("img").remove(".player_" + player);
     players[player].location = 11;
     players[player].in_jail = 1;
     $("#" + tiles[players[player].location]).append('<img class="player_' + player + '"src="img/' + currentPlayerIcon[player] + '.png" width="35px" />').show('slow');

 }


 //-------------------------------------------
 //Incremenet the current player
 //-------------------------------------------

 function incrementTurn() {
     if (currentPlayer >= noOfPlayers) {
         currentPlayer = 1;
     } else {
         currentPlayer++;
     }


     $('#infoBox').html("Its <strong>Player " + currentPlayer + "'s</strong> turn to roll.");
     if (players[currentPlayer].bankrupt == 1) {
         incrementTurn();
         //console.log("===== incremenedted");
     }
 }
