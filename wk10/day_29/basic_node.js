var argOne = Number(process.argv[2]);
var argTwo = Number(process.argv[3]);

if (argOne === argTwo) {
    console.log("They are equal!");
    if (((argOne % 7) === 0) && ((argTwo % 7) === 0)) {
        console.log("Also, they are both divisible by 7");
    } else {
        console.log("However, they are not divisible by 7");
    }
} else {
    console.log("They are not equal!");
}