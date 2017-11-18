var fs = require('fs');

var transType = process.argv[2];
var transAmt = Number(process.argv[3]);

if ((transType !== "t") && ((process.argv.length < 4) || (isNaN(transAmt)))) {
    console.error("Missing or invalid arguments!");
} else {
    switch (transType) {
        case "d":
            fs.appendFile("bank.txt", (", " + transAmt), "utf8", function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Deposited $" + transAmt);
                }
            });
            break;
        case "w":
            fs.appendFile("bank.txt", (", " + (transAmt * -1)), "utf8", function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Withdrew $" + transAmt);
                }
            });
            break;
        case "t":
            fs.readFile("bank.txt", "utf8", function(err, data) {
                if (err) {
                    console.error(err);
                } else {
                    dataArr = data.split(", ");
                    var total = 0;
                    dataArr.forEach(function(elem) {
                        total += Number(elem);
                    });
                    console.log(total.toFixed(2));
                }
            });
            break;
        case "l":
            fs.appendFile("bank.txt", (", " + (transAmt * -1)), "utf8", function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Bought a $" + transAmt + "ticket");
                }
            });
            var lotto1 = Math.floor((Math.random() * 100) + 1);
            var lotto2 = Math.floor((Math.random() * 100) + 1);
            if (lotto1 === lotto2) {
                var lottoWinner = transAmt * 5;
                fs.appendFile("bank.txt", (", " + lottoWinner), "utf8", function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Congratulations! You Won!!! Deposited $" + lottoWinner);
                    }
                });
            } else {
                console.log("Sorry, you lost!");
            }
            break;
        default:
            console.log("Invalid command!");
    }
}
