//-------------------------------------------
//Sell functions
//-------------------------------------------

//-------------------------------------------
//Sell properties button
//-------------------------------------------

$(function () {
    $('#startSell').click(function () {
        sellProperty(currentPlayer);
    });
});

//-------------------------------------------
//Clicked on a proprty to be sold
//-------------------------------------------

$('body').on('click', '#sellButtonClick', function () {
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].id == this.name) {
            tiles2[i].canBuy = 1;
            tiles2[i].ownedBy = -1;
            $('#infoBox').html("<strong>" + tiles2[i].id + "'s</strong> has been sold and is now available to other players for purchase.");

            if (tiles2[i].mortgaged == 1) {
                var newBal = parseInt(players[currentPlayer].money) + (parseInt(tiles2[i].cost) / 2);
                players[currentPlayer].money = newBal;
                updateMoney(currentPlayer, newBal);
                changeOwnedPropertyIcons(showingPlayer);
            } else {
                var newBal = parseInt(players[currentPlayer].money) + (parseInt(tiles2[i].cost));
                players[currentPlayer].money = newBal;
                updateMoney(currentPlayer, newBal);
                changeOwnedPropertyIcons(showingPlayer);
            }



            hideAllWindows();
        }
    }

    $('#startTurn').prop('disabled', false);
});

//-------------------------------------------
//Show sell properties window
//-------------------------------------------

function sellProperty(player) {
    //$('#startTurn').prop('disabled', true);
    console.log("Log - Loading sell properties window.")
    $('#mortgage_window').hide();
    $('#unmortgage_window').hide();
    $('#sell_properties_window').show();
    //clear the old ones
    for (p = 0; p < 50; p++) {
        $("#sellButton").remove();
    }
    //add the new

    for (i = 0; i < tiles2.length; i++) {
        if (player == tiles2[i].ownedBy) {

            if (tiles2[i].houses == 0) {
                $('#toBeSold').append('<div class="col" id="sellButton"><button type="button" class="btn btn-outline-info spacer_big_bottom" id="sellButtonClick" name="' + tiles2[i].id + '">' + tiles2[i].name + '</button></div>');
            }

        } else {}
    }
    //console.log("Log - Showing properties window.")
}

function updateText(text) {
    $('#infoBox').html(text);
}
