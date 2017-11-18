var bandObj = require('./musicgenres.js');

if (process.argv[2]) { //if an argument exists search for only that genre
    for (var i = 0; i < bandObj.length; i++) {
        if (bandObj[i].genre === process.argv[2]) { //if genre is equal to argument, list bands in that genre
            var list = ""
            for (var n = 0; n < bandObj[i].bands.length; n++) {
                list += bandObj[i].bands[n];
                if (n !== (bandObj[i].bands.length - 1)) {
                    list += ", ";
                }
            }
            console.log(list);
            break;
        }
        else { //else alert user that their chosen genre is nonexistant, n00b
            console.log("Genre not found!");
            break;
        }
    }
} else { //otherwise just list everything
    for (var i = 0; i < bandObj.length; i++) {
        var list = "Genre: " + bandObj[i].genre + " List: ";
        for (var n = 0; n < bandObj[i].bands.length; n++) {
            list += bandObj[i].bands[n];
            if (n !== (bandObj[i].bands.length - 1)) {
                list += ", ";
            }
        }
        console.log(list);
    }
}