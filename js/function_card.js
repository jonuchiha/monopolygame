//-------------------------------------------
// Pot Luck and Opportunity Knocks Cards
//-------------------------------------------

function checkCard(player) {

    var checkName = tiles2[parseInt(players[player].location)].name;
    var subString1 = "Pot L";
    var subString2 = "Opportunity K";

    if (oppCardIndex > 15) {
        oppCardIndex = 0;
    }

    if (potCardIndex > 15) {
        potCardIndex = 0;
    }

    if (checkName.includes(subString1)) {
        console.log("Log - Pot Luck Hit!!!!!!!!");
        switch (potLuckCards[potCardIndex].action) {
            case "Bank pays player £50":
                //0
                players[player].money = parseInt(players[player].money) + 50;
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Bank pays player £100":
                //1
                players[player].money = parseInt(players[player].money) + 100;
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player token moves forwards to Turing Heights":
                //2
                var roll = 39 - players[player].location;
		$('#startTurn').prop('disabled', true);
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Player token moves forwards to Turing Heights");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player moves token 1":
                //3
		$('#startTurn').prop('disabled', true);
                if (players[player].location < 24) {
                    var roll = 24 - players[player].location;
                } else {
                    var roll = (40 - players[player].location) + 24;
                }
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Advance to Han Xin Gardens.");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player puts £15 on free parking":
                //4
                if (parseInt(players[player].money) < 15) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(15, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 15;
                    freeParkingValue = freeParkingValue + 15;
                    $('#cardBox').show();
                    $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                }
                break;

            case "Player pays £150 to the bank":
                //5
                if (parseInt(players[player].money) < 150) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(100, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 150;
                    $('#cardBox').show();
                    $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                }
                break;

            case "Player moves token 2":
                //6
		$('#startTurn').prop('disabled', true);
                if (players[player].location < 15) {
                    var roll = 15 - players[player].location;
                } else {
                    var roll = (40 - players[player].location) + 15;
                }
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Take a trip to Hove station.");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Bank pays £150 to the player":
                //7
                players[player].money = parseInt(players[player].money) + 150;
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;
                break;

            case "Player pays money to the bank 1":
                //8
                var bill = 0;
                for ($i = 0; $i < 40; $i++) {

                    if (parseInt(tiles2[i].hotels) > 0 && tiles2[i].ownedBy == players[player].id) {
                        bill = bill + 115 * parseInt(tiles2[i].hotels);
                    } else if (parseInt(tiles2[i].hotels) > 0 && tiles2[i].ownedBy == players[player].id) {
                        bill = bill + 40 * parseInt(tiles2[i].houses);
                    }
                }


                if (parseInt(players[player].money) < bill) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(bill, player)
                } else {
                    players[player].money = parseInt(players[player].money) - bill;
                    $('#cardBox').show();
                    $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                }

            case "Player moves token 3":
                //9
		$('#startTurn').prop('disabled', true);
                var roll = 40 - players[player].location;
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Advance to GO");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player pays money to the bank 2":
                //10
                var bill = 0;
                for ($i = 1; $i < 41; $i++) {

                    if (tiles2[i].hotels > 0 && tiles2[i].ownedBy == players[player].id) {
                        bill = bill + 100 * parseInt(tiles2[i].hotels);
                    } else if (tiles2[i].houses > 0 && tiles2[i].ownedBy == players[player].id) {
                        bill = bill + 25 * parseInt(tiles2[i].houses);
                    }
                }


                if (parseInt(players[player].money) < bill) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(bill, player)
                } else {
                    players[player].money = parseInt(players[player].money) - bill;
                    $('#cardBox').show();
                    $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                }
                break;

            case "Player moves token 4":
                //11
		$('#startTurn').prop('disabled', true);
                var roll = (40 - players[player].location) + (players[player].location - 3);
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Advance to Han Xin Gardens.");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player moves token 5":
                //12
		$('#startTurn').prop('disabled', true);
                if (players[player].location < 11) {
                    var roll = 11 - players[player].location;
                } else {
                    var roll = (40 - players[player].location) + 11;
                }

                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                alert("Pot Luck - Take a trip to Hove station.");
                movePlayer(roll, player);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "As the card says":
                //13
                players[player].in_jail = 1;
                sendPlayerToJail(player);
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            case "Player puts £20 on free parking":
                //14
                if (parseInt(players[player].money) < 20) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(25, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 20;
                    freeParkingValue = freeParkingValue + 20;
                    $('#cardBox').show();
                    $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                }
                break;

            case "Retained by the player until needed. No resale or trade value":
                //15
                players[player].getOutJailCard = 1;
                $('#cardBox').show();
                $('#cardBox').html("Pot Luck!!! <strong>Player " + currentPlayer + "</strong> : " + potLuckCards[potCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Pot Luck!!!: " + potLuckCards[potCardIndex].description);
                break;

            default:
                console.log("Log - Failed Pop Luck!!!");
        }
        potCardIndex = potCardIndex + 1;


        //OPORTUNIYY KNOCKSSSS
    } else if (checkName.includes(subString2)) {
        console.log("Log - Opportunity Knocks Hit!!!!!!!!");

        switch (oppKnocksCards[oppCardIndex].action) {
            case "Bank pays player £100":
                //0
                players[player].money = parseInt(players[player].money) + 100;
                $('#cardBox').show();
                $('#cardBox').html(" Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Bank pays player £20":
                //1
                players[player].money = parseInt(players[player].money) + 20;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Player token moves backwards to Crapper Street":
                //2
		$('#startTurn').prop('disabled', true);
                var roll = (40 - players[player].location) + 1;
                players[player].money = parseInt(players[player].money) - 200;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                alert("Pot Luck - Advance to Han Xin Gardens.");
                movePlayer(roll, player);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Bank pays player £20 refund":
                //3
                players[player].money = parseInt(players[player].money) + 20;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Bank pays player £200":
                //4
                players[player].money = parseInt(players[player].money) + 200;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Player pays £100 to the bank":
                //5
                if (parseInt(players[player].money) < 100) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(100, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 100;
                    $('#cardBox').show();
                    $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                }
                break;

            case "Player pays £50 to the bank":
                //6
                if (parseInt(players[player].money) < 50) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(50, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 50;
                    $('#cardBox').show();
                    $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                }
                break;

            case "Player moves forwards to GO":
                //7
                players[player].location = 0;
                players[player].money = parseInt(players[player].money) + 200;
                $("img").remove(".player_" + player);
                $("#" + tiles[players[player].location + 1]).append('<img class="player_' + player + '"src="img/' + currentPlayerIcon[player] + '.png" width="35px" />').show(1000);
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description + "- Collect £200");
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Bank pays player £50":
                //8
                players[player].money = parseInt(players[player].money) + 50;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "If fine paid, player puts £10 on free parking":
                //9
                $("#oppknocksoptions").show();
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Player puts £50 on free parking":
                //10
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);

                if (parseInt(players[player].money) < 50) {
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    cantPay(50, player)
                } else {
                    players[player].money = parseInt(players[player].money) - 50;
                    freeParkingValue = freeParkingValue + 50;
                    $('#cardBox').show();
                    $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + " £50 Fine Paid To Free Parking!");
                    $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                    console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                }
                break;

            case "Bank pays £100 to the player":
                //11
                players[player].money = parseInt(players[player].money) + 100;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Go to jail. Do not pass GO, do not collect £200":
                //12
                players[player].in_jail = 1;
                sendPlayerToJail(player);
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Bank pays player £25":
                //13
                players[player].money = parseInt(players[player].money) + 25;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Player receives £10 from each player":
                //14
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);

                var i;
                for (i = 1; i < noOfPlayers + 1; i++) {
                    if (i != currentPlayer) {
                        players[i].money = parseInt(players[i].money) - 10;
                        $('#player' + i + 'Money').html("£" + players[i].money);
                        console.log('#player' + i + 'Money');
                        players[currentPlayer].money = parseInt(players[currentPlayer].money) + 10;
                    }
                }

                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            case "Retained by the player until needed. No resale or trade value":
                //15
                players[player].getOutJailCard = 1;
                $('#cardBox').show();
                $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> : " + oppKnocksCards[oppCardIndex].description);
                $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
                console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
                break;

            default:
                console.log("Log - Failed Opp Knocks!!!");
        }
        oppCardIndex = oppCardIndex + 1;
    }

}


$(function () {
    $('#paycardfine').click(function () {
        var player = currentPlayer;

        if (parseInt(players[player].money) < 10) {
            $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
            cantPay(10, player)
        } else {
            players[player].money = parseInt(players[player].money) - 10;
            freeParkingValue = freeParkingValue + 10;
            $('#cardBox').show();
            $('#cardBox').html("Opp Knocks!!! <strong>Player " + currentPlayer + "</strong> :" + " £10 Fine Paid!");
            $('#player' + currentPlayer + 'Money').html("£" + players[currentPlayer].money);
            $("#oppknocksoptions").hide();
            console.log("Log - Opp Knocks!!!: " + oppKnocksCards[oppCardIndex].description);
        }

    });
});

$(function () {
    $('#getnewoppcard').click(function () {
        var player = currentPlayer;
        //var index = oppCardIndex;
        //oppCardIndex = index + 1;
        $("#oppknocksoptions").hide();
        checkCard(player);

    });
});
