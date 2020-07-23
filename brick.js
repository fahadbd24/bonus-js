function brickCalculator(floor) {

    var birck = 0;

if (floor <= 10){
    brick = floor * 100;
}

else if (floor <= 20) {
    var firstPart = 10 * 100;
    var remaining = floor - 10; 
    var secondPart = remaining * 200;
    brick = firstPart + secondPart;

}    

else {
    var firstPart = 10 * 100; 
    var secondPart = 10 * 200;
    var remaining = floor - 20; 
    var thirdPart = remaining * 300; 
    brick = firstPart + secondPart + thirdPart;
}
return brick;

}

var result = brickCalculator(120);
console.log('The number of bricks needed is' , result);