let startTimer;
let startTime = true;
let bell = new Audio("beep.mp3");

function start() {
    if (startTime == true) {
        document.querySelector("#hours").innerHTML = document.querySelector("#hourInput").value;

        if (document.querySelector("#minInput").value > 60) {
            alert("sorry");
        } else {
            document.querySelector("#minutes").innerHTML = document.querySelector("#minInput").value;
        }

        if (document.querySelector("#secInput").value > 60) {
            alert("sorry");
        } else {
            document.querySelector("#seconds").innerHTML = document.querySelector("#secInput").value;
        }

        startTimer = setInterval(uptadeTime, 1000);
        start = false;
    }
}

function uptadeTime() {

    if (document.querySelector("#seconds").innerHTML == 0 && document.querySelector("#minutes").innerHTML == 0 && document.querySelector("#hours").innerHTML == 0) {
        bell.play();
        document.querySelector("#minutes").innerHTML = 0;
        document.querySelector("#seconds").innerHTML = 0;
        document.querySelector("#hours").innerHTML = 0;

    } else {
        if (document.querySelector("#seconds").innerHTML == 0) {

            document.querySelector("#seconds").innerHTML = 59;

            if (document.querySelector("#minutes").innerHTML == 0) {

                document.querySelector("#hours").innerHTML--;

                document.querySelector("#minutes").innerHTML = 59;

            } else {

                document.querySelector("#minutes").innerHTML--;

            }
        } else {
            document.querySelector("#seconds").innerHTML--;

        }
    }
}

function stop() {
    location.reload();
}

