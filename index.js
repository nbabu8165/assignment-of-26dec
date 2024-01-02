//logic for odd and even number
var num1=7;
if(num1%2==0){
console.log("given nyumber is even");
}
else{
    console.log("given number is odd");
}

//to check the elgibility to marriage
var gender = "boy"
var age =23

if(gender==="boy"){
    if(age<=23){
        console.log("eliggible for marriage");
    }
    else{
        console.log("not eligible for marriage");
    }
    
}
//Createing a function that takes two numbers as arguments and returns their sum.
 function sum(a,b){
    var result=a+b;
    return result;

 }
 console.log(sum(3,4));
 console.log(sum(9,6));
 console.log(sum(42,2));

//creating a logic to the month

var month ="march";
switch (month) {
    case "jan":console.log(month);break
    case "feb":console.log(month);break
    case "march":console.log(month);break
    case "apr":console.log(month);break
    case "may":console.log(month);break
    case "june":console.log(month);break
    case "july":console.log(month);break
    case "aug":console.log(month);break
    case "oct":console.log(month);break
    case "nov":console.log(month);break
    case "dec":console.log(month);break

}
//Writeing a function that takes the base and height of a triangle and return its area.

function triarea(base,hight){
    var result=base*hight/2;
    return result;
}
console.log(triarea(3,2));
console.log(triarea(7,4));
console.log(triarea(10,10));

