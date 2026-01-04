function formatTime(value) {
    
    if (value < 10) {
        return "0" + value;
    } else {
        return String(value);
    }
    
}

function timeCount() {
    
    const currentTime = new Date();

    const myHours = currentTime.getHours();
    const myMinutes = currentTime.getMinutes();
    const mySeconds = currentTime.getSeconds();

    const arrTime = [
        formatTime(myHours),
        formatTime(myMinutes),
        formatTime(mySeconds)
    ];

    console.log(arrTime.join(":"));
}

setInterval(timeCount, 1000);
