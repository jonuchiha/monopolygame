//-------------------------------------------
//Adds a house to a tile
//-------------------------------------------

function appendHouse(tile, offset, set) {
    if (availableHouses > 0) {
        if (canAfford(currentPlayer, parseInt(tiles2[tile].houseCost))) {
            noHousesOnSet[set]++;
            availableHouses--;
            housesAvailableText();
            $("#" + tiles2[tile].id).append('<img class="house' + (noHousesOnSet[set] + offset) + '" src="img/house.png" id="' + tile + 'house' + (noHousesOnSet[set] + offset) + '" width="35px"/>').show('slow');
            tiles2[tile].houses = parseInt(tiles2[tile].houses) + 1;
            players[currentPlayer].money = parseInt(players[currentPlayer].money) - parseInt(tiles2[tile].houseCost);
            updateP(currentPlayer);
            console.log("New rent for " + tiles2[tile].name + " is " + calcRent(tile));
        } else {
            updateText("You cannot afford a house for this set.");
        }
    } else {
        updateText("There are no more houses available.")
    }
}

//-------------------------------------------
//Adds a hotel to a tile
//-------------------------------------------

function appendHotel(tile, set) {
    if (availableHotels > 0) {
        if (canAfford(currentPlayer, parseInt(tiles2[tile].hotelCost))) {
            noHousesOnSet[set]++;
            availableHouses += 4;
            availableHotels--;
            housesAvailableText();
            for (i = 1; i < 5; i++) {
                $("#" + tile + "house" + i).remove();
                console.log("removing" + "#" + tile + "house" + i)
            }

            $("#" + tiles2[tile].id).append('<img class="hotel" src="img/hotel.png" id="hotel_' + tile + '" width="86px"height="58px" />').show('slow');
            tiles2[tile].houses = parseInt(tiles2[tile].houses) + 1;
            players[currentPlayer].money = parseInt(players[currentPlayer].money) - parseInt(tiles2[tile].hotelCost);
            updateP(currentPlayer);
        } else {
            updateText("You cannot afford a hotel for this set.");
        }
    } else {
        updateText("There are no more hotels available.")
    }
}

//-------------------------------------------
//Works out which tile to add houses too
//-------------------------------------------

function buyHouses(color) {
    //stops adding more than one hosue perbutton press
    var done = false;
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].group == color) {
            if (color == "Brown") {
                if (!done) {
                    if (noHousesOnSet[0] < 4) {
                        appendHouse(1, 0, 0);
                    } else if (noHousesOnSet[0] < 8) {
                        appendHouse(3, -4, 0);
                    } else if (noHousesOnSet[0] < 9) {
                        appendHotel(1, 0);
                    } else if (noHousesOnSet[0] < 10) {
                        appendHotel(3, 0);
                    }
                    done = true;
                }
            }
            if (color == "Blue") {
                if (!done) {
                    if (noHousesOnSet[1] < 4) {
                        appendHouse(6, 0, 1);
                    } else if (noHousesOnSet[1] < 8) {
                        appendHouse(8, -4, 1);
                    } else if (noHousesOnSet[1] < 12) {
                        appendHouse(9, -8, 1);
                    } else if (noHousesOnSet[1] < 13) {
                        appendHotel(6, 1);
                    } else if (noHousesOnSet[1] < 14) {
                        appendHotel(8, 1);
                    } else if (noHousesOnSet[1] < 15) {
                        appendHotel(9, 1);
                    }
                    done = true;
                }
            }
            if (color == "Purple") {
                if (!done) {
                    if (noHousesOnSet[2] < 4) {
                        appendHouse(11, 0, 2);
                    } else if (noHousesOnSet[2] < 8) {
                        appendHouse(13, -4, 2);
                    } else if (noHousesOnSet[2] < 12) {
                        appendHouse(14, -8, 2);
                    } else if (noHousesOnSet[2] < 13) {
                        appendHotel(11, 2);
                    } else if (noHousesOnSet[2] < 14) {
                        appendHotel(13, 2);
                    } else if (noHousesOnSet[2] < 15) {
                        appendHotel(14, 2);
                    }
                    done = true;
                }
            }
            if (color == "Orange") {
                if (!done) {
                    if (noHousesOnSet[3] < 4) {
                        appendHouse(16, 0, 3);
                    } else if (noHousesOnSet[3] < 8) {
                        appendHouse(18, -4, 3);
                    } else if (noHousesOnSet[3] < 12) {
                        appendHouse(19, -8, 3);
                    } else if (noHousesOnSet[3] < 13) {
                        appendHotel(16, 3);
                    } else if (noHousesOnSet[3] < 14) {
                        appendHotel(18, 3);
                    } else if (noHousesOnSet[3] < 15) {
                        appendHotel(19, 3);
                    }
                    done = true;
                }
            }
            if (color == "Red") {
                if (!done) {
                    if (noHousesOnSet[4] < 4) {
                        appendHouse(21, 0, 4);
                    } else if (noHousesOnSet[4] < 8) {
                        appendHouse(23, -4, 4);
                    } else if (noHousesOnSet[4] < 12) {
                        appendHouse(24, -8, 4);
                    } else if (noHousesOnSet[4] < 13) {
                        appendHotel(21, 4);
                    } else if (noHousesOnSet[4] < 14) {
                        appendHotel(23, 4);
                    } else if (noHousesOnSet[4] < 15) {
                        appendHotel(24, 4);
                    }
                    done = true;
                }
            }
            if (color == "Yellow") {
                if (!done) {
                    if (noHousesOnSet[5] < 4) {
                        appendHouse(26, 0, 5);
                    } else if (noHousesOnSet[5] < 8) {
                        appendHouse(27, -4, 5);
                    } else if (noHousesOnSet[5] < 12) {
                        appendHouse(29, -8, 5);
                    } else if (noHousesOnSet[5] < 13) {
                        appendHotel(26, 5);
                    } else if (noHousesOnSet[5] < 14) {
                        appendHotel(27, 5);
                    } else if (noHousesOnSet[5] < 15) {
                        appendHotel(29, 5);
                    }
                    done = true;
                }
            }
            if (color == "Green") {
                if (!done) {
                    if (noHousesOnSet[6] < 4) {
                        appendHouse(31, 0, 6);
                    } else if (noHousesOnSet[6] < 8) {
                        appendHouse(32, -4, 6);
                    } else if (noHousesOnSet[6] < 12) {
                        appendHouse(34, -8, 6);
                    } else if (noHousesOnSet[6] < 13) {
                        appendHotel(31, 6);
                    } else if (noHousesOnSet[6] < 14) {
                        appendHotel(32, 6);
                    } else if (noHousesOnSet[6] < 15) {
                        appendHotel(34, 6);
                    }
                    done = true;
                }
            }
            if (color == "DarkBlue") {
                if (!done) {
                    if (noHousesOnSet[7] < 4) {
                        appendHouse(37, 0, 7);
                    } else if (noHousesOnSet[7] < 8) {
                        appendHouse(39, -4, 7);
                    } else if (noHousesOnSet[7] < 9) {
                        appendHotel(37, 7);
                    } else if (noHousesOnSet[7] < 10) {
                        appendHotel(39, 7);
                    }
                    done = true;
                }
            }
        }
    }
}

