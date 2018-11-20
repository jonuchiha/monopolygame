function startBidding(location) {
    //reset all to active
    for (i = 0; i < noOfPlayers; i++) {
        players[currentPlayer].bidding = 0;
    }
    bidProp = location;
    currentBid = 0;
    currentBidder = currentPlayer;
    players[currentPlayer].bidding = 1;

    incrementCB();


    $('#biddingWindow').show();
    $('#currentBid').html(currentBid);
    $('#currentBidder').html(currentBidder);

}

$(function () {
    $('#exitBid').click(function () {
        console.log("Player " + currentBidder + " Leaving bid");
        players[currentBidder].bidding = 1;

        var check = 0;
        for (i = 1; i <= noOfPlayers; i++) {
            if (players[i].bidding == 1) {
                check++;
                console.log("check is player ->" + players[i].id);
            }
        }
        //Players wins the bid
        if (check == (noOfPlayers - 1)) {
            $('#bidText').html("Player " + currentBidder + " has won " + tiles2[bidProp].name + ".");
            tiles2[bidProp].ownedBy = currentBidder;
            players[currentBidder].money = parseInt(players[currentBidder].money) - currentBid;
        } else if (check == (noOfPlayers)) {
            //No one wanted to bid
            $('#biddingWindow').hide();
            updateText("No one as bid, the property has been passed back to the bank.")
        } else {
            //Still bidding
            incrementCB();
        }
    });
});
$(function () {
    $('#increaseBid').click(function () {
        var checkMoney = 0;
        checkMoney = parseInt(players[currentBidder].money);
        if (checkMoney - (currentBid + 25) < 1) {
            updateText("You cannot afford this bid, please leave.");
        } else {
            console.log("Incresing Bid");
            currentBid = currentBid + 25;
            incrementCB();
        }

    });
});

function incrementCB() {
    console.log("Incrementing bidder");
    if (currentBidder >= noOfPlayers) {
        currentBidder = 1;
    } else {
        //console.log("Incrementing bidder by ++");
        currentBidder++;
    }
    if (players[currentBidder].bidding == 1) {
        incrementCB();
    }

    $('#currentBid').html(currentBid);
    $('#currentBidder').html(currentBidder);
}
