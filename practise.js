// change the values of `balance`, `checkBalance`, and `isActive` to test your code

var balance = 0;

var checkBalance = true;

var isActive = true;

// your code goes here

if (checkBalance === false){

console.log("Thank you have a nice day.");

}else if (checkBalance === true && balance > 0 && isActive === true){

console.log("Your balance is " + balance.toFixed(2) + ".");

}else if (checkBalance === true && balance > 0 && isActive === false){

console.log("Your account is no longer active");

}else if (checkBalance === true && balance === 0 && isActive === true){

console.log("Your account is empty.");

}else if(checkBalance === true && balance < 0 && isActive === true){

console.log("Your balance is negative. Please contact bank.");

}