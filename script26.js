const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const testwrapper = document.querySelector(".test-wrapper")
const resetButton = document.querySelector("#reset")

var timer=[0,0,0,0];
var timerRunning=false;
var interval;

function leetingzero(time){
    if(time<=9){
        time="0"+time;

    }
    return time;
}



function startTimer(){

    let CurrentTimer = leetingzero(timer[0])+":"+leetingzero(timer[1])+":"+leetingzero(timer[2]);

    theTimer.innerHTML= CurrentTimer;

    timer[3]++;
   
   timer[0]=Math.floor(timer[3]/100 /60);
   timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
   timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));


}




function spellCheck(){
    let textEntered=testArea.value;
    let originTextMatch=originText.substring(0,textEntered.length);

    if(textEntered==originText){
        
        testwrapper.style.borderColor="green"
        clearInterval(interval)


    }else{
        if(textEntered==originTextMatch){
            
            testwrapper.style.borderColor="yellow";
            

        }
        else{

            testwrapper.style.borderColor="red";
            

        }
    }



}




// 2 ta shart gozashtim ta timer dorost kar kone va age masalan chand bar 
//  timer az 0 shoroo be kar kard soraatesh ziad nashe 
// bed dalil chnad bar farakhani function
function reset(){
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunning=false;
    theTimer.innerHTML="00:00:00";
    testArea.value="";
    testwrapper.style.borderColor="grey";


    
}






function Start(){
    let textEnteredLength =testArea.value.length;
    if(textEnteredLength==0 && !timerRunning)
        {

  interval = setInterval(startTimer,10); 
   timerRunning=true;   
}

}





testArea.addEventListener("keypress",Start);
testArea.addEventListener("keyup",spellCheck);
resetButton.addEventListener("click", reset);







