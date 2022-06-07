let popupEl = document.getElementById("popup");
let clickCountEl = document.getElementById("click-count");

let clickCount = 0;

function openPopup() {
    clickCount++;
    updatePopupText();
    popupEl.classList.remove("hidden");
}

function closePopup() {
    popupEl.classList.add("hidden");
}

function updatePopupText() {
    clickCountEl.innerText = clickCount;
    console.log("tst")
}