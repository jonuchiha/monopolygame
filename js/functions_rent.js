//-------------------------------------------
//Pay rent to player
//-------------------------------------------

function payRent(player) {
    console.log("Player " + player + " is paying rent.")
    var rentDue = parseInt(calcRent(players[player].location));
    var playerInitial = parseInt(players[player].money);
    var ownerInitial = parseInt(players[tiles2[players[player].location].ownedBy].money);

    players[player].money = playerInitial - rentDue;
    players[tiles2[players[player].location].ownedBy].money = ownerInitial + rentDue;

    updateMoney(player, players[currentPlayer].money);
    updateMoney(players[tiles2[players[player].location].ownedBy].id, players[tiles2[players[player].location].ownedBy].money);

    $('#infoBox').html("<strong>Player " + currentPlayer + "</strong> has paid " + rentDue + " rent.");
}


//-------------------------------------------
//Deal with a player who is unable to pay rent/fees
//-------------------------------------------

function cantPay(ammount, player) {
    $('#startTurn').prop('disabled', true);
    $('#endTurn').prop('disabled', true);
    //$('#declareBankruptcy').show();

    $('#cant_pay_window').show();
    if (payingPlayer) {
        $('#cant_pay_text').html("You owe <strong>Player " + player + " £" + ammount);
    } else {
        $('#cant_pay_text').html("You owe <strong>£" + ammount);
    }
    outstandingPayment = ammount;

}

//-------------------------------------------
//Set the outstanding payment all back to 0
//-------------------------------------------

function resetOutstanding() {
    $('#endTurn').prop('disabled', false);
    rentPayingActive = false;
    payingPlayer = false;
    outstandingPayment = 0;
    $('#cant_pay_window').hide();
}
