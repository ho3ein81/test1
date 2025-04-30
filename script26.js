const theTimer = document.querySelector(".timer");
var timer=[0,0,0,0];


function startTimer(){
    let CurrentTimer = timer[0]+":"+timer[1]+":"+timer[2];

    theTimer.innerHTML= CurrentTimer;

    timer[3]++;
   
   timer[0]=Math.floor(timer[3]/100 /60);
   timer[1]=Math.floor(timer[3]/100);-(timer[0]*60);
   timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));


}

setInterval(startTimer,10);



