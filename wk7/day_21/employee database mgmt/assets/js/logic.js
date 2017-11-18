window.onload = function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAVwvVuvoJkyVHPIzx6noAH9IauE9xL7lw",
        authDomain: "wk-7-session-3.firebaseapp.com",
        databaseURL: "https://wk-7-session-3.firebaseio.com",
        projectId: "wk-7-session-3",
        storageBucket: "",
        messagingSenderId: "218088337407"
    };
    firebase.initializeApp(config);
    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var pay = $("#pay-input").val().trim();

    var database = firebase.database();

    $("#submit-user").on("click", function (e) {
      e.preventDefault();
      database.ref().push({
        name: name,
        role: role,
        pay: pay,
        dateAdded: database.ServerValue.TIMESTAMP
      });
    });
};