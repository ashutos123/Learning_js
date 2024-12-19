//video 10 +++++++++++++++++++++++++++++++++++
///memory
///agar koi function samajh nhi aata to uske uper hover kro ,mdm se help mil jaega.
//stack(primitive(int,strings ,char,bool etc),matlab jahan bhi jarurat hogi wahan iski ek copy jaegi.),heap(non-primitive)
 let myutubename="ashuvlogs.com"
 let anothername=myutubename//stackk(you get a copy)
 anothername="chaoaurcode"
 console.log(myutubename) 
 console.log(anothername)

 userone={     //its an object .a non primitive datastructure(it memory location is referd) .
    email:"user@google.com",
    upi:"user@ybl"

 }

 let usertwo=userone//refering from the heap
console.log(userone)
console.log(usertwo)

usertwo.email="ashutosh@google.com"//values for userone and usertwo both are changed.
console.log(userone.email)
console.log(usertwo.email)

//video 11(strings)
const name ="ashu"
const repoCount=34
console.log(name +repoCount +" value") //this obsolete way of concatenating

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//modern way to concatenate,in { }we can also use funcgtions like tolower ,toupper etc.

//string and its methods or functions or prototypes.inn prottypes ko console me jake dekha ja sakta hai.
//put cursor on these functions to know more about them from mdm
const gameName =new String('ashutosh')//yahan par string ek array nhi ,object hai..

console.log(gameName[0]); 
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))//gives char  against the key 2 in the object.
console.log(gameName.indexOf('t'));//gives the key against the value 't' in string object.
const newString= gameName.substring(0,4)//prints substring from 0th index to 4th.
console.log(newString);

const anotherString=gameName.slice(-8,4)//8 is length.-ve means it statrts from back.
console.log(anotherString);  

const newStringone="   ashu  "
console.log(newStringone);
console.log(newStringone.trim());//removes all spaces.if in an input form user enters things with spaces,then at backened all spaces get removed.

const url="https://ashu.com/ashu%34kumar"
console.log(url.replace('%34','@'))//replaces a part with another thing
console.log(url.includes('sandy'))//checkes if that keyword is present or not

console.log(gameName.split('s'))//splits  strings at char 's'.
 
/////////video 12//////
//////numbers n ma  th
const score=400   //score's type is number
console.log(score);
//write it in console,there u will find all functions realted to number.check it out to know.
const balance=new Number(100)//its type is specifically number.
console.log(balance) ;

console.log(balance.toString().length);//num converts to string and it aquires all functionsof string.
console.log(balance.toFixed(2))//fixes decimal places to 2

const othernumber=23.8966
const anothernumber=123.8966
console.log(othernumber.toPrecision(3))//procises or rounds off taking first 3 digits from left of a numbe
console.log(anothernumber.toPrecision(3))//frequently used for making commercial websites

const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));//puts commas at places acoording to indian stds.bydefault it is US stds.
 ////many functions of numbers can explored in console.  

 //+++++++++   Maths   ++++++++++++++++++
 console.log(Math);//an object
 console.log(Math.abs(-4))
 console.log(Math.round(4.6))
 console.log(Math.ceil(4.2))
 console.log(Math.floor(4.9))
 console.log(Math.min(3,7,2,-1))
 console.log(Math.max(-4,4,1,6,9))

 

 console.log(Math.random());//gives random num b/w 0 and 1
 console.log((Math.random()*10) +1)//on multiplying with 10 random num generated can be b/w 1 to 10.adding 1 makes more than 1.
 console.log(Math.floor(Math.random()*10)+1);//floor kr dela se khali integer  hi  mili

 const min=10
 const max=20

 console.log(Math.floor(Math.random()*(max-min+1)) +min);//min aur max k bich me integer mili.
////+++++ Math k aur function bhi console me jake explore kaeel ja sakata



/////video 13  +++++++
//++++   Date +++++++++++++++
let myDate=new Date()//an Object.gives current date
console.log(myDate.toString());//converts to string
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//returns object

let myCreatedDate1=new Date(2023,0,23)//month starts from 0 in js
let myCreatedDate2=new Date(2023,0,23,5,3)//date and time specified here
let myCreatedDate3=new Date("2023-01-14")//yyyy-mm-dd
let myCreatedDate4=new Date("01-14-2023")//mm-dd-yyyy
console.log(myCreatedDate1.toLocaleString());

//Timestamp,used in comparing dates while making booking platforms
let myTimeStamp=Date.now()//gives time in miliseconds from aparticular date to now

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());//gives time in milisecs from stated date to now
console.log(Date.now());//abhi ki date dega

console.log(Math.floor(Date.now()/1000));//converts milisecs in secs.
 

//////////////
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);//gives month oif that date
console.log(newDate.getDay());//gives  nth day day of week  of that  date

