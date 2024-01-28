let a=parseInt(prompt("Enter First Integer Value"));
let b=parseInt(prompt("Enter Second Integer Value"));
alert("Select Your Operators form: \n1->+(Addition)\n2->-(Substraction)\n3->*(Multiply)\n4->/(Divide)\n5->%(Modulo)")
let result;
let symbol=prompt();

switch(symbol){
    case '+':
        result=a+b;
        break;

    case '-':
        result=a-b;
        break;

    case '*':
        result=a*b;
        break;

    case '/':
        result=a/b;
        break;

    case '%':
        result=a%b;
        break;

    default:
        result="Invalid Operator";
}

alert("You chose:" + symbol + "\n Result is:" + result)
