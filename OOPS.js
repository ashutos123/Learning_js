const user={ //ye ek object literal hai.matlab ki ek object hai.
    username:"ashu",
    logincount:8,
    signedin:true,

 getdetails  : function(){
    console.log("got user details from database");
    console.log(`username: ${this.username}`);//this ek current context yani ki current object ko refer karta hai.
    console.log(`username: ${this.logincount}`);
    console.log(`username: ${this.signedin}`);
    console.log(this);//pura current object return karega.

 }
}

console.log(user.username);
console.log(user.getdetails());
//console.log(this.getdetails());
console.log(this);//this global context ko refer karega,jo ki empty object hai.agar ye browser me like toh wahan bohot sari things milengi.yahan par sirf node me execute kar rahe hain.

////  new ->this is a constructor .it creates anew and separate instance of an object literal.
// const promiseOne= new Promise();
// const date= new Date();

function User(username,logincount,isloggedin){//ye ek function hai.
    this.username=username;//this ek global context ka empty object hai,jisme username nam ka ek property hai,jisko ek username nam ki value di ja rahi hai.
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    this.greeting= function(){
        console.log(`welcome ${this.username}`);

    }

    return this;//explicit return.ye na bhi karo to bhi yahan implicit return ho jaega.

}

// const userone=User("ashu",24,true);//yahan userone aur usertwo dono ek hi object literal ko refer kar rahe hain, isliye userone change hone se usrtwo bhi chnge ho jaega.
// const usertwo =User("chai aur code",43,false);//ise prevent karne ke liye "new" consturctoe ka  use hota hia,jo jo ek new instance create karta hai. 
// console.log(userone);
const userone=new User("ashu",24,true);
const usertwo =new User("chai aur code",43,false);
console.log(userone);
console.log(usertwo);


//// call   method  ++++++++++++++++++++++++++
function SetUsername(username){
    //complex DB calls
    this.username=username;//
    console.log("called");

}

function createUser(username,email,password){
    SetUsername.call(this,username)//call current execution context pass karne ke liye use hjota hai.
   //call ke bina setusername call to ho jaega ,execute bhi ho jaega,par uske baad uska execution context lost ho jaega,jiske karan wo function aur uske variables call stack se remove  ho jate hain.
    //setusername function me this parameter me pass nhi karenge ,toexecution context bhi pass nhi ho paega.this ,yani iss function ka execution context.aur ye bina arguement ke pass hota hai.
   this.email=email
    this.password=password
}

const chai =new createUser("chai","chai@fb","123");
console.log(chai);


/////++++++++++++++++++++++++++++++++++++++++++++++++
//classes and constructors.
 // ES6  ->current version of js. hai.
 




















