//-------------------------------------------
//Adds and removes images from the right hand side player's owned images box.
//-------------------------------------------
function changeOwnedPropertyIcons(showingPlayer) {
    var count = 0;
    $('#container_right').show();
    $("img").remove(".ownedProperty");
    $("p").remove(".ownedProperty");

    document.getElementById("current_player_info_box").innerHTML = "<strong>Player " + showingPlayer + "'s </strong>Properties";
    //console.log("i am runing player - " + showingPlayer);
    if (showingPlayer == 1) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[1].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    } else if (showingPlayer == 2) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[2].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    } else if (showingPlayer == 3) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[3].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    } else if (showingPlayer == 4) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[4].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    } else if (showingPlayer == 5) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[5].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    } else if (showingPlayer == 6) {
        var p = 0;
        for (p = 0; p < 50; p++) {
            $("#ownedProperty_name").remove();
        }
        for (i = 0; i < tiles2.length; i++) {

            if (players[6].id == tiles2[i].ownedBy) {
                if (tiles2[i].mortgaged == 1) {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";><strike>' + tiles2[i].name + '</strike></p>').show('slow');
                } else {
                    $("#infoBox2").append('<p id="ownedProperty_name" style="border-style: solid; border-color:' + tiles2[i].group + '";>' + tiles2[i].name + '</p>').show('slow');
                }
                count++;
            } else {}

        }
    }
}