//++++++ video 21 +++++++++++++
//++++  scopes in js.  +++++++
  //var c=300
let a=300
if(true){
    let a=10          //local a,b are only valid in this scope only.they dont exist out of this .block level scope.
    const b=20
    console.log("inner: ",a)

}
console.log(a);// this a from global declaration.  

//function withinn function
function one()
{                 //concept:-analogy:-chhota bacha bade se choco maang sakta hai par bada chote se mage tp achha nhi hpota.
    const username="function one"

    function two()
        {
    const website ="function two";
    console.log(website)
    console.log(username);

         }
    //console.log(website)///one() is demanding from two() which is notpossible.
    two()// ye execute ho jaega.
   console.log(username)
}

one() //ye nhi execute hoga to two() bhi nhi ho paega kynki two() one() k andar hai.

////
if(true)
{
    const username= "ashutosh"
    if(username==="ashutosh")
    {
        const website="youtube"
        console.log(username+website);

    }
    //console.log(website); //out of scope

}
//console.log(username);//outof scope

///++++++++++++  interesting ++++++++++
console.log(addone(3))  //this can also work.it can access addone.
function addone(num){   
    return num+1 
}
addone(4)// simply adds it.

// addtwo(2)   //->this will not work.it cnat access addtwo.
const addtwo =function(num){  //we are holding the function in a variable.
    return num+2
}
addtwo(3)  

/////////////////  ++++++
/////////////// ++++  Arrow function. +++++++++
 const user ={
    username:"ashu",
    price:999 ,

    welcomemessage:function(){////it is just defining function.it wont br executed her.for that it needs to invoked somewhere else.
        console.log(`${this.username} , welcomoe to website`);//this refers to the current context of object.
       console.log(this)
    }

 }
 user.welcomemessage()//it will be executed.object is beingused the function.
 user.username="sam"//username changed and it reflect in welcomemesage()
 user.welcomemessage()
 console.log(this)//it retruns empty .bcuz,current context is global and global context is empty.
   


 function chai(){
    let username="ashu"
    console.log(this.username)//it wil show undefined.this operator works only when function is defined in an object.keval function me this ka nhi karta hai.
 }
 chai()  //undefined aaega.
const chai1=function(){
    let username="ashu"
    console.log(this.username)//it wil show undefined.this operator works only when function is defined in an object.keval function me this ka nhi karta hai.
 }
 chai1()//yahan bhi kam nhi karega.

 //// arrow function.
 const chai2 =() =>{ ////this is caleed arrow function.
    let username="ashu"
    console.log(this.username)//it wil show undefined.this operator works only when function is defined in an object.keval function me this kam nhi karta hai.
 }
 chai2()//it also shows undefined.

 const sumtwo =(num1,num2) =>{  //explicit return.when in  curly bracket return need sto mentioned explicitly.
    return (num1+num2)        
}
console.log(sumtwo(2,3))

const sum_two=(num1,num2) => (num1+num2) //implicit return.when in small bracket no need to use return keyword.(imlicit return).this concept is used in react.
//const sum_two=(num1,num2) => ({username:"Ashu"})//objects are always returned in curly braces.
console.log(sum_two(4,6));//semi colon har statement ke execution ko expicitly end karne ke liye  lagana hota hai.kai bar jaruri nhi hota hai lekin kai bar jaruri hota hai nhi to error dikheaga.


///////////  Immediately Invoked Function expresion  (iife)

(function chai3(){//ye named iife hai.
    console.log(`Db Connected`);
})();//ye semi colonn jaruri hai.is function ko end karne ke liye semi colon lagana jaruri hai.kai bar compiler functino ke scope ko nhi samjh patam hai.  //this is iife.it gets executed.pehla chata bracket hai refernece ke liya aur dusra chata bracket jo ki bahar me jhai ,vo hai execution ke liye.
//global scope ke pollution se problem hoti hai.us global scope ke variables ke pollution  ko hatane ke liye humne iife ka use kiya hai. 

((name) => {  //ye  unnamed iife hai.  //ye bhi ek function declaration hai.ye bina parameters aur arguement ya fir parameter aur arguement ke sath bhi daclare kia ja sakta hai.
    console.log(`db connected two ${name}`);
})("ashu")//"ashu" ye arguement hai."name" ye parameter hai.



////// video 26   //////////
/////   control flwo in javscript   /////////
//if
const score=200
if(score>100){
  var power="fly"  //var likh dene se power global variable ban jata hai. jo ki nhi ho to hi achha hai.aur issi liye hum jyada tar let ya const use karte hai.
  let power1="fly"
  console.log(`user power: ${power1}`);
  console.log(`user power: ${power}`); 

}
console.log(`user power: ${power}`); 

const balance=1000
//if(balance>500) console.log("test"),console.log("test2");// this implicit execution.

//switch cse
const month=3 //strings or any other ds can be taken.
switch(month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match")
        break;
}

// some falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0","false"," ",[],{},function(){}->empty function.
//false==0->true ,false==''->true ,0==''  ->true.
const useremail =""
if(useremail.length===0){
    console.log("Array is empty");

}

const emptyObj={}
if(Object.keys(emptyObj).length===0)//Object.keys -> gives array of keys of object.
{
 console.log("Object is empty");
}

/// null coalescing operator (??): it works for null,   undefined
let val1;
// val1=5 ??10
// val1 =null ?? 10  ->agar val1 ki vlaue kahi galti se null aa rahi hai aur usse problem hoo jaegi,to us case me val1 ki value 10 kar di jaegi.
// val1 = undefined ?? 15 -> here also goes the same concept.
val1 = null ?? 10 ?? 20 //->yahan jo pehle hoga wo assign hoga.isliye 10 hoga. 

console.log(val1);

//ternary operator
//condition ?true :false
const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")


