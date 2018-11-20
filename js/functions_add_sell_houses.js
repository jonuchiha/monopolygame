//-------------------------------------------
//Sell functions
//-------------------------------------------

//-------------------------------------------
//Add house button
//-------------------------------------------

$(function () {
    $('#addHouse').click(function () {
        addHouses(currentPlayer);
    });
});

//-------------------------------------------
//Sell house button
//-------------------------------------------

$(function () {
    $('#sellHouse').click(function () {
        sellHouses(currentPlayer);
    });
});

//-------------------------------------------
//Click sell houses button
//-------------------------------------------

function sellHouses(player) {
    console.log("here i am , once agasin");
    $('#mortgage_window').hide();
    $('#unmortgage_window').hide();
    $('#sell_properties_window').hide();
    $('#add_houses_window').hide();
    $('#sell_houses_window').show();
    //clear the old ones
    for (p = 0; p < 50; p++) {
        $("#housesToBeSoldBtn").remove();
    }
    //add the new

    for (i = 0; i < tiles2.length; i++) {
        if (player == tiles2[i].ownedBy) {
            if (tiles2[i].houses > 0 && !(tiles2[i].houses == 5)) {
                $('#toBeSoldHouses').append('<div class="col" id="housesToBeSoldBtn"><button type="button" class="btn btn-outline-info spacer_big_bottom" id="sellHouseButtonClick" name="' + tiles2[i].id + '">' + tiles2[i].name + ' - Houses: ' + (parseInt(tiles2[i].houses)) + '</button></div>');
            }
            if (tiles2[i].houses == 5) {
                console.log("HOUSES IS HOTELS");
                $('#toBeSoldHouses').append('<div class="col" id="housesToBeSoldBtn"><button type="button" class="btn btn-outline-info spacer_big_bottom" id="sellHotelButtonClick" name="' + tiles2[i].id + '">' + tiles2[i].name + ' - Hotels: ' + "1" + '</button></div>');
            }
        } else {}
    }
}


//-------------------------------------------
//Clicked on house to sell
//-------------------------------------------

$('body').on('click', '#sellHouseButtonClick', function () {
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].id == this.name) {
            tiles2[i].houses = (parseInt(tiles2[i].houses) - 1);
            updateText("You have sold 1 house.");
            $("#" + i + "house" + (parseInt(tiles2[i].houses) + 1)).remove();
            //console.log("#" + i + "house" + tiles2[i].houses);

            var newBal = parseInt(players[currentPlayer].money) + (parseInt(tiles2[i].houseCost));
            players[currentPlayer].money = newBal;
            updateMoney(currentPlayer, newBal);

            var set = returnSet(i);
            noHousesOnSet[set]--;

            availableHouses++;
            housesAvailableText();

            hideAllWindows();
        }
    }


    sellHouses(currentPlayer);
});


//-------------------------------------------
//Clicked on hotels to sell
//-------------------------------------------

$('body').on('click', '#sellHotelButtonClick', function () {
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].id == this.name) {
            tiles2[i].houses = (parseInt(tiles2[i].houses) - 1);
            updateText("You have sold 1 hotel.");


            $("#" + "hotel_" + i).remove();
            $("#" + tiles2[i].id).append('<img class="house' + 1 + '" src="img/house.png" id="' + i + 'house' + 1 + '" width="35px"/>').show('slow');
            $("#" + tiles2[i].id).append('<img class="house' + 2 + '" src="img/house.png" id="' + i + 'house' + 2 + '" width="35px"/>').show('slow');
            $("#" + tiles2[i].id).append('<img class="house' + 3 + '" src="img/house.png" id="' + i + 'house' + 3 + '" width="35px"/>').show('slow');
            $("#" + tiles2[i].id).append('<img class="house' + 4 + '" src="img/house.png" id="' + i + 'house' + 4 + '" width="35px"/>').show('slow');

            var newBal = parseInt(players[currentPlayer].money) + (parseInt(tiles2[i].hotelCost));
            players[currentPlayer].money = newBal;
            updateMoney(currentPlayer, newBal);

            var set = returnSet(i);
            noHousesOnSet[set]--;
            availableHotels++;
            availableHouses = availableHouses - 4;
            housesAvailableText();

            hideAllWindows();
        }
    }

    sellHouses(currentPlayer);
});


//-------------------------------------------
//Click add houses button
//-------------------------------------------

function addHouses(player) {
    $('#mortgage_window').hide();
    $('#unmortgage_window').hide();
    $('#sell_properties_window').hide();
    $('#sell_houses_window').hide();
    $('#add_houses_window').show();
    checkIfOwnsSet(currentPlayer);
}

//-------------------------------------------
//Returns the set a tile is part of
//-------------------------------------------

function returnSet(t) {
    if (t == 1 || t == 3) {
        return 0;
    }
    if (t == 6 || t == 8 || t == 9) {
        return 1;
    }
    if (t == 11 || t == 13 || t == 14) {
        return 2;
    }
    if (t == 16 || t == 18 || t == 19) {
        return 3;
    }
    if (t == 21 || t == 23 || t == 24) {
        return 4;
    }
    if (t == 26 || t == 27 || t == 29) {
        return 5;
    }
    if (t == 31 || t == 32 || t == 34) {
        return 6;
    }
    if (t == 37 || t == 39) {
        return 7;
    }

}


//-------------------------------------------
//Add houses to set buttons
//-------------------------------------------

$("#addHouseBrown").click(function () {
    if (noHousesOnSet[0] < 10) {
        buyHouses("Brown");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseBlue").click(function () {
    if (noHousesOnSet[1] < 15) {
        buyHouses("Blue");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHousePurple").click(function () {
    if (noHousesOnSet[2] < 15) {
        buyHouses("Purple");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseOrange").click(function () {
    if (noHousesOnSet[3] < 15) {
        buyHouses("Orange");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseRed").click(function () {
    if (noHousesOnSet[4] < 15) {
        buyHouses("Red");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseYellow").click(function () {
    if (noHousesOnSet[5] < 15) {
        buyHouses("Yellow");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseGreen").click(function () {
    if (noHousesOnSet[6] < 15) {
        buyHouses("Green");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});
$("#addHouseDarkBlue").click(function () {
    if (noHousesOnSet[7] < 15) {
        buyHouses("DarkBlue");
    } else {
        updateText("You already have the maximum number of houses.");
    }
});