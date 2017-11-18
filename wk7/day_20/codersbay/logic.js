// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var config = {
    apiKey: "AIzaSyAIvD1RjN4SwYPp5gjyKwrY7Zfpu05FRUg",
    authDomain: "myprojeqt.firebaseapp.com",
    databaseURL: "https://myprojeqt.firebaseio.com",
    projectId: "myprojeqt",
    storageBucket: "myprojeqt.appspot.com",
    messagingSenderId: "391750773860"
};

firebase.initializeApp(config);
// Assign the reference to the database to a variable named 'database'
var database = firebase.database()


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.

database.ref().on("value", function(snapshot) {

    // If Firebase has a highPrice and highBidder stored (first case)

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    // highPrice = ...
    // highBidder = ...
    if (snapshot.child("dbHighPrice").exists() && snapshot.child("dbHighBidder").exists()) {
        highPrice = snapshot.val().dbHighPrice
        highBidder = snapshot.val().dbHighBidder


        // Change the HTML to reflect the stored values
        $("#highest-price").html(highPrice)
        $("#highest-bidder").html(highBidder)

        // Print the data to the console.
        console.log(snapshot.val());
    }

    // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
    else {
        $("#highest-price").html(highPrice)
        $("#highest-bidder").html(highBidder)
    }

    // Change the HTML to reflect the initial values


    // Print the data to the console.

}, function(errorObj) {
    console.error(errorObj);
})



// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {

    // prevent form from submitting with event.preventDefault() or returning false
    event.preventDefault();
    // Get the input values
    newBid = parseInt($("#bidder-price").val().trim());
    newBidder = $("#bidder-name").val().trim();

    // Log the Bidder and Price (Even if not the highest)
    console.log("Bidder" + newBidder + "bids " + newBid + ".");

    // If Then statements to compare against previous high bidder
    if (newBid > highPrice) {
        // Alert that they are High Bidder
        alert("You are the new highest bidder!");

        // Save the new price in Firebase
        database.ref().set({
            dbHighPrice: newBid,
            dbHighBidder: newBidder
        });

        // Log the new High Price
        console.log("New high price: " + newBid);

        // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
        highPrice = newBid;
        highBidder = newBidder;

        // Change the HTML to reflect the new high price and bidder
        $("#highest-price").html(highPrice)
        $("#highest-bidder").html(highBidder)

    }
    // Else tell user their bid was too low via alert
    else {
        alert("Sorry, your bid was too low! Try bidding more than " + highPrice + ".");
    }
});