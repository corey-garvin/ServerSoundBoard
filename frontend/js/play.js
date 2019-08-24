document.getElementById("play_button").addEventListener("click", function() {
    peon = document.getElementById("play_button");

    if (peon.classList.length === 0) {
        peon.classList.add("slide-right");
    } else if (peon.classList.contains("slide-left")) {
        peon.classList.remove("slide-left");
        peon.classList.add("slide-right");
    } else if (peon.classList.contains("slide-right")) {
        peon.classList.remove("slide-right");
        peon.classList.add("slide-left");
    }

    var url = "http:/localhost:3000/play/";
    var data = {file: "annoyed6.wav"};

    fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
});