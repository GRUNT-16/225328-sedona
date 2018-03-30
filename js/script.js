var popup = document.querySelector(".trip-info");
var tripInfoButton = document.querySelector(".trip-info-open-close-button");
var tripInfoAnimationLeft = document.querySelector(".trip-info-animation-left");
tripInfoButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("trip-info-show");
})
