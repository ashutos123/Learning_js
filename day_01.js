////video 4 by chai aur code
const accountId=144232
let accountEmail= "ashu@31232gmail.com"
var accpassword ="312321"//var keyword for variable declaration is not in use todays.it has scope isuues.if a variable with same name is declared at other place then,that is changed this also gets changed.
acccity="delhi"//this shaows variable can be declared without keyword in js.
let accstate;//it will be  treated undefined.

accountEmail="sdsd@3123sd.com"
accpassword="423245"
acccity="kolkata"

console.log(accountId)

console.table([accountId,accountEmail,accpassword,acccity,accstate])//this prints all variables  in tabular form.

////video  5
"use strict" ;//treat all js code as newer version
//alert(3+3) //this wont work as we are using nodejs and not browser.

let age=23
console.log(typeof age);
console.log(typeof undefined);//type is undefined
console.log(typeof null); //null's type is object

////video 6(conversion) //agar frontend se number ka input string k form ho rha hai,to us ko backend me integer me convert karna pdata hai.
let score="22"//string
let s="23abcd"

console.log(typeof score)

let valueInNumber = Number(score)//since,score is a string nad so it typecasts it.and vice versa is also true.
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(s);
console.log(typeof valueInNumber1);//type is number
console.log(valueInNumber1);//NaN is the type.

let isLoggedIn ="asdasd"

let booleanIsLogged=Boolean(isLoggedIn)
console.log(booleanIsLogged);

//1 converts to =>true;0=>false;
//""=>false
//"sfsf"=>true


/////video 7

//console.log(2+2)
//console.log(2**3)//all others are same.

let str1="hello"
let str2="Ashu"
let str3=str1+str2;//concatenate ho jaega
console.log(str3);

console.log("1"+2);//jo pehle hai sara usme typecast ho jaega.
console.log(1+"2");//12 aega
console.log("1"+2+2);
console.log(1+2+"2");//3 me 2 concatenate ho jaega.

//study more such conversions from mdn.

/////video 8
  //console.log(2>1)
  //console.log(2>=1)
  //console.log(2<1)  //these r comparison operators.
  //console.log(2==1)
  //console.log(2!=1)

    //console.log(null>0)
  //console.log(null==0)  //null behaves differently
  ///console.log(null>=0) //avoid such comparisons

  //console.log(undefined==0) //avoid such comparisons
  //console.log(undefined>0)
  //console.log(undefined<0)

  //===(strict check.)it checks value and datatype also
  //console.log("2"===2) //gives false
  //console.log("2"==2)//gives true as ==does datatype conversion also.

//video 9--------------------------------------
  ///NOTES on datatypes./////
  //Primitives(can only be called by value and not clalled by reference.)
  
  //it has 7 types:string,Number,Boolean,null,undefined, 
   //symbol,BigInt
 const sc =100
 const scorevalue=100.3

 let usermail;//undefined datatype

 const id=Symbol('123')//both will get different values b'cuz of symbol
 const anotherId=Symbol('123')

const bigNumber=4356765743313256n
console.table([id,anotherId]) 

//Non-primitives(refernece call)
//arrray,objects,functions.
const heroes=["kalam","bose","bhagat singh"];
let myobj={
    name:"ashu",  //this is object enclosed in curly braces,it can named as myobj.
    age:22,
}

const myfunction=function(){
    console.log("hello world");//this function declaration called by name myfunction.
}

console.log(typeof bigNumber)//can check all variable's datatype



// difference b/w let and var.
// function exampleScope() {
//   if (true) {
//     var usingVar = 'I am a var';
//     let usingLet = 'I am a let';
//   }
/////////  let cant be accessed out of block where it is declared whereas var can be.
//   console.log(usingVar); // Output: I am a var
//   console.log(usingLet); // Error: usingLet is not defined
// }

// var x = 10;
// var x = 20; // No error with var

// let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared



