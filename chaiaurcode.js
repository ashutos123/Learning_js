//generate a random color(using random hex value.)
const randomcolor=function(){
    const hex="0123456789ABCDEF"//band of colors.
    let color='#';
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)];//ye 0-16 ke bich me ek integer produce karega.
    
    }
    return color;

};
let intervalId;
const startChangingColor=function(){//har ejk 1 sec par color change karega.
  if(!intervalId){ 
    intervalId=setInterval(changeBgColor,1000);
  }

function changeBgColor(){//  this changes  the color.
  document.body.style.backgroundColor=randomcolor();
}
};
const stopChangingColor=function(){//stops the color change.
    clearInterval(intervalId)
    intervalId=null;//clearing it value.as it is used frequently.
}
document.querySelector("#start").addEventListener('click',startChangingColor);//on clicking it color change starts.

document.querySelector("#stop").addEventListener('click',stopChangingColor);//it stops color change.



///////////end ///////////////////
// JSON.parse()->converts string into json.