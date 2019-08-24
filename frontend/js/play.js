document.querySelector(".play-button").addEventListener("click", function() {
    peon = document.getElementById("peon");
    peasant = document.getElementById("peasant");

    if (peon.classList.length < 2) {
        peon.classList.add("slide-right");
    } else if (peon.classList.contains("slide-left")) {
        peon.classList.remove("slide-left");
        peon.classList.add("slide-right");
    } else if (peon.classList.contains("slide-right")) {
        peon.classList.remove("slide-right");
        peon.classList.add("slide-left");
    }
    
    if (peasant.classList.length < 2) {
        peasant.classList.add("slide-right");
    } else if (peasant.classList.contains("slide-left")) {
        peasant.classList.remove("slide-left");
        peasant.classList.add("slide-right");
    } else if (peasant.classList.contains("slide-right")) {
        peasant.classList.remove("slide-right");
        peasant.classList.add("slide-left");
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