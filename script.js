function showTime() {
    const now = new Date();
    const localTime = now.toLocaleTimeString();
    document.getElementById('currentTime').innerHTML = localTime;
}
showTime();
setInterval(showTime, 1200);

