newDate.toLocaleString('default',{
   weekday:"long"                   //vvi, comprehend thisbetter way
})




//+++++++  video 14 ++++++++++
//Array
const myArr=[0,1,2,3,4,"ashu",'a',0.34]//array is an object.it is resizable.it can contain multiple datatypes. 
console.log(myArr[0]);
const myHeros =["shaktiman","vikram baital"]
//there are many prototypes of array that can be seen in console.go and explore.
const myArr2=new Array(1,2,3,45)//a keyword to make array

console.log(myHeros[1]);
 //Array methods
 myArr.push(9)   //pushes back 9 in array
 myArr.push(45)
 console.log(myArr);
 myArr.pop()        //pops back from the array
 console.log(myArr)

 myArr.unshift(89)//shifts all values fron starting by  one and puts 89 in front.
 console.log(myArr)
 myArr.shift()
 console.log(myArr)

 console.log(myArr.includes(56))//returns either T or F
 console.log(myArr.indexOf(2))//returns either index if present else -1.


 const newArr=myArr.join()

 console.log(myArr);
 console.log(newArr);
 console.log(typeof newArr);


 //slice,splice   methods

 console.log("A",myArr)

 const myn1 =myArr.slice(1,3)//slice excludes the last index.
 console.log(myn1);
 
 console.log("B",myArr);

 const myn2= myArr.splice(1,3);//splice includes the last index.it also extracts this range of elements from the array,but slice does not.
 console.log(myn2);
 console.log("c",myArr);//extracted elements array.

 const marvel_heros=["thor","ironman","spiderman"]
 const dc_heros= ["superman","flash","batman"]

 marvel_heros.push(dc_heros);//pushes array as an element into the marvel.concat() method also workks similar to push.
 console.log(marvel_heros)
 console.log(marvel_heros[3][1]);

const allHeros =marvel_heros.concat(dc_heros);
console.log(allHeros);

 //spread operator-->its like when you drop an object of glass it breaks into smaller parts,the same happens here.array breaks into its individual elements.
const all_new_heros=[...marvel_heros,...dc_heros];//more than  two arrays can also be taken 
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)//here we can give number of depths upto whivh we want to flatten  this array.
console.log(real_another_array);


//jab kabhi hum data scraping karte hain website ,to data  sometimes nodelist ,ya object ya string ke form me ata hai.usko hum resovle kar sakte hain array me.
console.log(Array.isArray("Ashutosh"))//checking ,if it is array.
console.log(Array.from("Ashutosh"))//converts an non array to array.

console.log(Array.from({name:"Ashutosh"}))//it returns empty,b'cuz we dont specify whether to convert it to array key-wise or value-wise

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//makes them array.

//+++++ video 16 +++++++
//+++  objects.+++++++
 //singleton
 //object.create    -->creates na object

 //object literals
 const mysym=Symbol("key1")

 const jsuser={
   name:"ashu",   //key-value pair .values an be any data type ,string ,object, array etc.key can also be 0,1,2,3....    .here key name which behind the scene tracked as astring.
   "full name":"ashutosh kumar",
   [mysym]:"mykey1", //symbol as key.
   age:15,
  location:"patna",
  email:"ashu@13432.com",
  isLoggedIn:false,
  lastLoginDays:["mondsy","saturday"]

}

console.log(jsuser.email);
console.log(jsuser["email"])//square notation dena padega,kyunki it is treated as string behind the scen.
console.log(jsuser["full name"]) 
console.log(jsuser[mysym])


jsuser.email="ashu@chatgpt.com"
//Object.freeze(jsuser)//this will not allow any change in object nay more.
jsuser.email="Ashu@microsoft.com"//this change will not rflrct.
console.log(jsuser)


///// ////////////////// functions
jsuser.greeting=function(){
  console.log("hello js user");


}

