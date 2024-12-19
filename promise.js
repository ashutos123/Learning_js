 //promise ka matlab:-->jo promise ko task diya gaya hai,vo queue me to lag gaya hai, par abhi complete nhi hoga.
 //example:--> jab hum file access karte hai ssys se to karnel k through hota hai to isme timd lagt ahia,database se koi data lena hota hai to usme bhi deri ho sakti, ho sakta hai data databse network me kisi contitnent me rakha ho.
// aise cases me async/await laga dete hain.matlab jab tak request  nhi fulfill hui tab tak wait karo.
//ab hum asyn/await ke jagah par promises ka use karte hain.
//pehle promises ko banate hain fir unhe consume kartre hain.
//promises ek object hai.................
// js me kisi object ka ek aur instance chahiye to hum new keyword ka use karte hain.
const promiseone=new Promise(function(resolve,reject){
 //Do an async task-->DB calls( connecting tom db,  wrtting to db, reading from db etc.)
setTimeout(function(){
    console.log('Async task is complete');
      resolve()//ye resolve finction .then se connect hoga.
},1000)
});//promise ban gaya.

promiseone.then(function(){//.then ke anadr ek function milta hia.
    console.log("Promise consumed"); 
})

//another to do this
new Promise(function(resolve,reject){//ye promise  kuchh bhi handle kr raha ho sakta hia.ho sakta hia network request la raha ho,ya fir file handling kr raha ho.
    setTimeout(function(){   //ye function kuchh bhikam kr sakta hai.         ye task jab finish ho jaega , tab resolve .then ko inform kar dega.
        console.log("Async task 2")
        resolve()
    },2000)
}).then(function(){//yahi pe .then laga diye,kyunki promise ko kisi variable me hold nhi kiya hai.
    console.log("Async 2 resolved")
}) 

const  Promiose3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})////promise ban gaya

Promiose3.then(function(user){//jo arguemennt resoleve me fed kiya jata hia vo .then ke  function ke arguement me aati hai.
    console.log(user)
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",password:"113"})
        }
        else{
            reject('ERROR:Something went wrong!.')
        }
    },1000)

})
promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{//chaining of .then,ye chiz db connection me kam aati hai.iske uper wala .then jo return karega ye uske auper kam karega
    console.log(username);
}).catch(function(error){//aur ye error  handle karega.
    console.log(error);
}).finally(()=>console.log("the promise is either resolved or rejected"))

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false////agar ye true hota to sab sahi chalta.
        if(!error){
            resolve({username:"javascript",password:"123"})

        }
        else{
            reject('ErroR:JS went wrong')
        }
    },1000)
});

async function consumePromise5(){////it doesnt andle erros directly. 
    try{   ///  non error part
       const response=await promise5
       console.log(response);
    }catch(error){////  holds errr part.
        console.log(error);
    }

}
consumePromise5();

async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')//network se fetch hone me time lagta hai.
        const data=await response.json();//ye bhi convert hone me time leta hai.
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);

    }
}
getAllUsers()

//above getAllUsers functiom can be written in .then ,.catch format also like this.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{////////  chaining .it is called thenable.
    console.log(data);

})
.catch((error)=>console.log(error))














