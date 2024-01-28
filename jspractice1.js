var num1=parseInt(prompt("Enter first interger value"))
var num2=parseInt(prompt("Enter first interger value"))
var num3=parseInt(prompt("Enter first interger value"))

var sum=num1+num2+num3;
var average= sum/3;
var product=num1*num2*num3;
let largest
if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}


alert("sum= "+ sum +" average= "+average+"product= "+product+" Largest="+largest)