let popupEl = document.getElementById("popup");
let clickCountEl = document.getElementById("click-count");
let resetButtonEl = document.getElementById("reset");

let clicks = localStorage.getItem("clicks") | 0;


function show (elm) {
    elm.classList.remove("hidden");
}

function hide (elm) {
    elm.classList.add("hidden");
}

function openPopup() {
    clicks++;
    localStorage.setItem("clicks", clicks);
    updatePopup();
    show(popupEl);
}

function closePopup() {
    hide(popupEl);
}

function updatePopup() {
    clickCountEl.innerText = `${clicks} ${clicks == 1 ? 'time' : 'times'}`;
    console.log(clicks);
    if (clicks >= 5) {
        show(resetButtonEl);
    } else {
        hide(resetButtonEl);
    }
}

function resetClicks() {
    localStorage.removeItem("clicks");
    clicks=0;
    updatePopup();
}