//-------------------------------------------
//Checks if a player owns a set
//-------------------------------------------

function checkIfOwnsSet(currentPlayer) {
    //sets holds how many of each set the player owns
    var sets = [0, 0, 0, 0, 0, 0, 0, 0];
    $("#addHouseBrown").hide();
    $("#addHouseBlue").hide();
    $("#addHousePurple").hide();
    $("#addHouseOrange").hide();
    $("#addHouseRed").hide();
    $("#addHouseYellow").hide();
    $("#addHouseGreen").hide();
    $("#addHouseDarkBlue").hide();
    for (i = 0; i < tiles2.length; i++) {
        if (tiles2[i].ownedBy == currentPlayer) {

            if (tiles2[i].group == "Brown") {
                sets[0]++;
                var brownNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Blue") {
                sets[1]++;
                var blueNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Purple") {
                sets[2]++;
                var purpleNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Orange") {
                sets[3]++;
                var orangeNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Red") {
                sets[4]++;
                var redNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Yellow") {
                sets[5]++;
                var yellowNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "Green") {
                sets[6]++;
                var greenNo = tiles2[i].setAmmout;
            } else if (tiles2[i].group == "DarkBlue") {
                sets[7]++;
                var darkBlueNo = tiles2[i].setAmmout;
            }
        }
    }

    if (sets[0] == brownNo) {
        //alert("You have brown set");
        $("#addHouseBrown").show();
    }
    if (sets[1] == blueNo) {
        //alert("You have blue set");
        $("#addHouseBlue").show();
    }
    if (sets[2] == purpleNo) {
        //alert("You have purple set");
        $("#addHousePurple").show();
    }
    if (sets[3] == orangeNo) {
        //alert("You have ornage set");
        $("#addHouseOrange").show();
    }
    if (sets[4] == redNo) {
        //alert("You have red set");
        $("#addHouseRed").show();
    }
    if (sets[5] == yellowNo) {
        //alert("You have yellow set");
        $("#addHouseYellow").show();
    }
    if (sets[6] == greenNo) {
        //alert("You have green set");
        $("#addHouseGreen").show();
    }
    if (sets[7] == darkBlueNo) {
        //alert("You have dark blue set");
        $("#addHouseDarkBlue").show();
    }


    //tiles2[1].setAmmout;

}
