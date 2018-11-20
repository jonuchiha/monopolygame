//-------------------------------------------
//Array of Pot Luck cards actions along with their descriptions
//-------------------------------------------

potLuckCards = [{
    action: "Bank pays player £50",
    description: "Bank pays you divided of £50",
}, {
    action: "Bank pays player £100",
    description: "You have won a lip sync battle. Collect £100",
}, {
    action: "Player token moves forwards to Turing Heights",
    description: "Advance to Turing Heights",
}, {
    action: "Player moves token 1",
    description: "Advance to Han Xin Gardens. If you pass GO, collect £200",
}, {
    action: "Player puts £15 on free parking",
    description: "Fined Â£15 for speeding",
}, {
    action: "Player pays £150 to the bank",
    description: "Pay university fees of £150",
}, {
    action: "Player moves token 2",
    description: "Take a trip to Hove station. If you pass GO collect £200",
}, {
    action: "Bank pays £150 to the player",
    description: "Loan matures, collect £150",
}, {
    action: "Player pays money to the bank 1",
    description: "You are assessed for repairs, £40/house, £115/hotel",
}, {
    action: "Player moves token 3",
    description: "Advance to GO",
}, {
    action: "Player pays money to the bank 2",
    description: "You are assessed for repairs, £25/house, £100/hotel",
}, {
    action: "Player moves token 4",
    description: "Go back 3 spaces",
}, {
    action: "Player moves token 5",
    description: "Advance to Skywalker Drive. If you pass GO collect £200",
}, {
    action: "As the card says",
    description: "Go to jail. Do not pass GO, do not collect £200",
}, {
    action: "Player puts £20 on free parking",
    description: "Drunk in charge of a skateboard. Fine £20",
}, {
    action: "Retained by the player until needed. No resale or trade value",
    description: "Get out of jail free",
}];

//Shuffle Cards
potLuckCards = shuffle(potLuckCards);
