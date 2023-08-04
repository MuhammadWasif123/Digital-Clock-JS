setInterval(()=>{

const time=document.querySelector("#box .time");
let d=new Date();
let hours=d.getHours();
let minutes=d.getMinutes();
let seconds=d.getSeconds();
let amPm=hours>12?"PM":"AM";


time.textContent=hours + ":" + minutes + ":" + seconds + ":" + amPm;

},1000)
