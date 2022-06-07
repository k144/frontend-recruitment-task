let popupEl = document.getElementById("popup");
let clickCountEl = document.getElementById("click-count");

function openPopup() {
    popupEl.classList.remove("hidden");
}

function closePopup() {
    popupEl.classList.add("hidden");
}