function changeTime(){
    const date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

    if(hour>=12){
        document.getElementById('ampm').innerHTML="PM";
    }
}

setInterval(changeTime,1000);