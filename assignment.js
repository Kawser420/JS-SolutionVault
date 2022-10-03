

// problem-01
// kilometerToMeter
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;
}
var meterResult = kilometerToMeter(5.5);
console.log(meterResult);

// problem-02
// budgetCalculator
function budgetCalculator(number) {
    var sum = 0;
    for (var i = 1; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}
var number = ["watch", 50, 50, 50, 50];
var result = budgetCalculator(number);
console.log("Total of wathch : ", result);

var number = ["phone", 100, 100, 100];
var result = budgetCalculator(number);
console.log("Total of phone : ", result);

var number = ["laptop", 500, 500, 500, 500];
var result = budgetCalculator(number);
console.log("Total of laptop : ", result);

// problem-03
// hotelCost
function hotelCost(rent){
    var hotelRent = 0;
    if(rent <= 10){
        hotelRent = rent * 500;
    }
    else if(rent <= 20){
        var first10Days = 10 * 50;
        var remaining = rent - 10;
        var second10Days = remaining * 200;
        hotelRent = first10Days + second10Days;
    }
    else{
        var first10Days = 10 * 50;
        var second10Days = 10 * 100;
        var remaining = rent - 20;
        var lastDaysPlus = remaining * 250;
        hotelRent = first10Days + second10Days + lastDaysPlus;
    }
    return hotelRent;
    }
    var result = hotelCost(9);
    console.log(result);
    
    var result = hotelCost(18);
    console.log(result);
    
    var result = hotelCost(30);
    console.log(result);
    

// problem-04
// megaFriend
function megaFriend(array) {
    var longestWord = "";

    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  

var word = megaFriend(["Jhankar", "Muhammad", "kawser", "numan", "mama", "josim"]);
console.log(word);





