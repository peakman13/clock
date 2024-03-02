const currentTime = document.querySelector(".time");
const currentSec = document.querySelector(".sec");
const AmPm = document.querySelector(".ampm");
const currentDay = document.querySelector(".day");
const currentDayWeek = document.querySelector(".dayofweek")
const currentMount = document.querySelector(".month");

const weekDays = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep" ,"Oct", "Nov", "Dec"];

function formatTime(val){
    if(val<10){
        return "0";
    
    }else{
        return "";
    }
}
function curTime (){
    const d = new Date ();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    currentDayWeek.innerHTML = weekDays[d.getDay()];
    currentMount.innerHTML = months[d.getMonth()];

    currentDay.innerHTML = d.getDate();
    

    
   const times = formatTime(h)+h+ ":" + formatTime(m)+m
   const sec = formatTime (s) + s;
    //(s<10)? secOutput.innerText="0"+s:
    //secOutput.innerText= s;
   
    const ampm = h >=12 ? "PM" : "AM";

    currentTime.innerHTML = times;
    currentSec.innerHTML = sec;
    AmPm.innerHTML=ampm;

 
}

setInterval ( function(){curTime()},1000) ;
