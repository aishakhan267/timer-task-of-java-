let hours = 0;
let minutes = 0;
let seconds = 0;
let check;
let isTimeEntered = false;
function updateTime() {
    if(isTimeEntered === true){
        console.log(document.querySelector("span1").innerHTML = document.querySelector("#enter hour").value);
    }
   if(seconds === 59){
       seconds = 0;
       if(minutes === 59){
           minutes = 0;
           hours++;
       }else{
           minutes++;
       }
   }else{
       seconds++
   }
   document.querySelector("#hours").innerHTML = hours;
   document.querySelector("#minutes").innerHTML = minutes;
   document.querySelector("#seconds").innerHTML = seconds;
}

function start() {
 check = setInterval(updateTime, 1000);
}
function stop(){
    clearInterval(check);
}
function reset(){
     hours = 0;
     minutes = 0;
     seconds = 0;
     stop();
}
