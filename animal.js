function animalCalc(depth) {
    
var animal = 0;

if (depth <= 10){
    animal = 10 * 50;
}

else if (depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var secondPart = remaining * 100;
    animal = firstPart + secondPart;
}

else {
    var firstPart = 10*50;
    var secondPart = 10*100;
    var remaining = depth - 20;
    var thirdPart = remaining * 200;
    animal = firstPart + secondPart + thirdPart;

}
    

return animal;

}

var result = animalCalc(10);
console.log(result);




