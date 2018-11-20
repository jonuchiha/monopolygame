//-------------------------------------------
//Assigns the tokens to the players
//-------------------------------------------
//-------------------------------------------
$("#playerButton1").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 1;
        $('#playerButton1').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/1.png";

        $('#infoBox').html("Token set.");
        settingUpPlayer = false;
    }
});
$("#playerButton2").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 2;
        $('#playerButton2').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/2.png";

        $('#infoBox').html("Token set.");
    }
});
$("#playerButton3").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 3;
        $('#playerButton3').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/3.png";

        $('#infoBox').html("Token set.");
    }
});
$("#playerButton4").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 4;
        $('#playerButton4').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/4.png";

        $('#infoBox').html("Token set.");
    }
});
$("#playerButton5").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 5;
        $('#playerButton5').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/5.png";

        $('#infoBox').html("Token set.");
    }
});
$("#playerButton6").click(function () {
    if (settingUpPlayer) {
        settingUpPlayer = false;
        currentPlayerIcon[currentPlayer] = 6;
        $('#playerButton6').hide();

        document.getElementById("tempToken_" + noOfPlayers).src = "img/6.png";

        $('#infoBox').html("Token set.");
    }
});