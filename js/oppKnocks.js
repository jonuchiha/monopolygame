//-------------------------------------------
//Array of Opportunity Knock card actions along with their descriptions
//-------------------------------------------

oppKnocksCards = [{
    action: "Bank pays player £100",
    description: "You inherit £100",
}, {
    action: "Bank pays player £20",
    description: "You have won 2nd prize in a beauty contest, collect £20",
}, {
    action: "Player token moves backwards to Crapper Street",
    description: "Go back to Crapper Street",
}, {
    action: "Bank pays player £20 refund",
    description: "Student loan refund. Collect £20",
}, {
    action: "Bank pays player £200",
    description: "Bank error in your favor. Collect £200",
}, {
    action: "Player pays £100 to the bank",
    description: "Pay bill for text books of £100",
}, {
    action: "Player pays £50 to the bank",
    description: "Mega late night taxi bill pay £50",
}, {
    action: "Player moves forwards to GO",
    description: "Advance to go",
}, {
    action: "Bank pays player £50",
    description: "From sale of Bitcoin you get £50",
}, {
    action: "If fine paid, player puts £10 on free parking",
    description: "Pay a £10 fine or take opportunity knocks",
}, {
    action: "Player puts £50 on free parking",
    description: "Pay insurance fee of £50",
}, {
    action: "Bank pays £100 to the player",
    description: "Savings bond matures, collect £100",
}, {
    action: "Go to jail. Do not pass GO, do not collect £200",
    description: "Go to jail. Do not pass GO, do not collect £200",
}, {
    action: "Bank pays player £25",
    description: "Received interest on shares of £25",
}, {
    action: "Player receives £10 from each player",
    description: "It's your birthday. Collect £10 from each player",
}, {
    action: "Retained by the player until needed. No resale or trade value",
    description: "Get out of jail free",
}];


//Shuffle Cards
oppKnocksCards = shuffle(oppKnocksCards);
