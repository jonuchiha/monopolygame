//-------------------------------------------
//Mortgage/unmortgage functions and
//-------------------------------------------

//-------------------------------------------
//Mortgage properties button
//-------------------------------------------

$(function () {
    $('#startMortgage').click(function () {
        mortgageProperty(currentPlayer);
    });
});

//-------------------------------------------
//Unmortgage properties button
//-------------------------------------------

$(function () {
    $('#startUnmortgage').click(function () {
        unmortgageProperty(currentPlayer);
    });
});


//-------------------------------------------
//Show mortgage properties window
//-------------------------------------------

function mortgageProperty(player) {
    //$('#startTurn').prop('disabled', true);
    console.log("Log - Loading properties window.");
    $('#buysellhouses_window').hide();
    $('#unmortgage_window').hide();
    $('#mortgage_window').show();
    //clear the old ones
    for (p = 0; p < 50; p++) {
        $("#mortgageButton").remove();
    }
    //add the new

    for (i = 0; i < tiles2.length; i++) {
        if (player == tiles2[i].ownedBy) {

            if (tiles2[i].mortgaged == 0) {
                $('#toBeMortgaged').append('<div class="col" id="mortgageButton"><button type="button" class="btn btn-outline-info spacer_big_bottom" id="mortgageButtonClick" name="' + tiles2[i].id + '">' + tiles2[i].name + '</button></div>');
            }
        } else {}
    }
    console.log("Log - Showing properties window.")
}


//-------------------------------------------
//Show unmorgage properties window
//-------------------------------------------

function unmortgageProperty(player) {
    //$('#startTurn').prop('disabled', true);
    console.log("Log - Loading properties window.");
    $('#buysellhouses_window').hide();
    $('#mortgage_window').hide();
    $('#unmortgage_window').show();
    //clear the old ones
    for (p = 0; p < 50; p++) {
        $("#unmortgageButton").remove();
    }
    //add the new

    for (i = 0; i < tiles2.length; i++) {
        if (player == tiles2[i].ownedBy) {

            if (tiles2[i].mortgaged == 1) {
                $('#toBeUnmortgaged').append('<div class="col" id="unmortgageButton"><button type="button" class="btn btn-outline-info spacer_big_bottom" id="unmortgageButtonClick" name="' + tiles2[i].id + '">' + tiles2[i].name + ' - £' + (parseInt(tiles2[i].cost) / 2) + '</button></div>');
            }
        } else {}
    }
    console.log("Log - Showing properties window.")
}

//-------------------------------------------
//Clicked on a proprty to be mortgaged.
//-------------------------------------------

$('body').on('click', '#mortgageButtonClick', function () {
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].id == this.name) {
            tiles2[i].mortgaged = 1;
            $('#infoBox').html("<strong>" + tiles2[i].id + "'s</strong> has been mortgaged.");
            var newBal = parseInt(players[currentPlayer].money) + (parseInt(tiles2[i].cost) / 2);
            players[currentPlayer].money = newBal;
            updateMoney(currentPlayer, newBal);
            changeOwnedPropertyIcons(showingPlayer);

            hideAllWindows();
            //$('#cant_pay_window').show();
/*            if (rentPayingActive) {
                payRent(currentPlayer);
                rentPayingActive = false;
            }*/
        }
    }

    //$('#startTurn').prop('disabled', false);
});

//-------------------------------------------
//Clicked on a proprty to be unmortgaged.
//-------------------------------------------

$('body').on('click', '#unmortgageButtonClick', function () {
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].id == this.name) {
            tiles2[i].mortgaged = 0;
            $('#infoBox').html("<strong>" + tiles2[i].id + "'s</strong> has been unmortgaged.");
            var newBal = parseInt(players[currentPlayer].money) - (parseInt(tiles2[i].cost) / 2);
            players[currentPlayer].money = newBal;
            updateMoney(currentPlayer, newBal);
            changeOwnedPropertyIcons(showingPlayer);

            hideAllWindows();
        }
    }

    //$('#startTurn').prop('disabled', false);
});
