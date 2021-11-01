function start() {
    var sound = document.getElementById("welcomeAudio");
    sound.play();
    sound.onended = function() {
        window.location.href = "../playGame.html"
    };
}

function exit() {
    alert('Hẹn gặp lại lần sau!!!');
}