/////  video 27  ///// loops ////
for (let i = 0; i <10; i++) {
    const element = i;
   

    if(element==5)
    console.log("5 is best number");
    console.log(element);
    
}
 //break and continue
 for(let i=1;i<=20;i++)
 {
    if(i==5){
        console.log(`detected 5`);
        break; //you jump out of for loop scope and   not if.
    }
    console.log(`value of i is ${i}`);
 }
 for(let i=1;i<=20;i++)
 {
    if(i==5){
        console.log(`detected 5`);
        continue; //you jump out of for loop scope for one time only  and  then you normally execute for loops..
    }
    console.log(`value of i is ${i}`);
 }


/////////  video 28  /////
let i=0
while(i<=10)
{
  console.log(`value of index is ${i}`);
  i=i+2;
}

let myarray=['flasd','fdsfdsfs','fdfs']
let arr=0
while(arr<myarray.length){
    console.log(`value is ${myarray[arr]}`);           
    arr=arr+1;
}

let score1=11
do {         //this will execute once as here execution happens first then condition is checked.
    console.log(`score is ${score1}`);
    score1++
}
while(score1<=10)

///// video 29 /////
//for of
//["","",""]
//[{},{},{}]
const arr1=[1,2,3,4,5]
for(const iterator of arr1){//iterator is varuiable it can be taken  anythong like i,j, num. try to take it semantically familiar.
    console.log(iterator); 
}

const greetings ="Hello world"
for(const greet of greetings){
    console.log(`each charis ${greet}`)
}

/// maps / 

const map =new Map()  //stores unique  vaues n in order.
map.set('IN',"India")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('IN',"India")

//console .log(map)
for(const [key,value] of map){
    console.log(key,':-',value);//either key or vlaue can also be printed
}

//for of, loop doesnt iterate on objects in above format.it takes other formats.
//it works with for i loop.
const myobject={
    js:'javasript',
    cpp:'c++',
    rb:'ruby',
    swift:'swif tby apple'
}
for (const key in myobject) {
   console.log(`${key} shortcut is for ${myobject[key]}}`);

}

const programming= ["js","rb","py","java","cpp"]
 for (const key in programming) {
    console.log(`${key} ':-' ${programming[key]}`)
    
 }

const coding=["js","ruby","java","python","cpp"]
coding.forEach(function(val){//val will take each value from coding array.then we can do whatever we want to do from that val inside the function.
    console.log(val);         //this is unamed function.
})
 coding.forEach((item) =>{//arraow function can also work the same way.
    console.log(item);
 })

 function printMe(item){//making a function that prints.
    console.log(item);
 }
coding.forEach(printMe)//invoking that printMe function.

// coding.forEach((item,index,arr)=>{  
//     console.log(item,index,arr)
// })

const mycoding=[//objects wrapped into an array.data from database comes in this form mostly.then we need to apply different operations on them.that can be done by for Each looop.
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
    {
        languageName:"ruby",
        languageFileName: "rb"
    },
    {
        languageName:"c++",
        languageFileName: "cpp"
    }
]

mycoding.forEach((item)=>{//its a unamed function with item as parameter.we can access any thing in the objects and we appy any kind of operations on them.
    console.log(item.languageName)////this is vvi as it is used mostly.
})

// calling a function in forEach loop is also called function call back.

////////  video 30  /////////

const myNums=[1,2,3,4,5,6,7,8]

const newNums=myNums.filter((num) => num>4)//filter apne andar ek callback function leta hai.num k through har ek value ko iterate karta hai par num >4 ko ko hi return karta hai.and this also implicit return as ther is no return statement written here(as we ahvent used curly braces.)
console.log(newNums);


//////////////////////////////////
const booksArray = [  // working on  real world data.
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publication: "Scribner",
      yearOfPublication: 1925
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publication: "J.B. Lippincott & Co.",
      yearOfPublication: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      publication: "Secker & Warburg",
      yearOfPublication: 1949
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publication: "Little, Brown and Company",
      yearOfPublication: 1951
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      publication: "Bloomsbury",
      yearOfPublication: 1997
    }
  ];

const books=booksArray.filter((bk) =>bk.yearOfPublication>1950)//her concept of callback function and implicit return have been used.
console.log(books);                                            //multiple conditions can also be ored or anded in callback function and filtered.

///////////////////////////
const mynumers=[1,2,3,4,5,6,7,8,9]
const  newnums1=mynumers.map((num) => {return num+10})//explicit return.  map also uses callback functions.
console.log(newnums1)
////  chaining  of methods.
 const newnums2= mynumers    ////chaining of different methoids on diferrent conditions.multiple maps or multiple filters can used.
          .map((num)=>num+10)
          .map((num) =>num*1)
          .filter((num) => num>=13)
console.log(newnums2)

//////  Reduce ///////////
const mynums=[1,2,3,4]

const myTotal =mynums.reduce(function(accumulator,currentvalue){  /////accumulator ek variable hai jisme total sum upto current index store hota hai.currenvalue me current index par jo value hao vo hoti hai.accumulator ki initial value 0 li gai hai yahan,jo ki curly braces ke bahar hai.
    console.log(`accumulator: ${accumulator} and curval: ${currentvalue}`);
    return accumulator+currentvalue;
},0)
console.log(myTotal);

///reduce using arrow function 
const mytotal=mynums.reduce((acc,cur)=>acc+cur,0)
console.log(mytotal)

const course=[
    {
        itemname:"web dev",
        price:299
    },
    {
        itemname:"data science",
        price:5999
    },
    {
        itemname:"mobile dev",
        price:12999
    }
]
const pricetopay=course.reduce((acc,item) =>acc+item.price,0)// callback function with implicit return in reduce .
console.log(pricetopay)

///////////////  end /////////////////



































