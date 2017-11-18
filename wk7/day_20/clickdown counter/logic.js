// Initialize Firebase (YOUR OWN APP)
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAIvD1RjN4SwYPp5gjyKwrY7Zfpu05FRUg",
    authDomain: "myprojeqt.firebaseapp.com",
    databaseURL: "https://myprojeqt.firebaseio.com",
    projectId: "myprojeqt",
    storageBucket: "myprojeqt.appspot.com",
    messagingSenderId: "391750773860"
};
firebase.initializeApp(config);
// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
firebase.database().ref().on("value",
    function(snapshot) {
        // Print the initial data to the console.
        console.log(snapshot.val());

        // Change the html to reflect the initial value.
        // var dbClickCount = snapshot.val().clickCount || 100;
        // if (dbClickCount) {
        //     $("#click-value").html(dbClickCount);
        //     clickCounter = dbClickCount;
        // } else {
        //     $("#click-value").html(clickCounter);
        // }
        clickCounter = snapshot.val().clickCount || initialValue;
        $("#click-value").html(clickCounter);
        // Change the clickCounter to match the data in the database


        // Log the value of the clickCounter
        console.log(clickCounter);

        // Change the HTML Value


        // If any errors are experienced, log them to console.
    },
    function(errorObj) {
        console.log("Error" + errorObj);
    });

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

    // Reduce the clickCounter by 1
    clickCounter--;

    // Alert User and reset the counter
    if (clickCounter === 0) {
        clickCounter = initialValue;
    }
    $("#click-value").html(clickCounter);
    // Save new value to Firebase
    firebase.database().ref().set({ clickCount: clickCounter });

    // Log the value of clickCounter
    console.log("Current Value: " + clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

    // Set the clickCounter back to initialValue
    clickCounter = initialValue;

    // Save new value to Firebase
    firebase.database().ref().set({ clickCount: clickCounter });

    // Log the value of clickCounter
    console.log("reset: " + clickCounter);

    // Change the HTML Values
    $("#click-value").html(clickCounter);
});