jsuser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`)//concatenating
}
console.log(jsuser.greeting);// shows undefined in o/p.
console.log(jsuser.greeting())//since object jsuser is freezed so it  give error.greeting() does not act as function.after defreezung it works well.
 
console.log(jsuser.greetingTwo());




/////////////  video 17 ////////
///  how to make objects singleton or declare them using constructor

//const tinderuser = new Object()//singleton object.
const tinderuser={}  //non  singleton object

tinderuser.id="231ds"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false

console.log(tinderuser);

const  regularuser ={
   email : "some@gmail.com",
   fullname:{
      userfullname:{
         firstname:"ashu",//nesting of objects into objects.
         lastname:"kumar"

      }
   }


}

console.log(regularuser.fullname.userfullname.firstname);//each step of nesting can be taken as o/p.

 //merging multiple objects
 const obj1={1:"a",2:"b"}
 const obj2={3:"a",4:"b"}
 const obj4={5:"a",6:"b"}

 //const obj3={obj1,obj2} ->normal merging.one object into another object.
 //const obj3=Object.assign({},obj1,obj2,obj4)//{} -> it acts like  object.we r merging 3 objects into a single object.
const obj3={...obj1,...obj2,...obj4}//spreads objects ,then merges them.it is mostly used.
 console.log(obj3);

 const users=[          //array of comma seapareated objects.
   {email:"ashdssddsf",
   id:"3deewr",
   name:"fefdsfe"
},
{email:"ashdssddsf",
id:"3deewr",
name:"fefdsfe"
},
{email:"ashdssddsf",
id:"3deewr",
name:"fefdsfe"
},



]

console.log(users[1].email)//gives email of 1st object in users.

console.log(tinderuser)
console.log(Object.keys(tinderuser))//gives an array of all keys of tinderuser object.its useful in performing differrent kinds operations on keys.
console.log(Object.values(tinderuser))//the same is here also
console.log(Object.entries(tinderuser))// it takess each key value pair and puts them into arrays of size two and all such arrays are further put into another superarray.
console.log(tinderuser.hasOwnProperty('isLogged'));//checks if object  has that prroperty or not. returns  T or F.
//more things can explored about objects ,in console(browser).

 ///destructuring of objects. often used.
//destructuring means manipulating object into ways of your own conveniences.
const course={
   coursename:"Js in hindi",
   price:"434",
   courseInstructor:"ashu"
}

//course.courseInstructor ->returns  instructors name .it is tedious to write to access all values of the object.
const {courseInstructor}=course
console.log(courseInstructor)

const {courseInstructor:instructor}=course//destructured
console.log(instructor)


///////    APIs //////////jab bhi apko apna kam kisi aur ke sar pe fodna ho.jaise. restaurnat me menu bhi ek tarah ka api ho sakta hai.
// JSON      //generally REACT me use hota hai
// json is like objects.only difference is ,here keys are also String.
// {
//    "name": "ashu"
//    "coursename": "hs in hindi"
//    "price": "free"
// }

 //fetch methods for apis.we convert the jsons into objects and then we extract any data from json easily using object methods.
//apis are not only found in json or object  formats but also in arrays formats.
 //mostly json is  used for sending objects throughout  api industry.



 //++++ video 19  +++++++++
 //Functions +++++++++++//React aur backend me jyada use hoga.
//function ka matlab:-kuchh codes ko wrap up kr diya taki usko jaha kahi le ja sake aur use kar saken.

function saymyname(){//this function.
   console.log("a")
   console.log("s")
   console.log("h")
   console.log("u")
   
}
saymyname() //saymyname:-ye iss function ka reference hai // ():- aur yue iss function execution  hai.bracket dalte hi function execute ho jata hai.

// function addTwoNumbers(number1,number2) //this only adds and prints the sum .it does not return that sum.return  is concept in itself.
// {
//    console.log(number1+number2)
// }
// const result =addTwoNumbers(2,4)
// console.log(result)

function addTwoNumbers(number1,number2)
{
   //let result=number1+number2
  // return result    or we can do this also directly
  return number1+number2

   console.log("ashu");//after return statement this wont be executed.
}
const result =addTwoNumbers(3,7)
console.log("result",result)


function loginusermessage(username){
   if(username===undefined)
   {
      console.log("pls enter a ausername")
      return
   }
   return `${username} just logged in.`
}
console.log(loginusermessage("ashutosh"))
console.log(loginusermessage())//gives undefined value.
 
//some timesin production level coding ,to avoid undefined values for  username we do this.
function loginusermessage(username="sam")
{
   if(!username){
      console.log("please enter a usename")
    return
   }
   return `${username} just logged in.`
}

console.log(loginusermessage("ashutosh"))
console.log(loginusermessage())//gives undefined value.


///////////////some business logics
function calculatecartprice(val1,val2,...num1)//3 dots act as rest as well as spread operator.it depends on use case when to call it rest  or spread operator.here we use it as rest ooperator. it takes some vales and wraps them into a bundle(array).
{
  return num1
}
console.log(calculatecartprice(200,300,400,2000,435))////asy when a customer purchases goods on say amazon then iniitally we dont know how many things they will include in cart.so we want it dynamic.



const user ={
   username:"ashu",
   price:199
}
function handleobject(anyobject){ ////it handles any object comming to it.
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
handleobject(user)
handleobject({
   username:"ashutosh",
   price:499
})

//the same can be done with arrays also.
const mynewarray=[200,300,400,500]
function returnsecondvalue(getarray){
   return getarray[1]
}

console.log(returnsecondvalue(mynewarray));//or
console.log(returnsecondvalue([200,300,400,500]))


///////+++++ end////////////
















































