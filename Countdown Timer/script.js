
window.onload = ()=>{
    document.querySelector("#calculate").onclick = calculate;
}

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");


let intervalId;

const reset = document.querySelector("#reset");

function calculate(){
    // console.log("clicked");
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector("#stop");

    const endTime = new Date(date + " " + time);

    intervalId = setInterval(()=>calculateTime(endTime),1000);

    stop.addEventListener('click',()=>{
        clearInterval(intervalId);
    })

    reset.addEventListener("click",()=>{
        days.innerHTML = 0 + "<br/><span>Days</span>";
        hours.innerHTML = 0 + "<br/><span>Hours</span>";
        minutes.innerHTML = 0 + "<br/><span>Minutes</span>";
        seconds.innerHTML = 0 + "<br/><span>Seconds</span>";
    })
}

function calculateTime(endTime){
    const currentTime = new Date();
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
        
    if(endTime>currentTime){
        const timeInterval = (endTime - currentTime)/1000;

        const day = Math.floor(timeInterval/(24*60*60));
        days.innerHTML = day + "<br/><span>Days</span>";

        const hour =  Math.floor(timeInterval/(60*60) % 24);
        hours.innerHTML = hour + "<br/><span>Hours</span>";

        const minute = Math.floor(timeInterval/60 % 60);
        minutes.innerHTML = minute + "<br/><span>Minutes</span>";

        const second =  Math.floor(timeInterval % 60);
        seconds.innerHTML = second + "<br/><span>Seconds</span>";

        dd.style.strokeDashoffset = 440-(440*day)/365;
        hh.style.strokeDashoffset = 440-(440 * hour)/24;
        mm.style.strokeDashoffset = 440 - (440 * minute)/60;
        ss.style.strokeDashoffset = 440 -(440 * second)/60;
    }
    else{
        days.innerHTML = 0 + "<br/><span>Days</span>";
        hours.innerHTML = 0 + "<br/><span>Hours</span>";
        minutes.innerHTML = 0 + "<br/><span>Minutes</span>";
        seconds.innerHTML = 0 + "<br/><span>Seconds</span>";
        alert("Time out or you entered the past time.");
        clearInterval(intervalId);
        return;
    }

}