const theTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");




var timer=[0,0,0,0];
var timerRunning=false


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

// 2 ta shart gozashtim ta timer dorost kar kone va age masalan chand bar 
//  timer az 0 shoroo be kar kard soraatesh ziad nashe 
// bed dalil chnad bar farakhani function


function Start(){
    let textEnteredLength =testArea.value.length;
    if(textEnteredLength==0 && !timerRunning)
        {

   setInterval(startTimer,10); 
   timerRunning=true;   
}

}





testArea.addEventListener("keypress",Start);







