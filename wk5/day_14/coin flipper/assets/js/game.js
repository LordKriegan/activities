    // Coin Flip JavaScript
    // These variables are declared for us.
    var headsCount = 0;
    var tailsCount = 0;
    var wins = 0;
    var losses = 0;

    function flipThatCoin(result) {

        //  STEP ONE:

        //  Declare and initialize a variable named randomNumber to either 0 or 1. Make it random.
        var randomNumber = Math.floor(Math.random() * 2);
        //  STEP TWO:

        //  If randomNumber is equal to zero then:
        if (randomNumber === 0) {
        //  Find the div with an id of coin-image.
        //  Replace its html with an img tag containing this image:
        //  http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg
            $("#coin-image").html("<img src='assets/images/coinfront.jpg' />");
        }
        // Else:
        else {
        //  Find the div with an id of coin-image.
        //  Replace its html with an img tag containing this image:
        //  http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg
            $("#coin-image").html("<img src='assets/images/coinback.jpg' />");
        }
        //  STEP THREE:

        // If result is equal to randomNumber, do the following:
        if (result === randomNumber) {
        //  Increment wins by one.
        //  Find the div with an id of win-lose. Update it with an h2 of "Winner!"
        //  Find the div with an id of wins. Update it with the value of the wins variable.
            wins++;
            $("#win-lose").text("Winner!");
            $("#wins").text(wins);
        }
        // Else:
        else {
        //  Increment losses by one.
        //  Find the div with an id of win-lose. Update it with an h2 of "Loser!"
        //  Find the div with an id of losses. Update it with the value of the losses variable.
            losses++;
            $("#win-lose").text("Loser!");
            $("#losses").text(losses);
        }
    }

    // This on click function has been completed for us.
    $("#heads").on("click", function() {
        headsCount++;
        $("#heads-chosen").text(headsCount);
        $("#guess").html("<b>Heads</b>");
        flipThatCoin(0);
    });

    $("#tails").on("click", function() {

        //  STEP FOUR:

        //  Increment tailsCount by one.
        //  Find the span with an id of tails-chosen. Replace the html inside of the span with the tailsCount.
        //  Find the div with an id of guess. Update it with the word "Tails" bolded.
        //  Call the flipThatCoin function and pass value 1 into it.
        tailsCount++;
        $("#tails-chosen").text(tailsCount);
        $("#guess").html("<b>Tails</b>");
        flipThatCoin(1);
    });