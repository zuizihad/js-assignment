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


// hotel cost
function hotelCost(stayDay) {
    var costAmount = 0;
    if (stayDay <= 0) {
        return "value is nagetive or zero";
    } else if (stayDay <= 10) {
        costAmount = stayDay * 100;
    } else if (stayDay <= 20) {
        var tenDaysCost = 10 * 100;
        var remainingDays = stayDay - 10;
        var otherDays = remainingDays * 80;
        costAmount = tenDaysCost + otherDays;
    } else {
        var firstTenDaysCost = 10 * 100;
        var secondTenDaysCost = 20 * 80;
        var remainingDays = stayDay - 20;
        var otherDays = remainingDays * 50;
        costAmount = firstTenDaysCost + secondTenDaysCost + otherDays;
    }
    return costAmount;
}

var total = hotelCost(12);
console.log(total);


// mega friend
function megaFriend(str) {
    if (!str) {
        return "something went wrong";
    } else if (str.length > 0) {
        var max = 0;
        var longestName = "";
        for (var i = 0; i < str.length; i++) {
            if (str[i].length > max) {
                max = str[i].length;
                longestName = str[i];
            }
        }
        return longestName;
    } else {
        return "array is empty";
    }

}
var myFriend = ["zihad", "zihadul", "zihadul islam"];
var friend = megaFriend(myFriend);
console.log(friend);