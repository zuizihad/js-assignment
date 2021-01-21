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


//budget calculator
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    if (watchQuantity <= 0 || phoneQuantity <= 0 || laptopQuantity <= 0) {
        return "nagetive quantity can not acceptable";
    } else {
        var costOfWatch = watchQuantity * 50;
        var costOfPhone = phoneQuantity * 100;
        var costOfLaptop = laptopQuantity * 500;
        return totalCost = costOfLaptop + costOfPhone + costOfWatch;
    }
}
var totalAmount = budgetCalculator(3, 2, 10);
console.log(totalAmount);
