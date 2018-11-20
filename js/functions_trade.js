 function trade(currentPlayer, tradeWith) {

     //currentPlayerStuffArray = [];
     //tradePlayerStuffArray = [];
     //playerOffersNames = [];
     //playerWishesToRecieveNames = [];



     var indexCurrentPlayer = 1;
     //for displaying what player has, see currentPlayerStuffArray fo actual data to use
     var currentPlayerStuff = "";

     document.getElementById("current_player_trade").innerHTML = "Current Playerx: " + currentPlayer;
     for (i = 0; i < tiles2.length; i++) {
         if (currentPlayer == tiles2[i].ownedBy) {

             currentPlayerStuff += indexCurrentPlayer + "." + tiles2[i].name + " ";
             currentPlayerStuffArray[indexCurrentPlayer] = tiles2[i].name;
             indexCurrentPlayer++;

         }

     }
     document.getElementById("current_player_owns").innerHTML = ":" + currentPlayerStuff;





     updateTraderOwns(tradeWith);



 }
 $("#accept_trade").click(function () {
     for (i = 0; i < tiles2.length; i++) {
         //everything in the offer array needs to now be owned by the trader
         for (x = 0; x < playerOffersNames.length; x++) {
             if (tiles2[i].name == playerOffersNames[x]) {
                 tiles2[i].ownedBy = tradeWith;
             }
         }
     }
     for (x = 0; x < tiles2.length; x++) {

         //everything in the recieve array now needs to be owned by the current player
         for (t = 0; t < playerWishesToRecieveNames.length; t++) {

             if (tiles2[x].name == playerWishesToRecieveNames[t]) {

                 tiles2[x].ownedBy = currentPlayer;

             }
         }
         changeOwnedPropertyIcons(showingPlayer);

         trade(currentPlayer, tradeWith)

     }

     $('#innergridcontainerTrading').show();
     $('#confirmTrading').hide();
     $('#tradingBox').hide();

     $('#tradingBox').hide();
 });
 $("#decline_trade").click(function () {

     $('#innergridcontainerTrading').show();
     $('#confirmTrading').hide();


     trade(currentPlayer, tradeWith)
     $('#tradingBox').hide();
 });

 $("#tradeProperties").click(function () {
     $('#tradingBox').show();
 });

 //shows the proposed trade to the player that is not the current player and asks if they wish to accept
 function presentTradeDealRequested() {
     $('#innergridcontainerTrading').hide();
     $('#confirmTrading').show();
     var playerOffersString;
     var playerWishesToRecieveString;
     var playerOffers = [];
     var playerWishesToRecieve = [];

     var stringGiveOffer = "";
     var stringRecieveOffer = "";

     playerOffersString = document.forms["Form1"]["current"].value;
     playerWishesToRecieveString = document.forms["Form2"]["other"].value;


     //indexing here starts from 0
     playerOffers = splitFormCommasOffer(playerOffersString);
     playerWishesToRecieve = splitFormCommasOffer(playerWishesToRecieveString);

     var x;
     for (x = 0; x < playerOffers.length; x++) {

         playerOffersNames[x] = currentPlayerStuffArray[playerOffers[x]];
     }
     for (x = 0; x < playerWishesToRecieve.length; x++) {
         playerWishesToRecieveNames[x] = tradePlayerStuffArray[playerWishesToRecieve[x]];
     }



     //now we have an array of all the properties in the deal (one for giving one for reciving) make a string to display these
     for (x = 0; x < playerOffersNames.length; x++) {
         stringGiveOffer += playerOffersNames[x] + ",";
     }
     for (x = 0; x < playerWishesToRecieveNames.length; x++) {
         stringRecieveOffer += playerWishesToRecieveNames[x] + ",";
     }

     document.getElementById("present_offer_give").innerHTML = "The current player would like to give you: " + stringGiveOffer;
     document.getElementById("present_offer_recieve").innerHTML = "To be swapped with " + stringRecieveOffer;


 }

 //function to split the string in the form for wnat to offer of properties 
 //form input is in form 1,4 needs to be translated into property names
 function splitFormCommasOffer(playerOffersString) {
     var playerOffers = [];
     playerOffers = playerOffersString.split(',');
     return (playerOffers);
 }
 //recieve
 function splitFormCommasOffer(playerWishesToRecieveString) {
     var playerWishesToRecieve = [];
     playerWishesToRecieve = playerWishesToRecieveString.split(',');

     return (playerWishesToRecieve);
 }

 $("#requestTrade").click(function () {

     presentTradeDealRequested()
 });
 //updates what the person you are trading with owns on the trading display
 function updateTraderOwns(tradeWith) {
     var tradePlayerStuff = "";
     var indexTradePlayer = 1;

     document.getElementById("trade_with").innerHTML = "Trade with: " + tradeWith;
     for (i = 0; i < tiles2.length; i++) {
         if (tradeWith == tiles2[i].ownedBy) {
             //if (tiles2[i].mortgaged == 1) {

             tradePlayerStuff += indexTradePlayer + "." + tiles2[i].name + " ";
             tradePlayerStuffArray[indexTradePlayer] = tiles2[i].name;
             indexTradePlayer++;
             //}
         }

     }
     document.getElementById("trader_player_owns").innerHTML = ":" + tradePlayerStuff;



 }
 //alows current player to press butoon to change who they are trading with
 $("#changeTrader").click(function () {

     if (tradeWith < noOfPlayers) {
         tradeWith++;
     } else {
         tradeWith = 1;
     }
     document.getElementById("trade_with").innerHTML = "Trade with: " + tradeWith;



     updateTraderOwns(tradeWith);
 });
