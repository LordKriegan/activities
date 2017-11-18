var txt = "";
for (var i = 1; i <= 100; i++) {
    txt = "";
    if ((i % 3) === 0) {
        txt += "Fizz";
    }
    if ((i % 5) === 0) {
        txt += "Buzz";
    }
    if (!((i % 3) === 0) && !((i % 5) === 0)) {
        txt = i;
    }

    console.log(txt);
}

//----------------------------------------------

function isPrime(x) {
    var isNumPrime = true;
    for (var i = 2; i < x; i++) {
        if ((x % i) === 0) {
            isNumPrime = false;
            break;
        }
    }
    return isNumPrime;
}

//----------------------------------------------
var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
];
var movies = new Array();
var pictures = new Array();

for (var i = 0; i < files.length; i++) {
	if (
		(files[i].includes(".jpg")) ||
		(files[i].includes(".jpeg")) ||
		(files[i].includes(".png")) ||
		(files[i].includes(".gif")) 
		) {
		pictures.push(files[i]);
	}
	else if (
		(files[i].includes(".mpg")) ||
		(files[i].includes(".mpeg")) ||
		(files[i].includes(".mp4")) ||
		(files[i].includes(".mov")) ||
		(files[i].includes(".avi"))
		) {
		movies.push(files[i]);
	}
}

console.log(movies);
console.log(pictures);