function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timerID;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        timerID = setTimeout(tick, 1000);
        if(seconds <= 0) {
            alert("Time's Up!");
            clearTimeout(timerID);
        }
    }
    tick();
}
