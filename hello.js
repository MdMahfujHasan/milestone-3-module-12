var bananaPrice = 5;
console.log(typeof bananaPrice);
var name = "md. mahfuj hasan";
console.lo1g(typeof name1);

var isHot = true;
var isRich = false;
console.log(typeof isHot);
var upperCase = "This SENTENCE has UpperCase letters";
console.log(upperCase.toLowerCase());
console.log(upperCase.indexOf('has'));
console.log(upperCase.split(' '));

var num1 = 25;
var num2 = '15.5';
num2 = parseFloat(num2);
console.log(num1 + num2);
num2 = parseInt(num2);
console.log(num1 + num2);
num1 = '' + num1;
console.log(num1);

var num1 = 0.1;
var num2 = 0.2;
var total = num1 + num2;
total = total.toFixed(3);
console.log(total); 

var price1 = 25;
var price2 = 35;
total = price1 + price2;
price2++;
price1--;
console.log(price2);
console.log(price1);

var num1 = -5;
var absoluteNum = Math.abs(num1);
console.log(absoluteNum);

var num2 = 5.49;
var num3 = 5.5;
var result1 = Math.round(num2);
var result2 = Math.round(num3);
console.log(result1);
console.log(result2);

var num2 = 5.49;
var num3 = 5.5;
var result1 = Math.ceil(num2);
var result2 = Math.floor(num3);
console.log(result1);
console.log(result2);

var num = Math.random();
console.log(num);
var num1 = Math.random()*100;
var num2 = Math.round(num1);
console.log(num2);

var biscuitPrice = 12;
if(biscuitPrice < 10){
    console.log("i will eat the biscuits.");
}
else{
    console.log("only tea is sufficient.");
}

var jobPaiso = true;
var saving = 50000;
if(jobPaiso == true && saving > 100000){
    console.log("time to marry.");
}
else{
    console.log("can't marry right now.")
}

// if(){}/else if{}/else/&&/||