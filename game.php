<?php

include('load.php');


$tilearray = array();
for($k = 1; $k < 41; $k++) {
	array_push($tilearray, "Hello");
	$tilearray[$k] = $tiles[$k]->get_id();
}

?>

    <html>

    <head>
        <?php include('statics/favicon_load.php'); ?>

        <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.7">
        <title>Property Tycoon</title>

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/edits.css" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Patua+One" rel="stylesheet">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </head>


    <body>
        <div class="container_right" id="container_right">
            <div class="container_left_upper">

                <div class="row">
                    <div class="col spacer_big">
                        <div class="alert alert-info text-center" role="alert" id="infoBox2">
                            <p id="current_player_info_box">Player:</p>

                        </div>

                    </div>

                </div>
                <div class="row row-centered spacer_bottom">
                    <div class="col">
                        <button type="button" class="btn btn-outline-info spacer" id="changeShowing">Show Next Players Property</button>
                    </div>
                </div>


                <div class="tradingBox" id="tradingBox">
                    <div class="confirmTrading" id="confirmTrading">
                        Would you like to accept this deal?
                        <p id="present_offer_give">The current player would like to give you:</p>
                        <p id="present_offer_recieve">To be swapped with:</p>
                        <button type="button" class="btn btn-outline-info spacer" id="accept_trade">Accept this offer</button>
                        <button type="button" class="btn btn-outline-info spacer" id="decline_trade">Decline this offer</button>
                    </div>
                    <div class="innergridcontainerTrading" id="innergridcontainerTrading">
                        .....................................................
                        <br> Trading:
                        <br> .....................................................
                        <div class="current_players_property">
                            <p id="current_player_trade">Current Player:</p>
                            Property of current player
                            <br>
                            <p id="current_player_owns"></p>

                        </div>
                        .....................................................
                        <div class="trade_players_property">
                            <p id="trade_with">Trade with:</p>
                            Property of player trading with
                            <br>
                            <p id="trader_player_owns"></p>

                        </div>
                        .....................................................
                        <button type="button" class="btn btn-outline-info spacer" id="changeTrader">Change who trading with</button>
                        <br>
                        <form name="Form1" id="form1" action="/action_page.php" onsubmit="return validateForm()" method="post">
                            Comma separated list of numbers of properties you would like to give up:
                            <br> e.g.1,4,6
                            <br>
                            <input type="text" name="current">


                        </form>
                        <form name="Form2" id="form2" action="/action_page.php" onsubmit="return validateForm()" method="post">
                            Comma separated list of numbers of properties you would like to give recieve:
                            <br>
                            <input type="text" name="other">

                        </form>
                        <div class="row">
                            <button type="button" class="btn btn-outline-info spacer" id="requestTrade">Request Trade</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container_left_middle">
                <div class="alert alert-info text-center" role="alert" id="">
                    Infomation
                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <p>Houses Available =
                            <span id="housesAvailableText"></span>
                        </p>
                    </div>

                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <p>Hotels Available =
                            <span id="hotelsAvailableText"></span>
                        </p>
                    </div>

                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <p>Free Parking =
                            <span id="freeParkingText"></span>
                        </p>
                    </div>

                </div>
            </div>

            <div class="container_left_lower" id="biddingWindow">
                <div class="alert alert-info text-center" role="alert" id="">
                    Property Bidding
                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <h2 id="bidText">Current Bid = £
                            <span id="currentBid"></span>
                        </h2>
                    </div>
                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <p>Player&nbsp;
                            <span id="currentBidder"></span>
                        </p>
                    </div>
                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-big" id="increaseBid">Increase Bid</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger btn-big" id="exitBid">Leave</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="container_left_container">
            <div class="container_left_upper">
                <div class="row spacer_big" id="tokenRow" style="width:75%; margin-left:12.5%">
                    <div class="col">
                        <img src="img/1.png" id="playerButton1" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="img/2.png" id="playerButton2" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="img/3.png" id="playerButton3" class="img-fluid">
                    </div>
                </div>
                <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                    <div class="col">
                        <img src="img/4.png" id="playerButton4" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="img/5.png" id="playerButton5" class="img-fluid">
                    </div>
                    <div class="col">
                        <img src="img/6.png" id="playerButton6" class="img-fluid">
                    </div>
                </div>

                <!------- Opportunity Knocks / Pot Luck Info Box ---->
                <div class="row">
                    <div class="col spacer_big" id="infoBox_col">
                        <div class="alert alert-info text-center" role="alert" id="cardBox">
                            Pot Luck / Opportunity Knocks
                        </div>
                    </div>
                </div>

                <!------- Main Game Info Box ---->
                <div class="row">
                    <div class="col spacer_big" id="infoBox_col">
                        <div class="alert alert-info text-center" role="alert" id="infoBox">
                            Please select a token for each player.
                        </div>
                    </div>
                </div>



                <div class="row row-centered">
                    <div class="col">
                    </div>
                    <div class="col" id="dice1" style="font-size: 80px;">

                    </div>
                    <div class="col" id="dice2" style="font-size: 80px;">

                    </div>
                    <div class="col">
                    </div>
                </div>

                <!------- Opportunity Knocks Pay Fine or Pick Another Card Buttons ---->
                <div class="row row-centered" id="oppknocksoptions">
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-big" id="paycardfine">Pay Fine</button>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-big" id="getnewoppcard">Another Card</button>
                    </div>
                </div>


                <div class="row row-centered" id="inital_buttons">
                    <div class="col">
                        <div class="dropdown">
                            <button class="btn btn-outline-success btn-big dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Add Player
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton ">
                                <a class="dropdown-item" href="#" id="newPlayer">Human</a>
                                <a class="dropdown-item" href="#">Computer</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-outline-success btn-big" id="startgame">Start Game</button>
                    </div>

                </div>


                <div class="row row-centered">
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger btn-big spacer" id="startTurn">Roll Dice</button>
                    </div>

                    <div class="col">
                        <button type="button" class="btn btn-outline-info spacer btn-big" id="endGame">End Game</button>
                    </div>

                </div>





                <div class="col spacer_big">
                    <div class="row row-centered">
                        <div class="col" id="player1InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player1Model">Player 1</button>
                            <p id="player1Money">£1500</p>
                        </div>
                        <div class="col" id="player2InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player2Model">Player 2</button>
                            <p id="player2Money">£1500</p>
                        </div>
                        <div class="col" id="player3InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player3Model">Player 3</button>
                            <p id="player3Money">£1500</p>
                        </div>
                        <div class="col" id="player4InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player4Model">Player 4</button>
                            <p id="player4Money">£1500</p>
                        </div>
                        <div class="col" id="player5InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player5Model">Player 5</button>
                            <p id="player5Money">£1500</p>
                        </div>
                        <div class="col" id="player6InfoButton">
                            <button type="button" class="btn btn-outline-success" id="player6Model">Player 6</button>
                            <p id="player6Money">£1500</p>
                        </div>

                    </div>
                </div>

            </div>
            <div class="container_left_middle" id="turn_options">
                <div class="alert alert-info text-center" role="alert" id="toBuy">
                    What would you like to do?
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-dark spacer" id="leaveJail">Pay £50 to leave Jail</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="startSell"><i class="fas fa-money-bill-alt"></i> Sell Properties</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="addHouse"><i class="fas fa-home"></i> Add Houses/Hotels</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="sellHouse"><i class="fas fa-home"></i> Sell Houses/Hotels</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="startUnmortgage">Unmortgage Properties</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="startMortgage">Mortgage Properties</button>
                    </div>
                </div>
                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark spacer" id="tradeProperties">Trade Properties</button>
                    </div>
                </div>

                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger spacer" id="endTurn"><i class="fas fa-times"></i> End Turn</button>
                    </div>
                </div>

                <div class="row row-centered" id="options">
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger spacer" id="declareBankruptcy"><i class="fas fa-times"></i> Sell Properties & Declare Bankruptcy</button>
                    </div>
                </div>
            </div>

            <div class="container_left_lower" id="add_houses_window">
                <div class="alert alert-info text-center" role="alert" id="">
                    Add Houses/Hotels
                </div>
                <div class="row row-centered" id="toAdd">
                    <div class="col" id="tokenRow">
                        <button type="button" class="btn" id="addHouseBrown">Add house to Brown set</button>
                    </div>
                    <div class="col" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseBlue">Add house to Blue set</button>
                    </div>
                    <div class="col" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHousePurple">Add house to Purple set</button>
                    </div>
                    <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseOrange">Add house to Orange set</button>
                    </div>
                    <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseRed">Add house to Red set</button>
                    </div>
                    <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseYellow">Add house to Yellow set</button>
                    </div>
                    <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseGreen">Add house to Green set</button>
                    </div>
                    <div class="row" id="tokenRow" style="width:75%; margin-left:12.5%">
                        <button type="button" id="addHouseDarkBlue">Add house to Dark Blue set</button>
                    </div>
                </div>
            </div>

            <div class="container_left_lower" id="sell_properties_window">
                <div class="alert alert-info text-center" role="alert" id="toSell">
                    Which properties would you like to sell?
                </div>
                <div class="row row-centered" id="toBeSold">

                </div>
            </div>

            <div class="container_left_lower" id="mortgage_window">
                <div class="alert alert-info text-center" role="alert" id="toBuy">
                    Which properties would you like to mortgage?
                </div>
                <div class="row row-centered" id="toBeMortgaged">

                </div>
            </div>

            <div class="container_left_lower" id="unmortgage_window">
                <div class="alert alert-info text-center" role="alert" id="">
                    Which properties would you like to unmortgage?
                </div>
                <div class="row row-centered" id="toBeUnmortgaged">

                </div>
            </div>

            <div class="container_left_lower" id="buysellhouses_window">
                <div class="alert alert-info text-center" role="alert" id="toBuy">
                    Which set would you like to add house too?
                </div>
                <div class="row row-centered" id="toBeMortgaged">

                </div>
            </div>

            <div class="container_left_lower" id="sell_houses_window">
                <div class="alert alert-info text-center" role="alert" id="toBuy">
                    Which houses would you like to sell?
                </div>
                <div class="row row-centered" id="toBeSoldHouses">

                </div>
            </div>

            <div class="container_left_lower" id="cant_pay_window">
                <div class="alert alert-info text-center" role="alert" id="cant_pay_text">
                    you owe p
                </div>
                <div class="row row-centered" id="">
                    <div class="col">
                        <button type="button" class="btn btn-outline-danger spacer" id="attempt_payment"><i class="fas fa-money-bill-alt"></i> Attempt Payment</button>
                    </div>

                </div>
            </div>

        </div>

        <div class="container">
            <!----------------------------------------------------------------------->
            <!--Generate the game board from the CSV file.->
            <!----------------------------------------------------------------------->
            <?php include('statics/board_gen.php'); ?>
        </div>


        <script>
            /* Opportunity Knocks & Pop Luck Varibles and Array */
            var oppCardIndex = 0; //Keeps track of current opportunity knocks card index
            var potCardIndex = 3; //Keeps tack of current pot luck card index
            var oppKnocksCards = []; //Array containing all the opportunity knocks cards
            var potLuckCards = []; //Array containing all the pot luck cards
            /*-------------------*/

            //-------------------------------------------
            //When uncommented, promts the user if they really want to refresh.
            //-------------------------------------------
            window.onbeforeunload = function() {
                return 1;
            }


            var currentBidder = 0;
            var currentBid = 0;
            var bidProp = -1;
            var currentPlayer = 0;
            var noOfPlayers = 0;

            //startGame determines if all players added and startGame pressed
            var startGame = false;
            var tiles = [];

            var availableHouses = 32;
            var availableHotels = 12;

            var tiles2 = [];
            var players = [];

            var settingUpPlayer = false;

            var freeParkingValue = 50;

            //current property the current player is on
            var potentialPurchase = -1;
            var doubleActive = false;

            var doublesRolled = 0;

            var rentPayingActive = false;
            var outstandingPayment = 0;
            var payingPlayer = false;

            var currentPlayerIcon = [];
            var playersPositions = [];

            var showingPlayer = 1;
            //stores the number of houses on each set, index 0 means the number of houses across all brown property
            var noHousesOnSet = [0, 0, 0, 0, 0, 0, 0, 0];

            //player current player is trading with
            var tradeWith = 1;
            ///used in trading
            var currentPlayerStuffArray = [];
            var tradePlayerStuffArray = [];
            var playerOffersNames = [];
            var playerWishesToRecieveNames = [];

            //-------------------------------------------
            //PAGE Load
            //-------------------------------------------
            $(document).ready(function() {
                $("#oppknocksoptions").hide(); //Hides oppknocks pay fine/another card buttons
                $('#cardBox').hide(); //Hides cards info box
                $('#tradingBox').hide();
                $("#addHouseBrown").hide();
                $("#addHouseBlue").hide();
                $("#addHousePurple").hide();
                $("#addHouseOrange").hide();
                $("#addHouseRed").hide();
                $("#addHouseYellow").hide();
                $("#addHouseGreen").hide();
                $("#addHouseDarkBlue").hide();

                $('[data-toggle="tooltip"]').tooltip();

                tiles = <?php echo json_encode($tilearray); ?>;


                tiles2 = [

                    <?php
                    
                    
                    for($i = 1; $i < 41; $i++) {
                        echo '{';
                        echo 'position:"' . $tiles[$i]->get_position() . '",';
                        echo 'id:"' . $tiles[$i]->get_id() . '",';
                        echo 'name:"' . $tiles[$i]->get_name() . '",';
                        echo 'ownedBy:"-1",';
                        echo 'mortgaged:"0",';
                        echo 'canBuy:"' . $tiles[$i]->get_can_buy() . '",';
                        echo 'group:"' . $tiles[$i]->get_group() . '",';
                        echo 'rent:"' . $tiles[$i]->get_rent_due() . '",';
                        
                        echo 'renth1:"' . $tiles[$i]->get_rent_due_h1() . '",';
                        echo 'renth2:"' . $tiles[$i]->get_rent_due_h2() . '",';
                        echo 'renth3:"' . $tiles[$i]->get_rent_due_h3() . '",';
                        echo 'renth4:"' . $tiles[$i]->get_rent_due_h4() . '",';
                        echo 'renth5:"' . $tiles[$i]->get_rent_due_h5() . '",';
                        
                        
                        echo 'cost:"' . $tiles[$i]->get_cost() . '",';
						echo 'setAmmout:"' . $tiles[$i]->get_colour_set_num() . '",';
						
						echo 'houses:"0",';
						echo 'hotels:"' . $tiles[$i]->get_hotels() . '",';
						
						echo 'houseCost:"' . $tiles[$i]->get_house_cost() . '",';
						echo 'hotelCost:"' . $tiles[$i]->get_hotel_cost() . '",';
						
                        
                        if(i == 40) {
                            echo '}';
                        } else {
                            echo '},';
                        }

                    }
                            
                          
                    ?>
                ];



                //testing
                tiles2[1].ownedBy = 2;
                tiles2[3].ownedBy = 2;


                $('#container_right').hide();
                $('#turn_options').hide();
                $('#leaveJail').hide();
                //$('#declareBankruptcy').hide();
                $('#add_houses_window').hide();
                $('#sell_houses_window').hide();
                $('#biddingWindow').hide();
                $('#cant_pay_window').hide();

                $('#freeParkingText').html("£" + freeParkingValue);
                housesAvailableText();
                hideAllWindows();

                $('#player1InfoButton').hide();
                $('#player2InfoButton').hide();
                $('#player3InfoButton').hide();
                $('#player4InfoButton').hide();
                $('#player5InfoButton').hide();
                $('#player6InfoButton').hide();



                $('#reRoll').hide();
                console.log(tiles2[1].canBuy);
            });


            $(function() {
                $('[data-toggle="popover"]').popover({
                    html: true,
                    trigger: 'focus',
                    container: 'body'
                });
            });


            //-------------------------------------------
            //End turn button
            //-------------------------------------------

            $(function() {
                $('#endTurn').click(function() {
                    $('#startTurn').prop('disabled', false);

                    $('#turn_options').hide();
                    $('#mortgage_window').hide();
                    console.log("hiding");
                    $('#tradingBox').hide();

                    if (doublesRolled == 0) {
                        incrementTurn();

                    } else {
                        $('#infoBox').html("Its <strong>Player " + currentPlayer + "'s</strong> turn to roll again.");
                    }

                    if (players[currentPlayer].in_jail > 0) {
                        players[currentPlayer].in_jail = parseInt(players[currentPlayer].in_jail) + 1;
                    }
                    $('#cardBox').hide();

                });
            });

            //-------------------------------------------
            //End game button
            //-------------------------------------------

            $(function() {
                $('#endGame').click(function() {
                    if (confirm('Are you sure you want to end the game?')) {
                        location.reload();
                    } else {

                    }

                });
            });

        </script>
        <script type="text/javascript" src="js/array_players.js"></script>
        <script type="text/javascript" src="js/function_new_player.js"></script>
        <script type="text/javascript" src="js/function_token_assign.js"></script>
        <script type="text/javascript" src="js/function_change_owned_property_icons.js"></script>
        <script type="text/javascript" src="js/functions_main.js"></script>
        <script type="text/javascript" src="js/functions_initial.js"></script>
        <script type="text/javascript" src="js/functions_rent.js"></script>
        <script type="text/javascript" src="js/functions_mortgage.js"></script>
        <script type="text/javascript" src="js/functions_sell.js"></script>
        <script type="text/javascript" src="js/functions_trade.js"></script>
        <script type="text/javascript" src="js/functions_add_sell_houses.js"></script>
        <script type="text/javascript" src="js/functions_houses.js"></script>
        <script type="text/javascript" src="js/functions_bidding.js"></script>
        <script type="text/javascript" src="js/functions_other.js"></script>
        <script type="text/javascript" src="js/oppKnocks.js"></script>
        <script type="text/javascript" src="js/potLuck.js"></script>
        <script type="text/javascript" src="js/function_card.js"></script>
    </body>

    </html>
