/*
    Author: Zihadul Islam
    email: ahmedxihad@gmail.com
    github: https://github.com/zuizihad/js-assignment

*/


// kilometer to meter
function kilometerToMeter(value) {
    if (value < 0) {
        return "nagetive value";
    } else if (value == 0) {
        return "nutral value";
    } else {
        return meter = value * 1000;
    }
}

var result = kilometerToMeter(12);
console.log(result);