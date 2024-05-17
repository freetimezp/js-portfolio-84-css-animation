//slider
function changeImage(src, clickedImage) {
    var mainImage = document.getElementById("mainImage");
    mainImage.src = src;

    var sliderImages = document.querySelectorAll(".slider img");
    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove("img");
    }

    clickedImage.classList.add('img');
}

// //change size
function changeImageSize(size) {
    let mainImage = document.getElementById("mainImage");

    mainImage.style.transform = `scale(${size / 10})`;

    if (size == 10) {
        mainImage.style.transform = `scale(${size / 10}) rotate(-43deg)`;
    }
}


//counter
let counter = 0;

function increaseCounter() {
    counter++;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterEl = document.querySelector(".counter");
    counterEl.textContent = counter;
}












